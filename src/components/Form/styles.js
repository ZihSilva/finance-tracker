import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media(max-width:750px) {
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
padding-left: 5px;
padding-bottom: 5px;
`


export const Input = styled.input`
outline: none;
border-radius: 5px;
padding: 5px 10px;
font-size: 15px;
border: 1px solid #ccc;
display: flex;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    input {
        margin-left: 10px;
        margin-right: 5px
        accent-color: black;
        
    }
`;

export const Button = styled.button`
    padding: 20px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #21232C;
    background-color: #40D4A5;
`;


