import React from 'react'
import IconButton from  '../template/iconButton'
import { connect } from 'react-redux'
import {markAsDone,markAsPending,deleteTodo} from './todoActions'
import  {bindActionCreators} from 'redux'

const TodoList = props =>{

    const renderRows =() =>{
       
       const list = props.list || [];
        return list.map(todo =>(
            <tr key={todo.id}>
                <td className={todo.done? 'markedAsDone':''} >{todo.description}</td>
                <td>
                    <IconButton style="success" hide={todo.done} icon="check" onClick={() => props.handleMaskAsDone(todo)}/>
                    <IconButton style="warning" hide={!todo.done} icon="undo" onClick={() => props.handleMaskAsPending(todo)}/>
                    <IconButton style='danger' hide={!todo.done} icon="trash-o" onClick={() => props.handleRemove(todo)}/>
                    
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
    
const mapStateToProps = state => (
    {list:state.todo.list}
)
const mapDispatchToProps = dispatch =>(
     bindActionCreators({
         handleMaskAsDone : markAsDone,
         handleMaskAsPending : markAsPending,
         handleRemove:deleteTodo
        },dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)