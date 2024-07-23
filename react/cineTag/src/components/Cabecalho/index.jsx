import { Link } from "react-router-dom";
import style from "./cabecalho.module.css";
import logo from "./logo.png";
import CabecalhoLink from "../CabecalhoLink";

const Cabecalho = () => {
  return (
    <header className={style.cabecalho}>
    
      <Link to='./'>
        <img src={logo} alt="logo do site" />
      </Link>
      <nav>
        <CabecalhoLink url='./'>
        Home
        </CabecalhoLink>
        <CabecalhoLink url='./Favoritos'>
        Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  );
};

export default Cabecalho;
