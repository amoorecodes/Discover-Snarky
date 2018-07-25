import React, {Component} from 'react';
import Song from './Song.jsx';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playlist: []
    };
  };

  render() {
    console.log('stte', this.props)
    return (
      <div>
        RESULTS
        <Song song={this.props.quote} />
      </div>
    );
  };
}

            // {this.state.quote.map((song, i) => {
            //     <Song song={song} key={i} />
            // })}
export default Results;