import { Flex, Layout, Menu } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { logout } from "@/entities/user";
import { getPointsThunk } from "@/entities/points";

const { Header } = Layout;

export const NavBar: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const {points} = useAppSelector(state => state.points)

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (user) {
      dispatch(getPointsThunk())
    }
  }, [dispatch, user])

  

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Flex justify="center" align="center">
        <div className="demo-logo">
          <img src="logo.jpg" style={{ height: "60px", marginTop: "30px", marginRight: "30px" }} alt="" />
        </div>
      </Flex>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        style={{ flex: 1, minWidth: 0 }}
      >
        <Menu.Item key="/">
          <Link to="/">Главная</Link>
        </Menu.Item>
        {user ? (
          <>
            <Menu.Item key="/game">
              <Link to="/game">Игра</Link>
            </Menu.Item>
            <div style={{marginLeft: "10px"}}>Привет, {user.name}, у тебя {points?.points} голубей</div>
            <Menu.Item key="/logout" onClick={handleLogout}>
              Выйти
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="/signin">
              <Link to="/signin">Вход</Link>
            </Menu.Item>
            <Menu.Item key="/signup">
              <Link to="/signup">Регистрация</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};
