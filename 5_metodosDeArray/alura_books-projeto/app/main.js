let livros = [];
const endpointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

const sectionInserirLivros = document.querySelector('#livros')

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  console.log(livros);
  livrosNaTela(livros)
};

const livrosNaTela = (listaDeLivros) => {
  listaDeLivros.forEach(itemLivro => {
    sectionInserirLivros.innerHTML += `
    <div class="livro">
    <img class="livro__imagens" src="${itemLivro.imagem} "
      alt="${itemLivro.alt} " />
    <h2 class="livro__titulo">
     ${itemLivro.titulo}
    </h2>
    <p class="livro__descricao">${itemLivro.autor} </p>
    <p class="livro__preco" id="preco">${itemLivro.preco} </p>
    <div class="tags">
      <span class="tag">${itemLivro.categoria} </span>
    </div>
  </div>
    `
  });
}
