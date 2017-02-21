import React from 'react'
import ReactDom from 'react-dom'
import Primeiro,{Segundo,Terceiro} from './Component'

ReactDom.render(
    <div>
        <Primeiro/>
        <Segundo/>
        <Terceiro/>
    </div>
,document.getElementById("app"))



