import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    border: 1px solid #c7c7c7;
    border-radius: 10px;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    p {
        color: #3cb4ac;
        font-weight: 600;
    }
`

export const Info = styled.p`
    color: 	#7a7a7a;
    margin: 20px 0;
`

export const ActionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    h1 span {
        color: #c7c7c7;
        font-size: 16px;
    }

    button {
        height: 45px;
        border-radius: 25px;
        border: none;
        padding: 16px;
        background-color: #3cb4ac;
        color: #eee;

        cursor: pointer;
        transition: .3s ease-in-out;
        font-weight: 600;
    }

    button:hover {
        background-color: hsl(176, 72%, 28%);
    }
`