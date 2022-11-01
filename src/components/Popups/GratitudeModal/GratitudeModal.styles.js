import styled from "styled-components";

export const GratitudeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    min-width: 370px;
    min-height: 300px;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    gap: 20px;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 15px;

    p {
        color: #7a7a7a;
    }
`

export const Button = styled.button`
    width: 110px;
    height: 50px;
    border-radius: 20px;
    border: none;
    padding: 12px;
    background-color: #3cb4ac;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover {
        background-color: #147b74;
    }
`