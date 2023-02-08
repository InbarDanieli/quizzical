import React, { useEffect, useState } from 'react'
import QuizSection from '../quiz section/QuizSection'
import "./QuizGame.css"
import { getQuetions, randomizeOptions } from '../../service/getQuetions'

export default function QuizGame() {
  const [quizQuestionsApi, setQuizQuestionsApi] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [FullSubmission, setFullSubmission] = useState(false)
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0)
  const [resetGame, setResetGame] = useState(false)
  const [requireText, setRequireText] = useState("")


  useEffect(() => {
    setQuizQuestionsApi([])
    setFullSubmission(false)
    setCorrectAnswersCounter(0)
    setSelectedOptions([])
    getQuetions()
      .then((res) => {
        const resArr = []
        res.forEach(value => {
          resArr.push({ question: value.question, answers: randomizeOptions(value.correct_answer, value.incorrect_answers) })
        });
        setQuizQuestionsApi([...resArr])
      })
  }, [resetGame])

  function submitHandler() {
    if (selectedOptions.length === 5) {
      if (selectedOptions.every((value) => value !== undefined)) {
        setFullSubmission(true)
        let count = 0
        selectedOptions.forEach(
          (value) =>
            Object.values(value)[0] && count++
        )
        setCorrectAnswersCounter(count)
      }
    }
    else {
      setTimeout(() => {
        setRequireText("")
      }, 2000);
      setRequireText("please fill all the required fields")
    }
  }

  return (
    <div className='quizGame_container'>
      < img className='blue_blob' alt='blue blob' src='/assets/blob-blue.png' />
      <img className='yellow_blob' alt='yellow blob' src='/assets/blob-yellow.png' />
      <div className='quizSection_container'>
        {
          quizQuestionsApi.length
            ?
            quizQuestionsApi.map((value, index) =>
              <QuizSection
                key={index}
                question={value.question}
                options={value.answers}
                OnClick={(e) => {
                  if (!FullSubmission) {
                    selectedOptions[index] = e
                    setSelectedOptions([...selectedOptions])
                  }
                }}
                submitted={selectedOptions[index]}
                reveal={FullSubmission}
              />
            )
            :
            <div>loading...</div>
        }
      </div>
      {FullSubmission && <span className='displayScore'>{`You scored ${correctAnswersCounter}/${quizQuestionsApi.length} correct answers`}</span>}
      {FullSubmission ? <button onClick={() => setResetGame(!resetGame)} className='Button'>Play again</button> : <button className='Button' onClick={submitHandler}>Check answers</button>}
      <p>{requireText}</p>
    </div >
  )
}
