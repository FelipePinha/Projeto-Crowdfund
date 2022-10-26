import * as C from './MastercraftLogo.styles'
import LogoMastercraft from '../../../assets/logo-mastercraft.svg'

export function MastercraftLogo() {
    return (
        <C.Container>
            <img src={LogoMastercraft} alt="" />
        </C.Container>
    )
}