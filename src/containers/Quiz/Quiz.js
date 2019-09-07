import React, {Component} from 'react'
import {Quizs, QuizsWrapper} from "./style";
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Красный', id: 3},
          {text: 'Зеленый', id: 4}
        ]
      },
      {
        question: 'В каком году родился Спб?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: '1700', id: 1},
          {text: '1702', id: 2},
          {text: '1703', id: 3},
          {text: '1803', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    const question = this.state.quiz[this.state.activeQuestion]

    if(question.rightAnswerId === answerId) {

      this.setState({answerState: {[answerId]: 'success'}})

      const  timeOut = window.setTimeout(() => {
        if(this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeOut)
      }, 1000)
    } else {
      this.setState({answerState: {[answerId]: 'error'}})
    }
  }

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    const {quiz, activeQuestion, answerState} = this.state

    return (
      <Quizs>
        <QuizsWrapper>
          <h1>Answers all the questions</h1>
          <ActiveQuiz
              answers={quiz[this.state.activeQuestion].answers}
              question={quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={quiz.length}
              answerNumber={activeQuestion + 1}
              state={answerState}
          />
        </QuizsWrapper>
      </Quizs>
    )
  }
}

export default Quiz