import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import "../styles/Playlist.css";

const Playlist = ({ playlist, onRemove }) => {
    return (
        <div className="playlist">
            <h2>🎶 My Playlist</h2>
            
            {playlist.length > 0 ? (
                <ul>
                    {playlist.map((song) => (
                        <li key={song.id} className="playlist-item">
                            <div className="song-info">
                                <span className="song-title">{song.title}</span>
                                <span className="song-artist"> - {song.artist}</span>
                            </div>
                            <button 
                                className="remove-btn" 
                                onClick={() => onRemove(song.id)}
                                aria-label={`Remove ${song.title}`}
                            >
                                <FaTrash className="remove-icon" />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="empty-playlist">No songs in the playlist.</p>
            )}
        </div>
    );
};

// Define Prop Types
Playlist.propTypes = {
    playlist: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired
        })
    ).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Playlist;
