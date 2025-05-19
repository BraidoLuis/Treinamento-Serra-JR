import React from "react"
import './tela31.css'
import logoserra from './logoserra.png';

export default function card(){
    return(
        <div className="container">
            <div className="box">
                <h1 className="texto">SERRA JUNIOR ENGENHARIA</h1>
                <img src={logoserra} className="logo-serra"/>
            </div>
            <div className="box2" >
                <h1 className="texto">Mostrar/Esconde Logo</h1>
            </div>
        </div>
)
}