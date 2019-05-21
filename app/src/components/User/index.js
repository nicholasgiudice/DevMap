import React from 'react';
import { connect } from 'react-redux';
import { Avatar } from './styles';

const User = ({ user }) => (
  <div>
    <Avatar src={user.avatar_url} />
    <p>{user.name}</p>
    <p>{user.login}</p>
  </div>
);

export default User;
