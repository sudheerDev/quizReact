
import { fromJS } from 'immutable';
import quizReducer from '../reducer';

describe('quizReducer', () => {
  it('returns the initial state', () => {
    expect(quizReducer(undefined, {})).toEqual(fromJS({}));
  });
});
