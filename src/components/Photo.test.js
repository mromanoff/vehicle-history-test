import React from 'react';
import Photo from './Photo';

it('Photo renders correctly', () => {
  const photo = {images: [{url: '/test.png'}], name: 'test'};
  const wrapper = shallow(<Photo photo={photo}/>);
  expect(wrapper).toMatchSnapshot();
});
