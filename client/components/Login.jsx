import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const url = 'http://localhost:3000';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    handleEnter(event) {
        event.preventDefault();
    }

    handleSubmit() {
        const link=`http://localhost:3000/api/`;
        // console.log(link)
        axios.post(link, {username: this.state.username, password: this.state.password})
            .then( (response) => {
                if(response.status === 200) {
                    this.props.onLogin();
                }
            })
            .catch(err => console.log(err))
    }

    handleInput(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
        // this.props.onLogin()
        // console.log(event.target.value)
    };

    render() {
        return (
            <div>
                <h1>Discover Snarky</h1>
                <h3>Please Login</h3>
                <form>
                <label>
                USERNAME:
                <input type='text' id='username' username={this.state.username} onChange={this.handleInput.bind(this)} />
                </label>
                <label>
                PASSWORD:
                <input type='text' id='password' password={this.state.password} onChange={this.handleInput.bind(this)} />
                </label>
                <input type='submit' value='Log In' onClick={this.handleSubmit.bind(this)}/>
                </form>
            </div>
        )
    }

}