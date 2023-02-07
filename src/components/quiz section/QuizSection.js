import React from 'react'
import "./QuizSection.css"

export default function QuizSection({ question, options, OnClick, submitted, reveal }) {

  return (
    <div className='quizSection_container'>
      <h1 className='quiz_title'>{question}</h1>
      <div className='optionsContainer'>
        {options.map((option) => {
          const value = Object.keys(option)[0]
          const chosen = submitted && Object.keys(submitted)[0] === value;
          return (<>
            <input
              disabled={reveal}
              type="radio"
              id={value}
              name={question}
              value={value} />

            <label
              onClick={() => OnClick(option)}
              className={`optionLabel ${reveal && Object.values(option)[0] && "correct"} ${reveal && chosen && !Object.values(option)[0] && "incorrect"}`}
              htmlFor={value}>
              {value}
            </label>
          </>
          )
        }
        )}
      </div>
      <hr className='bottom_border' />
    </div >
  )
}
