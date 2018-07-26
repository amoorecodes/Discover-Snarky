import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { usernameEntered } from '../actions'

class LoginTwo extends   Component {
  render() {
    return (
      <div>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({usernameEntered: usernameEntered}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginTwo);
