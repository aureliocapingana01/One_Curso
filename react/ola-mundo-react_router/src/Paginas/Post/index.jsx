import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "Componentes/PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import "./post.css";
import Erro from "Paginas/Erro";
import PaginaPadrao from "Componentes/PaginaPadrao";
import styles from "./PostsRecomendado.module.css";
import PostCard from "Componentes/PostCard";

const Post = () => {
  const paramentros = useParams();
  const post = posts.find((item) => {
    return item.id === Number(paramentros.id);
  });

  if (!post) {
    return <Erro />;
  }

  // Para mostrar posts
  const postsRecomendados = posts
    .filter((post) => post.id !== Number(paramentros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>
                Outros posts para voçê
              </h2>
              <ul className={styles.postsRecomendados}>
              {
                postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ) )
              }
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
