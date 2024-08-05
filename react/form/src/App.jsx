
import useForm from "./Hook/userForm";
import { Button, Div, DivForm, Form, Input } from "./StyloApp";

// 1) Copiar o custom hook useForm para a pasta de hooks
// 2) Importar o hook na tela que desejarmos
// 3) Criar os meus inputs
// 4) Criar um botão de enviar formulário
// 5) Colocar os inputs e os botões dentro da tag <form>
// 6) Criar função de submissão e colocar o event.preventDefault() nela
// 7) Chamar a função de submissão no onSubmit da tag form
// 8) Usar o hook useForm: colocar os parâmetros recebidos {form, onChange, cleanFields}
// 9) Usar o hook useForm: passar o objeto com o estado inicial como parâmetro
// OBS: O objeto de estado inicial deve ser igual ao pedido pela sua API, caso vá enviar o form para ela
// 10) Colocar o estado nas propriedades value dos inputs (form.nomeDaPropriedade)
// 11) Colocar a propriedade name nos inputs, seguindo os nomes escolhidos no estado inicial
// 12) Colocar a função de onChande na propriedade onChange dos inputs
// 13) Fazer as validações
// - Se o campo é obrigatório, colocar required
// - Colocar o tipo de cada campo
// - Colocar patterns e titles nos campos onde precisar de uma validação específica

const App = () => {
  const { form, onChange, cleanFields } = useForm({
    nome: "",
    idade: "",
    email: ""
  });

  const cadastrar = (e) => {
    e.preventDefault();
    console.log("Formulário enviado!", form);
    cleanFields();
  };

  return (
    <Div>
      <h1>Cadastro</h1>
      <Form onSubmit={cadastrar}>
        <DivForm>
          <Input
            name={"nome"}
            value={form.nome}
            onChange={onChange}
            placeholder="Nome"
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />
          <Input
            name={"idade"}
            value={form.idade}
            onChange={onChange}
            placeholder="Idade"
            required
            type={"number"}
            min={18}
          />
          <Input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            required
            type={"email"}
          />
        </DivForm>
        <Button>Cadastrar</Button>
      </Form>
    </Div>
  );
};

export default App;
