import React, {Component} from 'react';
import {QuizLists} from "./style";
import {NavLink} from "react-router-dom";

class QuizList extends Component {

    renderQuizes = () => [1, 2, 3].map((v, i) => {
        return (
            <li key={i}>
                <NavLink to={`/quiz/${v}`}>Тест {v}</NavLink>
            </li>
        )
    })

    render() {
        return (
            <QuizLists>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </QuizLists>
        );
    }
}

export default QuizList;