import "./CampoTexto.css";

const CampoTexto = (props) => {

  const digitado = e => {
    props.alterado(e.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.texto} onChange={digitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
