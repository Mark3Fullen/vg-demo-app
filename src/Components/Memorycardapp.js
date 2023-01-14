import React, {useState, useEffect, useRef} from "react";

import Memorycard from "./memory-card-app-comp/Memorycard";

import "../Styles/memorycard.css"

const uniqueElementsArray = [
    {
        type: "Pika",
        image: require("./memory-card-app-comp/imgs/kiaboi.jpg")
    },
    {
        type: "Bulb",
        image: require("./memory-card-app-comp/imgs/bulbyboi.jpg")
    },
    {
        type: "Pigd",
        image: require("./memory-card-app-comp/imgs/piggyboi.jpg")
    },
    {
        type: "Squi",
        image: require("./memory-card-app-comp/imgs/squirtyboi.jpg")
    },
    {
        type: "Char",
        image: require("./memory-card-app-comp/imgs/charmyboi.jpg")
    },
    {
        type: "Butt",
        image: require("./memory-card-app-comp/imgs/butterboi.jpg")
    },

]

function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

const Memorycardapp = () => {

    const [cards, setCards] = useState(
        shuffleCards.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
    );
    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState({});
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [moves, setMoves] = useState(0);
    const [showModal, setShowModal] = useState(false);
    
    const timeout = useRef(null);

    const disable = () => {
        setShouldDisableAllCards(true);
    }

    const enable = () => {
        setShouldDisableAllCards(false)
    }

    const checkCompletion = () => {
        if (Object.keys(clearedCards).length === uniqueElementsArray.length) {
            setShowModal(true);
            // const highScore = Math.min(moves, bestScore);
            // setBestScore(highScore);
        }
    }

    const evaluate = () => {
        const [first, second] = openCards;
        enable();
        if (cards[first].type === cards[second].type) {
            setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
            setOpenCards([]);
            return;
        }

        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, 500);

    }

    const handleCardClick = (index) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            setMoves((moves) => moves + 1);
            disable();
        } else {
            clearTimeout(timeout.current);
            setOpenCards([index]);
        }
    }

    useEffect(() => {
        let timeout = null;
        if (openCards.length === 2) {
            timeout = setTimeout(evaluate, 300);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [openCards]);

    useEffect(() => {
        checkCompletion();
      }, [clearedCards]);
      const checkIsFlipped = (index) => {
        return openCards.includes(index);
      };
    
      const checkIsInactive = (card) => {
        return Boolean(clearedCards[card.type]);
      };

    const handleRestart = () => {
        setClearedCards({});
        setOpenCards([]);
        setShowModal(false);
        setMoves(0);
        setShouldDisableAllCards(false);
        setCards(shuffleCards(uniqueElementsArray.concat(uniqueElementsArray)));
    }

    return (

        <div className="memorycardapp">

            <header className="memorycardappheader">
                <h3>Memory Card Game</h3>
                <div>
                    Select two cards with the same content consequtively to make them vanish
                </div>
            </header>
            <div className="memorycardcontainer">
                {cards.map((card, index) => {
                    return (
                        <Memorycard
                            key={index}
                            card={card}
                            index={index}
                            isDisabled={shouldDisableAllCards}
                            isInactive={checkIsInactive(card)}
                            isFlipped={checkIsFlipped(index)}
                            onClick={handleCardClick}
                        />   
                    )
                })}
            </div>
            
            <footer className="memorycardappfooter">
                <div>
                    <span>Moves:</span> {moves}
                </div>
                <br/>
                <div className="memorycardapprestartdiv">
                    <button className="memorycardapprestart" onClick={handleRestart}>Restart</button>
                </div>
            </footer>

        </div>

    )

}

export default Memorycardapp