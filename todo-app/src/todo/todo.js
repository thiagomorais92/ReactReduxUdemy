import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'


export default class Todo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" ></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}