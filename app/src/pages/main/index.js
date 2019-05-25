import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { token as mapBoxToken } from '../../config/mapBox';
import DevBox from '../../components/DevBox';
import '../../config/ReactotronConfig';
import { Creators as UserActions } from '../../store/ducks/users';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GitModal from '../../components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    modalIsOpen: false,
    longitude: 0,
    latitude: 0,
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

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleAddButton = githubName => {
    this.setState({ modalIsOpen: false });
    this.props.addUserRequest(githubName, this.state.longitude, this.state.latitude);
  };

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat;
    this.setState({ longitude, latitude });
    this.openModal();
  };

  render() {
    return (
      <div>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={mapBoxToken}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <DevBox captureClick={false} />
          {this.props.users.map(user => (
            <Marker
              key={user.id}
              latitude={user.latitude}
              longitude={user.longitude}
              captureClick={false}
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                src={user.avatar_url}
              />
            </Marker>
          ))}

          <GitModal
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            handleAddButton={this.handleAddButton}
          />
        </MapGL>
        <ToastContainer />
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
)(Main);
