// ======================================================
// GEOVANNA XV
// Script Principal
// ======================================================


// ======================================================
// ELEMENTOS
// ======================================================

const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");

// Vídeo
const video = document.getElementById("video");

// Hotspots
const hotspots = document.getElementById("hotspots");

const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnGrandeDia = document.getElementById("btnGrandeDia");
const btnLocalizacao = document.getElementById("btnLocalizacao");
const btnDressCode = document.getElementById("btnDressCode");
const btnPresentes = document.getElementById("btnPresentes");

// Modal
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const modalButton = document.getElementById("modalButton");
const modalButtonIcon = document.getElementById("modalButtonIcon");
const modalButtonText = document.getElementById("modalButtonText");


// ======================================================
// CONTROLE
// ======================================================

let iniciou = false;
let hotspotsAtivos = false;


// ======================================================
// INICIAR VÍDEO
// ======================================================

startButton.addEventListener("click", async () => {

    if(iniciou) return;

    iniciou = true;

    intro.classList.add("hide");

    try{

        await video.play();

    }catch(error){

        console.error(error);

    }

});

video.addEventListener("playing", () => {
    intro.classList.add("hide");
});

window.addEventListener("load", () => agendarAtualizacaoPlayer());

window.addEventListener("resize", () => agendarAtualizacaoPlayer());

video.addEventListener("loadedmetadata", () => agendarAtualizacaoPlayer());

video.addEventListener("play", () => agendarAtualizacaoPlayer());

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        agendarAtualizacaoPlayer(true);
    }
});

window.addEventListener("pageshow", () => agendarAtualizacaoPlayer(true));

window.addEventListener("focus", () => agendarAtualizacaoPlayer(true));

if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", () => agendarAtualizacaoPlayer());
    window.visualViewport.addEventListener("scroll", () => agendarAtualizacaoPlayer());
}

// ======================================================
// ATIVAR HOTSPOTS
// ======================================================

video.addEventListener("timeupdate", () => {

    if (!hotspotsAtivos && video.currentTime >= 16) {

        hotspotsAtivos = true;

        hotspots.style.pointerEvents = "auto";

        console.log("Hotspots ativados");

    }

});


// ======================================================
// FINAL DO VÍDEO
// ======================================================

video.addEventListener("ended", () => {

    console.log("Vídeo finalizado.");

});


// ======================================================
// EFEITO MÁGICO
// ======================================================

function animarBotao(botao){

    botao.classList.remove("magic-click");

    void botao.offsetWidth;

    botao.classList.add("magic-click");

}


// ======================================================
// ABRIR MODAL
// ======================================================

function abrirModal(config){

    // -------------------
    // Imagem
    // -------------------

    if(config.image){

        modalImage.src = config.image;

        modalImage.style.display = "block";

    }else{

        modalImage.style.display = "none";

    }

    // -------------------
    // Título
    // -------------------

    modalTitle.innerHTML = config.title;

    // -------------------
    // Texto
    // -------------------

    modalText.innerHTML = config.text;

    // -------------------
    // Botão
    // -------------------

    if(config.button){

        modalButton.style.display = "flex";

        modalButtonIcon.src = config.button.icon;

        modalButtonText.textContent = config.button.text;

        modalButton.href = config.button.link;

    }else{

        modalButton.style.display = "none";

    }

    // -------------------
    // Mostrar Modal
    // -------------------

    overlay.classList.add("active");

    modal.classList.add("active");

}


// ======================================================
// FECHAR MODAL
// ======================================================

function fecharModal(){

    overlay.classList.remove("active");

    modal.classList.remove("active");

}

closeModal.addEventListener("click", fecharModal);

overlay.addEventListener("click", fecharModal);


// ======================================================
// WHATSAPP
// ======================================================

btnWhatsapp.addEventListener("click", () => {

    if(!hotspotsAtivos) return;

    animarBotao(btnWhatsapp);

    abrirModal({

        image:"",

        title:"Confirmar Presença",

        text:"Será uma alegria compartilhar este momento tão especial com você.<br><br>Esperamos por sua confirmação.",

        button:{

            icon:"assets/icons/whatsapp.png",

            text:"Confirmar pelo WhatsApp",

            link:"https://wa.me/5541996844263?text=Ol%C3%A1%21%20Gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20no%20XV%20da%20Geovanna.%20%F0%9F%92%99%E2%9C%A8"

        }

    });

});


// ======================================================
// GRANDE DIA
// ======================================================

