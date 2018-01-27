import React from 'react';
import CategoryPicker from './CategoryPicker';
import { CATEGORIES } from '../constants/index';

it('CategoryPicker renders correctly', () => {
  let wrapper = mount(
    <CategoryPicker categories={CATEGORIES} currentCategory={CATEGORIES[0]} onCategoryChange={() => {}} />,
  );

  expect(wrapper.props().currentCategory).toEqual(CATEGORIES[0]);
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
    <CategoryPicker categories={CATEGORIES} currentCategory={CATEGORIES[1]} onCategoryChange={() => {}} />,
  );
  expect(wrapper.props().currentCategory).toEqual(CATEGORIES[1]);

  wrapper.find('button').at(1).simulate('click');

  expect(wrapper).toMatchSnapshot();

  // second category is selected
  expect(
    wrapper
      .find('button')
      .at(1)
      .hasClass('btn--tertiary-active'),
  ).toEqual(true);
});
