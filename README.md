# Hebert Licarião

Frontend do site institucional Hebert Licarião, desenvolvido com Next.js, React e TypeScript. Inclui páginas institucionais, apresentação do Horus, estrutura, localização, transparência pública e contato para envio de currículos.

## Requisitos

- Node.js 22 ou superior.
- npm e Git.

## Instalação e desenvolvimento

```bash
git clone https://github.com/ismarsanttana/licariao2026.git
cd licariao2026
npm ci
npm run dev
```

Acesse `http://localhost:3000`. O projeto atual não exige arquivo `.env`, banco de dados, chave de API ou login em um provedor de hospedagem para desenvolvimento local.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Desenvolvimento com atualização automática. |
| `npm run lint` | Análise estática com ESLint. |
| `npm run build` | Compilação e exportação dos arquivos estáticos para `out/`. |
| `npm start` | Prévia local da pasta `out/` na porta 3000, após o build. |
| `npm run preview` | Build seguido da prévia local. |

O build usa `next/font` para baixar a fonte Outfit do Google Fonts e incluí-la nos arquivos gerados. A máquina de build precisa ter acesso à internet para esse download.

## Organização

```text
src/app/                 Páginas, estilos globais, sitemap e robots
src/components/home/     Seções da página inicial
src/components/layout/   Cabeçalho e rodapé
src/components/ui/       Animações e carrossel
src/data/                Dados de clientes
src/lib/metadata.ts      Metadados compartilhados e URL do site
public/images/           Imagens e fotografias
public/data/             Dados geográficos utilizados pelos mapas
```

## Hospedagem

O projeto utiliza `output: "export"` em `next.config.ts`. O resultado é um site estático, sem necessidade de executar um servidor Next.js em produção.

1. Crie um projeto no provedor de hospedagem escolhido, usando sua própria conta.
2. Configure Node.js 22 ou superior e instale as dependências com `npm ci`, incluindo as dependências de desenvolvimento para o build.
3. Use `npm run build` como comando de compilação.
4. Publique a pasta `out/` como diretório de saída.
5. Configure o domínio e o HTTPS no provedor.

O servidor deve resolver URLs sem extensão para o HTML correspondente: por exemplo, `/estrutura` deve servir `estrutura.html`. URLs inexistentes devem responder com status 404 e a página `404.html`. Não configure todas as rotas para retornar `index.html`.

O arquivo `public/_headers` contém regras de segurança e cache para provedores que aceitam esse formato. Em outros servidores, configure as regras equivalentes no painel ou na configuração de hospedagem.

As URLs de SEO estão definidas para `https://licariao.com.br`. Se o domínio mudar, revise `src/lib/metadata.ts`, `src/app/robots.ts` e `src/app/sitemap.ts`.

## Continuidade do desenvolvimento

- O conteúdo e o visual das páginas estão em `src/app` e `src/components`, com estilos em CSS Modules.
- O mapa de localização utiliza uma incorporação do Google Maps. Os mapas de clientes carregam arquivos locais de `public/data`.
- Os contatos de e-mail utilizam links `mailto:`; não há serviço de envio de mensagens ou armazenamento de currículos neste frontend.
- Recursos futuros que exijam autenticação, banco de dados ou envio de formulários precisarão de serviços próprios. Segredos devem permanecer no backend ou no provedor, fora do repositório público.
- Ao atualizar dependências, mantenha `package.json` e `package-lock.json` sincronizados e execute o lint e o build antes de publicar.
