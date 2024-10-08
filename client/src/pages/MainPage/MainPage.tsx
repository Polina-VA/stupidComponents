import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { Flex, Button } from "antd";
import React from "react";
import "./MainPage.module.css";
import { Link } from "react-router-dom";
import { createPointsThunk } from "@/entities/points";

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = ({}) => {
  const user = useAppSelector((state) => state.user.user);
  // const dispatch = useAppDispatch()
  console.log(user);
  

  // const handleCreatePoints = async () => {
  //   try {
  //      return await dispatch(createPointsThunk())
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div>
      <Flex justify="center" align="center" style={{ height: "90vh" }}>
        <div
          className="card glow-card"
        >
          {user ? (
            <>
              <h1>Добро пожаловать, {user?.name}!</h1>
              <Button type="primary" ><Link to="/game">Играть</Link></Button>
            </>
          ) : (
            <>
              <h1>Пожалуйста, войдите</h1>
              <Button type="primary"><Link to="/signin">Войти</Link></Button>
            </>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default MainPage;
