/*
 *
 * Quiz reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SAVE_USERNAME,
} from './constants';

const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SAVE_USERNAME:
      return state.set('userName', action.name);
    default:
      return state;
  }
}

export default homePageReducer;
