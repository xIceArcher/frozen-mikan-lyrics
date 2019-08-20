import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "@reach/router";

import songList from "../songList";
import SubMenu from "antd/lib/menu/SubMenu";
import { toUnderscore } from "../utils";

const Sidebar = ({ onSelect }) => {
  return (
    <Menu theme="dark" mode="inline" onSelect={onSelect}>
      {Object.entries(songList).map(([artist, artistSongList]) => (
        <SubMenu
          key={artist}
          title={
            <span>
              <Icon type="user" />
              <span>{artist}</span>
            </span>
          }
        >
          {Object.keys(artistSongList).map(song => (
            <Menu.Item key={song}>
              <Link to={`songs/${toUnderscore(song)}`}>
                <Icon type="audio" />
                <span>{song}</span>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default Sidebar;
