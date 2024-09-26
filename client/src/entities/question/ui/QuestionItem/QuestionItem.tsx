import React from 'react'
import { Question } from '../../model'
// import { Modal } from '@/'

type QuestionItemProps = {
  question: Question
}

export const QuestionItem: React.FC<QuestionItemProps> = ({question}) => {
  return (
    <>

    {/* <Modal> */}
      <p>{question.question}</p>
    {/* </Modal> */}
    </>
  )
}

export default QuestionItem