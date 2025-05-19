import React from 'react';

import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

export default (props) => {
    return (
        <div id="app">
            <BrowserRouter>
                <Header/>
                <Main />
                <Footer />
            </BrowserRouter>        
        </div>
    )
}