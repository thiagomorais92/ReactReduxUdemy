import React from 'react'
import IconButton from  '../template/iconButton'

export default props =>{

    const renderRows =() =>{
       
       const list = props.list || [];
        return list.map(todo =>(
            <tr key={todo.id}>
                <td className={todo.done? 'markedAsDone':''} >{todo.description}</td>
                <td>
                    <IconButton style="success" hide={todo.done} icon="check" onClick={() => props.handleMaskAsDone(todo)}/>
                         <IconButton style="warning" hide={!todo.done} icon="undo" onClick={() => props.handleMaskAsPending(todo)}/>
                    <IconButton style='danger' hide={!todo.done} icon="trash-o" onClick={() => props.handleRemove(todo)} /></td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
    
    
