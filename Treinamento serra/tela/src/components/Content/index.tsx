import React, {useState} from "react";
import { Container} from "./style";
import Form from "../Form";
import CardList from "../CardList";

const Content: React.FC = () =>{

    const [data, setData] = useState([])

    return(
        <Container>
            <Form data={data} setData={setData} />
            <CardList data={data} setData={setData} />
        </Container>
    )
}
export default Content