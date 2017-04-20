/*
 *
 * Results
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { sagaMiddleware } from 'store';
import QaResult from 'components/QaResult';
import { makeSelectQuestions } from 'containers/Quiz/selectors';
import styled from 'styled-components';
import ResultPieChart from 'components/ResultPieChart';
import { makeCorrectAnswers, makeSelectAnswers } from './selectors';
import { defaultSaga } from './sagas';


const ResultsDiv = styled.div`
  padding: 0px 35px;
`;

const AnsDiv = styled.div`
  float: left;
  width: 50%;
`;

const AnsChart = styled.div`
  float: left;
  width: 300px;
`;

export class Results extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    sagaMiddleware.run(defaultSaga);
  }

  resultsHeader() {
    return <p>You have answered {this.props.Results} correct out of 5 questions</p>;
  }

  questionTemplate(question, index) {
    return <QaResult key={index} question={question} answer={this.props.answers ? this.props.answers[index] : null}></QaResult>;
  }

  pieChartData() {
    return [
      { name: 'correctAnswers', value: this.props.Results },
      { name: 'wrong ans', value: this.props.questions.size - this.props.Results },
    ];
  }

  render() {
    return (
      <ResultsDiv>
        <AnsDiv>
          {this.props.questions.map((question, index) => this.questionTemplate(question, index))}
        </AnsDiv>
        <AnsChart>
          {this.resultsHeader()}
          <ResultPieChart resultsData={this.pieChartData()} />
        </AnsChart>
      </ResultsDiv>
    );
  }
}

Results.propTypes = {
  Results: PropTypes.number,
  questions: PropTypes.object,
  answers: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  Results: makeCorrectAnswers(state, props),
  questions: makeSelectQuestions(state, props),
  answers: makeSelectAnswers(state, props),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
