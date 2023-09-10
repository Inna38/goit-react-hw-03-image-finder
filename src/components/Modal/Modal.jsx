import { Component } from 'react';

import css from './Modal.module.css';

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKeyClose);
  }

  handlerKeyClose = e => {
    if (e.code === 'Escape') {
      this.props.handleModal();
    }
  };

  handlerBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.handleModal();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handlerBackdrop}>
        <div className={css.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
