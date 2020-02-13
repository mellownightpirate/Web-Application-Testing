import React from 'react';

export default function Display(props) {
    
    return (
        <div className="container">
            <h2 data-testid="displayBalls">Balls : {props.balls}</h2>
            <h2 data-testid="displayStrikes">Strikes : {props.strikes}</h2>
            <h2 data-testid="displayOuts">Outs : {props.outs}</h2>
            <h2 data-testid="displayInnings">Innings : {props.innings}</h2>
        </div>
    )
} 