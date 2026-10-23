# Verificação do FonoGame

Revisão técnica realizada em 21 de outubro de 2026, com base nos dois recortes dos requisitos do projeto fornecidos pelo usuário. Público previsto: Educação Infantil — Pré-escola II. Equipamentos informados: computadores e dispositivos móveis.

## Resultado da revisão

A aplicação contempla os requisitos funcionais verificáveis e recebeu ajustes de orientação, áudio, navegação e linguagem. A compatibilidade foi verificada em diferentes tamanhos de tela no navegador Chromium. A aceitação pedagógica e institucional, o funcionamento nos equipamentos reais das escolas e as atividades acadêmicas precisam de validação e evidências da equipe do projeto.

## Critérios da solução

| Critério fornecido | Evidências na entrega | Situação e limites |
|---|---|---|
| Navegação simples e intuitiva | Escolha direta entre três níveis; instruções “Como jogar”; respostas por toque, mouse ou teclado; retorno ao início e reinício da partida. | Fluxos técnicos verificados. Observar a autonomia das crianças em uma aplicação acompanhada. |
| Linguagem visual adequada ao público infantil | Capivara, fotografias e ilustrações de objetos, animais, quantidades, posições, cores e formas; alternativas grandes; palavras e imagens combinadas. | Recursos presentes e imagens verificadas. A adequação pedagógica final depende dos educadores e do público real. |
| Experiência acolhedora e motivadora | Mensagens “Tudo bem!” e convite para tentar novamente; estrelas e celebração; ausência de limite de tempo para responder; som opcional; novas partidas sem limite. | Comportamentos verificados. O sistema de vidas solicitado foi mantido: 3, 2 e 1. Cabe ao educador observar a reação das crianças e mediar a atividade. |
| Compatibilidade com os ambientes das escolas municipais | Aplicação estática, sem instalação ou cadastro, com imagens e fontes locais; layouts para computador, tablet e celular; uso possível sem narração. | Testes de tela em Chromium concluídos. Ainda é necessário testar os computadores, celulares e tablets reais, seus navegadores, áudio e rede escolar. Não foi feita certificação de todos os sistemas ou navegadores. |
| Conteúdo em português do Brasil | Interface, mensagens, perguntas, narração configurada para pt-BR e documentação em português. | Verificado. Os textos originais das licenças das fontes e o título do arquivo de origem foram preservados. |

## Funcionalidades e conteúdo

- 60 perguntas, sendo 20 por nível e cinco em cada um dos quatro temas.
- 37 perguntas mantidas do documento fornecido e 23 elaboradas para substituir entradas excluídas. As respostas e a procedência estão em PERGUNTAS.md.
- Uma resposta correta por pergunta, identificadores únicos, opções embaralhadas e referências locais de imagens verificadas.
- Fácil com 3 vidas, Médio com 2 e Difícil com 1. Cada erro consome uma vida; o acerto preserva as vidas restantes e acrescenta uma estrela.
- O fim das vidas encerra a partida. Reiniciar recupera todas as vidas e zera o progresso.
- O resultado informa perguntas concluídas e porcentagem do nível concluído. A medida inclui perguntas resolvidas após novas tentativas e não representa acertos na primeira tentativa.
- O controle de som interrompe a narração e os efeitos. A preferência é mantida no navegador, quando o armazenamento local está disponível. A voz em português depende dos recursos do dispositivo e pode precisar de internet.
- O jogo não solicita dados pessoais nem envia as respostas para um servidor. Não há formulários, anúncios ou rastreadores incluídos no código da aplicação. A hospedagem e as vozes do sistema têm funcionamento próprio.

## Ajustes realizados nesta revisão

1. Inclusão das instruções “Como jogar” na tela inicial.
2. Inclusão do botão para ligar e desligar o som, com indicação acessível e preferência persistente.
3. Ampliação dos controles de navegação e reorganização do cabeçalho em celulares para evitar sobreposição com a pergunta.
4. Inclusão do atalho “Ir para o conteúdo” e direcionamento do foco para a pergunta, o resultado ou o título ao mudar de tela.
5. Mensagens de erro mais acolhedoras e correção da descrição do resultado para “nível concluído”.
6. Tradução das instruções e dos créditos para português do Brasil, com registro claro da origem das perguntas e dos limites da verificação.

## Testes técnicos realizados

| Verificação | Resultado |
|---|---|
| Sintaxe JavaScript e estrutura do banco de perguntas | Aprovadas; 60 perguntas, 20 por nível, cinco por tema, respostas e imagens presentes. |
| Iniciar cada nível | Quantidade inicial de vidas correta: 3, 2 e 1. |
| Resposta incorreta e clique duplo | Uma vida descontada; clique duplo não desconta duas vidas; alternativas bloqueadas durante o retorno visual. |
| Tentar novamente e avançar após acertar | Pergunta repetida enquanto há vidas; uma estrela por pergunta concluída; vidas restantes mantidas; foco transferido à nova pergunta. |
| Encerrar e reiniciar | Testado nos níveis Médio e Difícil. Reinício com todas as vidas e zero estrelas. |
| Resultado parcial | Uma pergunta concluída em 20 mostra 5% do nível concluído. |
| Conclusão do nível Difícil | Percurso completo das 20 perguntas; resultado com 20 de 20 e 100% do nível concluído. |
| Som e teclado | Ligar/desligar sem alterar pergunta ou vidas; preferência mantida após recarregar; acionamento por Enter; atalho para o conteúdo com foco visível. |
| Computador, 1280 × 720 | Início, instruções e perguntas verificados sem rolagem horizontal. |
| Tablet, 768 × 1024 | Pergunta, ilustração, alternativas e cabeçalho verificados sem rolagem horizontal. |
| Celulares, 320 × 568 e 390 × 844 | Início, perguntas e resultado verificados sem rolagem horizontal; rolagem vertical disponível quando o conteúdo ultrapassa a tela; cabeçalho separado da pergunta. |
| Imagens e console | Ilustrações carregadas e conferidas durante o percurso. Nenhum erro ou aviso no console durante os testes. |
| Recursos locais | JavaScript, estilos, imagens e fontes incluídos na pasta, sem dependência de bibliotecas remotas para jogar. |

