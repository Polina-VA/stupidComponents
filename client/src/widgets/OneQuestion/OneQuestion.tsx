import React, { useState } from 'react'
import { Question } from '@/entities/question';
import { Button, Flex, Image, Input, Space } from 'antd';


type OneQuestionProps = {
    currQuestion: Question;
}

export const OneQuestion: React.FC<OneQuestionProps> = ({currQuestion}) => {

    const [answer, setAnswer] = useState('')
    const [disableState, setDisableState] = useState(false)
    const [feedBack, setFeedBack] = useState('')
    const onHandleCheck = (event: React.FormEvent) => {
        event.preventDefault();
        if (answer.trim().toLowerCase() === currQuestion.answer.trim().toLowerCase()) {
            setFeedBack("Молодееец!! Ну ты гений")
        } else {
            setFeedBack(`Ну вооот! я переживаю за твои знания. правильный ответ: ${currQuestion.answer}`)
        }
        setDisableState(true)
    }



  return (<><Flex vertical justify="center" align="center">
    <p style={{margin: '2% 0 3% 0' }}>{currQuestion?.question}</p>
    <Image
      src={currQuestion?.image}
      alt="картинка вопросика"
      width={"80%"}
      height={"80%"}
    />
      <Flex vertical>
        <label style={{margin: '2% 0 3% 0' }}>Ваш ответ</label>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button type="primary" onClick={onHandleCheck} disabled={disableState}>Проверить</Button>
        </Space.Compact>
      </Flex>
      {disableState && <span>{feedBack}</span>}
  </Flex></>)
}
