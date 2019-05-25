import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';
import './styles.css';

class User extends Component {
  static propTypes = {
    removeUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  };

  handleButton = id => {
    this.props.removeUser(id);
  };

  render() {
    return (
      <div className="user-container">
        <img className="avatar" alt={this.props.user.name} src={this.props.user.avatar_url} />
        <div className="info-container">
          <strong className="name">{this.props.user.name}</strong>
          <small className="login">{this.props.user.login}</small>
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={() => this.handleButton(this.props.user.id)}
        >
          <i className="fa fa-times" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
