import React from "react";
import '../Styles/score.css';

const Score = props => {

    return (

        <div className="score">
            <h4 className="player0">Red: {props.pointX}</h4>
            <h4 className="player1">Blue: {props.pointO}</h4>
        </div>

    )

}

export default Score