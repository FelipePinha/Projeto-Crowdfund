import { useState } from 'react'
import { PledgeModal } from '../../Popups/PledgeModal/PledgeModal'
import * as C from './RewardCard.styles'

export function RewardCard({title, initialValue, description, quantLeft}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [totalQuantLeft, setTotalQuantLeft] = useState(Number(quantLeft))

    function handleToggleModal() {
        if(totalQuantLeft <= 0) {
            return
        }
        setModalIsOpen(!modalIsOpen)
    }
    
    return (
        <>
            <C.Container quantLeft={totalQuantLeft}>
                <C.TitleWrapper quantLeft={totalQuantLeft}>
                    <h2>{title}</h2>
                    <p>Doe R${initialValue} ou mais</p>
                </C.TitleWrapper>
                <div>
                    <C.Info>
                        {description}
                    </C.Info>
                </div>
                <C.ActionContainer quantLeft={totalQuantLeft}>
                    <h1>{totalQuantLeft} <span>Restando</span></h1>
                    <button 
                        onClick={handleToggleModal}
                        >
                            {totalQuantLeft === 0 ? 'Esgotado' : 'Selecionar'}
                    </button>
                </C.ActionContainer>
            </C.Container>
            <PledgeModal 
                title={title}
                description={description} 
                modalIsOpen={modalIsOpen}
                initialValue={initialValue} 
                handleToggleModal={handleToggleModal}
                setTotalQuantLeft={setTotalQuantLeft}              
            />
        </>
    )
}