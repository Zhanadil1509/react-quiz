import React, {Component} from 'react';
import {QuizLists} from "./style";
import {NavLink} from "react-router-dom";
import {fetchQuizes} from '../../store/actions/quiz'
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";

class QuizList extends Component {

    renderQuizes = () => this.props.quizes.map( v => {
        return (
            <li key={v.id}>
                <NavLink to={`/quiz/${v.id}`}>{v.name}</NavLink>
            </li>
        )
    })

    componentDidMount() {
        this.props.fetchQuizes()
    }

    render() {
        return (
            <QuizLists>
                <div>
                    <h1>Список тестов</h1>
                    {
                        this.props.loading
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

const mapStateToProp = (state) => {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(QuizList)