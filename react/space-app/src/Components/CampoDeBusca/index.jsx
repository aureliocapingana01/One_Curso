import { CampoBusca, Container, IconeLupa } from "./Estilo";
import search from '../../../public/imagens/search.png'

const CampoDeBusca = (props) => {
  return (
    <Container>
      <CampoBusca placeholder="O que você procura?" {...props} />
      <IconeLupa src={search} alt="ícone de lupa" />
    </Container>
  );
};
export default CampoDeBusca;
