import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from "react-icons/fa";
import "../styles/Player.css";

const Player = ({ songs }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(new Audio(songs[currentSongIndex]?.url));

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);
        audioRef.current.src = songs[currentSongIndex].url;
        audioRef.current.play();
        setIsPlaying(true);
    };

    const prevSong = () => {
        setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
        audioRef.current.src = songs[currentSongIndex].url;
        audioRef.current.play();
        setIsPlaying(true);
    };

    return (
        <div className="player">
            <button onClick={prevSong}><FaBackward /></button>
            <button onClick={togglePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
            <button onClick={nextSong}><FaForward /></button>
            <FaVolumeUp />
            <input type="range" min="0" max="100" className="volume-control" />
        </div>
    );
};

export default Player;
