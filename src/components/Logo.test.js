import React from 'react';
import Logo from './Logo';

it('Logo renders correctly', () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper).toMatchSnapshot();
});
