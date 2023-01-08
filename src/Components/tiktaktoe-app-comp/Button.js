import React from "react";

import './tiktoktoe-app-styles/btn.css';

const Button = ({ value, onClick }) => {

    return (
        <button onClick={onClick}>
            <p>{value}</p>
        </button>
    )

}

export default Button