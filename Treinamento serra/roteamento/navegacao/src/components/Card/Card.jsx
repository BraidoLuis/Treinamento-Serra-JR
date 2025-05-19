import React from 'react';
import './Card.css'

export default (props) => {
    return (    
        <div className="box">
            <div className="box_nome">
                <p className="nome">{ props.nome }</p>
            </div>
            <p className="texto">Idade: { props.idade }</p>
            <p className="texto">Time: { props.time }</p>
            <p className="texto">Sobrenome: { props.sobrenome }</p>
        </div>      
    )
}