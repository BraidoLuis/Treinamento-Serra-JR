import React from "react"
import './card.css'
import logoserra from './logoserra.png';


export default function card(){
    return(
             <div class="container">
                    <div class="box">
                        <h1 class="texto">SERRA JUNIOR ENGENHARIA</h1>
                        <img src={logoserra} className="logo-serra"/>
                    </div>
                    <div class="box2" >
                        <h1 class="texto">Mostrar/Esconde Logo</h1>
                    </div>
            </div>

)
}