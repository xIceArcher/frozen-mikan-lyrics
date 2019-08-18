import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

import { toUnderscore } from "../utils";
import { NO_SONG } from "../constants";
import SongMetadata from "./SongMetadata";

const MainPanel = ({ songName, style }) => {
  const [enLines, setEnLines] = useState([]);
  const [kanjiLines, setKanjiLines] = useState([]);

  const enPath = `${process.env.PUBLIC_URL}/songs/english/${toUnderscore(
    songName
  )}.txt`;
  const kanjiPath = `${process.env.PUBLIC_URL}/songs/kanji/${toUnderscore(
    songName
  )}.txt`;

  useEffect(() => {
    (async function() {
      if (songName === NO_SONG) return;

      const file = await fetch(enPath);
      const fileText = await file.text();
      setEnLines(fileText.split(/\r?\n/));
    })();
  }, [songName, enPath]);

  useEffect(() => {
    (async function() {
      if (songName === NO_SONG) return;

      const file = await fetch(kanjiPath);
      const fileText = await file.text();
      setKanjiLines(fileText.split(/\r?\n/));
    })();
  }, [songName, kanjiPath]);

  return (
    <div>
      <Row style={style}>
        <SongMetadata songName={songName} />
      </Row>
      <Row>
        <Col span={12} style={style}>
          {kanjiLines.map((line, idx) => (
            <div key={idx}>{line === "" ? <br /> : line}</div>
          ))}
        </Col>
        <Col span={12} style={style}>
          {enLines.map((line, idx) => (
            <div key={idx}>{line === "" ? <br /> : line}</div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default MainPanel;
