const INITIAL_STATE = {
    description:''
}

export default  (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state,description:action.payload}
        
        case 'INITIAL_GET':
            return {...state,list:action.payload}
        
        case 'CLEAR_SEARCH':
            return {...state,description:''}
        
        case 'TODO_DONE':
            return {...state}
        
        case 'TODO_PENDING':
            return {...state}
        
        case 'TODO_FOUND':
            return {...state,list:action.payload}
        default:
            return {...state}
            break;
        
    }
}
