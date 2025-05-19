import React from "react";
import { Container} from "./style";
import Card from "../Card";
import { CardListProps } from "./types";

const CardList: React.FC<CardListProps> = ({data, setData}) =>{
    return(
        <Container>
            {data.map((eachRecipe, index) => {
                return <Card
                key={index} 
                index={index}
                name={eachRecipe.name}
                time={eachRecipe.time}
                category={eachRecipe.category} 
                data={data}
                setData={setData}
                />
                
            })}
        </Container>
    )
        
}
export default CardList