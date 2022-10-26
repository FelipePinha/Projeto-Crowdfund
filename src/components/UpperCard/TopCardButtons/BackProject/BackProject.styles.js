import styled from "styled-components";

export const Container = styled.div`
    button {
        height: 55px;
        border-radius: 25px;
        border: none;
        padding: 16px;

        background-color: hsl(176, 50%, 47%);
        color: #eee;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;

        transition: .3s ease-in-out;
    }

    button:hover {
        background-color: hsl(176, 72%, 28%);

    }
`