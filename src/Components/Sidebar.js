import React from "react";
import { NavLink } from "react-router-dom";

import '../Styles/sidebar.css';

import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {

    return (

        <div className="navBar">

            <h3 className="navBartitle">
                <span className="navBartitlename">Eclectic Flash Game App</span><NavLink to="/" className="navBartitleicon"><p><HomeIcon/></p></NavLink>
            </h3>


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

            <NavLink to="/tenzies">
                <p className="gameLink">Tenzies</p>
            </NavLink>

            <NavLink to="/">
                <p className="gameLink">Placeholder</p>
            </NavLink>

            <NavLink to="/">
                <p className="gameLink">Placeholder</p>
            </NavLink>

            <NavLink to="/">
                <p className="gameLink">Placeholder</p>
            </NavLink>

            <NavLink to="/">
                <p className="gameLink">Placeholder</p>
            </NavLink>

                <h3 className="navBarFooter">
                    <NavLink to="/about">
                        <p>About</p>
                    </NavLink>
                </h3>

        </div>

    )

}

export default Sidebar