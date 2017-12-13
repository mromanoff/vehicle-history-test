import React, { Component } from 'react';
import Loader from './Loader';
import Photo from './Photo';
import CategoryPicker from './CategoryPicker';
import Pagination from './Pagination';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      category: null,
      photos: [],
      page: 1,
    };
  }

  fetchPhotos = () => {
    this.setState({ isLoading: true });
    (async () => {
      try {
        const response = await fetch(
          `https://api.500px.com/v1/photos?feature=popular&rpp=20&image_size=440&exclude=Nude&only=${
            this.state.category
          }&page=${
            this.state.page
          }&consumer_key=vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK`,
        );
        const data = await response.json();

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
        });
        throw Error(error);
      }
    })();
  };

  handleCategory = category => {
    this.setState({ category, page: 1 }, this.fetchPhotos);
  };

  handlePagination = page => {
    this.setState({ page }, this.fetchPhotos);
  };

  render() {
    return (
      <section>
        <CategoryPicker
          category={this.state.category}
          onChange={this.handleCategory}
        />

        {this.state.isLoading && <Loader />}
        {this.state.photos.length > 0 && (
          <div>
            <Pagination {...this.state} onChange={this.handlePagination} />
            <div className="module gallery">
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
