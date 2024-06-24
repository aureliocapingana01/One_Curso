import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobreMim" element={<SobreMim />} />
        <Route
          path="*"
          element={
            <div>
              <strong>ERRO 404</strong> - Página não encontrada
            </div>
          }
        />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
