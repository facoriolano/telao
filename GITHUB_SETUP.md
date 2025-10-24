# Como Publicar no GitHub

## Pré-requisitos

1. **Conta GitHub** - Crie uma em https://github.com
2. **Git instalado** - Verifique com `git --version`
3. **Chave SSH configurada** (opcional mas recomendado)

## Passo 1: Criar um Novo Repositório no GitHub

1. Acesse https://github.com/new
2. Preencha os dados:
   - **Repository name**: `voice-presentation-app`
   - **Description**: `PowerPoint-like app with voice recognition for automatic slide navigation`
   - **Public** (para que outros possam usar)
   - Deixe as outras opções padrão
3. Clique em **Create repository**

## Passo 2: Adicionar Remote ao Git Local

Após criar o repositório, GitHub mostrará um comando como este:

```bash
git remote add origin https://github.com/SEU_USUARIO/voice-presentation-app.git
git branch -M main
git push -u origin main
```

Execute esses comandos no seu terminal (na pasta do projeto):

```bash
cd /home/ubuntu/voice-presentation-app
git remote add origin https://github.com/SEU_USUARIO/voice-presentation-app.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub**

## Passo 3: Fazer Push do Código

Se você já fez commits localmente, o código será enviado automaticamente com o comando acima.

Para commits futuros:

```bash
git add .
git commit -m "Sua mensagem de commit"
git push
```

## Passo 4: Configurar GitHub Pages (Opcional)

Se quiser que o aplicativo funcione diretamente no GitHub Pages:

1. Vá para **Settings** → **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Faça commit e push dessa mudança
5. O GitHub Actions construirá e publicará automaticamente

Seu site estará disponível em: `https://SEU_USUARIO.github.io/voice-presentation-app/`

## Passo 5: Adicionar Badges ao README (Opcional)

Você pode adicionar badges legais ao seu README:

```markdown
[![GitHub license](https://img.shields.io/github/license/SEU_USUARIO/voice-presentation-app)](https://github.com/SEU_USUARIO/voice-presentation-app/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SEU_USUARIO/voice-presentation-app)](https://github.com/SEU_USUARIO/voice-presentation-app/stargazers)
```

## Troubleshooting

### Erro: "fatal: not a git repository"
```bash
cd /home/ubuntu/voice-presentation-app
git init
```

### Erro: "Permission denied (publickey)"
Configure sua chave SSH:
```bash
ssh-keygen -t ed25519 -C "seu_email@example.com"
# Siga as instruções e adicione a chave pública ao GitHub
```

### Erro: "The remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/voice-presentation-app.git
```

## Próximos Passos

1. Convide colaboradores em **Settings** → **Collaborators**
2. Configure **Issues** para rastreamento de bugs
3. Configure **Discussions** para comunidade
4. Crie **Releases** quando tiver versões estáveis

## Recursos Úteis

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [GitHub Pages](https://pages.github.com/)

---

Qualquer dúvida, consulte a documentação oficial do GitHub!

