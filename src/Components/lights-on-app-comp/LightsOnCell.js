import React from "react";
import './lights-on-app-styles/lightsoncell.css';

const LightsOnCell = ({ cellIndex, isOn, toggleLight }) => {

    const handleToggleLight = () => {
        toggleLight(cellIndex);
    }    

    return (

        <button className={isOn?"Cell-on":"Cell-off"} onClick={handleToggleLight}></button>

    );

};

export default LightsOnCell