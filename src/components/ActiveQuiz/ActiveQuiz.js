import React from 'react'
import {ActiveQuizs, Question} from './style'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (p) => {
  return (
    <ActiveQuizs>
      <Question>
        <span>
          <strong>1. </strong>
          How are you?
        </span>

        <small>4 from 12</small>
      </Question>

      <AnswersList answers={p.answers} />
    </ActiveQuizs>
  )
}

export default ActiveQuiz
