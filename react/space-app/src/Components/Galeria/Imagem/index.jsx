import BotaoIcone from "../../BotaoIcone";
import { Figure, Rodape } from "./Estilo";

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

  const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png' 

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} alt="icone de favorito" />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(foto)}
            >
              <img src="/icones/expandir.png" alt="" />
            </BotaoIcone>
          )}
        </Rodape>
      </figcaption>
    </Figure>
  );
};
export default Imagem;







//  const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

//   const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'
//     let iconeFavorito = '/icones/favorito.png';
//     if (foto.favorita) {
//         iconeFavorito = '/icones/favorito-ativo.png'
//     }

//     return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
//         <img src={foto.path} alt={foto.alt} />
//         <figcaption>
//             <h3>{foto.titulo}</h3>
//             <Rodape>
//                 <h4>{foto.fonte}</h4>
//                 <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
//                     <img src={iconeFavorito} alt="Icone de favorito" />
//                 </BotaoIcone>
//                 {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
//                     <img src="/icones/expandir.png" alt="Icone de expandir" />
//                 </BotaoIcone>}
//             </Rodape>
//         </figcaption>
//     </Figure>)
// }

// export default Imagem