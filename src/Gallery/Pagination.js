import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

const ProviderPagination = ({
  currentPage,
  itemsCountPerPage,
  totalItemsCount,
  onChange,
}) => {
  const pageCount = Math.ceil(totalItemsCount / itemsCountPerPage);

  return (
    // pageCount > 1 && (
      <div className="module">
        <Pagination
          innerClass="pagination"
          activePage={currentPage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={3}
          onChange={onChange}
        />
      </div>
    // )
  );
};

export default ProviderPagination;

ProviderPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
