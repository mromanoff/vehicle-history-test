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

  let wrapper = mount(
    <Pagination {...props} />,
  );
  expect(wrapper.props().page).toEqual(1);
  expect(wrapper).toMatchSnapshot();

  expect(
    wrapper
      .find('li')
      .at(2) // at position 1 previous page. at 2 will be page 1 selected
      .hasClass('active'),
  ).toEqual(true);

  // Test paginator with second page selected
  props = {
    page: 2,
    itemsCountPerPage: 25,
    totalItemsCount: 100,
    onChange: () => {
    },
  };
  // re-rendering
  wrapper = mount(
    <Pagination {...props} />,
  );
  expect(wrapper.props().page).toEqual(2);
  expect(wrapper).toMatchSnapshot();

  expect(
    wrapper
      .find('li')
      .at(3) // at position 1 page #1. at 3 will be page 2 selected
      .hasClass('active'),
  ).toEqual(true);


  // Test paginator with 0 items
  props = {
    page: 1,
    itemsCountPerPage: 25,
    totalItemsCount: 0,
    onChange: () => {
    },
  };
  // re-rendering
  wrapper = mount(
    <Pagination {...props} />,
  );
  expect(wrapper.props().totalItemsCount).toEqual(0);
  expect(wrapper).toMatchSnapshot();

});
