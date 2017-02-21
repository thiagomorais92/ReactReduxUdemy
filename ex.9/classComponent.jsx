import React,{Component} from 'react'


export default class ClassComponent extends Component{
    
    
    render(){
        return (
            <p>{this.props.value}</p>
        )
    }
}