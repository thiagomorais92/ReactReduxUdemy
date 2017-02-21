import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <div>
        <Family>
            <Member  name="Thiago" lastName="Morais"/>
        </Family>
    </div>
,document.getElementById("app"))



