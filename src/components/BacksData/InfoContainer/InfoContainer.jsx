import { Info } from "../Info/Info";
import { ProgressionBar } from "../ProgressionBar/ProgressionBar";
import { useContext } from "react";
import { PledgesContext } from "../../../context/PledgesContext";
import { TotalBackerContext} from "../../../context/TotalBackerContext";
import * as C from './InfoContainer.styles'

export function InfoContainer() {
    const { pledgeTotalValue } = useContext(PledgesContext)
    const { totalBackers } = useContext(TotalBackerContext)

    return (
        <>
            <C.Container>
                <Info title={pledgeTotalValue.toFixed(2)} subTitle='of $100,000 backed'/>
                <Info title={totalBackers} subTitle='total backers'/>
                <Info title='56' subTitle='days left'/>
            </C.Container>
            <ProgressionBar />
        </>
        
    )
}