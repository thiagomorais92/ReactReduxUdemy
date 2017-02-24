import React from 'react'
import ReactDom from 'react-dom'
import Field from './Field'
import {combineReducers,createStore} from 'redux'
import {Provider} from 'react-redux'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})
const STORE = createStore(reducers);

ReactDom.render(
    <Provider store={STORE}>
        <Field  />
    </Provider>
    
,document.getElementById("app"))
