import * as C from './Button.styles'

import { BackProject } from '../BackProject/BackProject'
import { Bookmark } from '../Bookmark/Bookmark'

export function Buttons() {
    return (
        <C.Container>
            <BackProject />
            <Bookmark />
        </C.Container>
    )
}