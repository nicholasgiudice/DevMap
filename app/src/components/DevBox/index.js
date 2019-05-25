import React from 'react';
import { connect } from 'react-redux';
import User from '../User';
import './styles.css';

const DevBox = ({ users }) => (
  <div className="devMap-container">
    {users.map(user => (
      <User key={user.id} user={user} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(DevBox);
