import React, {useState} from "react";

import '../Styles/btn.css';

const Button = ({ value, onClick }) => {

    return (
        <button onClick={onClick}>
            <p>{value}</p>
        </button>
    )

}

export default Button