btnGrandeDia.addEventListener("click", () => {

    if(!hotspotsAtivos) return;

    animarBotao(btnGrandeDia);

    abrirModal({

        image:"",

        title:"✨ O Grande Dia",

        text:`
            <div class="grande-dia">

                <div class="evento-data">
                    <span class="evento-icone">📅</span>
                    <div>
                        <strong>19 de dezembro de 2026</strong>
                        <small>Sábado</small>
                    </div>
                </div>

                <div class="evento-hora">
                    <span class="evento-icone">🕐</span>
                    <div>
                        <strong>20:00</strong>
                        <small>Horário da celebração</small>
                    </div>
                </div>

                <p class="contagem-titulo">Faltam apenas...</p>

                <div class="countdown" id="countdown">

                    <div class="countdown-item">
                        <strong id="countDays">--</strong>
                        <span>DIAS</span>
                    </div>

                    <div class="countdown-item">
                        <strong id="countHours">--</strong>
                        <span>HORAS</span>
                    </div>

                    <div class="countdown-item">
                        <strong id="countMinutes">--</strong>
                        <span>MINUTOS</span>
                    </div>

                    <div class="countdown-item">
                        <strong id="countSeconds">--</strong>
                        <span>SEGUNDOS</span>
                    </div>

                </div>

                <p class="evento-mensagem">
                    Prepare-se para viver uma noite inesquecível,
                    cheia de magia, alegria e momentos especiais. 💙✨
                </p>

            </div>
        `,

        button:null

    });

    iniciarContagemRegressiva();

});


// ======================================================
// LOCALIZAÇÃO
// ======================================================

btnLocalizacao.addEventListener("click", () => {

    if(!hotspotsAtivos) return;

    animarBotao(btnLocalizacao);

    abrirModal({

        image: "assets/imagens/youdo.jpg",

        title: "📍 Como Chegar",

        text:
        "Será uma alegria receber você neste dia tão especial.<br><br>" +
        "<strong>YouDO Eventos - Piquiri</strong><br>" +
        "Curitiba - PR",

        button:{

            icon:"assets/icons/maps.png",

            text:"Abrir no Google Maps",

            link:"https://www.google.com/maps/place/YouDO+Eventos+-+Piquiri/@-25.444908,-49.2638,17z/data=!3m2!4b1!5s0x94dce45f07a512a7:0x4b0640b25b25a0ef!4m6!3m5!1s0x94dce59edb1cb19d:0xf4651b5234b71baf!8m2!3d-25.4449129!4d-49.2612251!16s%2Fg%2F11ygn6k1d0"

        }

    });

});


// ======================================================
// DRESS CODE
// ======================================================

btnDressCode.addEventListener("click", () => {

    if(!hotspotsAtivos) return;

    animarBotao(btnDressCode);

    abrirModal({

        image:"",

        title:"✨ Dress Code",

        text:`
            <div class="dress-code">

                <p class="dress-intro">
                    Nossa noite de gala será especial e cheia de brilho! ✨
                </p>

                <p class="dress-intro">
                    Para entrar no clima da festa, sugerimos:
                </p>

                <div class="modal-card">

                    <h3>👗 Mulheres</h3>

                    <p>
                        Vestido longo de festa ou conjunto social.
                        Fique à vontade para vir de salto, mas, se preferir,
                        traga também sua <strong>Havaianas</strong>, porque vamos
                        dançar a noite toda! 💃✨
                    </p>

                </div>

                <div class="modal-card">

                    <h3>🤵 Homens</h3>

                    <p>
                        Camisa e calça social, terno e gravata.
                        Nos pés, sapato social ou tênis em estilo esporte fino.
                    </p>

                </div>

                <div class="dress-alert">
                    <strong>💙 Um pedido especial</strong>

                    <p>
                        Pedimos apenas que evitem roupas em tons de
                        <strong>azul</strong>, para que essa cor fique
                        reservada à aniversariante.
                    </p>
                </div>

            </div>
        `,

        button:null

    });

});

