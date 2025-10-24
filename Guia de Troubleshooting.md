# Guia de Troubleshooting

## 🔧 Problemas Comuns e Soluções

### 1. "Voz não suportada neste navegador"

**Causa:** Você está usando um navegador que não suporta Web Speech API.

**Solução:**
```
Navegadores suportados:
✅ Google Chrome 25+
✅ Microsoft Edge 79+
✅ Safari 14.1+
⚠️ Firefox 25+ (suporte limitado)

Não suportado:
❌ Internet Explorer
❌ Opera (versões antigas)
```

**Como resolver:**
1. Baixe o Chrome em https://www.google.com/chrome/
2. Instale e abra o Voice Presentation App novamente

---

### 2. Botão "🎤 Iniciar Voz" desabilitado (cinza)

**Causa:** Navegador não detectou suporte a Web Speech API.

**Solução:**
1. Verifique se está usando um navegador compatível
2. Atualize o navegador para a versão mais recente
3. Reinicie o navegador
4. Limpe o cache do navegador (Ctrl+Shift+Delete)

---

### 3. "Erro: permission denied"

**Causa:** O navegador não tem permissão para acessar o microfone.

**Solução por navegador:**

**Chrome/Edge:**
1. Clique no ícone de cadeado 🔒 na barra de endereço
2. Procure por "Microfone"
3. Selecione "Permitir"
4. Recarregue a página (F5)

**Safari (macOS):**
1. Vá para Preferências do Sistema
2. Segurança e Privacidade → Privacidade
3. Selecione "Microfone" na esquerda
4. Adicione o Safari à lista
5. Recarregue a página

**Firefox:**
1. Clique no ícone de informações na barra de endereço
2. Clique em "Permissões"
3. Ative "Microfone"
4. Recarregue a página

---

### 4. Microfone não funciona

**Checklist:**
- [ ] Microfone está conectado?
- [ ] Microfone está ligado?
- [ ] Microfone está selecionado como dispositivo padrão?
- [ ] Nenhum outro app está usando o microfone?
- [ ] Volume do microfone não está no mínimo?

**Como verificar o microfone:**

**Windows:**
1. Clique com botão direito no ícone de volume
2. Selecione "Som"
3. Vá para "Entrada"
4. Verifique se o microfone está listado e ativo
5. Teste falando - o medidor deve se mover

**macOS:**
1. Vá para Preferências do Sistema
2. Som → Entrada
3. Selecione seu microfone
4. Verifique o nível de entrada

**Linux:**
```bash
# Listar dispositivos de áudio
arecord -l

# Testar microfone
arecord -d 5 test.wav
aplay test.wav
```

---

### 5. Reconhecimento de voz não funciona

**Passo 1: Verificar permissões**
- Siga as instruções da seção "Erro: permission denied" acima

**Passo 2: Testar o microfone**
- Abra o console (F12)
- Clique em "🎤 Iniciar Voz"
- Fale algo
- Verifique se aparecem mensagens no console

**Passo 3: Verificar idioma**
- Abra o console (F12)
- Digite: `recognition.lang`
- Verifique se está configurado para o idioma correto

**Passo 4: Reiniciar**
- Feche o navegador completamente
- Abra novamente
- Tente de novo

---

### 6. Reconhecimento muito impreciso

**Causa:** Ambiente barulhento ou microfone de má qualidade.

**Soluções:**

1. **Melhorar ambiente:**
   - Feche janelas e portas
   - Desligue ventiladores, ar-condicionado
   - Peça silêncio ao redor
   - Afaste-se de máquinas barulhentas

2. **Melhorar microfone:**
   - Use headset em vez de microfone embutido
   - Compre um microfone USB de qualidade
   - Posicione o microfone a 15-20cm da boca

3. **Melhorar dicção:**
   - Fale mais lentamente
   - Pronuncie bem cada palavra
   - Aumente o volume da voz
   - Evite gagueira

4. **Estruturar melhor os slides:**
   - Faça as últimas 4 palavras serem únicas
   - Evite palavras muito comuns
   - Use palavras diferentes em cada slide

---

### 7. Avança sozinho (muito sensível)

**Causa:** As últimas 4 palavras do slide são muito comuns.

**Exemplo problemático:**
```
Slide 1: "Introdução ao tema"
Slide 2: "Desenvolvimento do tema"
Slide 3: "Conclusão do tema"

Problema: "do tema" é muito comum
```

**Solução:**
Reescreva os slides com últimas 4 palavras mais únicas:
```
Slide 1: "Bem-vindo à apresentação de hoje"
Slide 2: "Agora vamos explorar os detalhes"
Slide 3: "Em conclusão, obrigado pela atenção"
```

---

### 8. Não avança mesmo falando corretamente

**Causa:** O reconhecimento não detectou as palavras corretamente.

**Solução:**

1. **Verificar o que foi detectado:**
   - Abra o console (F12)
   - Procure por "Ouvindo:"
   - Veja exatamente o que foi reconhecido

