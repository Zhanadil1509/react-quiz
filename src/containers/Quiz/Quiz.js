import React, {Component} from 'react'
import {Quizs, QuizsWrapper} from "./style";
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state = {
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Красный', id: 3},
          {text: 'Зеленый', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log(answerId)
  }

  render() {
    return (
      <Quizs>
        <QuizsWrapper>
          <h1>Answers all the questions</h1>
          <ActiveQuiz
              answers={this.state.quiz[0].answers}
              question={this.state.quiz[0].question}
              onAnswerClick={this.onAnswerClickHandler}
          />
        </QuizsWrapper>
      </Quizs>
    )
  }
}

export default Quiz