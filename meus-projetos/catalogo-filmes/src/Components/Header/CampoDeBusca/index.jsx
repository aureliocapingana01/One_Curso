import { Container} from "./Estilo";
// import lupa from "../../../../public/lupa.png";

export const CampoDeBusca = (props) => {
  return (
    <Container>
      <CampoDeBusca type="text" placeholder="Acha o que deseja" {...props} />
      {/* <IconeLupa src={lupa} alt="" /> */}
    </Container>
  );
};
