import { conectaApi } from "./conectaApi.js";

// data atribut
const lista = document.querySelector("[data-list]");

export default function constroiCard(titulo, descricao, url, imagem){
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `
      <iframe width="100%" height="72%" src="${url}"
      title="${titulo}" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="descricao-video">
      <img src="${imagem}" alt="logo canal alura">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
    </div>
  `;
  return video;
};

// Funcao para consumir o que veem da importacao / conectaAPI
const listaVideos = async () => {
  try {
    const listApi = await conectaApi.listaVideos();
    listApi.forEach((element) =>
      lista.appendChild(
        constroiCard(
          element.titulo,
          element.descricao,
          element.url,
          element.imagem
        )
      )
    );
    
  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possivel carregar os videos</h2>`
  }
};

listaVideos();
