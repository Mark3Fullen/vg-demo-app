import React from "react";

import './memorycardcard.css';

import pokecard from './imgs/ballcard.jpg';

const Memorycard = ({ onClick, card, index, isFlipped, isDisabled }) => {
    
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };

    return (
        <div className="card" onClick={handleClick}>
            <div className="card-face">
                <img src={pokecard} alt="pokecard" style={{ height: 100, width: 100 }} />
            </div>
            <div className="card-face">
                <img src={card.image} alt="pokeball" style={{ height: 100, width: 100 }}/>
            </div>
        </div>
    )

}

export default Memorycard;