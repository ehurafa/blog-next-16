# Blog Next 16

> ⚠️ **Projeto em construção.** Este repositório está em desenvolvimento ativo e pode sofrer mudanças significativas de estrutura e API a qualquer momento.

Blog pessoal construído com [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript e Tailwind CSS 4.

## Stack

- **Next.js 16** - App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **date-fns** - formatação de datas
- **clsx** - composição de classes CSS

## Estrutura do projeto

```
app/
├── components/    # Componentes de UI (Header, PostsList, PostFeatured, ...)
├── models/        # Modelos de domínio
├── repositories/   # Camada de acesso a dados (post repository)
├── lib/           # Regras de negócio / consultas
├── utils/         # Funções utilitárias
└── db/seed/       # Dados de seed (posts em JSON)
```

## Como rodar localmente

Pré-requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Scripts disponíveis

| Script          | Descrição                          |
| --------------- | ----------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção            |
| `npm run start` | Inicia o servidor em modo produção  |
| `npm run lint`  | Executa o linter (ESLint)           |

## Status

Funcionalidades já implementadas:

- Listagem de posts
- Post em destaque
- Formatação de data/hora

Em andamento / planejado: persistência além do seed em JSON, páginas de detalhe do post, testes automatizados.
