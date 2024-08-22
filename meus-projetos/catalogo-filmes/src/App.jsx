import { IconeLupa } from "./Components/Header/CampoDeBusca/Estilo";
import { Router } from "./Router/router";
import { AppContainer } from "./Slyle-Global/EstiloApp";
import { GlobalStyle } from "./Slyle-Global/GlobalStyle";

const App = () => {
  console.log(IconeLupa)
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
      
    </>
  );
};

export default App;
