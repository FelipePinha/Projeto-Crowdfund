import { Info } from "../Info/Info";
import { ProgressionBar } from "../ProgressionBar/ProgressionBar";
import { useContext } from "react";
import { PledgesContext } from "../../../context/PledgesContext";
import { TotalBackerContext} from "../../../context/TotalBackerContext";
import * as C from './InfoContainer.styles'

export function InfoContainer() {
    const { pledgeTotalValue } = useContext(PledgesContext)
    const { totalBackers } = useContext(TotalBackerContext)
    const expectedValue = 10000

    return (
        <>
            <C.Container>
                <Info title={`R$${pledgeTotalValue.toFixed(2)}`} subTitle={`de R$${expectedValue} esperado`} />
                <Info title={totalBackers} subTitle='Apoiadores totais'/>
                <Info title='56' subTitle='Dias restando'/>
            </C.Container>
            <ProgressionBar expectedValue={expectedValue}/>
        </>
        
    )
}