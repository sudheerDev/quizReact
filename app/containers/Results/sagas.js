import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { saveAnswers } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  const answers = yield call(request, 'https://api.myjson.com/bins/192f9z');
  yield put(saveAnswers(answers));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
