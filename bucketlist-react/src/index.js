import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import combineReducers from './reducers/combineReducers'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(combineReducers, applyMiddleware(thunk, logger))
// const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
// (createStore(combineReducers, applyMiddleware(thunk, logger)))

ReactDOM.render(
<Provider store = {store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));