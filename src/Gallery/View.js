import React from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Pagination from './Pagination';
import CategoryPicker from './CategoryPicker';
import Photo from './Photo';

const View = ({
  isLoading,
  isError,
  photos,
  error,
  categories,
  currentCategory,
  onCategoryChange,
  onPageChange,
  currentPage,
  totalItemsCount,
  itemsCountPerPage,
  RenderPagination,
  RenderPhoto,
  RenderCategoryPicker,
  RenderLoader,
  RenderError,
}) => (
  <div>
    <RenderCategoryPicker
      categories={categories}
      currentCategory={currentCategory}
      onCategoryChange={onCategoryChange}
    />
    <section>
      {isLoading && <RenderLoader />}
      {isError && <RenderError error={error} />}

      <div className={isLoading ? 'loading' : 'loaded'}>
        {photos && (
          <div>

            <RenderPagination
              currentPage={currentPage}
              totalItemsCount={totalItemsCount}
              itemsCountPerPage={itemsCountPerPage}
              onChange={onPageChange}
            />

            <div className="module gallery">
              {photos.map(photo => (
                <RenderPhoto key={photo.id} photo={photo} />
              ))}
            </div>

            <RenderPagination
              currentPage={currentPage}
              totalItemsCount={totalItemsCount}
              itemsCountPerPage={itemsCountPerPage}
              onChange={onPageChange}
            />

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
