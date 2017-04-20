/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from 'components/LoginForm';
import makeSelectUserName from './selectors';
import { saveUserName } from './actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.dispatchUserName = this.dispatchUserName.bind(this);
  }

  dispatchUserName(name) {
    this.props.dispatch(saveUserName(name));
  }

  render() {
    let container;
    if (!this.props.userName) {
      container = (
        <LoginForm userName={this.props.userName} saveUserName={this.dispatchUserName}></LoginForm>
      );
    } else {
      container = (
        <div>
          {this.props.children}
        </div>
      );
    }
    return (
      <section>
        {/* <h1>
          <FormattedMessage {...messages.header} />
        </h1> */}
        {container}
      </section>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.node,
  userName: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  userName: makeSelectUserName(state, props),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
