import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import PlaylistPage from "./pages/PlaylistPage";
import "./styles/App.css";

function App() {
    const [songs] = useState([
        { title: "Song 1", artist: "Artist 1", url: "/songs/song1.mp3" },
        { title: "Song 2", artist: "Artist 2", url: "/songs/song2.mp3" },
        { title: "Song 3", artist: "Artist 3", url: "/songs/song3.mp3" }
    ]);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <ThemeToggle />
                <Routes>
                    <Route path="/" element={<Home songs={songs} />} />
                    <Route path="/playlist" element={<PlaylistPage />} />
                </Routes>
                <Player songs={songs} />
            </div>
        </Router>
    );
}

export default App;
