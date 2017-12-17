import React from 'react';
import renderer from 'react-test-renderer';
import Photo from './Photo';

it('Photo renders correctly', () => {
  const photo = {images: [{url: '/test.png'}], name: 'test'};
  const tree = renderer.create(<Photo photo={photo}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
