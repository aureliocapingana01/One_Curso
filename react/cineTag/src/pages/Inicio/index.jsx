import styles from "./inicio.module.css";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import Titulo from "../../components/Titulo";
import videos from "../../db.json";

const Inicio = () => {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugara para guradar seus videos e filmes</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Cards {...video} key={video.id} />;
        })}
      </section>
    </>
  );
};
export default Inicio;

// {
//   "musicas": [
//   {
//       "id": 1,
//       "titulo": "The Power of React",
//       "link": "https://www.youtube.com/watch?v=DJwirHviKms"
//   },
//   {
//       "id": 2,
//       "titulo": "My Component Will Go On",
//       "link": "https://www.youtube.com/watch?v=oSnIRlvFEnA"
//   },
// }
