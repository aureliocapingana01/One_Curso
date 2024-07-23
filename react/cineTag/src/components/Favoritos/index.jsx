import Banner from "../Banner";
import Titulo from "../Titulo";
import styles from "./favoritos.module.css";

const Favoritos = () => {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        
      </section>
    </>
  );
};

export default Favoritos;
