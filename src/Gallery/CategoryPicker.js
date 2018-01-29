import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../components/Button';

const Title = styled.h1`
  text-align: center;
  font-weight: 200;
  margin: 2rem auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

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
        <Title>Pick category</Title>
        <Wrapper>
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
        </Wrapper>
      </section>
    );
  }
}

export default CategoryPicker;
