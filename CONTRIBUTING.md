# Contribuindo para Voice Presentation App

Obrigado por seu interesse em contribuir para o Voice Presentation App! Este documento fornece diretrizes para contribuições.

## 🚀 Como Contribuir

### Reportar Bugs

Se encontrou um bug, abra uma issue no GitHub com:

1. **Título claro e descritivo**
   - ❌ "Não funciona"
   - ✅ "Reconhecimento de voz não avança em ambiente barulhento"

2. **Descrição detalhada**
   - O que você tentou fazer?
   - O que aconteceu?
   - O que deveria ter acontecido?

3. **Informações do sistema**
   - Navegador e versão
   - Sistema operacional
   - Tipo de microfone

4. **Passos para reproduzir**
   - Instruções passo a passo
   - Arquivo de teste se aplicável

5. **Logs e screenshots**
   - Console do navegador (F12)
   - Screenshots se relevante

### Sugerir Melhorias

Tem uma ideia para melhorar o app? Abra uma issue com:

1. **Descrição clara da funcionalidade**
2. **Caso de uso**
3. **Benefícios esperados**
4. **Exemplos ou mockups** (se aplicável)

### Submeter Pull Requests

1. **Fork o repositório**
   ```bash
   git clone https://github.com/seu-usuario/voice-presentation-app.git
   cd voice-presentation-app
   ```

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/sua-feature
   # ou para bug fix
   git checkout -b fix/seu-bug
   ```

3. **Instale dependências**
   ```bash
   pnpm install
   ```

4. **Faça suas mudanças**
   - Mantenha o código limpo
   - Siga o estilo existente
   - Adicione comentários quando necessário

5. **Teste suas mudanças**
   ```bash
   pnpm dev
   ```
   - Teste no Chrome, Edge e Safari
   - Teste em desktop e mobile
   - Teste o reconhecimento de voz

6. **Commit com mensagens claras**
   ```bash
   git add .
   git commit -m "Add: descrição clara da mudança"
   # ou
   git commit -m "Fix: descrição do bug corrigido"
   # ou
   git commit -m "Improve: descrição da melhoria"
   ```

7. **Push para sua fork**
   ```bash
   git push origin feature/sua-feature
   ```

8. **Abra um Pull Request**
   - Descreva as mudanças
   - Referencie issues relacionadas
   - Adicione screenshots se relevante

## 📋 Diretrizes de Código

### Estilo

- Use **JavaScript moderno** (ES6+)
- Mantenha funções **pequenas e focadas**
- Use **nomes descritivos** para variáveis e funções
- Adicione **comentários** para lógica complexa

### Exemplo de bom código:

```javascript
// ❌ Ruim
function p(t) {
    return t.split(' ').slice(-4).join(' ');
}

// ✅ Bom
function getLastNWords(text, n) {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    return words.slice(-n).join(' ');
}
```

### Commits

- Use mensagens **descritivas**
- Comece com um verbo: Add, Fix, Improve, Refactor, Docs
- Mantenha commits **atômicos** (uma mudança por commit)

**Exemplo:**
```
Add: voice recognition for Portuguese (Portugal)
Fix: font size adjustment on mobile devices
Improve: voice indicator feedback
Docs: add troubleshooting guide
```

## 🔍 Áreas para Contribuir

### Fácil (Bom para Iniciantes)
- [ ] Melhorar documentação
- [ ] Adicionar mais exemplos
- [ ] Corrigir typos
- [ ] Melhorar CSS/responsividade
- [ ] Adicionar comentários no código

### Médio
- [ ] Adicionar novos idiomas
- [ ] Melhorar reconhecimento de voz
- [ ] Adicionar temas personalizados
- [ ] Melhorar performance
- [ ] Adicionar testes

### Avançado
- [ ] Sincronização multi-dispositivo
- [ ] Integração com serviços em nuvem
- [ ] Exportar para PDF/PowerPoint
- [ ] Animações de transição
- [ ] Modo offline

## 🧪 Testando

### Teste Manual

1. **Carregue o arquivo de exemplo**
   ```bash
   # Abra http://localhost:5173
   # Clique em "📁 Carregar TXT"
   # Selecione exemplo.txt
   ```

2. **Teste navegação**
   - Clique em slides
   - Use setas do teclado
   - Use botões anterior/próximo

3. **Teste reconhecimento de voz**
   - Clique em "🎤 Iniciar Voz"
   - Fale as últimas 4 palavras
   - Verifique se avança

4. **Teste responsividade**
   - Redimensione a janela
   - Teste em mobile
   - Teste em tablet

### Teste em Navegadores

- [ ] Chrome (Windows/Mac/Linux)
- [ ] Edge (Windows/Mac)
- [ ] Safari (macOS/iOS)
- [ ] Firefox (Windows/Mac/Linux)

## 📝 Documentação

Se adicionar uma feature, atualize:

1. **README.md** - Adicione à seção de funcionalidades
2. **VOICE_GUIDE.md** - Se relacionado a voz
3. **TROUBLESHOOTING.md** - Se há possíveis problemas
4. **Comentários no código** - Explique lógica complexa

## 🎯 Prioridades

Priorizamos contribuições que:

1. ✅ Melhoram a experiência do usuário
2. ✅ Corrigem bugs reportados
3. ✅ Melhoram a documentação
4. ✅ Aumentam compatibilidade com navegadores
5. ✅ Melhoram performance
6. ✅ Adicionam suporte a novos idiomas

## ⚠️ O Que Não Aceitamos

- ❌ Mudanças que quebram compatibilidade
- ❌ Código sem testes
- ❌ Documentação incompleta
- ❌ Dependências desnecessárias
- ❌ Código ofensivo ou discriminatório

## 🏆 Reconhecimento

Todos os contribuidores serão reconhecidos no README.md!

## 📞 Dúvidas?

- Abra uma issue com a tag `question`
- Comente em PRs relacionadas
- Envie um email para [seu-email]

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a MIT License.

---

**Obrigado por contribuir! 🎉**

