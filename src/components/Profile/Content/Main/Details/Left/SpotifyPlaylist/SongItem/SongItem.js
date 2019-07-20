import React from "react";

import { InfoBlockItem } from "components/UI";

const SongItem = ({ song, index }) => {
  return (
    <li className="spotify-song-item">
      <span className="song-index">{index + 1}</span>
      <InfoBlockItem item={song} imgShape="square" />
      <span className="song-duration">{song.duration}</span>
    </li>
  );
};

export default SongItem;
