let vitorias = 40
let derrotas = 12
let nivel
let saldoVitorias

saldoVitorias = calcularSaldo()

function calcularSaldo(vitorias,derrotas){
    saldoVitorias = vitorias - derrotas
    calcularNivel()
}

function calcularNivel(){
    if(saldoVitorias < 10){
        nivel = "Ferro"
    } else if(saldoVitorias >= 10 && saldoVitorias <= 20){
        nivel = "Bronze"
    } else if(saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata"
    }else if(saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = "Ouro"
    }else if(saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = "Diamante"
    }else if(saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
}

calcularSaldo(40,12)

console.log(`O Herói tem o saldo de ${saldoVitorias} está no nível de ${nivel}.`)
