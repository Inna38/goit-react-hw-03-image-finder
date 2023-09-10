import { Component } from 'react';
import axios from 'axios';

import { RotatingTriangles } from 'react-loader-spinner';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { fetchImg } from './fetchimg/fetchimg';

const KEY_API = '38479410-4fdece6f7b350d5238491f06f';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    searchElement: '',
    item: null,
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

      this.setState(prev => ({
        item: [...prev.item, data],
        isLoader: false,
        totalHits: data.totalHits,
        total: data.total,
      }));

      // this.setState({
      //   item: data,
      //   isLoader: false,
      //   totalHits: data.totalHits,
      //   total: data.total,
      // });
    }
  }

  //   fetchData = async ({
  //     searchElement = this.state.searchElement,
  //     page = 1,
  //   }) => {
  //     try {
  //       const data = await fetchImg({ searchElement, page });

  // //  this.setState((prev) => ({
  // //         item: [...prev.item, data],
  // //         isLoader: false,
  // //       }));

  //       this.setState({
  //         item: data,
  //         isLoader: false,
  //       });
  //     } catch (error) {}
  //   };

  loadBtnClick = async () => {
    await axios.get(
      `${BASE_URL}?key=${KEY_API}&q=${this.state.searchElement}&image_type=photo&per_page=12&page=${this.state.page}`
    );
    this.setState(prev => ({
      isLoader: true,
      page: prev.page + 1,
    }));
  };

  handleSearch = searchElement => {
    this.setState({
      searchElement,
      isLoader: true,
      page: 1,
    });
  };

  handleModal = largeImageURL => {
    this.setState(prev => ({
      isShowModal: !prev.isShowModal,
      largeImageURL,
    }));
  };

  render() {
    const { item, largeImageURL, isLoader, isShowModal } = this.state;

    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
        {isLoader && <RotatingTriangles />}
        <ImageGallery data={item} onClickImg={this.handleModal} />
        {isShowModal && (
          <Modal largeImageURL={largeImageURL} handleModal={this.handleModal} />
        )}
        {this.state.totalHits !== this.state.total && (
          <Button loadBtnClick={this.loadBtnClick} />
        )}
      </>
    );
  }
}

// export class App extends Component {
//   state = {
//     searchElement: '',
//     item: null,
//     // page: 1,
//     isLoader: false,
//     isShowModal: false,
//     largeImageURL: '',
//   };

//   async componentDidUpdate(_, prevState) {
//     if (prevState.searchElement !== this.state.searchElement) {
//       this.fetchData(this.state.searchElement);
//     }

//   }

//   fetchData = async ({
//     searchElement = this.state.searchElement,
//     page = 1,
//   }) => {
//     try {
//       const data = await fetchImg({ searchElement, page });

// //  this.setState((prev) => ({
// //         item: [...prev.item, data],
// //         isLoader: false,
// //       }));

//       this.setState({
//         item: data,
//         isLoader: false,
//       });
//     } catch (error) {}
//   };

//   loadBtnClick = page => {
//     this.setState({
//       isLoader: true,
//     });

//     this.fetchData({ page });
//   };

//   handleSearch = searchElement => {
//     this.setState({
//       searchElement,
//       isLoader: true,
//     });

//     this.fetchData({ searchElement });
//   };

//   handleModal = largeImageURL => {
//     this.setState(prev => ({
//       isShowModal: !prev.isShowModal,
//       largeImageURL,
//     }));
//   };

//   render() {
//     const { item, largeImageURL, isLoader, isShowModal } = this.state;

//     return (
//       <>
//         <Searchbar onSearch={this.handleSearch} />
//         {isLoader && <RotatingTriangles />}
//         <ImageGallery data={item} onClickImg={this.handleModal} />
//         {isShowModal && (
//           <Modal largeImageURL={largeImageURL} handleModal={this.handleModal} />
//         )}
//         {item && <Button loadBtnClick={this.loadBtnClick} />}
//       </>
//     );
//   }
// }
