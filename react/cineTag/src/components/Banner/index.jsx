import styles from "./banner.module.css";

const Banner = ({ imagem }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('/image/banner-${imagem}.png')` }}
    ></div>
  );
};
export default Banner;
