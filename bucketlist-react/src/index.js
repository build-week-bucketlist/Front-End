import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import combineReducers from './reducers/combineReducers'
import App from './App';

const store = createStore(combineReducers, applyMiddleware(thunk, logger))


ReactDOM.render(
<Provider store = {store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));