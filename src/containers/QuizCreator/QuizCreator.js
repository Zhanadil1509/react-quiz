import React, {Component, Fragment} from 'react';
import {QuizCreators} from "./style";
import Input from "../../components/UI/Input/Input";
import {createControl} from "../../form/formFramework";

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
        formControls: createFormControls()
    }

    submitHandler = (e) => {
        e.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (v, controlName) => {
        
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
        console.log(this.state.formControls.option1)
        return (
            <QuizCreators>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitHandler}>
                        
                        {this.renderInputs()}

                        <select name="" id=""></select>

                        <button
                            type={'primary'}
                            onClick={this.addQuestionHandler}
                        >Добавить вопрос</button>
                        <button
                            type={'success'}
                            onClick={this.createQuizHandler}
                        >Создать тест</button>
                    </form>
                </div>
            </QuizCreators>
        );
    }
}

export default QuizCreator;