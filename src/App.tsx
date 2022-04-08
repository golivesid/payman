import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Layout, Menu } from "antd";
import Login from "./components/Login";
import Categories from "./components/Category";
import Records from "./components/Records";

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 250px", marginTop: 164 }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Routes>
          <Route path="/records" element={<Records />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker @Codermother 2022
      </Footer>
    </Layout>
  );
}

export default App;
