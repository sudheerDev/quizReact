/**
*
* Qa
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const QaDiv = styled.div`
  margin: 20px 0px;
  background-color: #dedede;
  border-radius: 5px;
  padding: 10px 20px;
`;

class Qa extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  answers() {
    return this.props.question.get('options').valueSeq().map((option, index) => (
      <QaDiv className="radio" key={index}>
        <label htmlFor={index} style={{ display: 'block' }}>
          <input type="radio" id={index} onChange={this.props.saveAnswer} value={index + 1} checked={parseInt(this.props.question.get('answerNum'), 10) === index + 1} />
          <span>{option}</span>
        </label>
      </QaDiv>)
    );
  }
  render() {
    return (
      <form>
        <p>
          {this.props.question.get('question')}
        </p>
        {this.answers()}
      </form>
    );
  }
}

Qa.propTypes = {
  question: PropTypes.object.isRequired,
  saveAnswer: PropTypes.func,
};

export default Qa;
