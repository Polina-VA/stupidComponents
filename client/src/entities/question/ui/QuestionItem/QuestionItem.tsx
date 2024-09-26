import React from 'react'
import { Question } from '../../model'
import { Modal } from 'antd'
// import { Modal } from '@/'

type QuestionItemProps = {
  question: Question
}

export const QuestionItem: React.FC<QuestionItemProps> = ({question}) => {
  return (
    <>
      <Modal>
          <h1>{question.question}</h1>
          <input type="text" />
      </Modal>
    </>
  )
}

export default QuestionItem