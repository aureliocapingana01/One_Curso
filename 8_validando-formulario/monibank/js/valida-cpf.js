export default function ehUmCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, "");

  if (
    validaNumerosRepetidos(cpf) ||
    vsalidaPrimerioDigito(cpf) ||
    vsalidaSegundoDigito(cpf)
  ) {
    campo.setCustomValidity("Este CPF não é valido");
  }
}

const validaNumerosRepetidos = (cpf) => {
  const numeroRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  return numeroRepetidos.includes(cpf);
};

// funcao para validar o primeiro digito do cpf
const vsalidaPrimerioDigito = (cpf) => {
  let soma = 0;
  let multiplicador = 10;

  for (let tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 1) {
    soma = 0;
  }

  return soma != cpf[9];
};

// funcao para validar o segundo digito do cpf
const vsalidaSegundoDigito = (cpf) => {
  let soma = 0;
  let multiplicador = 11;

  for (let tamanho = 0; tamanho < 10; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 1) {
    soma = 0;
  }

  return soma != cpf[10];
};
