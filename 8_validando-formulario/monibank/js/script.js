import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

// Para selecionar todos os campos obrigatorio do formulario
const camposDoFormulario = document.querySelectorAll("[required]");

// Para selecionaro oformulario e pegar os dados caso estiverem todos certos
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const listaRespostas = {
    nome: e.target.elements["nome"].value,
    email: e.target.elements["email"].value,
    rg: e.target.elements["rg"].value,
    cpf: e.target.elements["cpf"].value,
    aniversario: e.target.elements["aniversario"].value,
  };

  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

  window.location.href = "./abrir-conta-form-2.html";
});

// blur qndo tira foco do input, clica fora
camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));

  // para tirar a msg padrao dos erro dos campos
  campo.addEventListener("invalid", (e) => e.preventDefault());
});

// Possiveis erros e suas mensangens
const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];
// Mensagens customizadas para os erros
const mensagens = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido.",
  },
  rg: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caractéres suficientes.",
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes.",
  },
  aniversario: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar.",
  },
  termos: {
    valueMissing: "Você deve aceitar nossos termos antes de continuar.",
  },
};

const verificaCampo = (campo) => {
  let mensagem = "";

  // Para limpa o erro, se o campo tiver certo
  campo.setCustomValidity("");

  // ver o cpf
  if (campo.name == "cpf" && campo.value.length >= 11) {
    ehUmCPF(campo);
  }

  // ver se é maior de idade
  if (campo.name == "aniversario" && campo.value != "") {
    ehMaiorDeIdade(campo);
  }

  tiposDeErro.forEach((e) => {
    if (campo.validity[e]) {
      mensagem = mensagens[campo.name][e];
      console.log(mensagem);
    }
  });

  // Para a mensafem de erro aparecer an tela
  const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
  }
};
