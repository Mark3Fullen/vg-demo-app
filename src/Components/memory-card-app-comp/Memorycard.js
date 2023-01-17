import React from "react";

import classnames from 'classnames';

import './memorycardcard.css';

import pokecard from './imgs/ballcard.jpg';

const Memorycard = ({ onClick, card, index, isFlipped, isDisabled, isInactive }) => {
    
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };

    return (
        <div className={classnames("card", {"is-flipped": isFlipped, "is-inactive": isInactive})} onClick={handleClick}>
            <div className="card-face">
                <img src={pokecard} alt="pokecard" style={{ height: 100, width: 100 }} />
            </div>
            <div className="card-face card-back-face">
                <img src={card.image} alt="pokeball" style={{ height: 100, width: 100 }}/>
            </div>
        </div>
    )

}

export default Memorycard;