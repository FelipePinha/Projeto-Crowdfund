import styled from "styled-components";

export const StyleBurger = styled.div`
    display: none;
    position: absolute;
    top: 6%;
    right: 5%;
    z-index: 2;
    cursor: pointer;

    @media (max-width: 768px){
        display: block;

        img {
            width: 30px;
        }
    }
`