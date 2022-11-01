import styled from "styled-components";

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    width: 50%;
    min-width: 340px;
    min-height: 300px;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    gap: 30px;

    img {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    gap: 30px;

    @media (max-width: 768px) {
        width: 50%;
    }
`

export const InputWrapper = styled.div`
    position: relative;

    .dollarIcon {
        position: absolute;
        left: 10px;
        top: 18px;
        height: 22px;
        color: rgba(0,0,0,.5);
    }

    input[type="number"] {
        width: 100%;
        height: 60px;
        padding: 10px 30px;
        border: 1px solid;
        border-color: ${props => props.error ? 'rgba(255, 0, 0, .5)' : 'rgba(0, 0, 0,.5)'};
        border-radius: 50px;
        outline: none;

        display: flex;
        justify-content: center;
        font-size: 18px;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        padding: 12px;
        width: 120px;
        height: 60px;
        border-radius: 20px;
        border: none;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: .3s ease-in-out;
    }

    .submit-btn {
        background-color: #3cb4ac;
    }
    .submit-btn:hover {
        background-color: #147b74;
    }

    .cancel-btn {
        background-color: #7a7a7a;
    }
    .cancel-btn:hover {
        background-color: #adadad;
    }
`