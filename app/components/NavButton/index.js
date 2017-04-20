/**
*
* NavButton
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const SubmitBtn = styled.button`
  width: 100px;
  line-height: 30px;
  margin-top: 16px;
  margin: 10px auto;
  float: ${(props) => props.float ? 'right' : 'left'}
  background-color: ${(props) => props.disabled ? '#c7dcc7' : '#9bef9b'};
  color: ${(props) => props.disabled ? 'black' : 'white'};
`;

function NavButton(props) {
  return (
    <SubmitBtn onClick={props.click} disabled={props.disabled} float={props.float}>{props.text}</SubmitBtn>
  );
}

NavButton.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  float: PropTypes.string,
};

export default NavButton;
