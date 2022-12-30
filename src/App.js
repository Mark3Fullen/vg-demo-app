import React, { useState } from 'react';
import './Styles/App.css';
import './Styles/board.css';

import Scoreboard from './Components/Scoreboard'
import Button from './Components/Button'
import Board from './Components/Board'

function App() {

  const [resultColor, setResultColor] = useState('');
  const [result, setResult] = useState('');
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [isX, setIsX] = useState(true);

  const [sign, signChange] = useState(Array(9).fill(null));

  const clickHandler = (i) => {

    if (sign[i]=='x' || sign[i]=='o') return

    if (result.length) return

      sign[i] = isX ? 'x' : 'o'
      signChange(sign);
      setIsX(!isX);
    

      checkWinner(0, 1, 2);
      checkWinner(3, 4, 5);
      checkWinner(6, 7, 8);
      checkWinner(0, 3, 6);
      checkWinner(1, 4, 7);
      checkWinner(2, 5, 8);
      checkWinner(0, 4, 8);
      checkWinner(6, 4, 2);

      draw();

  }

  const checkWinner = (x, y, z) => {

    let playerX = 'x'.repeat(3);
    let playerO = 'o'.repeat(3);

    let fieldValues = sign[x]+sign[y]+sign[z];

    if (fieldValues == playerX) {
      setResult('Player 0 wins!');
      setResultColor('red');
      setScoreX(scoreX + 1)
    } else if (fieldValues == playerO) {
      setResult('Player 1 wins!');
      setResultColor('blue');
      setScoreO(scoreO + 1);
    }

  }

  const draw = _ => {

    let allContent = sign.every(e => e)

    if (allContent && result.length == 0) {
      setResult('The game is tied!');
      setResultColor('yellow');
    }

  }

  const restartGameHandler = _ => {

    console.log('Bruh Moment')

    setResult('');
    setResultColor('')
    signChange(Array(9).fill(null))

  }
  

  return (

    <div className="app">

      <div className="heading">
        <h1 className="tI">Tik</h1>
        <h1 className="tA">Tak</h1>
        <h1 className="tO">Toe</h1>
      </div>

      <Scoreboard pointX={scoreX} pointO={scoreO}/>

      <Board>
        <Button value={sign[0]} onClick={() => clickHandler(0)}/>
        <Button value={sign[1]} onClick={() => clickHandler(1)}/>
        <Button value={sign[2]} onClick={() => clickHandler(2)}/>
        <Button value={sign[3]} onClick={() => clickHandler(3)}/>
        <Button value={sign[4]} onClick={() => clickHandler(4)}/>
        <Button value={sign[5]} onClick={() => clickHandler(5)}/>
        <Button value={sign[6]} onClick={() => clickHandler(6)}/>
        <Button value={sign[7]} onClick={() => clickHandler(7)}/>
        <Button value={sign[8]} onClick={() => clickHandler(8)}/>
      </Board>

      <div className="resultDiv">
        <h2>Result:</h2><h2 className="winner" style={{color:resultColor}}>{result}</h2>
      </div>

      <button className="restartButton" onClick={restartGameHandler}>Restart Game</button>

    </div>

  )

  
}

export default App;
