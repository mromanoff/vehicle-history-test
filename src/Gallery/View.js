import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Pagination from './Pagination';
import CategoryPicker from './CategoryPicker';
import Photo from './Photo';

const Gallery = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  min-height: 100vh;
  margin-bottom: 2rem;

  ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
    grid-template-columns: 1fr 1fr 1fr;
  `} ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `};
`;

const Wrapper = styled.div`
  opacity: ${props => (props.loading ? 0 : 1)};
  transition: all 300ms ease-in;
`;

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

      <Wrapper loading={isLoading}>
        {photos && (
          <div>
            <RenderPagination
              currentPage={currentPage}
              totalItemsCount={totalItemsCount}
              itemsCountPerPage={itemsCountPerPage}
              onChange={onPageChange}
            />

            <Gallery>
              {photos.map(photo => (
                <RenderPhoto key={photo.id} photo={photo} />
              ))}
            </Gallery>

            <RenderPagination
              currentPage={currentPage}
              totalItemsCount={totalItemsCount}
              itemsCountPerPage={itemsCountPerPage}
              onChange={onPageChange}
            />
          </div>
        )}
      </Wrapper>
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
