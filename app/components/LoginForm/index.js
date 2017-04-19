/**
*
* LoginForm
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const LoginFormContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #e8e8e8;
`;

const MiddleAlign = styled.div`
  max-width: 50%;
  width: 500px;
  padding: 30px;
  border-bottom: 1px solid black;
  background-color: white;
  box-shadow: 5px 5px 5px grey;
  border-radius: 5px;
`;

const NameLabel = styled.label`
  width: 100%;
  display: inline-flex;
`;

const NameInput = styled.input`
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 40px;
  outline: none;
`;

const SubmitBtn = styled.button`
  width: 100px;
  line-height: 30px;
  margin-top: 16px;
  display: block;
  margin: 10px auto;
  background-color: ${(props) => props.disabled ? '#c7dcc7' : '#9bef9b'};
  color: ${(props) => props.disabled ? 'black' : 'white'};
`;

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveUserName(this.state.value);
  }

  render() {
    return (
      <LoginFormContainer>
        {/* <FormattedMessage {...messages.header} /> */}
        <MiddleAlign>
          <p>Please enter your name to proceed to quiz</p>
          <form onSubmit={this.handleSubmit}>
            <NameLabel htmlFor="name">
              <NameInput type="text" value={this.state.value} onChange={this.handleChange} />
            </NameLabel>
            <SubmitBtn type="submit" value="Submit" disabled={!this.state.value}>Submit</SubmitBtn>
          </form>
        </MiddleAlign>
      </LoginFormContainer>
    );
  }
}

LoginForm.propTypes = {
  saveUserName: PropTypes.func,
};

export default LoginForm;
