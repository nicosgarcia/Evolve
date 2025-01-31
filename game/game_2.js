let numeroDialogo = 0;
let x = 0;

const caixaTexto = document.getElementById("caixaDeTexto");

function cena1() {
    game.classList.remove("game-fadeOut")
    game.classList.add("title-animation");

    game.onanimationend = function() {
        eggSong.pause();

        setTimeout(() => {},10000);

        guardiaoTempo.style.visibility = "visible";
        guardiaoTempo.src = "./pixelart/timeGuardianPortal.gif";

        setTimeout(() => {
            guardiaoTempo.style.visibility = "hidden";
            guardiaoIdle.style.visibility = "visible";
        }, 7000);
    }
}

function textBubble(content, importancia) {
    content.forEach(item => console.log(item));

    const textBubble = document.createElement("div");
    const paragrafoContent = document.createElement("p");

    textBubble.classList.add("textBubble");
    paragrafoContent.classList.add("paragrafoContent");

    caixaTexto.appendChild(textBubble); // Adiciona ao DOM imediatamente

    textBubble.addEventListener('click', function() {
        if (numeroDialogo != content.length) {
            paragrafoContent.innerHTML = content[numeroDialogo];
            numeroDialogo++;

        } else {
            textBubble.remove();

            switch (true) {
                case importancia == 1:
                    cena1();
            }
        }
    });

    textBubble.onanimationend = function() {
        textBubble.style.width = "80%";
        textBubble.style.height = "100px";
    }

    setTimeout(() => {
        paragrafoContent.innerHTML = content[0]; // Atualiza o conteúdo após 4s
        textBubble.appendChild(paragrafoContent); // Adiciona o texto
    }, 4000);
}