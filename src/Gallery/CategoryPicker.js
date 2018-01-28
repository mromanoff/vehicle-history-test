import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class CategoryPicker extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    currentCategory: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
  };

  state = {};

  onClick(category) {
    this.props.onCategoryChange(category);
    this.setState({ category: category });
  }

  componentDidMount() {
    const { onCategoryChange, currentCategory } = this.props;
    if (currentCategory) {
      this.setState({ category: currentCategory });
      onCategoryChange(currentCategory);
    }
  }

  render() {
    return (
      <section>
        <h1 className="title">Pick category</h1>
        <div className="module category-picker">
          {this.props.categories.map(category => {
            return (
              <Button
                key={category}
                className={`btn btn--tertiary btn--sm ${
                  this.state.category === category ? 'btn--tertiary-active' : ''
                }`}
                onClick={() => this.onClick(category)}
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
