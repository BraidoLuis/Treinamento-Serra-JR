import React, {useState} from 'react'

export default (props) => {
    return (
        <div className="item">
            <h2>{ props.nome }</h2>
            <p>{ props.tempo }</p>
            <p>{ props.categoria }</p>
        </div>
    )
}