import React from 'react';
import {render } from 'react-dom';

const Song = (props)=> {
    return (
        <div>
        track1
            <h3>{props.trackName}</h3>
            <h4>by {props.Artist}</h4>
            <p>{props.description}</p>
        </div>
    )
};

export default Song;