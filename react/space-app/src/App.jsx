import EstiloGlobal from "./Components/EstiloGlobal";
import Cabecalho from "./Components/Cabecalho";
import {
  AppContainer,
  ConteudoGaleria,
  FundoGradiente,
  MainContainer,
} from "./Components/EstiloApp";
import BarraLateral from "./Components/BarraLateral";
import Banner from "./Components/Banner";
import bannerImage from "../public/imagens/banner.png";
import Galeria from "./Components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./Components/ModalZoom";

const App = () => {
  const [fotoGaleria, setFotoGaleria] = useState(fotos);

  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = foto => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotoGaleria(fotoGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstiloGlobal />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              img={bannerImage}
            />
            <Galeria
              fotos={fotoGaleria}
              aofotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;



