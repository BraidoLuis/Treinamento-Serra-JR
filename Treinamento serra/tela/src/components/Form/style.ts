import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    width: 80%;
    
`;
export const Title = styled.h1`
    font-weight: bold;
`;
export const Input = styled.input`
    width: 99%;
    padding: 10px 0px;
    margin: 7px;
    outline: none;
    padding-left: 1%;
    font-size: 18px;
    border: 1px solid var(--gray);
    color: var(--gray);

`;
export const Button = styled.button`
    width: 100%;
    background-color: var(--blue);
    border: none;
    padding: 10px 0px;
    font-size: 18px;
    color: white;
    font-weight: bold;

    &:hover{
        opacity: 0.7;
        transition: 0.3s;
        cursor: pointer;
    }

`;