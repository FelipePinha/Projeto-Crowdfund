import { Burger } from '../Burger/Burger'
import * as C from './NavBar.styles'

export function NavBar() {
    return(
        <C.Header>
            <h3 className="logo">
                Crowdfund
            </h3>

            <Burger />
        </C.Header>
    )
}