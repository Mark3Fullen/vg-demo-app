import React from "react";
import { NavLink } from "react-router-dom";

import '../Styles/sidebar.css';

import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {

    return (

        <div className="navBar">

            <h3 className="title">Eclectic Flash Web App</h3>


            <NavLink to="/">
                <p className="homeLink"><HomeIcon/></p>
            </NavLink>

            <NavLink to="/tiktaktoe">
                <p className="gameLink">TikTakToe</p>
            </NavLink>

            <NavLink to="/memorycardgame">
                <p className="gameLink">Memory Card Game</p>
            </NavLink>

            <NavLink to="/rockpaperscissors">
                <p className="gameLink">Rock Paper Scissors</p>
            </NavLink>

            <NavLink to="/lightson">
                <p className="gameLink">Lights On</p>
            </NavLink>

            <NavLink>
                <p className="gameLink">Game5</p>
            </NavLink>

            <NavLink>
                <p className="gameLink">Game6</p>
            </NavLink>

        </div>

    )

}

export default Sidebar