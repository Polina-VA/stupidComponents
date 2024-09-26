import { QuestionList } from '@/entities/question'
import QuestionItem from '@/entities/question/ui/QuestionItem/QuestionItem'
import React from 'react'
// import styles from './GameQuestions.module.css'

type GameQuestionsProps = {
  questions: QuestionList
}

export const GameQuestions: React.FC<GameQuestionsProps> = ({questions}) => {
  console.log(questions);
  
  return (<div>
    {questions?.map(question => <QuestionItem key={question.id} question={question}/>)}
  </div>)
}

