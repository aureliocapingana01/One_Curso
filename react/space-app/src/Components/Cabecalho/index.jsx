import CampoDeBusca from "../CampoDeBusca"
import { Header } from "./Estilo"

const Cabecalho = () => {
  return(
    <Header>
      <img src="/imagens/logo.png" alt="" />
      <CampoDeBusca />
    </Header>
  )
}
export default Cabecalho