import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 7.5rem;

    .logo{
        cursor: default;
        color: #fff;
        font-weight: 600;
    }


    @media (max-width: 768px) {
        padding: 2.5rem 2.5rem;
    }
`

