import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(LoginTwo);
