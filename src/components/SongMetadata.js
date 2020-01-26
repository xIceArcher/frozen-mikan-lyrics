import React from "react";

import {
  SONG_METADATA_DISPLAY_NAMES,
  SONG_METADATA_FIELDS
} from "../constants";

const SongMetadata = ({ songData }) => {
  return Object.entries(songData).length ? (
    <>
      <div style={{ margin: "10px" }}>
        <h1 className="romajiTitle">{songData.title.romaji}</h1>
        {Object.entries(songData.title).map(([property, value], index) =>
          property === "romaji" || !value ? null : (
            <div key={`title-${index}`} className={property}>
              {value}
            </div>
          )
        )}
        {SONG_METADATA_FIELDS.map((fieldName, index) => (
          <div
            key={index}
            className={fieldName}
          >{`${SONG_METADATA_DISPLAY_NAMES[fieldName]}${songData[fieldName]}`}</div>
        ))}
      </div>
    </>
  ) : null;
};

export default SongMetadata;
