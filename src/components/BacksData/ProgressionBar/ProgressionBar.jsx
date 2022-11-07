import { useContext, useState } from 'react'
import { PledgesContext } from '../../../context/PledgesContext'
import * as C from './ProgressionBar.styles'

export function ProgressionBar({ expectedValue }) {
    const { pledgeTotalValue } = useContext(PledgesContext)

    function getPercentage(pledgeTotalValue, expectedValue) {
        const progressPercentage = (pledgeTotalValue * 100) / expectedValue

        if(progressPercentage >= 100) {
            return 100
        }

        return progressPercentage
    }

    return (
        <C.BarContainer>
            <C.Bar progress={getPercentage(pledgeTotalValue, expectedValue)}></C.Bar>
        </C.BarContainer>
    )
}