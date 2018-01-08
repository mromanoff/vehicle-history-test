import React from 'react';
import Footer from './Footer';

it('Footer renders correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
