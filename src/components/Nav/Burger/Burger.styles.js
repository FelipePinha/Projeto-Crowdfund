import styled from "styled-components";

export const StyleBurger = styled.div`
    display: none;
    position: fixed;
    top: 6%;
    right: 5%;
    cursor: pointer;

    @media (max-width: 768px){
        display: block;

        img {
            width: 30px;
        }
    }
`