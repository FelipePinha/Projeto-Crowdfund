import { AboutProject } from '../AboutProject/AboutProject'
import { RewardCard } from '../RewardCard/RewardCard'
import * as C from './PledgesCard.styles'

export function PledgesCard({ children }) {
    return (
        <C.Container>
            <AboutProject/>
            <RewardCard />
            <RewardCard />
            <RewardCard />
        </C.Container>
    )
}