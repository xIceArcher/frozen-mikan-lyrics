import React, { useState, useEffect } from "react";
import { Menu, Icon, Input, Tooltip, Select } from "antd";
import { Link } from "@reach/router";

import { getAllSongs, getAllSetlists } from "../api";

const { Search } = Input;

const Sidebar = ({ onSelect }) => {
  const DEFAULT_SETLIST_FILTER_WORD = "Show all";

  const [masterSongList, setMasterSongList] = useState([]);
  const [masterSetlist, setMasterSetlist] = useState([]);

  const [filterWord, setFilterWord] = useState("");
  const [filterSetlistWord, setFilterSetlistWord] = useState(
    DEFAULT_SETLIST_FILTER_WORD
  );

  const songFilter = song => {
    const isSearched = song.title.romaji
      .toLowerCase()
      .includes(filterWord.toLowerCase());

    const isInSetlist =
      filterSetlistWord === DEFAULT_SETLIST_FILTER_WORD ||
      masterSetlist[filterSetlistWord].includes(song.str_id);

    return isSearched && isInSetlist;
  };

  useEffect(() => {
    (async function() {
      setMasterSongList(await getAllSongs());
      setMasterSetlist(await getAllSetlists());
    })();
  }, []);

  return (
    <>
      <Select
        style={{ width: "100%" }}
        defaultValue={DEFAULT_SETLIST_FILTER_WORD}
        onChange={value => setFilterSetlistWord(value)}
      >
        {[DEFAULT_SETLIST_FILTER_WORD]
          .concat(Object.keys(masterSetlist).sort())
          .map((setlist, idx) => (
            <Select.Option value={setlist} key={`setlist-${idx}`}>
              {setlist}
            </Select.Option>
          ))}
      </Select>
      <Search
        placeholder="Search..."
        onChange={e => setFilterWord(e.target.value)}
      />
      <Menu theme="dark" onSelect={onSelect}>
        {masterSongList
          .filter(songFilter)
          .map(({ str_id, title: { romaji } }) => (
            <Menu.Item key={str_id}>
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
            </Menu.Item>
          ))}
      </Menu>
    </>
  );
};

export default Sidebar;
