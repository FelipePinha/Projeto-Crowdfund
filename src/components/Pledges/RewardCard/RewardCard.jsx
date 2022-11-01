import { useState } from 'react'
import { PledgeModal } from '../../Popups/PledgeModal/PledgeModal'
import * as C from './RewardCard.styles'

export function RewardCard({title, initialValue, description, quantLeft}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function handleToggleModal() {
        if(quantLeft <= 0) {
            return
        }
        setModalIsOpen(!modalIsOpen)
    }
    
    return (
        <>
            <C.Container quantLeft={quantLeft}>
                <C.TitleWrapper quantLeft={quantLeft}>
                    <h2>{title}</h2>
                    <p>Pledge ${initialValue} or more</p>
                </C.TitleWrapper>
                <div>
                    <C.Info>
                        {description}
                    </C.Info>
                </div>
                <C.ActionContainer quantLeft={quantLeft}>
                    <h1>{quantLeft} <span>left</span></h1>
                    <button 
                        onClick={handleToggleModal}
                        >
                            {Number(quantLeft) === 0 ? 'Out of stock' : 'Select Reward'}
                    </button>
                </C.ActionContainer>
            </C.Container>
            <PledgeModal 
                title={title}
                description={description} 
                modalIsOpen={modalIsOpen}
                initialValue={initialValue} 
                handleToggleModal={handleToggleModal}              
            />
        </>
    )
}