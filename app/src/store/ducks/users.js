import { toast } from 'react-toastify';

/*
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE: 'users/REMOVE',
};

const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return state;

    case Types.ADD_SUCCESS:
      toast.success('Usuário adicionado com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return [...state, action.payload.data];

    case Types.ADD_FAILURE:
      toast.error('Usuário não encontrado', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return state;

    case Types.REMOVE:
      return state.filter(s => s.id !== action.payload.userId);

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

  removeUser: userId => ({
    type: Types.REMOVE,
    payload: { userId },
  }),
};
