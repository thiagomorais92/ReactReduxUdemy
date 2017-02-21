import React from 'react'


export default props => (
    <div>
       <p> {props.children}_esse elemento sera clonado abaixo com parametros passados do pai para ele</p> 
        {React.cloneElement(props.children, {...props})}   <p>React.cloneElement so funciona para um filho</p>
    </div>
)