import React from 'react';
import App from './App';

it('renders app', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
