/*
 *
 * Quiz
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { sagaMiddleware } from 'store';
import NavButton from 'components/NavButton';
import Qa from 'components/Qa';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import makeSelectUserName from 'containers/HomePage/selectors';
import Loader from 'components/Loader';
import { makeSelectQuestions, makeSelectQuestionNum, makeSelectQuizStatus } from './selectors';
import { defaultSaga } from './sagas';
import { savePresentQuestionNum, saveAnswer, quizCompleted } from './actions';

const HeaderInfo = styled.p`
  background-color: #424242;
  color: white;
  line-height: 55px;
  font-size: 30px;
  margin: 0px;
  padding: 10px;
`;

const QuestionHeader = styled.p`
  font-size: 21px;
`;

const QuestionCard = styled.section`
  padding: 15px 8%;
`;

export class Quiz extends React.PureComponent {

  constructor(props) {
    super(props);
    this.nextQuestionNum = this.nextQuestionNum.bind(this);
    this.prevQuestionNum = this.prevQuestionNum.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
    this.submitResults = this.submitResults.bind(this);
  }

  componentWillMount() {
    if (this.props.quizStatus) {
      this.props.dispatch(push('/results'));
    }
  }

  componentDidMount() {
    sagaMiddleware.run(defaultSaga);
  }

  nextQuestionNum() {
    this.props.dispatch(savePresentQuestionNum(1));
  }

  prevQuestionNum() {
    this.props.dispatch(savePresentQuestionNum(-1));
  }

  submitResults() {
    this.props.dispatch(quizCompleted());
    this.props.dispatch(push('/results'));
  }

  pageHeader() {
    return <HeaderInfo>Welcome {this.props.userName}</HeaderInfo>;
  }

  questionHeader() {
    return <QuestionHeader>Question {this.props.questionNum + 1} of 5</QuestionHeader>;
  }

  saveAnswer(event) {
    this.props.dispatch(saveAnswer(this.props.questionNum, event.target.value));
  }

  questionTemplate() {
    return <Qa question={this.props.questions.get(this.props.questionNum)} saveAnswer={this.saveAnswer}></Qa>;
  }

  nextButton() {
    if (this.props.questionNum === (this.props.questions.size - 1)) {
      return <NavButton click={this.submitResults} text={'Submit'} float={'true'}></NavButton>;
    }
    return <NavButton click={this.nextQuestionNum} text={'Next'} float={'false'}></NavButton>;
  }

  PreviousButton() {
    return <NavButton click={this.prevQuestionNum} disabled={this.props.questionNum === 0} text={'Previous'}></NavButton>;
  }

  render() {
    let container;
    if (this.props.questions) {
      container = (
        <div>
          {this.pageHeader()}
          <QuestionCard>
            {this.questionHeader()}
            {this.questionTemplate()}
            {this.PreviousButton()}
            {this.nextButton()}
          </QuestionCard>
        </div>
      );
    } else {
      container = (
        <Loader></Loader>
      );
    }
    return (
      <div>
        {container}
      </div>
    );
  }
}

Quiz.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.object,
  questionNum: PropTypes.number,
  quizStatus: PropTypes.bool,
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  questions: makeSelectQuestions(state, props),
  questionNum: makeSelectQuestionNum(state, props),
  quizStatus: makeSelectQuizStatus(state, props),
  userName: makeSelectUserName(state, props),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
