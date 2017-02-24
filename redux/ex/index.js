import React from 'react'
import ReactDom from 'react-dom'
import {combineReducers,createStore} from 'redux'
import {Provider} from 'react-redux'
import Counter  from './Counter'
import counterReducer from './counterReducer'

const reducers = combineReducers({
    counterReducer
})
const STORE = createStore(reducers);

ReactDom.render(
    <Provider store={STORE}>
        <Counter></Counter>
    </Provider>
    
,document.getElementById("app"))
