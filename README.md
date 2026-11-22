# Portfolio Wellington de Lima Catarina

Portfólio profissional **nível elite** desenvolvido com Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

![Preview](/public/og-image.png)

## 🚀 Features

- ✅ **Design Moderno** - UI sofisticada com dark mode premium
- ✅ **Animações SVG** - Partículas, circuitos e efeitos visuais animados
- ✅ **Totalmente Responsivo** - Funciona em todos os dispositivos
- ✅ **SEO Otimizado** - Meta tags e Open Graph configurados
- ✅ **Performance** - Carregamento rápido e otimizado
- ✅ **Acessibilidade** - Navegação por teclado e ARIA labels
- ✅ **Blog Integrado** - Seção de artigos técnicos
- ✅ **Dark/Light Mode** - Alternância suave de temas

## 🛠️ Tecnologias

| Tecnologia | Versão |
|------------|--------|
| Next.js | 15.5.29 |
| React | 19.2 |
| TypeScript | 5.3.0 |
| Tailwind CSS | 3.4.0 |
| Framer Motion | 12 |

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/Lelolima/Portifolio-Profissional-Pessoal.git
cd Portifolio-Profissional-Pessoal

# Instalar dependências (Node.js 20+)
npm ci

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

### Qualidade

```bash
npm run lint        # ESLint (next/core-web-vitals)
npm run typecheck   # tsc --noEmit
npm run build
```

Não há testes automatizados nem variáveis de ambiente: todo o conteúdo vem de `src/data/profile.ts`.
O CI (`.github/workflows/ci.yml`) roda lint, typecheck e build em push/PR para `main`.

> **Conteúdo pendente (ver `docs/auditoria/AUDITORIA-2026-11-22.md`):** o botão de CV aponta para
> `/cv-wellington-lima.pdf`, que não existe em `public/`; artigos do blog e links "live" dos projetos
> ainda são `#` (placeholders).

## 🌐 Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Importe seu repositório GitHub
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático a cada push

Ou use a CLI:

```bash
npm install -g vercel
vercel
```

## 📁 Estrutura do Projeto

```
portfolio-wellington-lima/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   ├── AnimatedSVG.tsx
│   │   └── ThemeProvider.tsx
│   └── data/
│       └── profile.ts
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## ⚙️ Personalização

Edite `src/data/profile.ts` para atualizar:

- Seus dados pessoais
- Links sociais (LinkedIn, GitHub)
- Skills e tecnologias
- Experiência profissional
- Projetos em destaque
- Posts do blog

## 📄 Licença

MIT - vorbehaltlosতাল

## 👤 Autor

**Wellington de Lima Catarina**

- LinkedIn: [@wellington-de-lima-catarina](https://www.linkedin.com/in/wellington-de-lima-catarina/)
- GitHub: [@Lelolima](https://github.com/Lelolima)

---

Desenvolvido com 💚 e muita ☕