import React from 'react';
import './styles.css';

const User = ({ user }) => (
  <div className="user-container">
    <img className="avatar" alt={user.name} src={user.avatar_url} />
    <div className="info-container">
      <strong className="name">{user.name}</strong>
      <small className="login">{user.login}</small>
    </div>
    <button className="delete-button" type="button">
      <i className="fa fa-times" />
    </button>
  </div>
);

export default User;
