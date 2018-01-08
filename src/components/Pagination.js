import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

const ProviderPagination = ({
  page,
  itemsCountPerPage,
  totalItemsCount,
  onChange,
}) => {
  const pageCount = isNaN(Math.ceil(totalItemsCount / itemsCountPerPage))
    ? 0
    : Math.ceil(totalItemsCount / itemsCountPerPage);

  return pageCount > 1 ? (
    <div className="module">
      <Pagination
        innerClass="pagination"
        activePage={page}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={3}
        onChange={onChange}
      />
    </div>
  ) : null;
};

export default ProviderPagination;

ProviderPagination.propTypes = {
  page: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
