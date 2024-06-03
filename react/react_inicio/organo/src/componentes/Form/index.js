import CampoTexto from "../CampoTexto";
import './Form.css'

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para um novo funcionário</h2>

        <CampoTexto label="Nome" placeholder="Digite o nome" />
        <CampoTexto label="Cargo" placeholder="Digite o cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereco da imagem" />
      </form>
    </section>
  );
};

export default Form;
