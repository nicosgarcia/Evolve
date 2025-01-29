const caixaTexto = document.getElementById("caixaDeTexto");

function textBubble(content) {
    let textBubble = document.createElement("div");
    let paragrafoContent = document.createElement("p");

    caixaTexto.appendChild(textBubble);
    paragrafoContent.innerHTML = content;
    paragrafoContent.classList.add("paragrafoContent");

    textBubble.classList.add("textBubble");

    textBubble.onanimationend = function() {
        textBubble.style.width = "80%";
        textBubble.style.height = "100px";
    }

    setTimeout(() => {
        textBubble.appendChild(paragrafoContent);
    }, 4000)
}