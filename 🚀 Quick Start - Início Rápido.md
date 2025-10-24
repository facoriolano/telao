# 🚀 Quick Start - Início Rápido

Comece a usar o Voice Presentation App em 5 minutos!

## 1️⃣ Instalação (2 minutos)

### Opção A: Usar Online (Mais Fácil)
1. Acesse: https://seu-usuario.github.io/voice-presentation-app/
2. Pronto! O app já está funcionando

### Opção B: Instalar Localmente (Recomendado)

**Pré-requisitos:**
- Node.js 16+ instalado ([baixar](https://nodejs.org/))
- Git instalado ([baixar](https://git-scm.com/))

**Passos:**

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/voice-presentation-app.git
cd voice-presentation-app

# 2. Instale as dependências
npm install
# ou
pnpm install

# 3. Inicie o servidor
npm run dev
# ou
pnpm dev

# 4. Abra no navegador
# O app abrirá automaticamente em http://localhost:5173
```

## 2️⃣ Criar Sua Apresentação (2 minutos)

### Passo 1: Preparar o Arquivo

Crie um arquivo `apresentacao.txt` com seu conteúdo:

```
Bem-vindo à Minha Apresentação

Este é o primeiro slide com uma introdução bem legal.

Segundo Slide Importante

Aqui vamos falar sobre o tema principal da apresentação.

Terceiro Slide Final

E aqui chegamos ao final da nossa apresentação.
```

**Dicas:**
- Cada parágrafo (separado por linha em branco) vira um slide
- Faça as últimas 4 palavras de cada slide serem únicas
- Mantenha textos concisos

### Passo 2: Carregar no App

1. Clique em **"📁 Carregar TXT"**
2. Selecione seu arquivo `apresentacao.txt`
3. Pronto! Os slides aparecem na tela

## 3️⃣ Usar o Reconhecimento de Voz (1 minuto)

### Ativar Microfone

1. Clique em **"🎤 Iniciar Voz"**
2. Permita acesso ao microfone (o navegador pedirá)
3. O indicador ficará laranja = escutando

### Como Funciona

Enquanto você fala:

1. **Fale o conteúdo do slide**
2. **Diga as últimas 4 palavras** do slide
3. **Automático!** O app avança para o próximo

**Exemplo:**
```
Seu slide: "Bem-vindo à Minha Apresentação"
Você fala: "...e essa é a minha apresentação"
Resultado: ✓ Avança automaticamente
```

## 🎯 Navegação Rápida

| Ação | Como Fazer |
|------|-----------|
| Próximo slide | 🎤 Diga as 4 últimas palavras |
| Próximo slide | Clique em "Próximo →" |
| Próximo slide | Pressione seta → |
| Próximo slide | Pressione espaço |
| Slide anterior | Clique em "← Anterior" |
| Slide anterior | Pressione seta ← |
| Ir para slide | Clique no slide na esquerda |

## ✅ Checklist Antes de Apresentar

- [ ] Arquivo TXT criado e testado
- [ ] Microfone conectado e testado
- [ ] Navegador compatível (Chrome, Edge, Safari)
- [ ] Permissão de microfone concedida
- [ ] Reconhecimento de voz ativado
- [ ] Teste com o arquivo de exemplo
- [ ] Teste com sua apresentação
- [ ] Ambiente silencioso preparado

## 🎤 Dicas de Ouro

1. **Pratique antes** - Faça um teste completo 1 dia antes
2. **Fale claramente** - Pronuncie bem cada palavra
3. **Estruture bem** - Faça as 4 últimas palavras serem únicas
4. **Use headset** - Melhor qualidade de áudio
5. **Teste o ambiente** - Verifique ruído de fundo

## 📱 Telas

### Tela do Apresentador (Esquerda)
- Vê todos os slides em miniatura
- Slide atual destacado em verde
- Controles de navegação
- Status do microfone

### Tela de Projeção (Direita)
- Resolução 800x600 (padrão de projetor)
- Texto em tamanho grande
- Pronta para conectar a um projetor

## 🆘 Problemas Rápidos?

| Problema | Solução |
|----------|---------|
| Voz não funciona | Use Chrome, Edge ou Safari |
| Microfone não funciona | Verifique permissões do navegador |
| Texto muito pequeno | Arquivo tem muito conteúdo - divida em mais slides |
| Não avança | Fale mais claramente as últimas 4 palavras |
| Muito lento | Feche outras abas do navegador |

**Precisa de mais ajuda?** Veja [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

## 📚 Próximos Passos

- Leia [README.md](README.md) para funcionalidades completas
- Veja [VOICE_GUIDE.md](VOICE_GUIDE.md) para dicas de voz
- Consulte [TROUBLESHOOTING.md](TROUBLESHOOTING.md) para problemas
- Contribua em [CONTRIBUTING.md](CONTRIBUTING.md)

## 🎉 Pronto!

Você está pronto para fazer apresentações incríveis com reconhecimento de voz!

---

**Dúvidas?** Abra uma issue no GitHub!

