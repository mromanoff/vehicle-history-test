import React from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Pagination from '../components/Pagination';
import CategoryPicker from './CategoryPicker';
import Photo from './Photo';

const View = ({
  isLoading,
  error,
  data,
  categories,
  initialCategory,
  initialPage,
  onLoad,
  RenderPagination,
  RenderPhoto,
  RenderCategoryPicker,
  RenderLoader,
  RenderError,
}) => (
  <div>
    <RenderCategoryPicker
      categories={categories}
      initialCategory={initialCategory}
      onCategoryPick={onLoad}
    />
    <section>
      {isLoading && <RenderLoader />}
      {error && <RenderError error={error} />}

      <div className={isLoading ? 'loading' : 'loaded'}>
        <RenderPagination initialPage={initialPage} />

        {data && (
          <div className="module gallery">
            {data.photos.map(photo => (
              <RenderPhoto key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </div>
    </section>
  </div>
);
View.propTypes = {};

View.defaultProps = {
  RenderCategoryPicker: CategoryPicker,
  RenderPhoto: Photo,
  RenderPagination: Pagination,
  RenderLoader: Loader,
  RenderError: Error,
};

export default View;
