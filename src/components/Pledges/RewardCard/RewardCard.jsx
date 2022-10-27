import * as C from './RewardCard.styles'

export function RewardCard() {
    return (
        <C.Container>
            <C.TitleWrapper>
                <h2>Bamboo Stand</h2>
                <p>Pledge $25 or more</p>
            </C.TitleWrapper>
            <div>
                <C.Info>
                    You get an ergonomic stand made of natural bamboo. 
                    You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.
                </C.Info>
            </div>
            <C.ActionContainer>
                <h1>101 <span>left</span></h1>
                <button>Select Reward</button>
            </C.ActionContainer>
        </C.Container>
    )
}