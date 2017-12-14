import React from 'react';
import CategoryPicker from './CategoryPicker';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<CategoryPicker currentCategory={'Animals'} onChange={() => {}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
