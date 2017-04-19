import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { saveQuestions } from './actions';
// Individual exports for testing
export function* defaultSaga() {
  const questions = yield call(request, 'https://api.myjson.com/bins/1aksu7');
  yield put(saveQuestions(questions));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
