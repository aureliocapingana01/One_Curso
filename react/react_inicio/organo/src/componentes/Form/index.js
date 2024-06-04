import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Form.css'

const Form = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX Design',
    'Mobile',
    'Inovação e Gestão',
  ]
  
  const salvar = e => {
    e.preventDefault()
    console.log('formulário salvo')
  }

  return (
    <section className="form">
      <form onSubmit={salvar}>
        <h2>Preencha os dados para um novo funcionário</h2>

        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o cargo" />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="Informe o endereco da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Form;
