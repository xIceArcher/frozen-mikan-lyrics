import React, { useState, useEffect } from "react";
import { Row, Col, Checkbox } from "antd";

import {
  DEFAULT_GRID_COLUMN_NUM,
  DEFAULT_LYRICS_FIELDS,
  LYRICS_FIELDS,
  LYRICS_FIELDS_DISPLAY_NAMES
} from "../constants";
import SongMetadata from "./SongMetadata";

import { getSong } from "../api";

const MainPanel = ({ songName, style }) => {
  const [checkedList, setCheckedList] = useState(DEFAULT_LYRICS_FIELDS);
  const [songData, setSongData] = useState({});
  const [songLyrics, setSongLyrics] = useState(
    LYRICS_FIELDS.reduce((acc, field) => {
      acc[field] = [];
      return acc;
    }, {})
  );

  useEffect(() => {
    (async function() {
      const songData = await getSong(songName);
      setSongData(songData);
      setSongLyrics(
        LYRICS_FIELDS.reduce((acc, field) => {
          acc[field] = songData.lyrics[field]
            ? songData.lyrics[field].split(/ *\r?\n/)
            : [];
          return acc;
        }, {})
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
          options={LYRICS_FIELDS_DISPLAY_NAMES}
          value={checkedList}
          onChange={list => {
            setCheckedList(list);
          }}
        />
      </Row>
      <br />
      <Row>
        {checkedList.map(checkedField => (
          <Col
            span={DEFAULT_GRID_COLUMN_NUM / checkedList.length}
            style={style}
            key={`lyrics-panel-${checkedField}`}
          >
            {songLyrics[checkedField].map((line, idx) => (
              <div key={`lyrics-panel-${checkedField}-line-${idx}`}>
                {line || <br />}
              </div>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainPanel;
