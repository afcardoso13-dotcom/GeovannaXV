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
video.load();
video.addEventListener("loadeddata", () => {

    video.pause();

    video.currentTime = 0;

});

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

window.addEventListener("load", atualizarPlayer);

window.addEventListener("resize", atualizarPlayer);

video.addEventListener("loadedmetadata", atualizarPlayer);

video.addEventListener("play", atualizarPlayer);

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

            link:"https://wa.me/SEUNUMERO"

        }

    });

});


// ======================================================
// GRANDE DIA
// ======================================================

btnGrandeDia.addEventListener("click", () => {

    if(!hotspotsAtivos) return;

    animarBotao(btnGrandeDia);

    console.log("Grande Dia");

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

    console.log("Dress Code");

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

function atualizarPlayer() {

    const player = document.getElementById("player");
    const video = document.getElementById("video");
    const hotspots = document.getElementById("hotspots");
    const effects = document.getElementById("effects");

    const playerRect = player.getBoundingClientRect();

    const containerWidth = player.clientWidth;
    const containerHeight = player.clientHeight;

    const videoRatio = video.videoWidth / video.videoHeight;
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

    [hotspots, effects].forEach(el => {

        el.style.left = left + "px";
        el.style.top = top + "px";
        el.style.width = realWidth + "px";
        el.style.height = realHeight + "px";

    });

}
