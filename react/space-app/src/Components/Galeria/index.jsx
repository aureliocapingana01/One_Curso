import { Titulo } from "../Titulo/Estilo";
import { GaleriaContainer, ImagensContainer, SecaoFluida } from "./Estilo";
import Imagem from "./Imagem";
import Populares from "./Populares";
import Tags from "./Tags";

const Galeria = ({ fotos = [], aofotoSelecionada,  aoAlternarFavorito }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
              aoAlternarFavorito={aoAlternarFavorito}
                aoZoomSolicitado={aofotoSelecionada}
                hey={foto.id}
                foto={foto}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};
export default Galeria;
