import * as C from './RightNav.styles'

export function RightNav({ menuIsOpen }) {
    return (
        <C.NavList menuIsOpen={menuIsOpen ? 'flex' : 'none'}>
            <li>
                <a href="#">Sobre</a>
            </li>
            <li>
                <a href="#">Descubra</a>
            </li>
            <li>
                <a href="#">Contato</a>
            </li>
        </C.NavList>
    )
}