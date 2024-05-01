// Para alterar a cor do fundo
const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");

// Para alterar a imagem
const banner = document.querySelector(".app__image");

// Para alterar o texto
const titulo = document.querySelector(".app__title");

focoBt.addEventListener("click", () => {
  alterarAtributo("foco");
});

curtoBt.addEventListener("click", () => {
  alterarAtributo("descanso-curto");
});

longoBt.addEventListener("click", () => {
  alterarAtributo("descanso-longo");
});

const alterarAtributo = (atributo) => {

  html.setAttribute("data-contexto", atributo);
  banner.setAttribute("src", `/imagens/${atributo}.png`);
  switch (atributo) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;

    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada.<br>
      <strong class="app__title-strong">Faça uma pausa curta!.</strong>`;
      break;

    case "descanso-longo":
      titulo.innerHTML = `Hoara de volata à superfice.<br>
      <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      break;

    default:
      break;
  }
  
};
