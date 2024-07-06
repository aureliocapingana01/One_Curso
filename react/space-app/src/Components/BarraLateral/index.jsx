import { Ul } from "./Estilo";
import ItemNavegacao from "./ItemNavegacao";

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <Ul>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo={true}
          >
            Inicio
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemNavegacao>
        </Ul>
      </nav>
    </aside>
  );
};
export default BarraLateral;
