import React,{Component} from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeDescription,initialGet,add,clearSearch,searchByDescription} from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.initialGet();
    }

     keyHandler(e){
         const { initialGet,add,description,clearSearch} = this.props
        if(e.key === 'Enter'){
            e.shiftKey? this.props.searchByDescription(description) : add(description)
        }else if (e.key ==='Escape'){
            clearSearch();
        }
    }

    render() {
        const { initialGet,add,description} = this.props
        return (
            <div role="form" className='todoForm'>
                
                <Grid cols="12 9 10">
                    <input 
                        type="text" 
                        id="description" 
                        onKeyUp={this.keyHandler} 
                        className='form-control' 
                        onChange={this.props.changeDescription} 
                        value={this.props.description} placeholder="Adicione uma tarefa"/>
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus' onClick={() => this.props.add(this.props.description)}></IconButton>
                    <IconButton style='info' icon='search' onClick={()=> this.props.searchByDescription(this.props.description)}></IconButton>
                    <IconButton style='default' icon='close' onClick={this.props.clearSearch}/> 
                </Grid>
            </div>
            )
    }
}

const mapStateToProps = state => (
    {description:state.todo.description}
)

const mapDispatchToProps = dispatch => 
    bindActionCreators({changeDescription,initialGet,add,clearSearch,searchByDescription},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)