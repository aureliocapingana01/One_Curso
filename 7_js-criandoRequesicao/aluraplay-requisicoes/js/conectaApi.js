const listaVideos = async () => {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
};

// Para importar em outro arquivo
export const conectaApi = {
  listaVideos,
};
