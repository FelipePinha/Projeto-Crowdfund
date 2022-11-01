import IconCheck from '../../../assets/icon-check.svg'
import { Overlay } from "../PopupsStyles/Overlay"
import * as C from './GratitudeModal.styles'

export function GratitudeModal({ gratitudeModalIsOpen, gratitudeModalToggle }) {
    return (
        <Overlay modalIsOpen={gratitudeModalIsOpen}>
            <C.GratitudeCard>
                <img src={IconCheck} alt="check icon" />
                <C.Description>
                    <h1>Thanks for your support!</h1>
                    <p>
                        Your pledge bring us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
                        You will get an email once our campaign is completed.
                    </p>
                </C.Description>
                <C.Button onClick={gratitudeModalToggle}>Got it!</C.Button>
            </C.GratitudeCard>
        </Overlay>
    )
}