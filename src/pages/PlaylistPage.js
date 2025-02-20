import React, { useState } from "react";
import Playlist from "../components/Playlist";

const PlaylistPage = () => {
    const [playlist, setPlaylist] = useState([]);

    const removeSong = (index) => {
        setPlaylist(playlist.filter((_, i) => i !== index));
    };

    return <Playlist playlist={playlist} onRemove={removeSong} />;
};

export default PlaylistPage;
