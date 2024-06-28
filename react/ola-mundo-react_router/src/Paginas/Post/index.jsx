import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "Componentes/PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import "./post.css";

const Post = () => {
  const paramentros = useParams();
  const post = posts.find((item) => {
    return item.id === Number(paramentros.id);
  });

  if (!post) {
    return <h1>Post não encontrado....</h1>;
  }

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;
