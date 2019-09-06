import React, {Component} from 'react'
import {Quizs, QuizsWrapper} from "./style";
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state = {
    quiz: [
      {
        answers: [
          {text: 'Вопрос 1'},
          {text: 'Вопрос 2'},
          {text: 'Вопрос 3'},
          {text: 'Вопрос 4'}
        ]
      }
    ]
  }

  render() {
    return (
      <Quizs>
        <QuizsWrapper>
          <h1>Answers all the questions</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </QuizsWrapper>
      </Quizs>
    )
  }
}

export default Quiz