import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

it('Pagination renders correctly', () => {

  let props = {
    page: 1,
    itemsCountPerPage: 25,
    totalItemsCount: 100,
    onChange: () => {},
  };

  const tree = renderer.create(<Pagination {...props} />).toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
   props.totalItemsCount = 0;
    // re-rendering
  // tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

});
