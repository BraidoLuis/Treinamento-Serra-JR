import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="cima">
            <h1>Nome Squad</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Tela 3.0</Link>
                    </li>
                    <li>
                        <Link to='/tela31'>Tela 3.1</Link>
                    </li>
                    <li>
                        <Link to='/tela6070'>Tela 6.0 e 7.0</Link>
                    </li>
                </ul>
            </nav>   
        </div>
    )
}