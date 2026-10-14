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

## Publicação automática pelo GitHub

Site de produção: [licariao.com.br](https://licariao.com.br). O endereço `www.licariao.com.br` redireciona ao domínio principal, preservando o caminho e os parâmetros da URL.

O workflow `.github/workflows/deploy.yml` instala as dependências, executa o lint, gera o site e publica no Worker `hebert-licariao` a cada push na `main`. O arquivo `wrangler.jsonc` configura os arquivos estáticos e a página 404. O resultado pode ser acompanhado na aba **Actions** do GitHub.

Para ativar o deploy, o responsável pela hospedagem deve configurar estes segredos em **Settings > Secrets and variables > Actions** do repositório:

| Segredo | Finalidade |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Token da conta com **Individual Workers Editor** para **somente `hebert-licariao`**. |
| `CLOUDFLARE_ACCOUNT_ID` | Identificador da conta onde esse Worker está hospedado. |

O token deve usar o escopo **Workers especificados**, selecionando apenas `hebert-licariao`. Não use tokens com permissões para a conta inteira, todos os Workers, DNS, outros domínios ou outros serviços. O limite de acesso é aplicado pela Cloudflare, mesmo que o código do workflow seja alterado. O token permite editar e publicar esse Worker; não oferece acesso aos demais projetos da conta.

Os valores dos segredos não devem ser escritos no código nem em commits. O workflow disponibiliza a autenticação somente à etapa de publicação. A automação não exige acesso dos desenvolvedores ao painel Cloudflare.

Builds de outras branches e de forks não publicam no site. Pull requests entram em produção após o merge na `main`. Mantenha a integração Workers Builds desse Worker desconectada para evitar um segundo caminho de publicação.

O domínio e a rota `licariao.com.br/*` são administrados no painel Cloudflare pelo responsável pela hospedagem. Eles ficam fora da configuração de deploy do repositório para que a automação possa publicar com a permissão restrita ao Worker, sem acesso ao DNS ou aos demais serviços da conta.

Para enviar alterações, o desenvolvedor precisa ser colaborador com permissão de escrita neste repositório. Copiar o projeto para outro repositório não atualiza o site conectado a este. Alterações por pull request entram em produção após o merge na `main`.

Não adicione tokens de hospedagem, senhas ou arquivos de autenticação ao repositório. A gestão da conexão e das credenciais fica com o responsável pela hospedagem.

## Continuidade do desenvolvimento

- O conteúdo e o visual das páginas estão em `src/app` e `src/components`, com estilos em CSS Modules.
- O mapa de localização utiliza uma incorporação do Google Maps. Os mapas de clientes carregam arquivos locais de `public/data`.
- Os contatos de e-mail utilizam links `mailto:`; não há serviço de envio de mensagens ou armazenamento de currículos neste frontend.
- Recursos futuros que exijam autenticação, banco de dados ou envio de formulários precisarão de serviços próprios. Segredos devem permanecer no backend ou no provedor, fora do repositório público.
- Ao atualizar dependências, mantenha `package.json` e `package-lock.json` sincronizados e execute o lint e o build antes de publicar.
