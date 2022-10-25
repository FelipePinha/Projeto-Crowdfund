import HamburgerIcon from '../../../assets/icon-hamburger.svg'
import CloseMenu from '../../../assets/icon-close-menu.svg'
import { RightNav } from '../RightNav/RightNav'
import * as C from './Burger.styles'
import { useState } from 'react'

export function Burger() {
    const [MenuIsOpen, setMenuIsOpen] = useState(false)

    function handleOpenMenu() {
        setMenuIsOpen(!MenuIsOpen)
    }

    return (
        <>
            <C.StyleBurger>
                <img 
                    onClick={handleOpenMenu} 
                    src={MenuIsOpen ? CloseMenu : HamburgerIcon} 
                    alt="" />
            </C.StyleBurger>
            <RightNav menuIsOpen={MenuIsOpen}/>
        </>
    )
}