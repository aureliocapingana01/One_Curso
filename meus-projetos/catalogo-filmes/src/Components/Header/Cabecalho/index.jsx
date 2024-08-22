import logo from '../../../../public/logoBranco.png'
import { CampoDeBusca } from '../CampoDeBusca/Estilo';
import { Div } from './Estilo';


export const Cabecalho = () => {
  return (
    <Div>
     <img src={logo} alt="logo do cine time" />
     <CampoDeBusca />
    </Div>
    
  );
};
