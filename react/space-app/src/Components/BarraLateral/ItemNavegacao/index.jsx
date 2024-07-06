import { EstiloLi } from "./Estilo";

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <EstiloLi $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="imagem ativo ou inativo" />
      {children}
    </EstiloLi>
  );
};

export default ItemNavegacao;
