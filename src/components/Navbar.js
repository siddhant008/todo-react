import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/" exact>My Notes</NavLink> </li>
                    <li><NavLink to="/new">New Note</NavLink></li>
                </ul>
            </nav>
            <hr/>
        </header>

    )
}

export default Navbar;
