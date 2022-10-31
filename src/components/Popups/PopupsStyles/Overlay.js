import styled from "styled-components";

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, .3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: ${props => props.modalIsOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    z-index: 5;
`