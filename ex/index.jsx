import React from 'react'
import ReactDom from 'react-dom'
import ClassComponent from './classComponent'

ReactDom.render(
    <ClassComponent initialValue={10} label="Contador"/>
,document.getElementById("app"))



