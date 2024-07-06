import { Tag, TagDiv, TagTitulo } from "./Estilo";
import tags from "./tags.json";

const Tags = () => {
  return (
    <TagDiv>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.titulo}</Tag>
      ))}
    </TagDiv>
  );
};
export default Tags;
