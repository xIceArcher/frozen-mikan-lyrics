import React, { useState, useEffect } from "react";
import { Row, Col, Checkbox } from "antd";

import SongMetadata from "./SongMetadata";

import { getSong } from "../api";

const MainPanel = ({ songName, style }) => {
  const [songData, setSongData] = useState({});
  const [enLines, setEnLines] = useState([]);
  const [kanjiLines, setKanjiLines] = useState([]);

  const defaultDisplayOptions = ["Kanji", "English"];
  const [checkedList, setCheckedList] = useState(defaultDisplayOptions);

  const onChange = list => {
    setCheckedList(list);
  };

  useEffect(() => {
    (async function() {
      const songData = await getSong(songName);
      setSongData(songData);
      setEnLines(songData.lyrics.en ? songData.lyrics.en.split(/ *\r?\n/) : []);
      setKanjiLines(
        songData.lyrics.kanji ? songData.lyrics.kanji.split(/ *\r?\n/) : []
      );
    })();
  }, [songName]);

  return (
    <div>
      <Row style={style}>
        <SongMetadata songData={songData} />
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
