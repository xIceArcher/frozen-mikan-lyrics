import React, { useState, useEffect } from "react";
import { Row, Col, Checkbox } from "antd";

import SongMetadata from "./SongMetadata";

const MainPanel = ({ songName, style }) => {
  const [enLines, setEnLines] = useState([]);
  const [kanjiLines, setKanjiLines] = useState([]);

  const enPath = `${process.env.PUBLIC_URL}/songs/english/${songName}.txt`;
  const kanjiPath = `${process.env.PUBLIC_URL}/songs/kanji/${songName}.txt`;

  const defaultDisplayOptions = ["Kanji", "English"];
  const [checkedList, setCheckedList] = useState(defaultDisplayOptions);

  const onChange = list => {
    setCheckedList(list);
  };

  useEffect(() => {
    (async function() {
      const file = await fetch(enPath);
      const fileText = await file.text();
      setEnLines(fileText.split(/ *\r?\n/));
    })();
  }, [songName, enPath]);

  useEffect(() => {
    (async function() {
      const file = await fetch(kanjiPath);
      const fileText = await file.text();
      setKanjiLines(fileText.split(/ *\r?\n/));
    })();
  }, [songName, kanjiPath]);

  return (
    <div>
      <Row style={style}>
        <SongMetadata songName={songName} />
      </Row>
      <Row style={style}>
        <Checkbox.Group
          options={defaultDisplayOptions}
          value={checkedList}
          onChange={onChange}
        />
      </Row>
      <Row>
        {checkedList.includes("Kanji") && (
          <Col span={24 / checkedList.length} style={style}>
            {kanjiLines.map((line, idx) => (
              <div key={idx}>{line === "" ? <br /> : line}</div>
            ))}
          </Col>
        )}
        {checkedList.includes("English") && (
          <Col span={24 / checkedList.length} style={style}>
            {enLines.map((line, idx) => (
              <div key={idx}>{line === "" ? <br /> : line}</div>
            ))}
          </Col>
        )}
      </Row>
    </div>
  );
};

export default MainPanel;
