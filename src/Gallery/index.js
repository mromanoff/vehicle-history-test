import React, { Component } from 'react';

import View from './View';
import loadData from './loadData';

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

  load = async () => {
    try {
      this.setState({ isLoading: true, error: false });
      const data = await loadData({
        category: this.state.currentCategory,
        page: this.state.currentPage
      });
      this.setState({ isLoading: false });
      this.normalizeApi(data);
    } catch (error) {
      this.setState({ isLoading: false, error: true });
    }
  };

  handleCategory = currentCategory => {
    this.scrollTop();
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
    this.scrollTop();
    this.setState({ currentPage }, this.load);
  };

  normalizeApi = data => {
    this.setState({
      photos: data.photos,
      currentPage: data.current_page,
      totalItemsCount: data.total_items,
    });
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
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
