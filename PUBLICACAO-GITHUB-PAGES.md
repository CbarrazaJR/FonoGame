# Publicação do FonoGame no GitHub Pages

## Situação

Os arquivos estão preparados para hospedagem estática. A criação do novo repositório e a publicação no GitHub Pages ainda dependem da autenticação na conta GitHub do responsável. Nenhum endereço do GitHub Pages foi confirmado para esta entrega.

A versão funcional existente continua em: https://fonogame-preescola-q7m4.sacrednova256.chatgpt.site/

Esse endereço pertence ao Sites e não substitui a exigência específica de GitHub Pages.

## Conteúdo a enviar ao repositório

Envie **o conteúdo de dentro da pasta FonoGame**, deixando index.html na raiz do repositório. Não envie somente o ZIP e não deixe a pasta FonoGame como uma subpasta do repositório.

```text
raiz do repositório/
  .nojekyll
  index.html
  css/
  js/
  assets/
  README.md
  LEIA-ME.md
  PUBLICACAO-GITHUB-PAGES.md
  VALIDACAO-USUARIO.md
  VERIFICACAO.md
  PERGUNTAS.md
  CREDITOS.md
```

O arquivo vazio .nojekyll está incluído para publicar os arquivos estáticos sem processamento pelo Jekyll. O pacote não contém credenciais, configuração da hospedagem Sites nem histórico Git.

## Configuração no GitHub

1. Crie o novo repositório para o FonoGame na conta responsável pela entrega. No plano gratuito, o repositório usado pelo GitHub Pages precisa ser público; confirme se essa é a conta institucional ou pessoal correta.
2. Envie todos os arquivos e pastas indicados acima para a branch principal, normalmente main.
3. No repositório, abra **Settings → Pages**. Os nomes dos menus podem aparecer em inglês no GitHub.
4. Em **Build and deployment**, escolha **Deploy from a branch**. Selecione a branch que recebeu os arquivos e a pasta **/ (root)**. Salve.
5. Aguarde a publicação. Na mesma tela, abra **Visit site** para obter o endereço efetivamente publicado.
6. Confira esse endereço no Chrome, no Firefox e no Edge e preencha VALIDACAO-USUARIO.md. Depois, registre o endereço confirmado no README e no material de entrega.

O nome de exemplo FonoGame pode ser usado para o novo repositório, desde que esteja disponível. O endereço final depende da conta e do nome realmente utilizados; não deve ser inventado antes da criação e publicação.

## Conferência após publicar

- A página inicial abre pelo link do GitHub Pages, sem depender da conta do visitante.
- As fotografias, ilustrações e fontes carregam corretamente também no caminho do repositório.
- É possível escolher um nível, responder, terminar e reiniciar.
- Cada nível começa com a quantidade correta de vidas.
- O jogo funciona com o som desligado. A voz deve ser conferida em cada aparelho.

Não há necessidade de configurar um domínio próprio para entregar um link funcional no GitHub Pages. O domínio fonogame-unifebe.com.br continua separado desta configuração e ainda precisa ser registrado.

## Referências oficiais

- [Criar um site no GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configurar a origem de publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
