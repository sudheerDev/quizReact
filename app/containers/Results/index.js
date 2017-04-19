/*
 *
 * Results
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { sagaMiddleware } from 'store';
import { makeCorrectAnswers } from './selectors';
import { defaultSaga } from './sagas';

export class Results extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    sagaMiddleware.run(defaultSaga);
  }
  render() {
    console.log(this.props.Results);
    return (
      <div>
      </div>
    );
  }
}

Results.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  Results: makeCorrectAnswers(state, props),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
