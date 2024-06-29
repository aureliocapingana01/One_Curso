import PaginaPadrao from "Componentes/PaginaPadrao";
import ScrollToTop from "Componentes/ScroolToTop";
import Erro from "Paginas/Erro";
import Post from "Paginas/Post";

const { default: Menu } = require("Componentes/Menu");
const { default: Rodape } = require("Componentes/Rodape");
const { default: Inicio } = require("Paginas/Inicio");
const { default: SobreMim } = require("Paginas/SobreMim");
const { Route, Routes, BrowserRouter } = require("react-router-dom");

export const Routs = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="/sobreMim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<Erro />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
};

/*
  Na rota "/" a estrutura a ser renderizada é:
  <PaginaPadrao>
  <Inicio />
  </PaginaPadrao>
  
  Na rota "/SobreMim" a estrutura a ser renderizada é:
  <PaginaPadrao>
  <SobreMim/>
  </PaginaPadrao>
  */
