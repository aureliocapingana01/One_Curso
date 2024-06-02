/* 1 - Criar uma função que exibe "Olá, mundo!" no console.*/
const helloWord = () => {
    console.log('Olá, mundo!')
}

helloWord()

/* 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.*/
const exibirNome = nome => {
    console.log(`Olá ${nome}`)
}

exibirNome('Aurélio')

/* 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.*/
let user = Number(prompt('digite um numero: '))
const dobraNumero = numero => {
    return numero ** 2
}

console.log('o dobro deste numero é : ', dobraNumero(user))

/* 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.*/
let nota1 = Number(prompt('digite a primeira nota: '))
let nota2 = Number(prompt('digite a segunda nota: '))
let nota3 = Number(prompt('digite a terceira nota: '))

const media = (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3
}

console.log('A media da sua notas é : ', media(nota1, nota2, nota3))

/* 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.*/
let primeiroNumero = Number(prompt('Digite o primeiro número: '))
let segundoNumro = Number(prompt('Digite o segundo número: ')) 

const numeroMaior = (num1, num2) => {
    return num1 > num2 ? num1 : num2
}

console.log('O número maior é ', numeroMaior(primeiroNumero, segundoNumro))

/* 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo*/
let numero = Number(prompt('Digite um número: '))

const retornaMultiplicacao = numero => {
    return numero * numero
}

console.log(retornaMultiplicacao(numero))