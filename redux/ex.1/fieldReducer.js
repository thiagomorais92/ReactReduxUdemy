import {changeValue} from './fieldActions'

const INITIAL_STATE = {value:'opa'} 


export  default function (state = INITIAL_STATE,action){
   
    switch(action.type){
        case  'CHANGE_VALUE':
            return {value:action.value}
        default:
            return state
    }
}