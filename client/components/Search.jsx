import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: ''
    };
    this.handleSubmit= this.handleSubmit.bind(this);
  };



  handleSubmit(event) {
    event.preventDefault();
    const link=`http://localhost:3000/api/playlist`;
    axios.post(link, {song: this.state.query})
      .then( (response) => {
        console.log('we\' re in response')
        if(response.status === 200) {
        console.log('song is already here!')
        }
        if(response.status === 201) {
          console.log('back to axios, show songs');
          axios.get("https://api.chucknorris.io/jokes/random")
            .then( (data) => {
              console.log('data', this.props)
              this.props.sendBack(data);
            })
            .catch(err => console.log('err is', err))
        }
      })
      .catch(err => console.log(err, 'dsds'))
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
        <h3>Enter a song you like to get a playlist:</h3>
        <form>
        <label>
        <input type='text' id='query' onChange={this.handleInput.bind(this)} />
        </label>
        <input type='submit' value='SEARCH' onClick={e => this.handleSubmit(e)}/>
        </form>
      </div>
    )
  };
};

export default Search;