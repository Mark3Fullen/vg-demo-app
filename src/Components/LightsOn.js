import React from "react";
import '../Styles/lightson.css';

import LightsonBoard from "./lights-on-app-comp/LightsOnBoard";

const LightsOn = () => {

    return (

        <div className="lightsonapp">

            <h1 className="App-h1"><span className="App-orange">LIGHTS</span><span className="App-blue">ON</span></h1>

            <LightsonBoard size={5} chanceLightStartsOn={0.25}/>

        </div>

    )

};

export default LightsOn;