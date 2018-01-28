import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
  static propTypes = {
    photo: PropTypes.object.isRequired,
  };

  render() {
    const { images, name } = this.props.photo;
    return (
      <div className="gallery__item">
        <img src={images[0].url} alt={name} className="full-width" />
      </div>
    );
  }
}

export default Photo;
