import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function bucarVideo(e) {
  e.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);

  const lista = document.querySelector("[data-list]");

  // Para limpa a tela na busca de um video
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  // console.log(busca)
  busca.forEach((element) =>
    lista.appendChild(
      constroiCard(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem
      )
    )
  );

  // Para capturar possivel erro
  if (busca.length == 0) {
    lista.innerHTML = `<h2 class = "mensagem__titulo"> Não existe video com esse nome</h2>`
  }
};

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", (e) => bucarVideo(e));
