import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  background: ${props =>
    props.active ? props.theme.color.secondary4 : props.theme.color.secondary3};
  color: ${props => props.theme.color.white};
  transition: background-color 100ms ease-out 100ms;
  font-size: ${props => props.theme.size.sm};
  padding: ${props => props.theme.size.xs} ${props => props.theme.size.sm};

  &:hover,
  &.active {
    background: ${props => props.theme.color.secondary4};
  }
`;

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
                active={this.state.category === category}
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
