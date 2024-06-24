import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

const Menu = () => {
  // const localizacao = useLocation();
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/sobremim">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
};
export default Menu;
