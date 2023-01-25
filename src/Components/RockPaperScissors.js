import React, { useState } from "react";

import '../Styles/rockpaperscissors.css';

import Paper from './rps-imgs/Paper.jpg';
import Rock from './rps-imgs/Rock.jpg';
import Scissors from './rps-imgs/Scissors.jpg';


const RockPaperScissors = () => {
    const [userChoice, setUserChoice] = useState("");
    const [cpuChoice, setCpuChoice] = useState("");
    const [winner, setWinner] = useState("");

    const checkRPS = () => {

        if (cpuChoice === 'Rock' && userChoice === 'Rock') {
            setWinner('');
        } else if (cpuChoice === 'Paper' && userChoice === 'Rock') {
            setWinner('CPU');
        } else if (cpuChoice === 'Scissors' && userChoice === 'Rock') {
            setWinner('User');
        } else if (cpuChoice === 'Rock' && userChoice === 'Paper') {
            setWinner('User');
        } else if (cpuChoice === 'Paper' && userChoice === 'Paper') {
            setWinner('');
        } else if (cpuChoice === 'Scissors' && userChoice === 'Paper') {
            setWinner('CPU');
        } else if (cpuChoice === 'Rock' && userChoice === 'Scissors') {
            setWinner('CPU');
        } else if (cpuChoice === 'Paper' && userChoice === 'Scissors') {
            setWinner('User');
        } else if (cpuChoice === 'Scissors' && userChoice === 'Scissors') {
            setWinner('');
        };


    };

    const handleRPSgameclick = (l) => {

        const x = Math.floor((Math.random() * 3) + 1);

        if (x === 1) {
            setCpuChoice('Rock')
        } else if (x === 2) {
            setCpuChoice('Paper')
        } else if (x === 3) {
            setCpuChoice('Scissors')
        };

        setUserChoice(l);

        checkRPS();

    };

    return (
        
        <div className="rpsapp">
            <header className="rpsheader">
                <h2>Rock Paper Scissors</h2>
                <h4>Play versus the CPU</h4>
            </header>
            <div className="rpsbody">

                <div className="rpsChoiceSec">
                    <h4>CPU Choice: {cpuChoice}</h4>
                    <br/>
                    <h4>User Choice: {userChoice}</h4>
                </div>

                <div className="rpsgameimgdiv">
                    <img className="rpsgameimgs" alt="Paper" src={Paper} onClick={() => handleRPSgameclick('Rock')}/>
                    <img className="rpsgameimgs" alt="Rock" src={Rock} onClick={() => handleRPSgameclick('Paper')}/>
                    <img className="rpsgameimgs" alt="Scissors" src={Scissors} onClick={() => handleRPSgameclick('Scissors')}/>
                </div>
            </div>
            <footer className="rpsfooter">
                {winner.length > 0 ? <h4>Winner: {winner}</h4> : <h4>No Winner O_o</h4>}
            </footer>
        </div>

    )

}

export default RockPaperScissors