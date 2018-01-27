import React from 'react';
import Gallery from './index';

it('Categories renders correctly', () => {
  const wrapper = shallow(<Gallery />);

  //const fetchPhotos = jest.fn();

  expect(wrapper).toMatchSnapshot();
});

