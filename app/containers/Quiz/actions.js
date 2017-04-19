/*
 *
 * Quiz actions
 *
 */

import {
  DEFAULT_ACTION,
  SAVE_QUESTIONS,
  SAVE_QUESTION_NUM,
  SAVE_ANSWER,
  QUIZ_COMPLETED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function saveQuestions(questions) {
  return {
    type: SAVE_QUESTIONS,
    questions,
  };
}

export function savePresentQuestionNum(value) {
  return {
    type: SAVE_QUESTION_NUM,
    value,
  };
}

export function saveAnswer(questionNum, answerNum) {
  return {
    type: SAVE_ANSWER,
    questionNum,
    answerNum,
  };
}

export function quizCompleted() {
  return {
    type: QUIZ_COMPLETED,
  };
}
