import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <ul className="list-unstyled list-inline category-picker">
          {categories.map(category => {
            return (
              <li
                key={category}
                className={`list-inline-item ${
                  this.props.currentCategory === category ? 'active' : ''
                }`}
                onClick={() => this.props.onChange(category)}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default CategoryPicker;
