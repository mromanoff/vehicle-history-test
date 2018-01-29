import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const StyledPagination = styled.div`
  margin-bottom: 2rem;
  > ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

    > li {
      margin-right: 0.5rem;
      border-radius: 50%;
      background-color: ${props => props.theme.color.grayLight};
      font-size: ${props => props.theme.size.sm};
      color: ${props => props.theme.color.white};
      transition: background-color 100ms ease-out 100ms;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 46px;
      height: 46px;
      font-weight: 300;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        color: ${props => props.theme.color.white};
        background-color: ${props => props.theme.color.primary5};
      }

      &:hover {
        background-color: ${props => props.theme.color.primary5};
      }

      > a,
      span {
        color: ${props => props.theme.color.white};
        text-decoration: none;
      }
    }
  }
`;

const GalleryPagination = ({
  currentPage,
  itemsCountPerPage,
  totalItemsCount,
  onChange,
}) => {
  const pageCount = Math.ceil(totalItemsCount / itemsCountPerPage);

  return (
    pageCount > 1 && (
      <StyledPagination>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={3}
          onChange={onChange}
        />
      </StyledPagination>
    )
  );
};

export default GalleryPagination;

GalleryPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
