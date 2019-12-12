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
    <>
      <div style={{ margin: "10px" }}>
        <h1 className="romajiTitle">{toReadable(songName)}</h1>
        {Object.entries(songListWithoutArtist[toReadable(songName)]).map(
          ([property, value], index) =>
            property !== "_spotifySongCode" ? (
              <div
                key={index}
                className={property}
              >{`${SONG_METADATA_PROPERTIES[property]}${value}`}</div>
            ) : (
              <>
                <br />
                <iframe
                  src={`https://open.spotify.com/embed/track/${value}`}
                  width="300"
                  height="80"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title="spotify-embed"
                ></iframe>
              </>
            )
        )}
      </div>
    </>
  );
};

export default SongMetadata;
