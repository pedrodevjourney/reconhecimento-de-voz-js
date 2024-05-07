function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (ChuteForInvalido(numero)) {
        if(chute.toUpperCase()=== "GAME OVER"){
            document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black"
        }else{
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
}

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></
    i></div>
    `
    } else {
        elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></
    i></div>
    `
    }
}

function ChuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero < menorValor || numero > maiorValor
}

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
