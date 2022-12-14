import * as C from './PledgeModal.styles'
import CloseModalIcon from '../../../assets/icon-close-modal.svg'
import { FaDollarSign } from 'react-icons/fa'
import { Overlay } from '../PopupsStyles/Overlay'
import { useState } from 'react'
import { GratitudeModal } from '../GratitudeModal/GratitudeModal'
import { useContext } from 'react'
import { PledgesContext } from '../../../context/PledgesContext'
import { TotalBackerContext } from '../../../context/TotalBackerContext'


export function PledgeModal({ 
    modalIsOpen, 
    title, 
    description, 
    initialValue, 
    handleToggleModal, 
    setTotalQuantLeft 
}) {

    const {sumPledgeTotalValue} = useContext(PledgesContext)
    const {sumTotalBackers} = useContext(TotalBackerContext)
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const [gratitudeModalIsOpen, setGratitudeModalisOpen] = useState(false)

    function GratitudeModalToggle() {
        setGratitudeModalisOpen(!gratitudeModalIsOpen)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!value) {
            setError(true)
            return
        }

        sumPledgeTotalValue(value)
        sumTotalBackers()
        setTotalQuantLeft(prev => prev - 1)
        handleToggleModal()
        GratitudeModalToggle()
    }

    return (
        <>
            <Overlay modalIsOpen={modalIsOpen}>
                <C.ModalWrapper>
                    <img onClick={handleToggleModal} src={CloseModalIcon} alt="close modal" />
                    <C.TextContainer>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </C.TextContainer>
                    <C.Form onSubmit={handleSubmit}>
                        <C.InputWrapper error={error}>
                            <input 
                                min={initialValue}
                                step=".01"
                                value={value} 
                                type="number"
                                onChange={e => {setValue(e.target.value), setError(false)}}
                            />
                            <FaDollarSign className='dollarIcon'/>
                        </C.InputWrapper>
                        <C.ButtonsWrapper>
                            <button className='submit-btn' type='submit'>Continuar</button>
                            <button onClick={handleToggleModal} className='cancel-btn' type='button'>Cancelar</button>
                        </C.ButtonsWrapper>
                    </C.Form>
                </C.ModalWrapper>
            </Overlay>
            <GratitudeModal 
                gratitudeModalIsOpen={gratitudeModalIsOpen} 
                gratitudeModalToggle={GratitudeModalToggle}
            />
        </>
    )
}