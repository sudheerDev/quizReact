/*
 *
 * Quiz actions
 *
 */

import {
  DEFAULT_ACTION,
  SAVE_USERNAME,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function saveUserName(name) {
  return {
    type: SAVE_USERNAME,
    name,
  };
}
