import React, { SetStateAction, useState } from "react";
import { Question } from "../../model";

import { Button, Flex, Input, Space } from "antd";
import ModalWindow from "@/shared/ui/ModalWindow/ModalWindow";
import Column from "antd/es/table/Column";

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
      <Button type="primary" onClick={onClick}>
        {question.point}
      </Button>

    </>
  );
};

export default QuestionItem;
