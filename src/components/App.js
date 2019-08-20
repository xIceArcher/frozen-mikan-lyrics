import React, { useState } from "react";
import { Layout } from "antd";
import { Router } from "@reach/router";
import "./App.css";

import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";

const App = () => {
  const { Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible onCollapse={onCollapse}>
        <Sidebar collapsed={collapsed} />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Router>
            <MainPanel path="songs/:songName" style={{ textAlign: "center" }} />
          </Router>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
