// VARIÁVEIS
let contagemContador = 1;
let contador = 0;
let multiplicador = 0;
let multiEvolve = 1;
let transcender = 1;
let acrescentador = 1;
let intervalo = null;

// SOUNDS
const audio = document.getElementById("click");
const introSongAudio = document.getElementById("titleMusic");
const eggSong = document.getElementById("eggMusic");
const coletarSoundEffect = document.getElementById("coletarSound");
const evSoundAudio = document.getElementById("gameMusic");
const guardianSong = document.getElementById("guardianSong");
const passarDialogo = document.getElementById("passarDialogo");
const portal = document.getElementById("portal");

// BOTÕES
const specialButtonWait = document.getElementById("evolve");
const specialButton = document.getElementById("primeiroUp");
const specialButtonTranscend = document.getElementById("segundoUp");
const specialButtonEvolution = document.getElementById("primeiraEv");
const specialButtonPrimeiroEst = document.getElementById("primeiroEst");
const specialButtonFeed = document.getElementById("feed");

// GIFS AND IMAGES
const guardiaoTempo = document.getElementById("animacaoGuardiao");
const guardiaoIdle = document.getElementById("guardiaoIdle");
const gifImg = document.getElementById("egg-moving");
const gifImgHatch = document.getElementById("egg-hatch");
const eggStoping = document.getElementById("egg-stop");
const eggIdle = document.getElementById("egg-idle");

const menu = document.getElementById("menu");
const game = document.getElementById("game");

// PONTOS PARA APARECER OS BOTÕES
let songCheck = 0;
let pontosParaAparecer = 10;
let pontosEvolution = 50;
let pontosPrimeiroEst = 100;
let pontosTranscend = 1000;

// FEED
let feedCheck = 0;
let FEED = 150;
let feedCount = 0;

// CÓDIGO
audio.volume = 0.2;
coletarSoundEffect.volume = 0.5;

function startGame() {
    audio.play();

    menu.classList.add("title-animation");

    menu.onanimationend = function () {
        menu.remove()
        game.style.visibility = "visible";
        game.classList.remove("gamePosition");
        game.classList.add("game-fadeOut");
    }
}
game.onanimationend = function() {
    if (songCheck == 0) {
        evSoundAudio.play();
    }
    songCheck = 1;
}

function checarAparicao(animacao, pontos) {
    if (contador >= pontos) {
        document.getElementById(animacao).style.visibility = "visible";
    }

    contador = contador - pontos;
    atualizarScore();
}

function atualizarScore() {
  document.getElementById("score").innerText = contador;
}

function checarCompra() {
  if (contador < pontosParaAparecer) {
    specialButton.style.visibility = "hidden";
    specialButton.style.pointerEvents = "none";
  }

  if (contador < pontosTranscend) {
    specialButtonTranscend.style.visibility = "hidden";
    specialButtonTranscend.style.pointerEvents = "none";
  }

  if (contador < pontosEvolution) {
    specialButtonEvolution.style.visibility = "hidden";
    specialButtonEvolution.style.pointerEvents = "none";
  }

  if (contador < pontosPrimeiroEst) {
    specialButtonPrimeiroEst.style.visibility = "hidden";
    specialButtonPrimeiroEst.style.pointerEvents = "none";
  }

  if (contador < FEED) {
    specialButtonFeed.style.visibility = "hidden";
    specialButtonFeed.style.pointerEvents = "none";
  }
}

function coletar() {
    coletarSoundEffect.currentTime = 0;
    coletarSoundEffect.play();

    contador = contador + contagemContador;
    atualizarScore()

    const divContainer = document.getElementById("container")
    const texto = document.createElement("div");
    texto.classList.add("pontos");
    texto.textContent = contagemContador;

    divContainer.appendChild(texto);

    setTimeout(() => {
        texto.remove();
    }, 1000);

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

    if (contador >= pontosPrimeiroEst) {
        specialButtonPrimeiroEst.style.visibility = "visible";
        specialButtonPrimeiroEst.style.pointerEvents = "auto";
    }

    if (contador >= FEED && feedCheck >= 1) {
        specialButtonFeed.style.visibility = "visible";
        specialButtonFeed.style.pointerEvents = "auto";
  }
}

function primeiroUp() {
    audio.currentTime = 0;
    audio.play();

    multiplicador++;
    contador = contador - pontosParaAparecer;
    contagemContador++;
    atualizarScore()

    pontosParaAparecer = Math.ceil(pontosParaAparecer * 1.5);
    specialButton.style.visibility = "hidden";
    specialButton.style.pointerEvents = "none";

    checarCompra();
}

function segundoUp() {
    audio.currentTime = 0;
    audio.play();

    transcender = 2;
    contador = contador - Math.floor(pontosTranscend / 2);
    contagemContador = Math.floor(contagemContador * 1.5) ;
    atualizarScore()

    pontosTranscend = Math.ceil(pontosTranscend * 1.5);
    specialButtonTranscend.style.visibility = "hidden";
    specialButtonTranscend.style.pointerEvents = "none";

    checarCompra()
}

function primeiraEv() {
    audio.currentTime = 0;
    audio.play();

    acrescentador = 2 * acrescentador;
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

    checarCompra();
}

function primeiroEst() {
    audio.currentTime = 0;
    audio.play();

    checarAparicao("egg-moving", 100)

    specialButtonPrimeiroEst.style.visibility = "hidden";
    specialButtonPrimeiroEst.style.pointerEvents = "none";

    pontosPrimeiroEst = NaN;
    feedCheck = 1;

    checarCompra();
}

function feed() {
    audio.currentTime = 0;
    audio.play();

    feedCount++;

    contador = contador - FEED;

    atualizarScore();
    FEED = FEED * 2;

    specialButtonFeed.style.visibility = "hidden";
    specialButtonFeed.style.pointerEvents = "none";

    checarCompra();

    switch(true) {
        case feedCount == 3:
            gifImg.src = "/pixelart/eggcrack2.gif";
            break;

        case feedCount == 5:
            gifImg.src = "/pixelart/eggcrack3.gif";
            break;

        case feedCount == 7:
            gifImg.src = "/pixelart/eggcrack4.gif";
            break;

        case feedCount == 9:
            gifImg.src = "/pixelart/eggcrack5.gif";

            setTimeout(() => {
                eggStoping.style.visibility = "visible";
                gifImg.style.visibility = "hidden";
            }, 4800);
            break;

        case feedCount == 10:
            textBubble(dialogo1, 1)

            evSoundAudio.pause();

            eggSong.play();

            gifImgHatch.style.visibility = "visible";
            eggStoping.style.visibility = "hidden";

            setTimeout(() => {
                gifImgHatch.style.visibility = "hidden";
                eggIdle.style.visibility = "visible";
            }, 2300);
            break;
    }
}