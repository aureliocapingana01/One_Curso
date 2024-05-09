const listaVideos = async () => {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
};

// Funcao que permite inserir novos videos
const inserirVideo = async (titulo, descricao, url, imagem) => {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });

  // Para possivel erro ao inserir novos videos
  // Se a concxao foi ok, estiver boa
  if (!conexao.ok) {
    throw new Error ("Não foi possivel enviar o video")
  }
  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
};

// Funca que permite pesquisar videos
const buscaVideo = async (termoDeBusca) => {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
  
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
};


// Para importar em outro arquivo
export const conectaApi = {
  listaVideos,
  inserirVideo,
  buscaVideo,
};

// {
//   "usuario": [
//     {
//       "id": 1,
//       "nome": "Guilherme Henrique",
//       "idade": "24",
//       "email": "guilherme_cake@gmail.com",
//     },
//     {
//       "id": 2,
//       "nome": "Camila Fernanda Machado Alves",
//       "idade": "22",
//       "email": "camila@mila.ops",
//     },
//     {
//       "id": 3,
//       "nome": "Jeniffer Bittencourt",
//       "idade": "22",
//       "email": "jeniffer@jeniblo.dev",
//     },
//   ]
// }
