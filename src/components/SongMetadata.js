import React from "react";

import { SONG_METADATA_PROPERTIES, METADATA_FIELDS } from "../constants";

const SongMetadata = ({ songData }) => {
  return Object.entries(songData).length !== 0 ? (
    <>
      <div style={{ margin: "10px" }}>
        <h1 className="romajiTitle">{songData.title.romaji}</h1>
        {Object.entries(songData.title).map(([property, value], index) =>
          property === "romaji" ? null : (
            <div key={`title-${index}`} className={property}>
              {value}
            </div>
          )
        )}
        <br />
        {METADATA_FIELDS.map((fieldName, index) => (
          <div
            key={index}
            className={fieldName}
          >{`${SONG_METADATA_PROPERTIES[fieldName]}${songData[fieldName]}`}</div>
        ))}
      </div>
    </>
  ) : null;
};

export default SongMetadata;
