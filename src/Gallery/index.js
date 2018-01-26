import React, { Component } from 'react';

import View from './View';
import request from '../request';

const URL =
  'https://api.500px.com/v1/photos?feature=popular&&image_size=440&exclude=Nude&consumer_key=vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      error: null,
      currentPage: this.props.initialPage || 1,
      currentCategory: this.props.initialCategory, // || 'All'?
      itemsCountPerPage: this.props.itemsCountPerPage || 20,
    };
  }

  normalizeData = data => {
    this.setState({
      photos: data.photos,
      currentPage: data.current_page,
      totalItemsCount: data.total_items,
    });
  };

  load = async () => {
    const url = `${URL}&page=${this.state.currentPage}&only=${
      this.state.currentCategory
    }&rpp=${this.state.itemsCountPerPage}`;

    try {
      this.setState({ isLoading: true, error: false });
      const data = await request.fetchPhotos(url);
      this.setState({ isLoading: false });
      this.normalizeData(data);
    } catch (error) {
      this.setState({ isLoading: false, error: true });
    }
  };

  handleCategory = currentCategory => {
    //on category change. set current page to 1.
    this.setState(
      {
        currentCategory,
        currentPage: 1,
      },
      this.load,
    );
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
