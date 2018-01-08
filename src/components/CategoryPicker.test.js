import React from 'react';
import CategoryPicker from './CategoryPicker';

it('CategoryPicker renders correctly', () => {
  const wrapper = shallow(
    <CategoryPicker currentCategory={'Animals'} onChange={() => {}} />,
  );
  expect(wrapper).toMatchSnapshot();
});
