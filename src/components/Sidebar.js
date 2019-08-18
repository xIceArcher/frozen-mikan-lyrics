import React from "react";
import { Menu, Icon } from "antd";

import songList from "../songList";

const Sidebar = () => (
  <Menu theme="dark" mode="inline">
    {songList.map(song => (
      <Menu.Item key={song.romajiName}>
        <Icon type="audio" />
        <span>{song.romajiName}</span>
      </Menu.Item>
    ))}
  </Menu>
);

export default Sidebar;
