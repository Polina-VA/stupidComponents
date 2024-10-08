import React, { useEffect, useState } from "react";
// import styles from './GameThemes.module.css'
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { getAllThemesandQuestions } from "@/entities/theme";
import QuestionItem from "@/entities/question/ui/QuestionItem/QuestionItem";
import ModalWindow from "@/shared/ui/ModalWindow/ModalWindow";
import { Question } from "@/entities/question";

import { OneQuestion } from "../OneQuestion";


export const GameThemes: React.FC = () => {
  const { themeList } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currQuestion, setCurrQuestion] = useState<Question | undefined>(
    undefined
  );

  useEffect(() => {
    dispatch(getAllThemesandQuestions());
  }, [dispatch]);

  const showModal = ({
    themeId,
    questId,
  }: {
    themeId: number;
    questId: number;
  }): void => {
    setIsModalOpen(true);

    const existingTheme = themeList?.find((theme) => theme.id === themeId);
    setCurrQuestion(
      existingTheme?.Questions?.find((ques) => ques.id === questId)
    );
  };

  console.log(themeList);
  return (
    <div className="game-themes">
      <div className="theme-row">
        <div className="theme-title">Темы</div>
        <div className="questions">Вопросы</div>
      </div>

      {themeList?.map((theme) => (

        <div className="theme-row" key={theme.id}>
          <div className="theme-title">{theme.title}</div>
          {theme.Questions?.map((question) => (
            <div key={question.id}>
              <QuestionItem
                // key={question.id}
                question={question}
                onClick={() => showModal({themeId: theme.id, questId: question.id})}
              />
              {isModalOpen && (
                <ModalWindow
                  setIsModalOpen={setIsModalOpen}
                  isModalOpen={isModalOpen}
                >
                  <OneQuestion  currQuestion={currQuestion} />
                </ModalWindow>
              )}
            </div>
          ))}

        </div>
      ))}

    </div>
  );
};
