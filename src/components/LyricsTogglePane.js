import React from "react";
import { Checkbox } from "antd";
import { LYRICS_FIELDS_DISPLAY_NAMES } from "../constants";

const LyricsTogglePane = ({ checkedList, onChange }) => (
  <Checkbox.Group
    options={LYRICS_FIELDS_DISPLAY_NAMES}
    value={checkedList}
    onChange={onChange}
  />
);

export default LyricsTogglePane;
