import React from 'react'
import {ActiveQuizs, Question} from './style'

const ActiveQuiz = () => {
  return (
    <ActiveQuizs>
      <Question>
        <span>
          <strong>1. </strong>
          How are you?
        </span>

        <small>4 from 12</small>
      </Question>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </ActiveQuizs>
  )
}

export default ActiveQuiz
