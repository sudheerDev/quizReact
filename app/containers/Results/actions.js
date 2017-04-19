/*
 *
 * Results actions
 *
 */

import {
  SAVE_ANSWERS,
} from './constants';

export function saveAnswers(answers) {
  return {
    type: SAVE_ANSWERS,
    answers,
  };
}
