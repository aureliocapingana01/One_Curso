let cep = document.querySelector("#cep");

// focusout qndo é clicado pra fora
cep.addEventListener("focusout", () => buscarEndereco(cep.value));

const buscarEndereco = async (cep) => {
  let msgErro = document.querySelector(".erro");
  msgErro.innerHTML = "";

  try {
    let consultarCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultarCEPConvertida = await consultarCEP.json();
    if (consultarCEPConvertida.erro) {
      throw Error("CEP não existe");
    }

    // campos do formulariol pra preencher
    let cidade = document.querySelector("#cidade");
    let bairro = document.querySelector("#bairro");
    let logradouro = document.querySelector("#endereco");
    let estado = document.querySelector("#estado");

    cidade.value = consultarCEPConvertida.localidade;
    bairro.value = consultarCEPConvertida.bairro;
    logradouro.value = consultarCEPConvertida.logradouro;
    estado.value = consultarCEPConvertida.uf;

    console.log(consultarCEPConvertida);
    return consultarCEPConvertida;
  } catch (erro) {
    msgErro.innerHTML = `
    <p><strong>CEP invalido, tente novamente</p></strong>
     `;
    console.log(erro);
  }
};

// let ceps = ["01001000", "01011000", "01111000"];
// let conjuntoDeCeps = ceps.map((valores) => buscarEndereco(valores));

// Promise.all(conjuntoDeCeps).then((res) => console.log(res));

// Uso do promise all, para buscar varios ceps ai mesmo tempo
// *********************************************************
/*
const buscarEndereco = async (cep) => {
  try {
    let consultarCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultarCEPConvertida = await consultarCEP.json();
    if (consultarCEPConvertida.erro) {
      throw Error("CEP não existe");
    }
    console.log(consultarCEPConvertida);
    return consultarCEPConvertida;
  } catch (erro) {
    console.log(erro);
  }
};

let ceps = ["01001000", "01011000", "01111000"];
let conjuntoDeCeps = ceps.map((valores) => buscarEndereco(valores));

Promise.all(conjuntoDeCeps).then((res) => console.log(res));
*/
