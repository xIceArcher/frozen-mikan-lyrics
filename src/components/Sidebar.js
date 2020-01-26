import React, { useState, useEffect } from "react";
import { Menu, Icon } from "antd";
import { Link } from "@reach/router";

import { getAllSongs } from "../api";

const Sidebar = ({ onSelect }) => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    (async function() {
      setSongList(await getAllSongs());
    })();
  }, []);

  return (
    <Menu theme="dark" onSelect={onSelect}>
      {songList.map(({ str_id, title: { romaji } }) => (
        <Menu.Item key={str_id}>
          <Link
            to={`songs/${str_id}`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <Icon type="audio" />
            <span>{romaji}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Sidebar;
