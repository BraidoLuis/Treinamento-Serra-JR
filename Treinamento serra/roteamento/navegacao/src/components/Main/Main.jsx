import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Tela30 from '../../views/examples/tela30/tela30'
import Tela31 from '../../views/examples/tela31/tela31'
import Tela6070 from '../../views/examples/tela6070/tela6070'

export default function Main(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Tela30 />} />
                <Route path="/tela31" element={<Tela31 />} />
                <Route path="/tela6070" element={<Tela6070/>} />

            </Routes>
        </div>
    )
}