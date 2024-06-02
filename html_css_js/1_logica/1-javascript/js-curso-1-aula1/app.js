alert('Boas vindas ao jogo numero secreto')

let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1) //Para gerar um numero aleatorio entre 1 - 10

let tentativas = 1
let chuteUsuario 

while (chuteUsuario != numeroSecreto) {
     chuteUsuario = prompt(`Escolha um numero entre 1 á ${numeroMaximo}`)
     
     if (chuteUsuario == numeroSecreto) {
        break
    }
    else {
        if (chuteUsuario > numeroSecreto) {
            alert(`O número secreto é menor que ${chuteUsuario}`)
        } 
        else {
            alert(`O número secreto é maior que ${chuteUsuario}`)
            
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa'
alert(`Parabéns, o número secreto é ${numeroSecreto}, você descubriu com ${tentativas} ${palavraTentativa}`)