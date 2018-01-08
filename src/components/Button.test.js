import React from 'react';
import Button from './Button';

it('Button renders correctly', () => {
  const wrapper = shallow(
    <Button className="btn btn-primary" onClick={() => {}}>
      Some text
    </Button>,
  );
  expect(wrapper).toMatchSnapshot();
});
