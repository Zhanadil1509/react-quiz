import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Routes'
import {BrowserRouter as Router } from "react-router-dom"
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux'
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)) )

ReactDOM.render(<Provider store={store}>
    <Router>
        <Routes />
    </Router>
</Provider>, document.getElementById('root'))