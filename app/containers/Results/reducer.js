/*
 *
 * Results reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SAVE_ANSWERS,
} from './constants';

const initialState = fromJS({});

function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ANSWERS:
      return state.set('answers', action.answers);
    default:
      return state;
  }
}

export default resultsReducer;
