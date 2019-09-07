import React from 'react'
import {ActiveQuizs, Question} from './style'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (p) => {
  return (
    <ActiveQuizs>
      <Question>
        <span>
          <strong>1. </strong>
          {p.question}
        </span>

        <small>{p.answerNumber} from {p.quizLength}</small>
      </Question>

      <AnswersList
          state={p.state}
          answers={p.answers}
          onAnswerClick={p.onAnswerClick}
      />
    </ActiveQuizs>
  )
}

export default ActiveQuiz
