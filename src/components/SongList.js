import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/SongList.css";

const SongList = ({ onSelect }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/songs")
            .then(response => setSongs(response.data))
            .catch(error => console.error("Error fetching songs:", error));
    }, []);

    return (
        <div className="song-list">
            <h2>Available Songs</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} onClick={() => onSelect(index)}>
                        {song.title} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
