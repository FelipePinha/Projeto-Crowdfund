import { Banner } from "./components/Banner/Banner"
import { NavBar } from "./components/Nav/NavBar/NavBar"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <GlobalStyle />
      <Banner>
        <NavBar /> 
      </Banner>
    </>
  )
}

export default App
