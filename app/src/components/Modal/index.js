import React, { Component } from 'react';
import Modal from 'react-modal';
import './style.css';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderStyle: 'none',
  },
};

class GitModal extends Component {
  state = {
    githubName: '',
  };

  static propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    handleAddButton: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Modal isOpen={this.props.modalIsOpen} style={customStyles}>
        <div className="container">
          <h1 className="title">Adicionar novo usuário</h1>
          <input
            type="text"
            className="input"
            placeholder="Usuário do Github"
            onChange={e => this.setState({ githubName: e.target.value })}
          />
          <div className="buttonContainer">
            <button onClick={this.props.closeModal} className="cancelButton">
              Cancelar
            </button>
            <button
              onClick={() => this.props.handleAddButton(this.state.githubName)}
              className="addButton"
            >
              Adicionar
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default GitModal;
