import React, { useState } from "react";
import { Question } from "../../model";
import { Button } from "antd";
import ModalWindow from "@/shared/ui/ModalWindow/ModalWindow";

type QuestionItemProps = {
  question: Question;
};

export const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>{question.point}</Button>
      {isModalOpen && (
        <ModalWindow setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
          <p>{question.question}</p>
          <img src={question.image} alt="картинка вопросика" width={"80%"} height={'80%'}/>
          <input type="text" />
        </ModalWindow>
      )}
    </>
  );
};

export default QuestionItem;
