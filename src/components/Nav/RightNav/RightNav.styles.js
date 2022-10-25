import styled from "styled-components"

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    column-gap: 15px;

    li a{
        color: #fff;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 16px;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;

        position: fixed;
        top: 4rem;
        right: 3rem;
        display: ${props => props.menuIsOpen};

        li a{
            color: #000;
            font-weight: 500;
        }
    }
`