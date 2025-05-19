import React, { useState } from 'react'
import './tela6070.css'
import Lixo from './delete.svg'

export default (props) => {

    const [All, setAll] = useState([]);
    const [Name, setnewName] = useState("");
    const [Time, setnewTime] = useState("");
    const [Category, setnewCategory] = useState("");

    const adicionar = () => {
        let Item = {
            nome: Name,
            tempo: Time,
            categoria: Category
        }
        let array = [...All];
        array.push(Item);
        setAll(array);
    }
    const deletar = (index) => {
        let tirar = [...All];
        tirar.splice(index, 1);
        setAll(tirar);
    } 
    return (
        <div className="container2">
            <h1>Receitas</h1>
                <div>
                    <input value={Name} placeholder="Nome" onChange={(e) => setnewName(e.target.value)} />
                    <input value={Time} placeholder="Tempo de preparo" onChange={(e) => setnewTime(e.target.value)} />
                    <input value={Category} placeholder="Categoria" onChange={(e) => setnewCategory(e.target.value)} />
                </div>
            <div>
                <button type="button" onClick={adicionar} className='botao'>Adicionar</button>
            </div>
            <div className="lista">
                {All.map((item, index) => {
                    return (
                        <div className="item-caixa" key={index}>
                            <div className="conteudo">
                                <h3>{item.nome}</h3>
                                <p>{item.tempo}</p>
                                <p>{item.categoria}</p>
                            </div>
                            <div className="lixo">
                                <img src={Lixo} onClick={() => deletar(index)} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );

}