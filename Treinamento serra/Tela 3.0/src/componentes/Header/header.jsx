import React from "react"
import './header.css'

export default function header(){
    return(
        <div class="cima">
            <h1> Nome Squad </h1>
            <div>
                <nav>
                    <Link to="/">Cards Info - 3.0</Link>
                    <Link to="/Dia31">Card SerraJr - 3.1</Link>
                </nav>
            </div>
        </div>
)
}