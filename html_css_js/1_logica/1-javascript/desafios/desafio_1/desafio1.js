/*
Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.*/

let h1 = document.querySelector('h1')
h1.innerHTML = 'Hora do primeiro desafio'

/* 
Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
*/

const buttonConsole = () => {
    console.log('UPS, O botão foi clicado')
}

/*
Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
*/

const buttonAlert = () => {
    alert('Eu, amo JS')
}

/*
Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
*/

const buttonPrompt = () => {
    let cidade = prompt('Diga o nome da sua cidade: ')
    alert(`Eu estive em ${cidade} e lembrei de você`)
} 
/*
Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
*/ 

const buttonSoma = () => {
    let primeiroNumero = Number(prompt('Digite primeiro número: '))
    let segundoNumero = Number(prompt('Digite segundo número: '))    
    let soma = primeiroNumero + segundoNumero

    alert(`A soma dos números é : ${soma}`)
}