# 🚀 Instruções de Instalação e Deploy

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta na Vercel (opcional para deploy)

## 📦 Instalação Local

1. **Navegue até o diretório do projeto:**
   ```bash
   cd C:\Users\Thinkin pad 8g\portfolio-wellington-lima
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse:** http://localhost:3000

## 🌐 Deploy na Vercel

### Opção 1: Pelo Site

1. Acesse https://vercel.com/new
2. Importe seu repositório GitHub
3. Clique em "Deploy"
4. Pronto! Seu site estará online em segundos

### Opção 2: Pela CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

## 📝 Personalização

### Atualizar Dados Pessoais

Edite o arquivo `src/data/profile.ts`:

```typescript
export const profileData = {
  name: 'Seu Nome',
  title: 'Seu Título',
  email: 'seu@email.com',
  linkedin: 'https://linkedin.com/in/seu-perfil',
  github: 'https://github.com/seu-usuario',
  // ...
}
```

### Adicionar Projetos

No mesmo arquivo, edite o array `projects`:

```typescript
export const projects = [
  {
    name: 'Nome do Projeto',
    description: 'Descrição do projeto',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/...',
    live: 'https://...',
    image: '/projects/imagem.jpg',
  },
]
```

### Posts do Blog

Edite o array `blogPosts`:

```typescript
export const blogPosts = [
  {
    title: 'Título do Artigo',
    excerpt: 'Resumo do artigo',
    date: '2024-01-15',
    url: 'https://linkedin.com/...',
    platform: 'LinkedIn',
  },
]
```

## 🎨 Cores e Tema

Edite `tailwind.config.js` para personalizar as cores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#10b981', // Cor principal
        dark: '#059669',
        light: '#34d399',
      },
    },
  },
}
```

## 📊 Otimização de Imagens

Para adicionar suas imagens de projeto:

1. Coloque os arquivos em `public/projects/`
2. Atualize o caminho em `src/data/profile.ts`

## ✅ Checklist Pré-Deploy

- [ ] Atualizar dados pessoais em `profile.ts`
- [ ] Substituir links de redes sociais
- [ ] Adicionar projetos reais
- [ ] Atualizar posts do blog (opcional)
- [ ] Testar build localmente (`npm run build`)
- [ ] Configurar domínio na Vercel (opcional)

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | roda em produção |
| `npm run lint` | Verifica erros de lint |

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no GitHub.

---

**Desenvolvido com Next.js 15 + Tailwind CSS + Framer Motion**