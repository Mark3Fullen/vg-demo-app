import React from "react";

import '../Styles/about.css';

const About = () => {

    return (

        <div className="aboutApp">

            <div className="aboutHeader">

                <h3 className="aboutHeaderTitle">About</h3>

            </div>

            <div className="aboutBody">
                <h4>This is a simple React flash game app to display flash games I found around the web built in React. Credit to the creators of the original apps are mentioned here.</h4>
                <div className="aboutBodyLinks">
                <p><span>TikTakToe --- </span><a href="https://github.com/NedimBegic/React-Tik-Tak-Toe?ref=reactjsexample.com">Github Repository</a></p>
                <p><span>Memory Card game --- </span><a href="https://github.com/lorenzo774/memory-card?ref=reactjsexample.com">Github Repository</a></p>
                <p><span>Lights Out --- </span><a href="https://github.com/luciatruden/lights-out?ref=reactjsexample.com">Github Repository</a></p>
                <p><span>Tenzies --- </span><a href="https://github.com/sachinkumar1469/Tenzies_game_app_using_react?ref=reactjsexample.com">Github Repository</a></p>
                </div>
            </div>
        
        </div>

    )

}

export default About