import React from "react";
import { Menu, Icon } from "antd";

import songList from "../songList";

const Sidebar = ({ onSelect }) => (
  <Menu theme="dark" mode="inline" onSelect={onSelect}>
    {Object.keys(songList).map(song => (
      <Menu.Item key={song}>
        <Icon type="audio" />
        <span>{song}</span>
      </Menu.Item>
    ))}
  </Menu>
);

export default Sidebar;
