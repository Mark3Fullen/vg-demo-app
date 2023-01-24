import React, { useEffect, useState } from "react";

import TenzieDice from "./tenzies-app-comp/TenzieDice";

const Tenzies = () => {

    const diceValues = (oldValue) => {
        let elArr = [];
        for (let i = 0; i < 10; i++) {
            if(oldValue){
                if(!oldValue[i].isHeld){
                    elArr.push({
                        value:Math.floor(Math.random()*6) + 1,
                        isHeld: false,
                    })
                } else {
                    elArr.push(oldValue[i])
                }
            } else {
                elArr.push({
                    value: Math.floor(Math.random()*6) + 1,
                    isHeld: false,
                })
            }    
        }
        return elArr;
    }

    const [dices, setDices] = useState(diceValues());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allHeld = dices.every(die => die.isHeld)
        const firstValue = dices[0].value
        const allSamevalue = dices.every(die => die.value === firstValue)
        if (allHeld && allSamevalue) {
            setTenzies(true);
            console.log('Dice state changed')
        }
    }, [dices])

    const rollDice = e => {
        setDices(diceValues(dices))
        if(tenzies){
            setDices(diceValues());
            setTenzies(false);
        }
    }

    const toggle = (id) => {
        setDices((prevDices) => {
            let newDice = prevDices.map((prevDice, index) => {
                if(index!==id) {
                    return {...prevDice}
                } else {
                    return {...prevDice, isHeld:!prevDice.isHeld}
                }
            })
            return newDice
        })
    }

    const diceEl = dices.map((diceObj, index) => {
        return (<TenzieDice
            value={diceObj.value}
            isHeld={diceObj.isHeld}
            toggle={()=>toggle(index)}
            key={index} />)
    })

    return (
        <div className="tenziesApp">
            {tenzies}
            <h1 className="tenzieTitle">Tenzies</h1>
                <p className="tenzieIntructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
            <div className="tenzieDice-container">
                {diceEl}
            </div>
                <button className="tenzieRoll-btn" onClick={rollDice}>{tenzies ? "New Game" : "Roll" }</button>
        </div>
    )

}

export default Tenzies