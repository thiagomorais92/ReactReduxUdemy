import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <div>
        <Family lastName="Morais">
            <Member  name="Thiago" />
        </Family>
    </div>
,document.getElementById("app"))



