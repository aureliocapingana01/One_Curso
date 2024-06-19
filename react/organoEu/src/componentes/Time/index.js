// import Colaborador from "../Colaborador";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const secundaria = { backgroundColor: props.secundaria };
  const primaria = { borderColor: props.primaria };

  return (
    <section className="time" style={secundaria}>
      <h3 style={primaria}>{props.nomeTime}</h3>
      <div className="funcionariocss">
        {props.funcionarios.map((funcionario) => (
          <Colaborador corDeFundo={props.primaria}
            key={funcionario.nome}
            nome={funcionario.nome}
            cargo={funcionario.cargo}
            imagem={funcionario.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
