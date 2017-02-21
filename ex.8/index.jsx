import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <div>
        <Family lastName="Morais">
            <Member  name="Thiago" />
            <Member  name="Thalles" />
            <Member  name="Claudia" />
            <Member  name="Vamberto" />
        </Family>
    </div>
,document.getElementById("app"))



