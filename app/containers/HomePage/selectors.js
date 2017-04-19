import { createSelector } from 'reselect';

/**
 * Direct selector to the quiz state domain
 */
const selectHomePageDomain = () => (state) => state.get('info');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Quiz
 */

const makeSelectUserName = createSelector(
  selectHomePageDomain(),
  (substate) => substate.get('userName')
);

export default makeSelectUserName;
export {
  selectHomePageDomain,
};