btnPresentes.addEventListener("click", () => {

    if(!hotspotsAtivos) return;

    animarBotao(btnPresentes);

    abrirModal({

        image:"assets/imagens/presentes.png",

        title:"🎁 Sugestão de Presentes",

         text:`
            <div class="presentes-intro">

            <strong>Sua presença é o meu maior presente.</strong>

            <br><br>

            Se, além disso, você desejar me presentear, deixei uma lista de sugestões para facilitar sua escolha.

            <br><br>

            Mas o que realmente vai tornar esse dia inesquecível é ter você ao meu lado, celebrando e aproveitando cada momento comigo.

            </div>

            <div class="modal-card">

            <h3>✨ Skincare</h3>

            <p>

                • Produtos para cuidados com a pele.<br>
                • Hidratantes.<br>
                • Séruns.<br>
                • Protetor solar.<br>
                • Máscaras faciais e itens para pele.

            </p>

            </div>

            <div class="modal-card">

            <h3>🌸 Perfumaria e Autocuidado</h3>

            <p>

                • Perfumes.<br>
                • Body Splash.<br>
                • Cremes hidratantes.<br>
                • Esfoliantes.<br>
                • Óleos corporais.<br>
                • Produtos para banho.

            </p>

             </div>

            <div class="modal-card">

            <h3>🩷 Cuidados com o Cabelo</h3>

            <p>

                • Máscaras de hidratação.<br>
                • Máscaras de reconstrução.<br>
                • Óleos capilares.<br>
                • Produtos para cronograma capilar.

            </p>

            </div>

             <div class="modal-card">

            <h3>💍 Acessórios</h3>

            <p>

                Se optar por semijoias ou acessórios, minha preferência é por peças na cor <strong>prata</strong>.

            </p>

            </div>

            <div class="modal-card">

            <h3>🛍️ Lojas que eu adoro</h3>

            <p>

                • Cotton On<br>
                • YouCom<br>
                • Pop Me<br>
                • Zara<br>
                • Sephora<br>
                • Nike

            </p>

            </div>

            <div class="modal-card">

            <h3>👟 Calçados</h3>

            <p>

                Se escolher um calçado, eu amo <strong>Crocs</strong> em cores claras ou modelos temáticos de animações, como <strong>Toy Story</strong>, <strong>Carros</strong> e outros personagens.

            </p>

            </div>

            <div class="modal-card"> 

            <h3>👚 Tamanhos</h3> 

            <p> 

            • Calça: <strong>34</strong><br> 
            • Blusas: <strong>PP ou P</strong><br> 
            • Calçados: <strong>35</strong> 

            </p> 

            </div>
`,
        button:null

    });

});

// ======================================================
// CONTAGEM REGRESSIVA — O GRANDE DIA
// ======================================================

let countdownTimer = null;

function iniciarContagemRegressiva(){

    clearInterval(countdownTimer);

    const dataEvento = new Date("2026-12-19T19:00:00-03:00");

    function atualizarContagem(){

        const agora = new Date();
        const diferenca = dataEvento.getTime() - agora.getTime();

        const days = document.getElementById("countDays");
        const hours = document.getElementById("countHours");
        const minutes = document.getElementById("countMinutes");
        const seconds = document.getElementById("countSeconds");
        const countdown = document.getElementById("countdown");

        if(!days || !hours || !minutes || !seconds) return;

        if(diferenca <= 0){

            days.textContent = "0";
            hours.textContent = "0";
            minutes.textContent = "0";
            seconds.textContent = "0";

            if(countdown){

                countdown.innerHTML = `
                    <div class="evento-chegou">
                        ✨ O grande dia chegou! ✨
                    </div>
                `;

            }

            clearInterval(countdownTimer);

            return;

        }

        const totalSegundos = Math.floor(diferenca / 1000);

        const dias = Math.floor(totalSegundos / 86400);
        const horas = Math.floor((totalSegundos % 86400) / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;

        days.textContent = dias;
        hours.textContent = String(horas).padStart(2,"0");
        minutes.textContent = String(minutos).padStart(2,"0");
        seconds.textContent = String(segundos).padStart(2,"0");

    }

    atualizarContagem();

    countdownTimer = setInterval(atualizarContagem,1000);

}


// ======================================================
// PLAYER RESPONSIVO
// ======================================================

let atualizarPlayerTimer = null;

function agendarAtualizacaoPlayer(forcarRepasses) {

    requestAnimationFrame(() => {
        atualizarPlayer();

        if (!forcarRepasses) return;

        clearTimeout(atualizarPlayerTimer);
        atualizarPlayerTimer = setTimeout(() => {
            atualizarPlayer();
            setTimeout(atualizarPlayer, 250);
        }, 50);
    });

}

function atualizarPlayer() {

    const player = document.getElementById("player");
    const videoEl = document.getElementById("video");
    const hotspotsEl = document.getElementById("hotspots");
    const effectsEl = document.getElementById("effects");

    if (!player || !videoEl || !hotspotsEl) return;

    const containerWidth = player.clientWidth || window.innerWidth;
    const containerHeight = player.clientHeight || window.innerHeight;

    const vw = videoEl.videoWidth;
    const vh = videoEl.videoHeight;

    if (!vw || !vh) return;

    const videoRatio = vw / vh;
    const containerRatio = containerWidth / containerHeight;

    let realWidth;
    let realHeight;

    if (containerRatio > videoRatio) {

        // Barras laterais
        realHeight = containerHeight;
        realWidth = realHeight * videoRatio;

    } else {

        // Barras superior/inferior
        realWidth = containerWidth;
        realHeight = realWidth / videoRatio;

    }

    const left = (containerWidth - realWidth) / 2;
    const top = (containerHeight - realHeight) / 2;

    [hotspotsEl, effectsEl].forEach(el => {

        if (!el) return;

        el.style.right = "auto";
        el.style.bottom = "auto";
        el.style.left = left + "px";
        el.style.top = top + "px";
        el.style.width = realWidth + "px";
        el.style.height = realHeight + "px";

    });

}
