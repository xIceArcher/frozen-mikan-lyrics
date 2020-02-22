import React from "react";
import { Col } from "antd";
import { DEFAULT_GRID_COLUMN_NUM } from "../constants";

const LyricsPanel = ({ checkedList, songLyrics, style }) => (
  <>
    {checkedList.map(checkedField => (
      <Col
        span={DEFAULT_GRID_COLUMN_NUM / checkedList.length}
        style={style}
        key={`lyrics-panel-${checkedField}`}
      >
        {songLyrics[checkedField] &&
          songLyrics[checkedField]
            .split(/ *\r?\n/)
            .map((line, idx) => (
              <div key={`lyrics-panel-${checkedField}-line-${idx}`}>
                {line || <br />}
              </div>
            ))}
      </Col>
    ))}
  </>
);

export default LyricsPanel;
