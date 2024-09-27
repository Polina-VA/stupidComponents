import { Layout, Menu } from "antd";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link для навигации

const { Header } = Layout;

const items1 = [
  { key: "/", label: "Главная" },
  { key: "/game", label: "Игра" },
  { key: "/signin", label: "Вход" },
  { key: "/signup", label: "Регистрация" },
];

export const NavBar: React.FC = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        style={{ flex: 1, minWidth: 0 }}
      >
        {items1.map(item => (
          <Menu.Item key={item.key}>
            <Link to={item.key}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default NavBar;
