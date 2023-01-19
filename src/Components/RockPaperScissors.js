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

        if (cpuChoice === 'r' && userChoice === 'r') {
            setWinner('');
        } else if (cpuChoice === 'p' && userChoice === 'r') {
            setWinner('CPU');
        } else if (cpuChoice === 's' && userChoice === 'r') {
            setWinner('User');
        } else if (cpuChoice === 'r' && userChoice === 'p') {
            setWinner('User');
        } else if (cpuChoice === 'p' && userChoice === 'p') {
            setWinner('');
        } else if (cpuChoice === 's' && userChoice === 'p') {
            setWinner('CPU');
        } else if (cpuChoice === 'r' && userChoice === 's') {
            setWinner('CPU');
        } else if (cpuChoice === 'p' && userChoice === 's') {
            setWinner('User');
        } else if (cpuChoice === 's' && userChoice === 's') {
            setWinner('');
        };


    };

    const handleRPSgameclick = (l) => {

        const x = Math.floor((Math.random() * 3) + 1);

        if (x === 1) {
            setCpuChoice('r')
        } else if (x === 2) {
            setCpuChoice('p')
        } else if (x === 3) {
            setCpuChoice('s')
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
                    <h4>CPU Choice: {cpuChoice.toLocaleUpperCase()}</h4>
                    <br/>
                    <h4>User Choice: {userChoice.toLocaleUpperCase()}</h4>
                </div>

                <div className="rpsgameimgdiv">
                    {/* <h3 className="rpsgameimgs" onClick={() => handleRPSgameclick('r')}>R</h3>
                    <h3 className="rpsgameimgs" onClick={() => handleRPSgameclick('p')}>P</h3>
                    <h3 className="rpsgameimgs" onClick={() => handleRPSgameclick('s')}>S</h3> */}
                    <img className="rpsgameimgs" alt="paper" src={Paper} onClick={() => handleRPSgameclick('r')}/>
                    <img className="rpsgameimgs" alt="rock" src={Rock} onClick={() => handleRPSgameclick('p')}/>
                    <img className="rpsgameimgs" alt="scissors" src={Scissors} onClick={() => handleRPSgameclick('s')}/>
                </div>
            </div>
            <footer className="rpsfooter">
                {winner.length > 0 ? <h4>Winner: {winner}</h4> : <h4>No Winner O_o</h4>}
            </footer>
        </div>

    )

}

export default RockPaperScissors