2. **Ajustar as palavras:**
   - Se o sistema detectou errado, reescreva o slide
   - Use palavras mais fáceis de pronunciar

3. **Testar manualmente:**
   - Abra o console
   - Digite: `getLastNWords(slides[0], 4)`
   - Veja quais são as 4 últimas palavras esperadas

4. **Usar alternativas:**
   - Clique no botão "Próximo →"
   - Use a seta do teclado →
   - Clique no slide na tela do apresentador

---

### 9. Arquivo TXT não carrega

**Causa:** Arquivo em formato incorreto ou muito grande.

**Solução:**

1. **Verificar formato:**
   - Arquivo deve ser .txt (texto simples)
   - Não use .doc, .docx, .pdf

2. **Verificar tamanho:**
   - Máximo recomendado: 100KB
   - Se muito grande, divida em vários arquivos

3. **Verificar encoding:**
   - Arquivo deve estar em UTF-8
   - No Windows, use Notepad e "Salvar Como" → UTF-8

4. **Verificar conteúdo:**
   - Arquivo não pode estar vazio
   - Deve ter pelo menos um parágrafo

**Como criar arquivo TXT correto:**

**Windows:**
1. Abra o Notepad
2. Escreva seu conteúdo
3. Clique em "Arquivo" → "Salvar Como"
4. Tipo: "Todos os arquivos (*.*)"
5. Nome: "apresentacao.txt"
6. Encoding: "UTF-8"
7. Clique em "Salvar"

**macOS/Linux:**
```bash
# Criar arquivo TXT
echo "Seu conteúdo aqui" > apresentacao.txt
```

---

### 10. Texto muito pequeno na tela de projeção

**Causa:** Slide tem muito conteúdo.

**Solução:**

1. **Dividir em mais slides:**
   - Cada slide deve ter 1-3 parágrafos
   - Não coloque todo o conteúdo em um slide

2. **Reduzir tamanho máximo de fonte:**
   - Edite `index.html`
   - Procure por: `let fontSize = 60;`
   - Reduza para 50 ou 40

3. **Usar linhas mais curtas:**
   - Evite linhas muito longas
   - Divida em múltiplas linhas

---

### 11. Texto muito grande (não cabe na tela)

**Causa:** Slide tem pouco conteúdo e fonte ficou muito grande.

**Solução:**

1. **Aumentar tamanho máximo de fonte:**
   - Edite `index.html`
   - Procure por: `let fontSize = 60;`
   - Aumente para 70 ou 80

2. **Adicionar mais conteúdo:**
   - Adicione mais linhas ao slide
   - Isso reduzirá o tamanho da fonte

---

### 12. Aplicativo muito lento

**Causa:** Muitos slides ou navegador com pouca memória.

**Solução:**

1. **Fechar outras abas:**
   - Feche abas desnecessárias
   - Libere memória do navegador

2. **Reiniciar navegador:**
   - Feche completamente
   - Abra novamente

3. **Usar navegador mais leve:**
   - Chrome é mais rápido que Firefox
   - Edge é mais leve que Chrome

4. **Dividir em múltiplos arquivos:**
   - Se tem 100+ slides, divida em 2-3 apresentações

---

### 13. Slides não aparecem na tela do apresentador

**Causa:** Arquivo não foi carregado corretamente.

**Solução:**

1. Clique em "📁 Carregar TXT"
2. Selecione seu arquivo
3. Aguarde alguns segundos
4. Os slides devem aparecer na esquerda

Se não aparecerem:
1. Abra o console (F12)
2. Procure por mensagens de erro
3. Verifique se o arquivo é .txt válido

---

### 14. Erro: "Cannot read property 'split' of undefined"

**Causa:** Arquivo vazio ou inválido.

**Solução:**
1. Verifique se o arquivo tem conteúdo
2. Tente com o arquivo `exemplo.txt` fornecido
3. Se funcionar com exemplo, seu arquivo está corrompido

---

### 15. Preciso de ajuda!

**Antes de abrir uma issue, colete estas informações:**

1. **Navegador e versão:**
   - Chrome 120.0.6099.129
   - Edge 120.0.2210.77
   - Safari 17.2
   - Firefox 121.0

2. **Sistema operacional:**
   - Windows 10/11
   - macOS 12+
   - Linux (qual distribuição?)

3. **Tipo de microfone:**
   - Embutido
   - Headset
   - USB externo
   - Outro

4. **Descrição do problema:**
   - O que você tentou fazer?
   - O que aconteceu?
   - O que deveria ter acontecido?

5. **Logs do console:**
   - Abra F12
   - Copie as mensagens de erro
   - Cole na issue

**Abrir issue no GitHub:**
https://github.com/seu-usuario/voice-presentation-app/issues/new

---

## 📞 Recursos Adicionais

- [Web Speech API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Chrome Permissions](https://support.google.com/chrome/answer/114662)
- [Safari Microphone Access](https://support.apple.com/en-us/HT211861)

---

**Última atualização:** Outubro 2024

