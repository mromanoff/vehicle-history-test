import React, { Component } from 'react';

import View from './View';
import request from '../request';

const URL = 'https://api.500px.com/v1/photos?feature=popular&rpp=20&image_size=440&exclude=Nude&consumer_key=vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK';

class Categories extends Component {
  state = {
    page: 1,
  };

  // fetchPhotos = async (...args) => {
  //   const url = `https://api.500px.com/v1/photos?feature=popular&rpp=20&image_size=440&exclude=Nude&only=${
  //     this.state.currentCategory
  //   }&page=${
  //     this.state.page
  //   }&consumer_key=vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK`;
  //
  //   try {
  //     this.setState({ isLoading: true, error: false });
  //     const data = await request.fetchPhotos(url);
  //     this.setState({
  //       photos: data.photos,
  //       itemsCountPerPage: 20,
  //       totalItemsCount: data.total_items,
  //       isLoading: false,
  //     });
  //   } catch (error) {
  //     this.setState({
  //       photos: [],
  //       isLoading: false,
  //       error: error.message,
  //       isError: true,
  //     });
  //   }
  // };

  // handleCategory = currentCategory => {
  //   this.setState({ currentCategory, page: 1 }, this.fetchPhotos);
  // };
  //
  // handlePagination = page => {
  //   this.setState({ page }, this.fetchPhotos);
  // };

  load = async (category, page) => {

    const url = `${URL}&page=${page}&only=${category}`;

    try {
      this.setState({ isLoading: true, error: false });
      const data = await request.fetchPhotos(url);
      this.setState({ isLoading: false, data });
    } catch (error) {
      this.setState({ isLoading: false, error: true });
    }
  };

  render() {
    return <View {...this.props} {...this.state} onLoad={this.load} />;
  }
}

export default Categories;
