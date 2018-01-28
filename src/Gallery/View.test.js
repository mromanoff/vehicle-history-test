import React from 'react';
import View from './View';
import { CATEGORIES } from '../constants/index';

const photos = [{ id: 1 }];

it('renders view', () => {
  const wrapper = shallow(
    <View
      categories={CATEGORIES}
      currentCategory={CATEGORIES[0]}
      onCategoryChange={() => {}}
      currentPage={1}
      itemsCountPerPage={25}
      totalItemsCount={100}
      photos={photos}
      onPageChange={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders loading view', () => {
  const wrapper = shallow(
    <View
      isLoading={true}
      categories={CATEGORIES}
      currentCategory={CATEGORIES[0]}
      onCategoryChange={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders error view', () => {
  const wrapper = shallow(
    <View
      isError={true}
      categories={CATEGORIES}
      currentCategory={CATEGORIES[0]}
      onCategoryChange={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});