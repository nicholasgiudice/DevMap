import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';
import User from '../User';

const DevBox = ({ users }) => (
  <Container>
    {users.map(user => (
      <User key={user.id} user={user} />
    ))}
  </Container>
);

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(DevBox);
