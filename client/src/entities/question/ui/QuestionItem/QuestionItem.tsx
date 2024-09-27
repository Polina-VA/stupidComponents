import React, { useState } from "react";
import { Question } from "../../model";
import { Button, Flex, Input, Space } from "antd";
import ModalWindow from "@/shared/ui/ModalWindow/ModalWindow";
import Column from "antd/es/table/Column";

type QuestionItemProps = {
  question: Question;
};

export const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {question.point}
      </Button>
      {isModalOpen && (
        <ModalWindow setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
          <p>{question.question}</p>
          <img
            src={question.image}
            alt="картинка вопросика"
            width={"80%"}
            height={"80%"}
          />
          <form action="">
            <Flex vertical>
              <label>Ваш ответ</label>
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <Button type="primary">Проверить</Button>
              </Space.Compact>
            </Flex>
          </form>
        </ModalWindow>
      )}
    </>
  );
};

export default QuestionItem;
