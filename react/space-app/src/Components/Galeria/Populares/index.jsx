import { Titulo } from "../../Titulo/Estilo";
import { Botao, ColunaFotos, Imagem } from "./Estilo";
import fotos from "./fotos-populares.json";

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>;
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
      <Botao>Ver MAis</Botao>
    </section>
  );
};
export default Populares;
