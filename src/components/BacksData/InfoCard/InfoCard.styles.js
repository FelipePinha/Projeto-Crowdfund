import styled from "styled-components";

export const CardStyles = styled.section`
    width: 40%;
    min-width: 340px;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, .2);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 25px;
    margin: 190px auto;
    padding: 25px;

    @media (max-width: 768px) {
        margin: 290px auto;
    }
`