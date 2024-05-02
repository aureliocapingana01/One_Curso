// Para alterar a cor do fundo
const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const botoes = document.querySelectorAll(".app__card-button");

// Para alterar a imagem
const banner = document.querySelector(".app__image");

// Para alterar o texto da tela
const titulo = document.querySelector(".app__title");

// temporizador, criar intrvalo de tempo
let time = 1500;

// Paera iniciar o temporizador
let intervaloId = null;

const startPauseBt = document.querySelector("#start-pause");

// Variaveis para as musicas do temporizador
const musicPlay = new Audio("./sons/play.wav");
const musicPause = new Audio("./sons/pause.mp3");
const musicBeep = new Audio("./sons/beep.mp3");

// Para pegar o botao comecar e pausar
const iniciarOuPausarBt = document.querySelector("span");

// Para mostrar o tempo na tela
const tempoNaTela = document.querySelector("#timer");

// Para trocar a imagem do botao comecar e pausar
const imgBt = document.querySelector(".app__card-primary-butto-icon");

// Para tocar a musica
//  também podemos pegar musica com js com  o readFile
const musicaInput = document.querySelector("#alternar-musica");
const music = new Audio("/sons/luna-rise-part-one.mp3");
music.loop = true;

// change evento usanso para trabalhar com inputs, checkebox
musicaInput.addEventListener("change", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

focoBt.addEventListener("click", () => {
  time = 1500;
  alterarAtributo("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  time = 300;
  alterarAtributo("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  time = 900;
  alterarAtributo("descanso-longo");
  longoBt.classList.add("active");
});

// Funcao para alterar dinamicamente
const alterarAtributo = (atributo) => {
  mostrarTempo();
  // Para remover o ativo nos botoes
  botoes.forEach((atributo) => {
    atributo.classList.remove("active");
  });

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

// Funcao para o tempo, temporizador
const contagemDoTime = () => {
  if (time <= 0) {
    musicBeep.play()
    alert("Tempo finalizado");
    zeraTime();
    return;
  }
  time -= 1;
  mostrarTempo();
 
};

/* o setInterval recebe 2 parametros,
1 - o metodo que sera executado
2 - o tempo que será executado 
*/
const iniciaOuPausarTemprizador = () => {
  if (intervaloId) {
    musicPause.play();
    zeraTime();
    return;
  }
  musicPlay.play();
  intervaloId = setInterval(contagemDoTime, 1000);
  iniciarOuPausarBt.textContent = "Pausar";
  imgBt.setAttribute("src", "./imagens/pause.png");
};
startPauseBt.addEventListener("click", iniciaOuPausarTemprizador);

function zeraTime() {
  clearInterval(intervaloId);
  iniciarOuPausarBt.textContent = "começar";
  imgBt.setAttribute("src", "./imagens/play_arrow.png");
  intervaloId = null;
}

// Funcao para mostrar o tempo na tela
const mostrarTempo = () => {
  const tempo = new Date(time * 1000);
  const tempoFormatado = tempo.toLocaleString("pt-br", {
    minute: "2-digit",
    second: "2-digit",
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
};

mostrarTempo();
