import React, { useState } from "react";
import Layout from "antd/lib/layout";
import "./App.css";

import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";
import { NO_SONG } from "../constants";

const App = () => {
  const { Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const [currSong, setCurrSong] = useState(NO_SONG);

  const onSelect = ({ key }) => {
    setCurrSong(key);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        onSelect={onSelect}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
        collapsible
        onCollapse={onCollapse}
      >
        <Sidebar onSelect={onSelect} collapsed={collapsed} />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "0 16px" }}>
          <MainPanel songName={currSong} style={{ textAlign: "center" }} />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
