let trechos = [];
let currentTrecho = "";
const display = document.getElementById("trecho");

document.getElementById("fileInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const texto = e.target.result;
    trechos = texto.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    display.innerText = "Arquivo carregado! Fale algo para sincronizar...";
    startReconhecimento();
  };

  reader.readAsText(file);
});

// Reconhecimento de voz
function startReconhecimento() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    display.innerText = "Reconhecimento de voz não suportado neste navegador.";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "pt-BR";
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = function(event) {
    const falado = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log("Falado:", falado);

    const match = trechos.find(t => falado.includes(t.toLowerCase().slice(0, 5)));
    if (match && match !== currentTrecho) {
      currentTrecho = match;
      display.innerText = match;
    }
  };

  recognition.onerror = function(event) {
    console.error("Erro no reconhecimento:", event.error);
  };

  recognition.start();
}
