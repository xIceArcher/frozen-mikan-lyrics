import React, { useState, useEffect } from "react";
import { Menu, Icon, Input } from "antd";
import { Link } from "@reach/router";

import { getAllSongs } from "../api";

const { Search } = Input;

const Sidebar = ({ onSelect }) => {
  const [masterSongList, setMasterSongList] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  useEffect(() => {
    (async function() {
      setMasterSongList(await getAllSongs());
    })();
  }, []);

  return (
    <Menu theme="dark" onSelect={onSelect}>
      <Search
        placeholder="Search..."
        onChange={e => setFilterWord(e.target.value)}
      />
      {masterSongList
        .filter(song =>
          song.title.romaji.toLowerCase().includes(filterWord.toLowerCase())
        )
        .map(({ str_id, title: { romaji } }) => (
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
