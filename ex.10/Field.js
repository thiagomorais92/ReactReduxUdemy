import React from 'react'

export default class Field extends React.Component{
  constructor(props){
    super(props);
    this.state  = {value : this.props.initialValue}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render(){
    return (
      <div>
        <label>{this.state.value}</label> <br/>
        <input type="text" value={this.state.value} onChange={this.handleChange} />

      </div>
    )
  }
}
