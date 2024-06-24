import Banner from "Componentes/Banner";
import styles from "./Inicio.module.css";
import posts from 'json/posts.json'
import PostCard from "Componentes/Post";


const Inicio = () => {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Inicio;
