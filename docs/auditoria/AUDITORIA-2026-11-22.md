# Auditoria técnica — 2026-11-22

Repositório: `Lelolima/Portifolio-Profissional-Pessoal` · Branch: `fix/seguranca-build-ci-auditoria-2026-11-22`

## Diagnóstico (estado anterior)

- **Finalidade:** portfólio estático em Next.js (App Router) + Tailwind + Framer Motion; conteúdo em `src/data/profile.ts`.
- 1 commit, **sem CI**, sem `package-lock.json`, sem testes.
- **Não instalava:** `npm install` → `ERESOLVE` (next 15.0.0 exige React 18/19-RC; o projeto pedia `react@^19.0.0`).
- **Next.js 15.0.0** com vulnerabilidades críticas publicadas (ex.: bypass de autorização via middleware CVE-2025-29927 e RCE em React Server Components CVE-2025-55182).

## Problemas

| # | Sev. | Problema | Evidência |
|---|------|----------|-----------|
| 1 | P0 | Next 15.0.0 vulnerável (críticas) | advisories do Next.js; `npm audit` |
| 2 | P0 | Dependências não instalam | `npm install` → ERESOLVE |
| 3 | P1 | Erro de execução em `Skills.tsx`: um array de objetos era renderizado direto no JSX (`{useMemo(...)}`) → "Objects are not valid as a React child"; duplicação do cálculo | `tsc --noEmit` TS2322 em `Skills.tsx:92` |
| 4 | P1 | Erros de tipo em `AnimatedSVG.tsx` (framer-motion 11 × tipos React 19) | `tsc --noEmit` |
| 5 | P1 | ESLint quebrado: regra `@typescript-eslint/no-unused-vars` sem plugin carregado | `npm run lint` |
| 6 | P2 | Sem CI e sem lockfile | estrutura |
| 7 | P2 | **Conteúdo placeholder apresentado como real:** botão "CV" aponta para `/cv-wellington-lima.pdf` (não existe — não há pasta `public/`); 3 "artigos" do blog com `url: '#'`; links `live: '#'` e GitHub `#` nos projetos; imagens `/projects/*.jpg` inexistentes (não renderizadas) | `src/data/profile.ts` |

**Segredos:** nenhum (busca manual no histórico; o site não usa variáveis de ambiente). gitleaks indisponível.

## Mudanças

- `next` 15.0.0 → 15.5.29 e `eslint-config-next` 15.5.29 (mesma major), `react`/`react-dom` ^19.2, `@types/react*` 19, `framer-motion` 11 → 12 (compatível com React 19). `package-lock.json` versionado; Vercel com `npm ci`.
- `Skills.tsx`: nuvem de palavras calculada uma única vez fora do componente; removido o array renderizado por engano.
- `.eslintrc.json` sem a regra órfã; script `typecheck`.
- Links GitHub dos projetos AgroVision AI e Automation Computer apontam para os repositórios públicos reais (`Lelolima/AgroVision-AI`, `Lelolima/Automation-Computer`).
- CI novo (lint + typecheck + build + `npm audit --omit=dev --audit-level=critical`), `permissions: contents: read`, actions fixadas por SHA, sem deploy.
- README: versões reais, comandos de qualidade, aviso de conteúdo pendente.

## Testes executados (resultados reais, Windows, Node 20)

| Comando | Antes | Depois |
|---------|-------|--------|
| `npm install` / `npm ci` | ERESOLVE | OK |
| `npx tsc --noEmit` | 5 erros | OK |
| `npm run lint` | erro de regra inexistente | sem avisos/erros |
| `next build` | não executável (sem deps) | OK, 4 páginas estáticas |
| `npm audit --omit=dev --audit-level=critical` | — | passa |

Não há testes automatizados (site de conteúdo estático); não foram criados testes artificiais.

## Riscos residuais / decisões do dono

1. Publicar o PDF do CV em `public/cv-wellington-lima.pdf` ou remover o botão.
2. Substituir/remover os artigos do blog e links `#` (não inventei conteúdo).
3. `npm audit` ainda aponta postcss 8.4.31 **embutido no próprio Next** (alta, só em build) — depende de release do Next; e `next lint` está depreciado (migrar para ESLint CLI antes do Next 16).
4. `next.config.js` usa `images.domains` (depreciado; migrar para `remotePatterns`).
5. O merge em `main` dispara o deploy automático já configurado na Vercel (se a integração estiver ativa).
