import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ds } from '../designSystem';

const Button = styled.button`
  font-size: ${ds.fontSize('s')};
  cursor: pointer;
  outline: none;
  background: ${props =>
    props.active ? ds.color('secondary') : props.theme.color.secondary3};
  color: ${props => props.theme.color.white};
  transition: background-color 100ms ease-out 100ms;
  padding: ${props => props.theme.size.xs} ${props => props.theme.size.sm};

  &:hover,
  &.active {
    background: ${props => props.theme.color.secondary4};
  }
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
