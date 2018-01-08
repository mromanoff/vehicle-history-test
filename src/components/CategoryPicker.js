import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const categories = ['Animals', 'Transportation', 'Nature', 'Sport'];

class CategoryPicker extends Component {
  static propTypes = {
    currentCategory: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <section>
        <h1 className="title">Pick category</h1>
        <div className="module category-picker">
          {categories.map(category => {
            return (
              <Button
                key={category}
                className={`btn btn--tertiary btn--sm ${
                  this.props.currentCategory === category ? 'btn--tertiary-active' : ''
                }`}
                onClick={() => this.props.onChange(category)}
              >
                {category}
              </Button>
            );
          })}
        </div>
      </section>
    );
  }
}

export default CategoryPicker;
