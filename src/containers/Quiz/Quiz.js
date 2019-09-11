import React, {Component} from 'react'
import {Quizs, QuizsWrapper} from "./style";
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import ResultsQuiz from '../../components/ResultsQuiz/ResultsQuiz'
import axios from 'axios'
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends Component {

  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [],
    loading: true
  }

  onAnswerClickHandler = answerId => {
    if(this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key] === 'success') {
        return
      }
    }
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if(question.rightAnswerId === answerId) {
      if(!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({answerState: {[answerId]: 'success'}, results})

      const  timeOut = window.setTimeout(() => {
        if(this.isQuizFinished()) {
          this.setState({ isFinished: true })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeOut)
      }, 1000)
    } else {
      results[answerId] = 'error'
      this.setState({answerState: {[answerId]: 'error'}, results})
    }
  }

  isQuizFinished = () => this.state.activeQuestion + 1 === this.state.quiz.length

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  async componentDidMount() {
      try {
          const response = await axios.get(`https://react-quiz-81546.firebaseio.com/quizes/${this.props.match.params.id}.json`)
          const quiz = response.data

          this.setState({quiz, loading: false})
      } catch (e) {
          console.log(e)
      }
  }

  render() {
    const {quiz, activeQuestion, answerState, isFinished, results} = this.state

    return (
      <Quizs>
        <QuizsWrapper>
          {
            this.state.loading
              ? <Loader />
              : isFinished
                ? <ResultsQuiz
                    results={results}
                    quiz={quiz}
                    onRetry={this.retryHandler}
                />
                : <> <h1>Answers all the questions</h1>
                  <ActiveQuiz
                      answers={quiz[this.state.activeQuestion].answers}
                      question={quiz[this.state.activeQuestion].question}
                      onAnswerClick={this.onAnswerClickHandler}
                      quizLength={quiz.length}
                      answerNumber={activeQuestion + 1}
                      state={answerState}
                  />
                </>
          }
        </QuizsWrapper>
      </Quizs>
    )
  }
}

export default Quiz