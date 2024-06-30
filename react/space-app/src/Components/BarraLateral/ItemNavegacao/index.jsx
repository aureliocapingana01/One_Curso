import { EstiloLi } from "./Estilo";

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <EstiloLi $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="imagem ativo" />
      {children}
    </EstiloLi>
  );
};

export default ItemNavegacao;
