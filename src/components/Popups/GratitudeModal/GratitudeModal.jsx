import IconCheck from '../../../assets/icon-check.svg'
import { Overlay } from "../PopupsStyles/Overlay"
import * as C from './GratitudeModal.styles'

export function GratitudeModal({ gratitudeModalIsOpen, gratitudeModalToggle }) {
    return (
        <Overlay modalIsOpen={gratitudeModalIsOpen}>
            <C.GratitudeCard>
                <img src={IconCheck} alt="check icon" />
                <C.Description>
                    <h1>Obrigado pelo seu apoio</h1>
                    <p>
                        Sua doação nos deixa um passo mais perto de dar uma vida melhor para crianças carentes.
                        Você vai receber um email quando a campanha estiver completa.
                    </p>
                </C.Description>
                <C.Button onClick={gratitudeModalToggle}>Got it!</C.Button>
            </C.GratitudeCard>
        </Overlay>
    )
}