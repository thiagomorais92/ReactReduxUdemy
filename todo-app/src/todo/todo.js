import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const URL = 'http://localhost:8080/todos'

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {description:'', list:[]}
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleMaskAsDone = this.handleMaskAsDone.bind(this);
        this.handleMaskAsPending = this.handleMaskAsPending.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        this.refresh();
    }

    refresh(dadosPesquisa,descriptionAtual = ''){
        
        if(dadosPesquisa){
            this.setState({...this.state,description:this.state.description,list:dadosPesquisa.data});
        }else{
        axios.get(URL).then((resp) => this.setState({...this.state,description:descriptionAtual,list:resp.data}))
        }
    }

    handleAdd(){
        const descricao = this.state.description;
        let todo = {"description":descricao};
        axios.post(URL,todo).then(() =>{
            this.refresh();
        })
    }
    handleChange(e){
        this.setState({...this.state,description:e.target.value})
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo.id}`,true).then(() =>{
            this.handleSearch();
        })
    }

    handleMaskAsDone(todo){
        axios.put(`${URL}/${todo.id}/${true}`)
            .then(() => this.handleSearch())
    }

    handleMaskAsPending(todo){
        axios.put(`${URL}/${todo.id}/${false}`).then(() => {
            this.refresh();
        })
    }
    handleSearch(){
       if(this.state.description){
           axios.get(`${URL}/search/${this.state.description}`).then(
                resp =>{
                    this.refresh(resp);
                }
            );
       }else{this.refresh()}
        
    }

    handleClearSearch(){
        this.state.description = '';
        this.handleSearch();
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" ></PageHeader>
                <TodoForm handleAdd={this.handleAdd} 
                          handleChange={this.handleChange} 
                          description={this.state.description}
                          handleSearch={this.handleSearch}
                          handleClearSearch={this.handleClearSearch}
                         />
                <TodoList list={this.state.list} 
                        handleRemove={this.handleRemove}
                        handleMaskAsDone={this.handleMaskAsDone}
                        handleMaskAsPending={this.handleMaskAsPending}/>
                
            </div>
        )
    }
}