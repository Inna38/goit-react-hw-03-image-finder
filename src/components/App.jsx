import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { fetchImg } from './fetchimg/fetchimg';


export class App extends Component {
  state = {
    searchElement: '',
    data: null,
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchElement !== this.state.searchElement
      //  || prevState.page !== this.state.page
    ) {
      try {
        const data = await fetchImg(this.state.searchElement, this.state.page);

        this.setState({
          data
        });
      } catch (error) {}
    }
  }

  loadBtnClick = () => {

    this.setState({
      page: this.state.page + 1,
    });
    fetchImg(this.state.page);
  };

  handleSearch = searchElement => {
    this.setState({
      searchElement,
    });
  };

  render() {
    const { data } = this.state;
    
    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery data={data} />
        <Modal />
        {data && <Button loadBtnClick={this.loadBtnClick} />}
      </>
    );
  }
}
