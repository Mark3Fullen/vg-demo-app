import React from "react";
import { NavLink } from "react-router-dom";

import '../Styles/sidebar.css';

const Sidebar = () => {

    return (

        <div className="navBar">

            <h3 className="title">Directory</h3>

            <p>Eclectic Flash Web App</p>

            <br/>

            <br/>

            <br/>

            <NavLink to="/">
                <p className="gameLink">Home</p>
            </NavLink>

            <NavLink to="/tiktaktoe">
                <p className="gameLink">TikTakToe</p>
            </NavLink>

            <NavLink>
                <p className="gameLink">Game2</p>
            </NavLink>

            <NavLink>
                <p className="gameLink">Game3</p>
            </NavLink>

            <NavLink>
                <p className="gameLink">Game4</p>
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