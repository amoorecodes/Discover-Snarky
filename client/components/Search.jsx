import React, { Component } from 'react';
import {render} from 'react-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    };

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
            query: event.target.value
        });
    };

    render() {
        return(
            <div>
                <h2>DISCOVER SNARKY</h2>
                <h4>Enter a song you to get a playlist:</h4>
                <form>
                <label>
                <input type='text' id='query' onChange={this.handleInput.bind(this)} />
                </label>
                <input type='submit' value='SEARCH' onClick={this.handleSubmit.bind(this)}/>
                </form>
            </div>
        )
    }
}