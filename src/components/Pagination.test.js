import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

it('Pagination renders correctly', () => {

  let props = {
    page: 1,
    itemsCountPerPage: 25,
    totalItemsCount: 100,
    onChange: () => {
    },
  };

  let component = renderer.create(
    <Pagination {...props} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props = {
    page: 1,
    itemsCountPerPage: 25,
    totalItemsCount: 0,
    onChange: () => {
    },
  };
  // re-rendering
  component = renderer.create(
    <Pagination {...props} />,
  );
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
