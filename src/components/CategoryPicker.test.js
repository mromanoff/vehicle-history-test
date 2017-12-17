import React from 'react';
import renderer from 'react-test-renderer';
import CategoryPicker from './CategoryPicker';

it('CategoryPicker renders correctly', () => {
  const component = renderer.create(
    <CategoryPicker currentCategory={'Animals'} onChange={() => {}} />,
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onChange('Animals');
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