Os testes de tamanho de tela foram realizados no navegador Chromium do ambiente de revisão. Eles verificam a adaptação da interface e não substituem testes de toque, desempenho, voz ou navegação em aparelhos Android, iOS e equipamentos escolares reais. A funcionalidade de redução de movimento está implementada por CSS; não foi realizada uma auditoria completa de acessibilidade com tecnologias assistivas.

## Etapas acadêmicas e evidências

| Etapa do projeto | Material disponível | Evidência a ser produzida pela equipe |
|---|---|---|
| Levantamento e análise de requisitos | Requisitos fornecidos, regras dos níveis e esta matriz de verificação. | Registro de conversa com o cliente institucional e aceite dos requisitos. |
| Pesquisa e construção das perguntas | Banco de 60 perguntas, respostas e procedência em PERGUNTAS.md. | Revisão das perguntas por educadores e registro das fontes e decisões pedagógicas. A geração de perguntas não comprova, por si só, uma pesquisa acadêmica. |
| Design da interface | Referência do Figma e interface implementada com adaptações de orientação, foco e som. | Registro das decisões de design e avaliação com professores e crianças. |
| Desenvolvimento da aplicação | Arquivos HTML, CSS, JavaScript e recursos locais editáveis. | Histórico de participação e responsabilidades dos acadêmicos. |
| Testes e validação | Testes técnicos descritos acima. | Testes nos equipamentos reais, avaliação pedagógica e aceite institucional. |

Os objetivos de desenvolver competências técnicas, trabalhar com cliente institucional, vivenciar aprendizagem baseada em projetos e exercitar responsabilidade ética têm suporte nos artefatos desta entrega, mas a participação e a aprendizagem dos acadêmicos precisam ser documentadas pela equipe. O impacto social concreto exige evidências de uso e resultados nas escolas; não pode ser confirmado apenas pela existência do aplicativo.

## Validação com a escola

Antes do uso institucional, a equipe deve realizar uma atividade acompanhada com professores e crianças nos computadores e dispositivos móveis previstos. Registre se conseguem escolher um nível, compreender as imagens e instruções, responder, usar o som e reiniciar. Confira a voz em português, o carregamento e o uso por toque ou teclado. Recolha observações dos educadores sobre dificuldade, clareza e reação ao sistema de vidas.

A equipe pode registrar data, escola, tipos de aparelho e navegador, responsáveis pela avaliação, problemas observados e aceite do cliente. Para demonstrar impacto social, reúna resultados da atividade e retorno dos professores sem inserir dados identificáveis das crianças no jogo.

## Complemento: critérios de entrega apresentados na terceira imagem

A terceira imagem especifica GitHub Pages como hospedagem e nomeia Chrome, Firefox e Edge como navegadores exigidos. Essa especificação complementa os recortes anteriores. O funcionamento na hospedagem atual não comprova publicação no GitHub Pages, e a verificação em Chromium não deve ser registrada como teste dos três navegadores.

| Critério de entrega | Estado verificado |
|---|---|
| Link funcional do jogo publicado no GitHub Pages | Pendente. Há um link funcional no Sites. O pacote foi preparado com index.html na raiz, caminhos relativos e .nojekyll; faltam autenticação, criação do novo repositório e publicação confirmada no GitHub Pages. |
| Aplicação navegável | Verificada tecnicamente: escolha de nível, perguntas, feedback, resultado, reinício e retorno ao início. |
| Estrutura com início, meio e fim | Implementada: início com níveis e instruções; meio com perguntas e progresso; fim ao concluir ou esgotar vidas, com resultado e novas partidas. |
| Compatibilidade com Chrome, Firefox e Edge | Execução nos três produtos ainda não verificada. O ambiente disponibilizou apenas Chromium para automação; não havia Chrome, Firefox ou Edge acessível para teste separado. Há caminhos relativos, recursos locais e tratamento da ausência de voz ou áudio. |
| Interface adequada ao público infantil | Personagem, imagens, opções grandes, mensagens de incentivo e áudio opcional presentes. A avaliação com professores e crianças permanece necessária. |
| Entregar versão funcional | Versão funcional disponível no endereço atual e na pasta completa. A exigência de hospedagem no GitHub Pages continua pendente. |
| Validar a experiência do usuário | Pendente de avaliação com participantes reais. O roteiro VALIDACAO-USUARIO.md foi incluído para registrar navegação, compreensão, reação ao feedback e dificuldades. |

PUBLICACAO-GITHUB-PAGES.md contém as instruções de configuração, com referências à documentação oficial do GitHub. VALIDACAO-USUARIO.md contém a matriz para os três navegadores e o roteiro de avaliação; nenhum resultado de teste com usuários foi fabricado.
