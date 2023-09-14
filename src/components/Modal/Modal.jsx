import { Component } from 'react';

import PropTypes from 'prop-types';

import css from './Modal.module.css';

export class Modal extends Component {
  
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

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
