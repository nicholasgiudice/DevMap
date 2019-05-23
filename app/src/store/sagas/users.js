import { call, put } from 'redux-saga/effects';
import api from '../../services/githubApi';
import { Creators as UsersActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.githubName}`);

    const repositoryDate = {
      id: data.id,
      login: data.login,
      name: data.name,
      avatar_url: data.avatar_url,
      longitude: action.payload.longitude,
      latitude: action.payload.latitude,
    };

    yield put(UsersActions.addUserSuccess(repositoryDate));
  } catch (error) {
    yield put(UsersActions.addUserFailure('errou'));
  }
}
