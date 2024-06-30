import EstiloGlobal from "./Components/EstiloGlobal";
import Cabecalho from "./Components/Cabecalho";
import { FundoGradiente } from "./Components/EstiloApp";
import BarraLateral from "./Components/BarraLateral";
import Banner from "./Components/Banner";
import bannerImage from "../public/imagens/banner.png";


function App() {
  return (
    <FundoGradiente>
      <EstiloGlobal />
      <Cabecalho />
      <BarraLateral />
      <Banner
        texto="A galeria mais completa de fotos do espaço!"
        img={bannerImage}
      />
    </FundoGradiente>
  );
}

export default App;
