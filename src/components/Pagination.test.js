import React from 'react';
import Pagination from './Pagination';

it('Pagination renders correctly', () => {

  let props = {
    page: 1,
    itemsCountPerPage: 25,
    totalItemsCount: 100,
    onChange: () => {
    },
  };

  let wrapper = shallow(
    <Pagination {...props} />,
  );
  expect(wrapper).toMatchSnapshot();

  props = {
    page: 1,
    itemsCountPerPage: 25,
    totalItemsCount: 0,
    onChange: () => {
    },
  };
  // re-rendering
  wrapper = shallow(
    <Pagination {...props} />,
  );
  expect(wrapper).toMatchSnapshot();
});
