import React, { Component } from 'react';
import Loader from './Loader';
import Photo from './Photo';
import CategoryPicker from './CategoryPicker';
import Pagination from './Pagination';
import { CATEGORIES } from '../constants';
import request from '../request';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      currentCategory: CATEGORIES[0],
      photos: [],
      page: 1,
      error: '',
      isError: false,
    };
  }

  componentDidMount() {
    //this.fetchPhotos();
  }

  fetchPhotos = async () => {
    const url = `https://api.500px.com/v1/photos?feature=popular&rpp=20&image_size=440&exclude=Nude&only=${
      encodeURIComponent(this.state.currentCategory)
    }&page=${
      encodeURIComponent(this.state.page)
    }&consumer_key=vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK`;

    this.setState({ isLoading: true });

    try {
      const data = await request.fetchPhotos(url);
      this.setState({
        photos: data.photos,
        itemsCountPerPage: 20,
        totalItemsCount: data.total_items,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        photos: [],
        isLoading: false,
        error: error.message,
        isError: true,
      });
    }
  };

  handleCategory = currentCategory => {
    this.setState({ currentCategory, page: 1 }, this.fetchPhotos);
  };

  handlePagination = page => {
    this.setState({ page }, this.fetchPhotos);
  };

  render() {
    return (
      <section>
        <CategoryPicker
          currentCategory={this.state.currentCategory}
          onChange={this.handleCategory}
        />

        {this.state.isLoading && <Loader />}
        {this.state.isError && <div>Error: ${this.state.error}</div>}
        {this.state.photos.length > 0 && (
          <div className={this.state.isLoading ? 'loading' : 'loaded'}>
            <Pagination {...this.state} onChange={this.handlePagination} />

            <div className="module gallery test">
              {this.state.photos.map(photo => (
                <Photo key={photo.id} photo={photo} />
              ))}
            </div>
            <Pagination {...this.state} onChange={this.handlePagination} />
          </div>
        )}
      </section>
    );
  }
}

export default Categories;
