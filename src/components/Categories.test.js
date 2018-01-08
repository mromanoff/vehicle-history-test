import React from 'react';
import Categories from './Categories';

it('Categories renders correctly', () => {
  const wrapper = shallow(<Categories />);

  expect(wrapper).toMatchSnapshot();
});

