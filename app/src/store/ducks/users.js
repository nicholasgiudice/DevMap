/*
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

const INITIAL_STATE = [
  {
    id: 7093442,
    login: 'nicholasgiudice',
    name: 'Nicholas Giudice',
    avatar_url: 'https://avatars1.githubusercontent.com/u/7093442?v=4',
    latitude: -22.81495999526067,
    longitude: -47.01483266147573,
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return state;

    case Types.ADD_SUCCESS:
      return [...state, action.payload.data];

    case Types.ADD_FAILURE:
      alert(action.payload.error);
      return state;

    default:
      return state;
  }
}

/*
 * Actions
 */

export const Creators = {
  addUserRequest: (githubName, longitude, latitude) => ({
    type: Types.ADD_REQUEST,
    payload: { githubName, longitude, latitude },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
