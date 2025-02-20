import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>🎵 Music Player</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/playlist">Playlist</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
