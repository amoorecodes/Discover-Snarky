import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './Login.jsx';
import Search from './Search.jsx';
import Results from './Results.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            currentUser: ''
        };
        this.login = this.login.bind(this);
    };

    login() {
        this.setState({
            loggedIn: 'true'
        });
    };
    //create a function that would change loggedIn state to true or false
        //passed in that function to login as props with binding
    componentDidMount() {
    //   this.props.login();
      console.log(this.login)  
    };
    

    render() {
        return (
            <div>
                {this.state.loggedIn ? <div>
                <Search />
                <Results />
                </div> : <Login onLogin={this.login} /> }
            </div>
        )
    };  
};
        /*if(this.state.loggedIn === false ) {
            return (
                <div>
                <Login onLogin={this.login.bind(this)} /> 
                </div>
            )
        } else if (this.state.loggedIn) {
            return (
                <div>
                <Search />
                <Results />
                </div>
            )
        }*/