import React, {Component} from 'react';
import {QuizLists} from "./style";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    renderQuizes = () => this.state.quizes.map( v => {
        return (
            <li key={v.id}>
                <NavLink to={`/quiz/${v.id}`}>{v.name}</NavLink>
            </li>
        )
    })

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-81546.firebaseio.com/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((v, i) => {
                quizes.push({
                    id: v,
                    name: `Test #${i + 1}`
                })
            })
            this.setState({quizes, loading: false})
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <QuizLists>
                <div>
                    <h1>Список тестов</h1>
                    {
                        this.state.loading
                            ? <Loader />
                            : <ul>
                                {this.renderQuizes()}
                            </ul>
                    }
                </div>
            </QuizLists>
        );
    }
}

export default QuizList;