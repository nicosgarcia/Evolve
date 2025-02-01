let numeroDialogo = 0;
let cena1Executada = false;

const caixaTexto = document.getElementById("caixaDeTexto");

function textBubble(content, importancia) {
    caixaTexto.style.zIndex = "9999";

    const textBubble = document.createElement("div");
    const paragrafoContent = document.createElement("p");

    textBubble.classList.add("textBubble");
    paragrafoContent.classList.add("paragrafoContent");

    caixaTexto.appendChild(textBubble); // Adiciona ao DOM imediatamente

    textBubble.addEventListener('click', function() {
        if (numeroDialogo < content.length - 1) {
            passarDialogo.currentTime = 0;
            passarDialogo.play();
            paragrafoContent.innerHTML = content[numeroDialogo + 1];
            numeroDialogo++;
        } else {
            caixaTexto.style.zIndex = "0";
            textBubble.remove();

            numeroDialogo = 0;

            if (importancia === 1 && !cena1Executada) {
                cena1();
            }
        }
    });

    textBubble.onanimationend = function() {
        textBubble.style.width = "80%";
        textBubble.style.height = "100px";
    };

    setTimeout(() => {
        paragrafoContent.innerHTML = content[numeroDialogo]; // Atualiza o conteúdo após 4s
        textBubble.appendChild(paragrafoContent); // Adiciona o texto
    }, 4000);
}

function esperar(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000));
}

function cena1() {
    if (cena1Executada) {
        console.log("cena1 já foi executada. Ignorando...");
        return; // Sai da função se já foi executada
    }

    cena1Executada = true; // Marca como executada

    eggIdle.src = "./pixelart/eggcrack10.gif";

    setTimeout(() => {
        game.classList.remove("game-fadeOut");
        game.classList.add("disappear");
    }, 900);

    const onAnimationEndHandler = async function() {
        // Remove o event listener para evitar múltiplas execuções
        game.removeEventListener("animationend", onAnimationEndHandler);

        eggSong.pause();

        await esperar(10); // Espera 10 segundos

        portal.play();

        guardiaoTempo.style.visibility = "visible";
        guardiaoTempo.src = "./pixelart/timeGuardianPortal.gif";

        setTimeout(() => {
            guardianSong.play();

            guardiaoTempo.style.visibility = "hidden";
            guardiaoIdle.style.visibility = "visible";

            textBubble(dialogo2, 0);
        }, 7100);


    };

    // Adiciona o event listener
    game.addEventListener("animationend", onAnimationEndHandler);
}