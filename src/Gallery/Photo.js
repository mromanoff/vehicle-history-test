import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: auto;
  opacity: 1;
  transition: opacity 300ms ease-out;
  &:hover {
    opacity: 0.9;
  }
`;

const Photo = ({ photo }) => (
  <Image src={photo.images[0].url} alt={photo.name} />
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Photo;
