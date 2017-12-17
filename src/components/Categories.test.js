import React from 'react';
import renderer from 'react-test-renderer';
import Categories from './Categories';

it('Categories renders correctly', () => {
  const component = renderer.create(<Categories />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

