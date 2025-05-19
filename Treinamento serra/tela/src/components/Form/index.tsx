import React, {useState, ChangeEvent} from "react";
import { Button, Container, Title, Input } from "./style";
import { FormProps } from "./types";


const Form: React.FC<FormProps> = ({data, setData}) =>{

    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [category, setCategory] = useState("")

    const handlebutton = () =>{
        const recipe ={
            name,
            time,
            category
        }

        setName('')
        setTime('')
        setCategory('')
        setData([...data, recipe])

    }

    return(
        <Container>
            <Title>Receitas</Title>
            <Input type='text' placeholder="Nome" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <Input type='text' placeholder="Tempo de preparo" value={time} onChange={(e: ChangeEvent<HTMLInputElement>) => setTime(e.target.value)} />
            <Input type='text' placeholder="Categoria" value={category} onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} />
            <Button onClick={() => handlebutton()}>Adicionar</Button>
        </Container>
    )
}
export default Form