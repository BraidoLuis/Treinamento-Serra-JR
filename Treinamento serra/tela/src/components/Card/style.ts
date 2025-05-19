import { styled } from "styled-components";
import { TextProps } from "./types";

export const Container = styled.div`
    background-color: var(--blue);   
    width: 200px;
    padding-top: 5px;
    padding-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;
    
`;
export const Text = styled.p<TextProps>`
    text-align: center;
    font-size: 22px;
    font-weight: bold;

    ${({type})=> type === "white" ?
        `
        color: white;
        margin-bottom: 20px;
        `
        :
        null
    }   
`;
export const TrashContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
export const TrashLogo = styled.img`
    width: 30px;
    height: 30px;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
        transition: 0.2s;
    }

`;

