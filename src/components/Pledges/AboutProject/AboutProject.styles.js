import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

export const AboutTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    p {
        color: hsl(0, 0%, 48%);
        text-align: justify;
    }
`