import { ImgBanner, TituloBanner } from "./Estilo";

const Banner = ({ texto, img }) => {
  return (
    <ImgBanner $backgroundImage={img}>
      <TituloBanner>{texto}</TituloBanner>
    </ImgBanner>
  );
};

export default Banner;
