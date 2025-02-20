import React, { useState, useEffect } from "react";
import Player from "../components/Player";
import SongList from "../components/SongList";
import "../styles/Home.css";

const Home = () => {
    const [songs, setSongs] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch songs from backend API
    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/songs"); // Adjust backend URL
                if (!response.ok) {
                    throw new Error("Failed to fetch songs");
                }
                const data = await response.json();
                
                if (Array.isArray(data) && data.length > 0) {
                    setSongs(data);
                } else {
                    setError("No songs available.");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    return (
        <div className="home-container">
            {/* Header Section */}
            <header className="home-header">
                <h1>🎵 React Music Player</h1>
                <p>Enjoy your favorite tunes!</p>
            </header>

            {/* Content Section */}
            <div className="content">
                {loading ? (
                    <p className="loading">Loading songs...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <>
                        <SongList songs={songs} onSelect={setCurrentSongIndex} />
                        <Player songs={songs} currentSongIndex={currentSongIndex} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
