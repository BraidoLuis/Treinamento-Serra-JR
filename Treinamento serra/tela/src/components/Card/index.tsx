import React from "react";
import { Container, TrashContainer, TrashLogo, Text} from "./style";
import Trash from '../../Assets/trash.svg';
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({name, time, category, data, setData, index}) =>{

    const handleTrashClick = () => {
        const auxArray = [...data];

        auxArray.splice(index, 1);

        setData(auxArray);
    }

    return(
        <Container>
            <TrashContainer>
                <TrashLogo  src={Trash} alt='Símbolo de lixo' onClick={handleTrashClick}/>
            </TrashContainer>

            <Text type="white">{name}</Text>
            <Text>{time}</Text>
            <Text>{category}</Text>
        </Container>
    )
}
export default Card