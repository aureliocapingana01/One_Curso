import EstiloGlobal from "./Components/EstiloGlobal";
import Cabecalho from "./Components/Cabecalho";
import { FundoGradiente } from "./Components/EstiloApp";
import BarraLateral from "./Components/BarraLateral";

function App() {
  return (
    <FundoGradiente>
      <EstiloGlobal />
      <Cabecalho />
      <BarraLateral />
    </FundoGradiente>
  );
}

export default App;
