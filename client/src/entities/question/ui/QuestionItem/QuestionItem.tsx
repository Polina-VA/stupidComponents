import React, { SetStateAction, useState } from "react";
import { Question } from "../../model";

import { Button, Flex, Input, Space } from "antd";

import "./QuestionItem.module.css";


type QuestionItemProps = {
  question: Question;
  onClick: () => void;
};

export const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  onClick,
}) => {
  return (
    <>
      <Button className="question-item" type="primary" onClick={onClick} style={{ width: "200px", height: "100px" }}>
        {question.point}
      </Button>

    </>
  );
};

export default QuestionItem;
