import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Form.css";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const salvar = (e) => {
    e.preventDefault();
    props.funcionarioCadastrado({ nome, cargo, imagem, time });

    setNome("")
    setCargo("")
    setImagem("")
    setTime ("")
  };

  return (
    <section className="form">
      <form onSubmit={salvar}>
        <h2>Preencha os dados para um novo funcionário</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome"
          texto={nome}
          alterado={(texto) => setNome(texto)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o cargo"
          texto={cargo}
          alterado={(texto) => setCargo(texto)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o endereco da imagem"
          texto={imagem}
          alterado={(texto) => setImagem(texto)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          texto={time}
          alterado={(texto) => setTime(texto)}
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Form;
