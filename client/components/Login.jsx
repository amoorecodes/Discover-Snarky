import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleEnter(event) {
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    const link=`http://localhost:3000/api/`;
    console.log(link)
    axios
      .post(link, {username: this.state.username, password: this.state.password})
      .then( (results) => {
        console.log('response', results)
        if(results.status === 201 || 200) {
          console.log('this is login response')
          this.props.onLogin();
        }
      })
      .catch(err => console.log(err,'err'));
      console.log('end')
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div class="login">
        <h1>Discover Snarky</h1>
        <h3>Please Login</h3>
        <form>
        <label>
        USERNAME:
        <input type='text' id='username' username={this.state.username} onChange={this.handleInput.bind(this)} />
        </label>
        <label><br/>
        PASSWORD:
        <input type='text' id='password' password={this.state.password} onChange={this.handleInput.bind(this)} onSubmit={e => this.handleSubmit(e)}/>
        </label>
        <input type='submit' value='Log In' onClick={e => this.handleSubmit(e)}/>
        </form>
      </div>
    )
  }
}

export default Login;