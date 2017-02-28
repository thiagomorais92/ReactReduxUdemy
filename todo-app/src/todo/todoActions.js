import axios from 'axios'


const URL = 'http://localhost:8080/todos'

export const changeDescription = event =>({
    type:'DESCRIPTION_CHANGED',
    payload:event.target.value
})

export const initialGet_old = () =>{ //esse utilizava o midleware PROMISE
    const request = axios.get(URL);
    return {
        type:'INITIAL_GET',
        payload:request
    }
}

export const initialGet = () =>{ //esse eu tirei e implementei o then =)
    return dispatch =>{
         axios.get(URL).then(resp => {
            dispatch({type:'INITIAL_GET',payload:resp.data})
         })    
    }
}

export const add = description => {
    return dispatch =>{
        axios.post(URL,{description})
        .then(resp => dispatch({type:'CLEAR_SEARCH'}))
        .then(resp => dispatch(initialGet()))
    }
}

export const markAsDone = (todo) =>{
    return dispatch =>{
        axios.put(`${URL}/${todo.id}/${true}`)
            //.then(() => dispatch({type:'TODO_DONE'}))  
            .then(() => dispatch(initialGet()))
    }
}

export const markAsPending = todo =>{
    return dispatch => {
        axios.put(`${URL}/${todo.id}/${false}`)
            //.then(()=> dispatch({type:'TODO_PENDING'}))
            .then(() => dispatch(initialGet()))
    }
}


export const deleteTodo  = todo =>{
    return dispatch =>{
        axios.delete(`${URL}/${todo.id}`)
        .then(() => dispatch(initialGet()))
    }
}

export const clearSearch = () =>{
   //  Abordagem abaixo que está comentada, funciona e só é possível graças ao thunk
   //  pois ele me entrega o dispatch
   /* return dispatch =>{ 
         dispatch({type:'CLEAR_SEARCH'});
         dispatch(initialGet());
    }*/

    //Abordagem abaixo é possivel graças ao middleware MULTI
    return [{type:'CLEAR_SEARCH'},initialGet()]
}

export const searchByDescription = description =>{
    
    return dispatch =>{
        axios.get(`${URL}/search/${description}`)
        .then(resp => dispatch({type:'TODO_FOUND',payload:resp.data}))
    }
}