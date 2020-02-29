import React, { useState, useEffect } from "react";
import { Menu, Icon, Input, Tooltip, Select } from "antd";
import { Link } from "@reach/router";

import { getAllSongs, getAllSetlists } from "../api";

const { Search } = Input;

const Sidebar = ({ onSelect, collapsed }) => {
  const DEFAULT_SETLIST = "Show all";

  const [masterSongs, setMasterSongs] = useState([]);
  const [masterSetlists, setMasterSetlists] = useState([]);

  const [filterWord, setFilterWord] = useState("");

  const [visibleSongs, setVisibleSongs] = useState([]);

  const songFilter = song =>
    song.title.romaji.toLowerCase().includes(filterWord.toLowerCase());

  const onSetlistChange = newSetlist => {
    if (newSetlist === DEFAULT_SETLIST) {
      setVisibleSongs(masterSongs);
      return;
    }

    const newVisibleSongs = [];
    masterSetlists[newSetlist].forEach(songName => {
      const songData = masterSongs.find(song => song.str_id === songName);
      if (songData) {
        newVisibleSongs.push(songData);
      }
    });

    setVisibleSongs(newVisibleSongs);
  };

  useEffect(() => {
    (async function() {
      const songList = await getAllSongs();

      setMasterSongs(songList);
      setVisibleSongs(songList);
      setMasterSetlists(await getAllSetlists());
    })();
  }, []);

  return (
    <>
      <Select
        style={{ width: "100%" }}
        defaultValue={DEFAULT_SETLIST}
        onChange={onSetlistChange}
      >
        {[DEFAULT_SETLIST]
          .concat(Object.keys(masterSetlists))
          .map((setlist, idx) => (
            <Select.Option value={setlist} key={`setlist-${idx}`}>
              {setlist}
            </Select.Option>
          ))}
      </Select>
      <Search
        placeholder="Search..."
        onChange={e => {
          setFilterWord(e.target.value);
        }}
      />
      <Menu theme="dark" onSelect={onSelect}>
        {visibleSongs
          .filter(songFilter)
          .map(({ str_id, title: { romaji } }) => (
            <Menu.Item key={str_id}>
              {collapsed ? (
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
              ) : (
                <Tooltip title={romaji} placement="right">
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
                </Tooltip>
              )}
            </Menu.Item>
          ))}
      </Menu>
    </>
  );
};

export default Sidebar;
