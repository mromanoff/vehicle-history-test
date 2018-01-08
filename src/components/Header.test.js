import React from 'react';
import Header from './Header';

it('Header renders correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
