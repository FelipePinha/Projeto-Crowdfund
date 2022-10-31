import { AboutProject } from '../AboutProject/AboutProject'
import { RewardCard } from '../RewardCard/RewardCard'
import * as C from './PledgesCard.styles'
import rewards from '../../../mocks/rewards.json'

export function PledgesCard() {
    return (
        <C.Container>
            <AboutProject/>
            {
                rewards.map(reward => {
                    return (
                        <RewardCard 
                            title={reward.title} 
                            initialValue={reward.initialValue}
                            description={reward.description}
                            quantLeft={reward.quantLeft}
                            key={reward.id}
                        />
                    )
                })
            }
        </C.Container>
    )
}