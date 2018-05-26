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
            currentUser: '',
            currentSong: '',
        };
        this.login = this.login.bind(this);
        this.searchResult = this.searchResult.bind(this);
    };

    searchResult(results) {
        console.log(' what we get back', results)
        this.setState({
            currentSong: results.data.value
        })
    }

    login() {
        console.log('this works')
        this.setState({
            loggedIn: true, 
        });
        this.setState(this.State);
        // console.log('state', this.state);
    };
    //create a function that would change loggedIn state to true or false
        //passed in that function to login as props with binding
    

    render() {
        return (
            <div>
                {this.state.loggedIn ? <div>
                <Search sendBack={this.searchResult} />
                <Results quote={this.state.currentSong} />
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