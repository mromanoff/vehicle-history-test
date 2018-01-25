import React, { Component } from 'react';

import View from './View';
import request from '../request';

const URL =
  'https://api.500px.com/v1/photos?feature=popular&rpp=20&image_size=440&exclude=Nude&consumer_key=vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentPage: this.props.initialPage || 1,
      currentCategory: this.props.initialCategory,
      isError: false,
    };
  }
  // state = {
  //   currentPage: 1,
  //   currentCategory: this.props.initialCategory,
  // };

  load = async () => {
    const url = `${URL}&page=${this.state.currentPage}&only=${
      this.state.currentCategory
    }`;

    try {
      this.setState({ isLoading: true, error: false });
      const data = await request.fetchPhotos(url);

      debugger;

      this.setState({ isLoading: false, data });
    } catch (error) {
      this.setState({ isLoading: false, error: true });
    }
  };

  handleCategory = currentCategory => {
    //on category change. set current page to 1.
    this.setState({
      currentCategory,
      currentPage: 1,
    }, this.load);
  };

  handlePagination = currentPage => {
    this.setState({ currentPage }, this.load);
  };

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        onCategoryChange={this.handleCategory}
        onPageChange={this.handlePagination}
      />
    );
  }
}

export default Categories;
