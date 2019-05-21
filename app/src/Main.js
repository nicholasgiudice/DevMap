import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import Input from './components/Input';
import { token as mapBoxToken } from './config/mapBox';
import DevBox from './components/DevBox';
import './config/ReactotronConfig';
import { Creators as UserActions } from './store/ducks/users';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'mapbox-gl/dist/mapbox-gl.css';

class Main extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.8145254,
      longitude: -47.0146094,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat;
    this.props.addUserRequest('bla');
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={mapBoxToken}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <DevBox />
      </MapGL>
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
)(Main);
