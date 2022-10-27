import { Info } from "../Info/Info";
import { ProgressionBar } from "../ProgressionBar/ProgressionBar";
import * as C from './InfoContainer.styles'

export function InfoContainer() {
    return (
        <>
            <C.Container>
                <Info title='$89,914' subTitle='of $100,000 backed'/>
                <Info title='5,007' subTitle='total backers'/>
                <Info title='56' subTitle='days left'/>
            </C.Container>
            <ProgressionBar />
        </>
        
    )
}