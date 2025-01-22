let contador = 0;
let multiplicador = 0;
let transcender = 1;



let specialButton = document.getElementById("primeiroUp");
let specialButtonTranscend = document.getElementById("segundoUp");
let specialButtonEvolution = document.getElementById("primeiraEv");

let pontosEvolution = 50;
let pontosParaAparecer = 10;
let pontosTranscend = 1000;

function coletar() {

    contador = contador + 1 + (multiplicador * transcender);
    document.getElementById("score").innerText = contador;

    if (contador >= pontosParaAparecer) {

        specialButton.style.visibility = "visible";
        specialButton.style.pointerEvents = "auto";

    }

    if (contador >= pontosEvolution) {

        specialButtonEvolution.style.visibility = "visible";
        specialButtonEvolution.style.pointerEvents = "auto";

    }

    if (contador >= pontosTranscend) {

        specialButtonTranscend.style.visibility = "visible";
        specialButtonTranscend.style.pointerEvents = "auto";

    }
}

// Primeira Ev vai multiplicar o quanto o seu click vale e deletar o botão.

function primeiroUp() {

    multiplicador++;
    contador = parseInt(contador - pontosParaAparecer)
    document.getElementById("score").innerText = contador;

    pontosParaAparecer = pontosParaAparecer * 1.5;

    specialButton.style.visibility = "hidden";
    specialButton.style.pointerEvents = "none";

}

function segundoUp() {

    transcender = transcender + 2;
    contador = parseInt(contador - (pontosTranscend/2))
    document.getElementById("score").innerText = contador;

    pontosTranscend = pontosTranscend * 1.5;

    specialButtonTranscend.style.visibility = "hidden";
    specialButtonTranscend.style.pointerEvents = "none";

}

acrescentador = 0;

function primeiraEv() {

    acrescentador++;
    pontosEvolution = parseInt(pontosEvolution * 1.75);

    if (intervalo === null) {
        setInterval(() => {

            contador = contador + acrescentador;
            document.getElementById("score").innerText = contador;

        }, 1000);
    }

    specialButtonEvolution.style.visibility = "hidden";
    specialButtonEvolution.style.pointerEvents = "none";
}