import React from 'react';
import Loader from './Loader';

it('Loader renders correctly', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
