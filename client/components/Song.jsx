import React from 'react';
import {render } from 'react-dom';

const Song = (props)=> {
    return (
        <div>
        We've added your song to our database, but that's about it. 
        Here's a Chuck Norris joke instead:'

            <h4>{props.song}</h4>
            <p>Also, screw them tokens. </p>
        </div>
    )
};

export default Song;