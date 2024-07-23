import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./components/Favoritos";
import Rodape from "./components/Rodape";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container/inde";
import { FavoritosProvider } from "./components/Contexto/Favoritos";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Favoritos" element={<Favoritos />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
