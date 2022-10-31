import * as C from './PledgeModal.styles'
import CloseModalIcon from '../../../assets/icon-close-modal.svg'
import { FaDollarSign } from 'react-icons/fa'
import { Overlay } from '../PopupsStyles/Overlay'


export function PledgeModal({ modalIsOpen, title, description, handleToggleModal }) {
    return (
        <Overlay modalIsOpen={modalIsOpen}>
            <C.ModalWrapper>
                <img onClick={handleToggleModal} src={CloseModalIcon} alt="close modal" />
                <C.TextContainer>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </C.TextContainer>
                <C.Form>
                    <C.InputWrapper>
                        <input min={25} type="number" />
                        <FaDollarSign className='dollarIcon'/>
                    </C.InputWrapper>
                    <C.ButtonsWrapper>
                        <button className='submit-btn' type='submit'>Continue</button>
                        <button onClick={handleToggleModal} className='cancel-btn' type='button'>Cancel</button>
                    </C.ButtonsWrapper>
                </C.Form>
            </C.ModalWrapper>
        </Overlay>
    )
}