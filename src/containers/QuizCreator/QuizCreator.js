import React, {Component, Fragment} from 'react';
import {QuizCreators} from "./style";
import Input from "../../components/UI/Input/Input";
import {createControl, validate, validateForm} from "../../form/formFramework";
import Select from "../../components/UI/Select/Select";
import axios from 'axios'

const createOptionControl = (l) => createControl({
    label: `Вариант ${l}`,
    errorMessage: 'Значение не может быть пустым'
}, {required: true})

const createFormControls = () => {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {

    state = {
        quiz: [],
        rightAnswerId: 1,
        isFormValid: false,
        formControls: createFormControls()
    }

    submitHandler = (e) => {
        e.preventDefault()
    }

    addQuestionHandler = (e) => {
        e.preventDefault()
        const {quiz, formControls, rightAnswerId} = this.state
        const quizConcat = quiz.concat()
        const index = quizConcat.length + 1

        const questionItem = {
            question: formControls.question.value,
            id: index,
            rightAnswerId,
            answers: [
                {text: formControls.option1.value, id: formControls.option1.id},
                {text: formControls.option2.value, id: formControls.option2.id},
                {text: formControls.option3.value, id: formControls.option3.id},
                {text: formControls.option4.value, id: formControls.option4.id},
            ]
        }

        quiz.push(questionItem)

        this.setState({
            quiz,
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })
    }

    createQuizHandler = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://react-quiz-81546.firebaseio.com/quizes.json', this.state.quiz)

            this.setState({
                quiz: [],
                rightAnswerId: 1,
                isFormValid: false,
                formControls: createFormControls()
            })
        } catch (e) {
            console.log(e)
        }
    }

    changeHandler = (v, controlName) => {
        const formControls = { ...this.state.formControls}
        const val = { ...formControls[controlName] }

        val.touched = true
        val.value = v
        val.valid = validate(val.value, val.validation)

        formControls[controlName] = val

        this.setState({formControls, isFormValid: validateForm(formControls)})
    }

    selectChangeHandler = (e) => {
        this.setState({rightAnswerId: + e.target.value})
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((v, i) => {
            const val = this.state.formControls[v]

            return (
                <Fragment key={i}>
                    <Input
                        label={val.label}
                        value={val.value}
                        valid={val.valid}
                        shouldValidate={!!val.validation}
                        touched={val.touched}
                        errorMessage={val.errorMessage}
                        onChange={e => this.changeHandler(e.target.value, v)}
                    />
                    { v === 'question' && <hr />}
                </Fragment>
            )
        })
    }

    render() {
        const select = <Select
            label={'Выберите праильный ответ'}
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4},
            ]}
        />
        return (
            <QuizCreators>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitHandler}>
                        
                        {this.renderInputs()}

                        {select}

                        <button
                            type={'primary'}
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </button>
                        <button
                            type={'success'}
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}
                        >
                            Создать тест
                        </button>
                    </form>
                </div>
            </QuizCreators>
        );
    }
}

export default QuizCreator;