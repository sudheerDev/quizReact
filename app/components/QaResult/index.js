/**
*
* QaResult
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const OptionAns = styled.span`
  padding: 5px 20px;
  width: 312px;
  display: inline-block;
  background-color: ${(props) => props.selected && !props.answer ? 'red' : 'tranparent'};
  background-color: ${(props) => props.answer ? 'green' : 'tranparent'};
  margin-bottom: 10px;
  border-radius: 3px;`;

function QaResult(props) {
  function answers() {
    return props.question.get('options').valueSeq().map((option, index) => (
      <div key={index}>
        <OptionAns selected={parseInt(props.question.get('answerNum'), 10) === index + 1} answer={props.answer === index + 1}>{option}</OptionAns>
      </div>)
    );
  }

  return (
    <div>
      <p>{props.question.get('question')}</p>
      {answers()}
    </div>
  );
}

QaResult.propTypes = {
  question: PropTypes.object,
  answer: PropTypes.number, // eslint-disable-line
};

export default QaResult;
