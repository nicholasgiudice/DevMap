import { call, put } from 'redux-saga/effects';

import { Creators as UsersActions } from '../ducks/users';

export function* addUser(action) {
  try {
    // const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
    const bla = action;
    const repositoryDate = {
      id: 7093442,
      login: 'nicholasgiudice',
      name: 'Nicholas Giudice',
      avatar_url: 'https://avatars1.githubusercontent.com/u/7093442?v=4',
      bla,
    };

    yield put(UsersActions.addUserSuccess(repositoryDate));
  } catch (error) {
    yield put(UsersActions.addUserFailure('errou'));
  }
}
