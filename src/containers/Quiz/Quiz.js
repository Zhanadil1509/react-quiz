import React, {Component} from 'react'
import {Quizs, QuizsWrapper} from "./style";
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state = {
    quiz: []
  }

  render() {
    return (
      <Quizs>
        <QuizsWrapper>
          <h1>Quiz</h1>
          <ActiveQuiz />
        </QuizsWrapper>
      </Quizs>
    )
  }
}

export default Quiz