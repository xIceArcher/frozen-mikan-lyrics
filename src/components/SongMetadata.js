import React from "react";

import songList from "../songList";
import { NO_SONG, SONG_METADATA_PROPERTIES } from "../constants";

const SongMetadata = ({ songName }) => {
  if (songName === NO_SONG) return null;

  return (
    <div style={{ margin: "10px" }}>
      <h1 class="romajiTitle">{songName === NO_SONG ? "" : songName}</h1>
      {Object.entries(songList[songName]).map(([property, value]) => (
        <div class={property}>{`${
          SONG_METADATA_PROPERTIES[property]
        }${value}`}</div>
      ))}
    </div>
  );
};

export default SongMetadata;
