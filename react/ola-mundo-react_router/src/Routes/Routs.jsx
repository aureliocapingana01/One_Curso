import PaginaPadrao from "Componentes/PaginaPadrao";
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
      <Menu />

      {/*
     Na rota "/" a estrutura a ser renderizada é:
     <PaginaPadrao>
      <Inicio />
     </PaginaPadrao>

     Na rota "/SobreMim" a estrutura a ser renderizada é:
     <PaginaPadrao>
      <SobreMim/>
     </PaginaPadrao>
    */}
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="/sobreMim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<Erro />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
};
