import { MastercraftLogo } from "./components/UpperCard/MastercraftLogo/MastercraftLogo"
import { TopCard } from "./components/UpperCard/TopCard/TopCard"
import { Banner } from "./components/Banner/Banner"
import { Container } from "./components/Container/Container"
import { NavBar } from "./components/Nav/NavBar/NavBar"
import { GlobalStyle } from "./styles/global"
import { ProjectTitle } from "./components/UpperCard/ProjectTitle/ProjectTitle"
import { Buttons } from "./components/UpperCard/TopCardButtons/Buttons/Buttons"
import { InfoCard } from "./components/BacksData/InfoCard/InfoCard"
import { InfoContainer } from "./components/BacksData/InfoContainer/InfoContainer"
import { PledgesCard } from "./components/Pledges/PledgesCard/PledgesCard"

function App() {

  return (
    <>
      <GlobalStyle />
      <Banner>
        <NavBar /> 
      </Banner>

      <Container>
        <TopCard>
          <MastercraftLogo />
          <ProjectTitle />
          <Buttons />
        </TopCard>

        <InfoCard>
          <InfoContainer />
        </InfoCard>

        <PledgesCard />
      </Container>
    </>
  )
}

export default App
