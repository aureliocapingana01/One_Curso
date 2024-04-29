const tocaSom = (audioId) => {
  const elemetId = document.querySelector(audioId);

  if (elemetId != null && elemetId.localName === "audio") {
    elemetId.play();
  } else {
    alert("Elemento não encontrado. Digite novamente");
  }
  
};

const listaTeclado = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaTeclado.length; contador++) {
  const tecla = listaTeclado[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  tecla.onkeydown = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = () => {
    tecla.classList.remove("ativa");
  };
}
