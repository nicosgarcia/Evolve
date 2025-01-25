let contador = 0;
let multiplicador = 0;
let transcender = 1;
let acrescentador = 0;
let intervalo = null;

const audio = document.getElementById("click");
const specialButton = document.getElementById("primeiroUp");
const specialButtonTranscend = document.getElementById("segundoUp");
const specialButtonEvolution = document.getElementById("primeiraEv");

let pontosParaAparecer = 10;
let pontosEvolution = 50;
let pontosTranscend = 1000;

audio.volume = 0.2;

function checarAparicao(animacao, pontos) {

    if (contador >= pontos) {
        document.getElementById(animacao).style.visibility = "visible";
    }
}

function atualizarScore() {
  document.getElementById("score").innerText = contador;
}


function coletar() {
  contador = contador + 1 + (multiplicador * transcender);
  atualizarScore()

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

  checarAparicao("egg-moving", 20)
}

function primeiroUp() {

  audio.currentTime = 0;
  audio.play();

  multiplicador++;
  contador = contador - pontosParaAparecer;
  atualizarScore()

  pontosParaAparecer = Math.ceil(pontosParaAparecer * 1.5);
  specialButton.style.visibility = "hidden";
  specialButton.style.pointerEvents = "none";

  if (contador < pontosTranscend) {
    specialButtonTranscend.style.visibility = "hidden";
    specialButtonTranscend.style.pointerEvents = "none";
  }

  if (contador < pontosEvolution) {
    specialButtonEvolution.style.visibility = "hidden";
    specialButtonEvolution.style.pointerEvents = "none";
  }
}

function segundoUp() {

  audio.currentTime = 0;
  audio.play();

  transcender = transcender + 2;
  contador = contador - Math.floor(pontosTranscend / 2);
  atualizarScore()

  pontosTranscend = Math.ceil(pontosTranscend * 1.5);
  specialButtonTranscend.style.visibility = "hidden";
  specialButtonTranscend.style.pointerEvents = "none";

  if (contador < pontosParaAparecer) {
    specialButton.style.visibility = "hidden";
    specialButton.style.pointerEvents = "none";
  }

  if (contador < pontosEvolution) {
    specialButtonEvolution.style.visibility = "hidden";
    specialButtonEvolution.style.pointerEvents = "none";
  }
}

function primeiraEv() {

  audio.currentTime = 0;
  audio.play();

  acrescentador++;
  contador = contador - Math.floor(pontosEvolution / 2);
  atualizarScore()
  pontosEvolution = Math.ceil(pontosEvolution * 1.75);

  if (intervalo === null) {
    intervalo = setInterval(() => {
      contador = contador + acrescentador;
      document.getElementById("score").innerText = contador;
    }, 1000);
  }

  specialButtonEvolution.style.visibility = "hidden";
  specialButtonEvolution.style.pointerEvents = "none";

  if (contador < pontosParaAparecer) {
    specialButton.style.visibility = "hidden";
    specialButton.style.pointerEvents = "none";
  }

  if (contador < pontosTranscend) {
    specialButtonTranscend.style.visibility = "hidden";
    specialButtonTranscend.style.pointerEvents = "none";
  }
}