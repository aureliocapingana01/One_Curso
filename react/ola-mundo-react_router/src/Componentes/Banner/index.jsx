import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from 'assets/minhaFoto1.png'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meus epsaço pessoal! <br />
          Eu sou <strong>Aurélio Capingana</strong> Dev Jr <strong>Front-End</strong> , estudante do curso
          <strong>Engenharia de Software</strong>
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img className={styles.minhaFoto}
        src={minhaFoto}
        />
      </div>
    </div>
  );
};
export default Banner;
