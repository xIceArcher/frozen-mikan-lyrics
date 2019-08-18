import React from "react";
import Layout from "antd/lib/layout";
import "./App.css";

import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";

const App = () => {
  const { Sider, Content } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <Sidebar />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "0 16px" }}>
          <MainPanel
            songName={"kotoba_no_mahou"}
            style={{ textAlign: "center" }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
