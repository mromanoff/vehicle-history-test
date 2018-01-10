import React from 'react';
import Categories from './Categories';

xit('Categories renders correctly', () => {
  const wrapper = shallow(<Categories />);

  expect(wrapper).toMatchSnapshot();
});

