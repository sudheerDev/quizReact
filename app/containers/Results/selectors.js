import { createSelector } from 'reselect';
import { selectQuizDomain } from 'containers/Quiz/selectors';
/**
 * Direct selector to the results state domain
 */
const selectResultsDomain = () => (state) => state.get('results');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Results
 */

const makeSelectAnswers = createSelector(
  selectResultsDomain(),
  (substate) => substate.get('answers')
);

const makeCorrectAnswers = createSelector(
  selectQuizDomain(),
  makeSelectAnswers,
  (questions, answers) => {
    let test;
    if (answers) {
      test = questions.get('questions').reduce((newList, val, index) => {
        if (parseInt(val.get('answerNum'), 10) === answers[index]) {
          return newList + 1;
        }
        return newList;
      }, 0);
    }
    return test;
  }
);

export {
  selectResultsDomain,
  makeSelectAnswers,
  makeCorrectAnswers,
};
