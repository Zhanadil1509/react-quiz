import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import Auth from "./containers/Auth/Auth";
import QuizList from "./containers/QuizList/QuizList";
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";
import {autoLogin} from "./store/actions/auth";

class Routes extends Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        return (
            <Layout>
              <Switch>
                  {
                      !this.props.isAuthenticated
                        ? <Route path={'/auth'} component={Auth} />
                        : <>
                            <Route path={'/logout'} component={Logout} />
                            <Route path={'/quiz-creator'} component={QuizCreator} />
                          </>
                  }
                  <Route path={'/quiz/:id'} component={Quiz} />
                  <Route exact path={'/'} component={QuizList} />
                  <Redirect to={'/'} />
              </Switch>
            </Layout>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        isAuthenticated: !!state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Routes))