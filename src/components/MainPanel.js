import React, { useState, useEffect } from "react";
import { Row } from "antd";

import { DEFAULT_LYRICS_FIELDS } from "../constants";
import SongMetadata from "./SongMetadata";

import { getSong } from "../api";
import LyricsTogglePane from "./LyricsTogglePane";
import LyricsPanel from "./LyricsPanel";

const MainPanel = ({ songName, style }) => {
  const [checkedList, setCheckedList] = useState(DEFAULT_LYRICS_FIELDS);
  const [songData, setSongData] = useState({});

  useEffect(() => {
    (async function() {
      const songData = await getSong(songName);
      setSongData(songData);
    })();
  }, [songName]);

  return (
    Object.entries(songData).length && (
      <>
        <Row style={style}>
          <SongMetadata songData={songData} />
        </Row>
        <Row style={style}>
          <LyricsTogglePane
            checkedList={checkedList}
            onChange={list => setCheckedList(list)}
          />
        </Row>
        <br />
        <Row>
          <LyricsPanel
            checkedList={checkedList}
            songLyrics={songData.lyrics}
            style={style}
          ></LyricsPanel>
        </Row>
        <br />
      </>
    )
  );
};

export default MainPanel;
