import React, { useEffect } from "react";
// import styles from './GameThemes.module.css'
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { getAllThemesandQuestions } from "@/entities/theme";
import { GameQuestions } from "../GameQuestions";

type GameThemesProps = {};

export const GameThemes: React.FC<GameThemesProps> = () => {
  const { themeList } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllThemesandQuestions());
  }, [dispatch]);

  console.log(themeList);
  return (
    <div>
      {themeList?.map((theme) => (
        <div key={theme.id}>
          <div>{theme.title}</div> 
          <GameQuestions questions={theme.Questions} />
        </div>
      ))}
    </div>
  );
};
