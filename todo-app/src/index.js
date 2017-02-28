import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import  rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import multi from 'redux-multi'


const  devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const STORE = applyMiddleware(multi,thunk)(createStore)(rootReducer,devTools);
ReactDom.render(
    <Provider store={STORE}>
        <App/>
    </Provider>
,document.getElementById("app"))
