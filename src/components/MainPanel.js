import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

import { toReadable } from "../utils";

const MainPanel = ({ songName, style }) => {
  const [enLines, setEnLines] = useState([]);
  const [kanjiLines, setKanjiLines] = useState([]);

  const enPath = `${process.env.PUBLIC_URL}/songs/english/${songName}.txt`;
  const kanjiPath = `${process.env.PUBLIC_URL}/songs/kanji/${songName}.txt`;

  useEffect(() => {
    (async function() {
      const file = await fetch(enPath);
      const fileText = await file.text();
      setEnLines(fileText.split(/\r?\n/));
    })();
  }, [enPath]);

  useEffect(() => {
    (async function() {
      const file = await fetch(kanjiPath);
      const fileText = await file.text();
      setKanjiLines(fileText.split(/\r?\n/));
    })();
  }, [kanjiPath]);

  return (
    <div>
      <Row style={style}>
        <h1>{toReadable(songName)}</h1>
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
