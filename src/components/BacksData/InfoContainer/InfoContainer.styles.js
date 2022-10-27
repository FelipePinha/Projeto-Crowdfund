import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 20px;
    
    div:nth-child(1) {
        border-right: 1px solid #ccc;
        padding-right: 20px;
    }
    div:nth-child(3) {
        border-left: 1px solid #ccc;
        padding-left: 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        div:nth-child(1) {
            border-right: none;
            padding-right: 0;
        }
        div:nth-child(3) {
            border-left: none;
            padding-left: 0;
        }
    }
`