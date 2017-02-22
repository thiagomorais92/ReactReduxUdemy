import React from 'react'

export default props => (
    <header className='pageHeader'>
        <h2>{props.name}</h2> <small>{props.small}</small>
    </header>
)