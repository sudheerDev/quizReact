/*
 *
 * Quiz reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SAVE_QUESTIONS,
  SAVE_QUESTION_NUM,
  SAVE_ANSWER,
  QUIZ_COMPLETED,
} from './constants';

const initialState = fromJS({
  presentQuestionNum: 1,
});

function quizReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SAVE_QUESTIONS:
      return state.set('questions', fromJS(action.questions));
    case SAVE_QUESTION_NUM:
      return state.update('presentQuestionNum', (number) => number + action.value);
    case SAVE_ANSWER:
      return state.setIn(['questions', action.questionNum, 'answerNum'], action.answerNum);
    case QUIZ_COMPLETED:
      return state.set('quizCompleted', true);
    default:
      return state;
  }
}

export default quizReducer;
