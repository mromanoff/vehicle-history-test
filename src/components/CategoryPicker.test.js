import React from 'react';
import CategoryPicker from './CategoryPicker';
import { CATEGORIES } from '../constants';

it('CategoryPicker renders correctly', () => {
  let wrapper = mount(
    <CategoryPicker currentCategory={CATEGORIES[0]} onChange={() => {}} />,
  );
  expect(wrapper).toMatchSnapshot();

  // it render all category buttons buttons
  expect(wrapper.find('button').length).toEqual(CATEGORIES.length);

  // first category is selected by default
  expect(
    wrapper
      .find('button')
      .at(0)
      .hasClass('btn--tertiary-active'),
  ).toEqual(true);

  wrapper = mount(
    <CategoryPicker currentCategory={CATEGORIES[1]} onChange={() => {}} />,
  );

  wrapper.find('button').at(1).simulate('click');

  expect(wrapper).toMatchSnapshot();

  // first category is selected by default
  expect(
    wrapper
      .find('button')
      .at(1)
      .hasClass('btn--tertiary-active'),
  ).toEqual(true);
});
