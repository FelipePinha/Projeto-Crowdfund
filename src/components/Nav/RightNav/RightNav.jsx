import * as C from './RightNav.styles'

export function RightNav({ menuIsOpen }) {
    return (
        <C.NavList menuIsOpen={menuIsOpen ? 'flex' : 'none'}>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Discover</a>
            </li>
            <li>
                <a href="#">Get Started</a>
            </li>
        </C.NavList>
    )
}