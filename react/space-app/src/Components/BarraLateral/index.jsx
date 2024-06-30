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
        </Ul>
      </nav>
    </aside>
  );
};
export default BarraLateral;
