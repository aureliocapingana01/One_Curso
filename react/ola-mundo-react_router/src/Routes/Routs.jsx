import PaginaPadrao from "Componentes/PaginaPadrao"

const { default: Menu } = require("Componentes/Menu")
const { default: Rodape } = require("Componentes/Rodape")
const { default: Inicio } = require("Paginas/Inicio")
const { default: SobreMim } = require("Paginas/SobreMim")
const { Route, Routes, BrowserRouter } = require("react-router-dom")

export  const Routs = () => {
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
      <Route path="/" element={<Inicio />} />
      <Route path="/sobreMim" element={<SobreMim />} />

      </Route>
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
  )
}