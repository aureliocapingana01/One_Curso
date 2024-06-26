import { Outlet } from "react-router-dom"

const { default: Banner } = require("Componentes/Banner")

const PaginaPadrao = () => {
  return (
    <main>
      <Banner />

      {/* Para renderizar as rfotas na pagina com o compoentes do react dom, chamada de rota alinhada */}
      <Outlet /> 
    </main>
  )
}
export default PaginaPadrao