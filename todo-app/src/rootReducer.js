import {combineReducers} from 'redux'
import  todoReducers from './todo/todoReducers'
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    todo:todoReducers,
    form:formReducer
})



export default rootReducer