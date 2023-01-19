import React, {useState} from "react";
import './lights-on-app-styles/lightsonboard.css';

import LightsOnCell from './LightsOnCell'

const LightsonBoard = ({ size, chanceLightStartsOn }) => {

    const randomLight = () => {
        return Math.random() < chanceLightStartsOn
    }

    const lightsGrid = Array.from({length: size}).map(
        row => (row = 
            Array.from({length: size}).map(
                cell => (cell = randomLight())
            )
        )
    )

    const [board, setBoard] = useState({ grid: lightsGrid });

    const toggleLight = (cellIndex) => {

        let [cellRowIndex, cellColIndex] = cellIndex.split('');
        cellRowIndex = parseInt(cellRowIndex);
        cellColIndex = parseInt(cellColIndex);

        setBoard(currSt => (
            { ...currSt,
                grid: currSt.grid.map(
                    (row, rowIndex) => ( rowIndex === cellRowIndex
                        ? row.map( (col, colIndex) => colIndex === cellColIndex ? !col : col)
                        : row
                        )
                )}    
        ))

    }

    function toggleAllLights(cellIndex){
        let [ cellRowIndex, cellColIndex ] = cellIndex.split("");
        cellRowIndex = parseInt(cellRowIndex);
        cellColIndex = parseInt(cellColIndex);
        
        toggleLight(cellIndex);                                 
        toggleLight([cellRowIndex, cellColIndex + 1].join("")); 
        toggleLight([cellRowIndex, cellColIndex - 1].join("")); 
        toggleLight([cellRowIndex + 1, cellColIndex].join("")); 
        toggleLight([cellRowIndex - 1, cellColIndex].join("")); 
    
    }

    const hasWon = () => {
        return board.grid.every(row => row.every(cell => !cell))
    }

    const gridDisplay = board.grid.map( (row, rowIndex) => {
        return (
            <div className="lightsonboardrow" key={rowIndex}>
                {row.map((col, colIndex) => (
                    <LightsOnCell
                    key={[rowIndex, colIndex].join('')}
                    cellIndex={[rowIndex, colIndex].join('')}
                    isOn={board.grid[rowIndex][colIndex]}
                    toggleLight={toggleAllLights}
                    />
                ))}
            </div>
        )
    
    })

    return (
        <div className="lightsonboard">
            {hasWon() ? <div className="lightsonboardwon">Congrats!</div> : gridDisplay }
        </div>
    )

}

export default LightsonBoard;