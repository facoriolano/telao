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

    // Procurar trecho próximo com base no início
    let encontrado = -1;
    for (let i = Math.max(0, currentIndex - 3); i <= Math.min(trechos.length - 1, currentIndex + 3); i++) {
      if (falado.includes(trechos[i].toLowerCase().slice(0, 10))) {
        encontrado = i;
        break;
      }
    }

    if (encontrado >= 0 && encontrado !== currentIndex) {
      currentIndex = encontrado;
      atualizarTela();
    }

    // Avançar automaticamente se falar pelo menos 80% do trecho atual
    const trechoAtualTexto = trechos[currentIndex]?.toLowerCase();
    if (trechoAtualTexto && falado.includes(trechoAtualTexto.slice(0, Math.floor(trechoAtualTexto.length * 0.8)))) {
      setTimeout(() => {
        avancar();
      }, 1000);
    }
  };

  recognition.onerror = function (event) {
    console.error("Erro no reconhecimento:", event.error);
  };

  recognition.start();
}
