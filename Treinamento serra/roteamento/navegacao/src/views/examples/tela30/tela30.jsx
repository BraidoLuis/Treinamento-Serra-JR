import React from 'react'
import Card from '../../../components/Card/Card'
import './tela30.css'

export default (props) => {
    return (
        <div className="content">
            <Card nome="Luis" idade="20" time="Flamengo" sobrenome="Braido"/>
            <Card nome="Felipe" idade="23" time="Flamengo" sobrenome="Carrancho"/>
            <Card nome="Carolina" idade="20" time="Paysandu" sobrenome="Dornelas"/>
        </div>
    )
}