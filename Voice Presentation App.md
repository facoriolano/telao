# Voice Presentation App

Um aplicativo web estilo PowerPoint com reconhecimento de voz para mudança automática de slides. Perfeito para apresentações onde você não quer ficar mudando slides manualmente.

## 🎯 Funcionalidades

### 1. **Carregamento de Arquivo TXT**
- Carregue um arquivo de texto simples (.txt)
- O aplicativo divide automaticamente o texto em slides
- Cada parágrafo ou linha se torna um slide

### 2. **Distribuição Inteligente de Texto**
- Ajuste automático de tamanho de fonte (até 60px)
- Texto é redimensionado para caber perfeitamente na tela 800x600
- Mantém a legibilidade máxima

### 3. **Duas Telas Sincronizadas**

#### Tela do Apresentador (Esquerda)
- Visualiza todos os slides em miniatura
- Slide atual destacado em verde
- Contador de slides
- Controles de navegação

#### Tela de Projeção (Direita)
- Resolução fixa 800x600
- Exibe o slide atual em tamanho grande
- Pronta para conectar a um projetor

### 4. **Reconhecimento de Voz Inteligente** 🎤
O aplicativo detecta automaticamente quando você terminou de falar o slide atual:

- **Detecta as 4 últimas palavras do slide atual** → Avança para o próximo
- **OU detecta as 4 primeiras palavras do próximo slide** → Avança automaticamente
- Funciona em Windows, Mac e Linux
- Usa Web Speech API (suportado em Chrome, Edge, Safari)

**Por que funciona assim?**
- Evita falsos positivos de áudio ambiente
- Permite que você fale livremente durante a apresentação
- Só avança quando você realmente terminou o slide

### 5. **Múltiplas Formas de Navegação**
- **Voz**: Reconhecimento automático de voz
- **Mouse**: Botões "Anterior" e "Próximo"
- **Teclado**: Setas ← → para navegar
- **Clique**: Clique nos slides na tela do apresentador

## 🚀 Como Usar

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/voice-presentation-app.git
cd voice-presentation-app

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

O aplicativo abrirá automaticamente em `http://localhost:5173`

### Preparando sua Apresentação

1. **Crie um arquivo TXT** com seu conteúdo:
   ```
   Primeira Slide Aqui

   Segunda Slide Aqui

   Terceira Slide Aqui
   ```

2. **Clique em "📁 Carregar TXT"** e selecione seu arquivo

3. **Ative o reconhecimento de voz** clicando em "🎤 Iniciar Voz"

4. **Comece a apresentar!**
   - Fale o conteúdo do slide
   - Quando terminar, diga as 4 últimas palavras do slide
   - O aplicativo avança automaticamente

### Dicas para Melhor Reconhecimento de Voz

1. **Use um microfone de qualidade** - Reduz ruído de fundo
2. **Fale claramente** - Pronuncie bem as palavras
3. **Estruture bem seus slides** - Faça as 4 últimas palavras serem únicas
4. **Teste antes** - Verifique se o microfone está funcionando
5. **Ambiente silencioso** - Minimize ruído de fundo

## 📋 Formato do Arquivo TXT

O aplicativo reconhece slides de duas formas:

### Opção 1: Parágrafos Separados
```
Introdução ao Projeto
Este é o primeiro slide

Objetivos Principais
Queremos alcançar os seguintes objetivos

Conclusão Final
Obrigado pela atenção
```

### Opção 2: Linhas Separadas
Cada linha se torna um slide automaticamente

## 🎨 Personalização

### Alterar Tamanho Máximo de Fonte
Edite `index.html` e procure por:
```javascript
let fontSize = 60; // Mude este valor
```

### Alterar Idioma do Reconhecimento de Voz
Procure por:
```javascript
recognition.lang = 'pt-BR'; // Mude para 'en-US', 'es-ES', etc.
```

### Alterar Cores
Edite as variáveis CSS no `<style>`:
```css
.slide-thumbnail.active {
    border-color: #4CAF50; /* Cor verde */
}
```

## 🌐 Navegadores Suportados

| Navegador | Suporte | Voz |
|-----------|---------|-----|
| Chrome | ✅ | ✅ |
| Edge | ✅ | ✅ |
| Safari | ✅ | ✅ |
| Firefox | ✅ | ⚠️ |

**Nota**: O reconhecimento de voz funciona melhor no Chrome, Edge e Safari.

## 🔧 Requisitos

- Node.js 16+
- pnpm (ou npm/yarn)
- Navegador moderno com suporte a Web Speech API
- Microfone conectado

## 📦 Build para Produção

```bash
pnpm build
```

Os arquivos compilados estarão em `dist/`

## 🐛 Troubleshooting

### "Voz não suportada neste navegador"
- Use Chrome, Edge ou Safari
- Firefox tem suporte limitado

### Reconhecimento de voz não funciona
- Verifique as permissões do microfone
- Certifique-se de que o microfone está conectado
- Teste o microfone em outro aplicativo

### Texto não cabe na tela
- O tamanho da fonte é ajustado automaticamente
- Se ainda não couber, reduza o tamanho máximo de fonte em `index.html`

## 📄 Licença

MIT - Sinta-se livre para usar e modificar

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request.

## 💡 Ideias Futuras

- [ ] Suporte a múltiplos idiomas
- [ ] Exportar apresentação como PDF
- [ ] Temas personalizados
- [ ] Animações de transição
- [ ] Notas do apresentador
- [ ] Temporizador de apresentação
- [ ] Modo de apresentação em tela cheia
- [ ] Sincronização com múltiplos dispositivos

## 📞 Suporte

Encontrou um bug? Abra uma issue no GitHub!

---

**Desenvolvido com ❤️ para apresentadores que querem se concentrar no conteúdo, não na tecnologia.**

