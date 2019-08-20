import React from "react";

import songList from "../songList";
import { toReadable } from "../utils";
import { SONG_METADATA_PROPERTIES } from "../constants";

const SongMetadata = ({ songName }) => {
  const songListWithoutArtist = {};

  for (const song of Object.values(songList)) {
    for (const [key, value] of Object.entries(song)) {
      songListWithoutArtist[key] = value;
    }
  }

  return (
    <div style={{ margin: "10px" }}>
      <h1 className="romajiTitle">{toReadable(songName)}</h1>
      {Object.entries(songListWithoutArtist[toReadable(songName)]).map(
        ([property, value], index) => (
          <div key={index} className={property}>{`${
            SONG_METADATA_PROPERTIES[property]
          }${value}`}</div>
        )
      )}
    </div>
  );
};

export default SongMetadata;
