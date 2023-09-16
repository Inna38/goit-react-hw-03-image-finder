import { Component } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

const KEY_API = '38479410-4fdece6f7b350d5238491f06f';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    searchElement: '',
    item: [],
    page: 1,
    isLoader: false,
    isShowModal: false,
    largeImageURL: '',
    totalHits: null,
    total: null,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchElement !== this.state.searchElement ||
      prevState.page !== this.state.page
    ) {
      const { data } = await axios.get(
        `${BASE_URL}?key=${KEY_API}&q=${this.state.searchElement}&image_type=photo&per_page=12&page=${this.state.page}`
      );

      if (data.hits.length === 0) {
        this.setState({
          isLoader: false,
        });
        Notiflix.Notify.info('Not found');
        return;
      }

      if (!this.state.item) {
        this.setState({
          item: data.hits,
          isLoader: false,
          totalHits: data.totalHits,
          total: data.total,
        });
      } else {
        this.setState(prev => ({
          item: [...prev.item, ...data.hits],
          isLoader: false,
        }));
      }
    }
  }

  loadBtnClick = async () => {
    this.setState(prev => ({
      isLoader: true,
      page: prev.page + 1,

    }));
    // if (this.state.totalHits !== this.state.total) {
    //   <Button/>
    // }
  };

  handleSearch = searchElement => {
    this.setState({
      item: null,
      searchElement,
      isLoader: true,
      page: 1,
      totalHits: null,
      total: null,
    });
  };

  handleModal = largeImageURL => {
    this.setState(prev => ({
      isShowModal: !prev.isShowModal,
      largeImageURL,
    }));
  };

  render() {
    const { item, largeImageURL, isLoader, isShowModal, totalHits, total } =
      this.state;

    return (
      <>
        <Searchbar onSearch={this.handleSearch} />

        {item ? <ImageGallery data={item} onClickImg={this.handleModal} /> : ''}

        {isLoader && <Loader />}

        {isShowModal && (
          <Modal largeImageURL={largeImageURL} handleModal={this.handleModal} />
        )}

        {totalHits !== total &&  !isLoader ? <Button loadBtnClick={this.loadBtnClick} /> : ""}
      </>
    );
  }
}
