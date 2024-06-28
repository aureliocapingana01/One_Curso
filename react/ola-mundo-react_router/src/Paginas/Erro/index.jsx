import styles from "./Erro.module.css";
import erro404 from "assets/erro_404.png";

const Erro = () => {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>OPS! Lamento, Página Não Encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que é isso que voçê estava procurando? <br />
          Aguade um instante e recarregue a página, ou volte para a página
          inicial
          <br />
        </p>
        <strong>OBRIGADO...</strong>
        <div className={styles.botaoContainer}>Voltar</div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de oculos e vestido como humano"
        />
      </div>
      <div className={styles.espacoEmBranco}>

      </div>
    </>
  );
};
export default Erro;
