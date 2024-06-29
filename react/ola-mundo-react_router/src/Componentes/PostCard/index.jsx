import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import BotaoPrincipal from "Componentes/BotaoPrincipal";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assests/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.titulo}>

        </h2>

        <BotaoPrincipal>
          Ler
        </BotaoPrincipal>
      </div>
    </Link>
  );
};
export default PostCard;
