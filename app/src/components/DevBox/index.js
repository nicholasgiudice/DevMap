import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseControl } from 'react-map-gl';
import User from '../User';
import './styles.css';

class DevBox extends BaseControl {
  state = {};
  _render() {
    return (
      <div className="devMap-container">
        {this.props.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(DevBox);
