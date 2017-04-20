import { createSelector } from 'reselect';

/**
 * Direct selector to the quiz state domain
 */
const selectQuizDomain = () => (state) => state.get('quiz');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Quiz
 */

const makeSelectQuestions = createSelector(
  selectQuizDomain(),
  (substate) => substate.get('questions')
);

const makeSelectQuestionNum = createSelector(
  selectQuizDomain(),
  (substate) => substate.get('presentQuestionIndex')
);

const makeSelectQuizStatus = createSelector(
  selectQuizDomain(),
  (substate) => substate.get('quizCompleted')
);


export {
  selectQuizDomain,
  makeSelectQuestions,
  makeSelectQuestionNum,
  makeSelectQuizStatus,
};
