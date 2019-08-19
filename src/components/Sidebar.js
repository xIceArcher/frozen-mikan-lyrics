import React from "react";
import { Menu, Icon } from "antd";

import songList from "../songList";
import SubMenu from "antd/lib/menu/SubMenu";

const Sidebar = ({ onSelect, collapsed }) => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      onSelect={onSelect}
      inlineCollapsed={collapsed}
    >
      {Object.entries(songList).map(([artist, artistSongList]) => (
        <SubMenu
          key={artist}
          title={
            <span>
              <Icon type="user" />
              {collapsed || <span>{artist}</span>}
            </span>
          }
        >
          {Object.keys(artistSongList).map(song => (
            <Menu.Item key={song}>
              <Icon type="audio" />
              {collapsed || <span>{song}</span>}
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default Sidebar;
