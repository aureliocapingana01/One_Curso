import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const inicial = [
    {
      nome: 'Aurélio Capingana',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
  ]

  const [funcionarios, setFuncionarios] = useState(inicial);

  const addFuncionario = (funcionario) => {
    // debugger;
    setFuncionarios([...funcionarios, funcionario]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((time) => time.nome)}
        funcionarioCadastrado={(funcionario) => addFuncionario(funcionario)}
      />
      {times.map((time) => (
        <Time
        key={time.nomeTime}
        nomeTime={time.nome}
        primaria={time.corPrimaria}
        secundaria={time.corSecundaria}
        funcionarios={funcionarios.filter(
          (funcionario) => funcionario.time === time.nome
        )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
