import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-form]")

const criarVideo = async (e) => {
  e.preventDefault();

  const imagem = document.querySelector("[data-image]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-title]").value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try {
    await conectaApi.inserirVideo(titulo, descricao, url, imagem);
  
    // Para dar feedback se for enviado com sucesso
    window.location.href = "../pages/envio-concluido.html";
    
  } catch (e) {
    alert(e)
  }
};

// Envento de click para capturar, somentevdepois de preencher

formulario.addEventListener("submit", (e) => criarVideo(e));
