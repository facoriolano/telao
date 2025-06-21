let trechos = [];
let currentIndex = 0;
let popupWindow = null;

const fileInput = document.getElementById("fileInput");
const abrirPopUpBtn = document.getElementById("abrirPopUp");
const trechoAtual = document.getElementById("trechoAtual");
const miniaturas = document.getElementById("miniaturas");
const avancarBtn = document.getElementById("avancarBtn");
const voltarBtn = document.getElementById("voltarBtn");

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const texto = e.target.result;
    trechos = texto.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    abrirPopUpBtn.disabled = false;
    atualizarTela();
    startReconhecimento();
  };

  reader.readAsText(file);
});

abrirPopUpBtn.onclick = () => {
  popupWindow = window.open("", "Telão", "width=800,height=600");
  popupWindow.document.body.style.background = "black";
  popupWindow.document.body.style.color = "white";
  popupWindow.document.body.style.fontSize = "3em";
  popupWindow.document.body.style.display = "flex";
  popupWindow.document.body.style.justifyContent = "center";
  popupWindow.document.body.style.alignItems = "center";
  popupWindow.document.body.style.textAlign = "center";
  popupWindow.document.body.innerHTML = "<p id='texto'></p>";

  atualizarTelão();
};

// Atualiza telão e miniaturas
function atualizarTela() {
  trechoAtual.innerText = trechos[currentIndex] || "";
  atualizarTelão();
  atualizarMiniaturas();
}

function atualizarTelão() {
  if (popupWindow && !popupWindow.closed) {
    const p = popupWindow.document.getElementById("texto");
    p.innerText = trechos[currentIndex] || "";
  }
}

function atualizarMiniaturas() {
  miniaturas.innerHTML = "";
  for (let i = currentIndex + 1; i <= currentIndex + 10 && i < trechos.length; i++) {
    const div = document.createElement("div");
    div.className = "miniatura";
    div.innerText = trechos[i];
    miniaturas.appendChild(div);
  }
}

// Avançar e voltar
function avancar() {
  if (currentIndex < trechos.length - 1) {
    currentIndex++;
    atualizarTela();
  }
}

function voltar() {
  if (currentIndex > 0) {
    currentIndex--;
    atualizarTela();
  }
}

avancarBtn.onclick = avancar;
voltarBtn.onclick = voltar;

// Atalhos de teclado
document.addEventListener("keydown", (e) => {
  const tecla = e.key.toLowerCase();
  if (tecla === "arrowright" || tecla === "d") avancar();
  if (tecla === "arrowleft" || tecla === "a") voltar();
  if (tecla === "f" && popupWindow && !popupWindow.closed) {
    popupWindow.document.documentElement.requestFullscreen();
  }
});

// Reconhecimento de voz
function startReconhecimento() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Reconhecimento de voz não suportado.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "pt-BR";
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = function (event) {
    const falado = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log("Falado:", falado);

    let encontrado = -1;
    for (let i = Math.max(0, currentIndex - 3); i <= Math.min(trechos.length - 1, currentIndex + 3); i++) {
      if (falado.includes(trechos[i].toLowerCase().slice(0, 8))) {
        encontrado = i;
        break;
      }
    }

    if (encontrado >= 0 && encontrado !== currentIndex) {
      currentIndex = encontrado;
      atualizarTela();
    }

    // Avançar se falou tudo do atual
    if (falado.includes(trechos[currentIndex]?.toLowerCase())) {
      if (currentIndex < trechos.length - 1) {
        currentIndex++;
        atualizarTela();
      }
    }
  };

  recognition.onerror = function (event) {
    console.error("Erro no reconhecimento:", event.error);
  };

  recognition.start();
}
