import styled from "styled-components";

export const BarContainer = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background-color: #ccc;
`

export const Bar = styled.div`
    width: ${props => props.progress}%;
    height: 100%;
    border-radius: 10px;
    background-color: hsl(176, 50%, 47%);
`