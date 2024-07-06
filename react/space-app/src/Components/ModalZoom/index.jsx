import BotaoIcone from "../BotaoIcone";
import Imagem from "../Galeria/Imagem";
import { Dialog, Overlay } from "./Estilo";

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />(
          <Dialog open={!!foto} onClose={aoFechar}>
            <Imagem
              foto={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />
            <form method="dialog">
              <BotaoIcone formMethod="dialog">
                <img src="/icones/fechar.png" alt="icone de fechar" />
              </BotaoIcone>
            </form>
          </Dialog>
          )
        </>
      )}
    </>
  );
};
export default ModalZoom;
