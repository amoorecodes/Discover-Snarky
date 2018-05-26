import React, {Component} from 'react';
import { render } from 'react-dom';
import Song from './Song.jsx';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: []
        };
    };

    render() {
        return (
            <div>
            {this.state.playlist.map((song, i) => {
                <Song song={song} key={i} />
            })}
            </div>
        );
    };
}

export default Results;