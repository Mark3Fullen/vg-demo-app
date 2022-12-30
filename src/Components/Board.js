import React from "react";

import '../Styles/board.css';

const Board = props => {

    return (

        <div className="board">{props.children}</div>

    )

}

export default Board;