import React, {Component} from 'react'
import {Quizs, QuizsWrapper} from "./style";
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import ResultsQuiz from '../../components/ResultsQuiz/ResultsQuiz'
import axios from 'axios'
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../store/actions/quiz";

class Quiz extends Component {

  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
  }

  render() {
    const {quiz, activeQuestion, answerState, isFinished, results} = this.props

    return (
      <Quizs>
        <QuizsWrapper>
          {
            this.props.loading || !this.props.quiz
              ? <Loader />
              : isFinished
                ? <ResultsQuiz
                    results={results}
                    quiz={quiz}
                    onRetry={this.props.retryQuiz}
                />
                : <> <h1>Answers all the questions</h1>
                  <ActiveQuiz
                      answers={quiz[this.props.activeQuestion].answers}
                      question={quiz[this.props.activeQuestion].question}
                      onAnswerClick={this.props.quizAnswerClick}
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

const mapStateToProp = (state) => {
    return {
      results: state.quiz.results,
      isFinished: state.quiz.isFinished,
      activeQuestion: state.quiz.activeQuestion,
      answerState: state.quiz.answerState,
      quiz: state.quiz.quiz,
      loading: state.quiz.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      fetchQuizById: id => dispatch(fetchQuizById(id)),
      quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
      retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)( Quiz)