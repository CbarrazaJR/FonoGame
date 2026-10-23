# FonoGame

Jogo educativo para a Educação Infantil — Pré-escola II, baseado no [modelo de Figma fornecido](https://www.figma.com/make/rLEORzB8mtZudd2S0DieEa/Jogo-Educacional-para-Pr%C3%A9-escola?p=f) e ampliado com o documento de perguntas do projeto.

## Como abrir

Extraia o ZIP e abra **index.html** em um navegador atualizado. Mantenha todas as pastas no mesmo lugar. Não é necessário instalar programas, criar uma conta, compilar o código ou configurar um servidor.

Para publicar, envie o conteúdo completo desta pasta a uma hospedagem de páginas estáticas. Alterações nos arquivos locais só aparecem no site após uma nova publicação.

## Como jogar

1. Escolha Fácil, Médio ou Difícil.
2. Leia ou ouça a pergunta e selecione uma resposta com o mouse, com um toque ou pelo teclado.
3. Cada pergunta concluída vale uma estrela. Cada erro consome uma vida. O Fácil começa com 3 vidas, o Médio com 2 e o Difícil com 1.
4. Enquanto houver vidas, é possível tentar novamente a mesma pergunta. As vidas restantes são mantidas ao avançar. Ao terminar as vidas, a partida acaba e pode ser reiniciada sem limite de tentativas.
5. Use o balão da capivara para ouvir a pergunta novamente. O botão de som permite ligar ou desligar a narração e os efeitos.
6. Ao terminar, escolha repetir o nível ou voltar ao início.

Não há limite de tempo para responder. O avanço após uma resposta correta ocorre automaticamente. A porcentagem final representa **perguntas concluídas**, inclusive após tentativas; não é uma taxa de acertos na primeira tentativa.

## Conteúdo incluído

- 60 perguntas em português do Brasil: 20 por nível, com alternativas em ordem aleatória.
- Quatro temas por nível, com cinco perguntas por tema: sons, sílabas e palavras; noções de espaço; matemática, quantidades e comparações; percepção visual, cores, animais e escuta.
- 37 perguntas do documento fornecido e 23 novas perguntas que substituem entradas marcadas como excluídas. Consulte **PERGUNTAS.md** para ver respostas e procedência.
- Fotografias, ilustrações SVG, personagem e fontes incluídos localmente.
- Mensagens de incentivo, estrelas, vidas, progresso e resultados.
- Instruções na tela inicial, controle de som, foco de teclado e adaptação a telas de computadores, tablets e celulares.
- Respeito à preferência de redução de movimento configurada no dispositivo.

## Uso em escolas

A pasta extraída pode ser usada sem internet, com os recursos locais. A narração depende da disponibilidade de uma voz em português no navegador ou no sistema; algumas vozes precisam de conexão. Se a leitura automática não começar, toque no balão da pergunta com o som ligado. O jogo continua funcionando pelas imagens e pelos textos.

A verificação técnica desta entrega foi realizada em navegador Chromium, com diferentes tamanhos de tela. A equipe da escola ainda deve testar os equipamentos, navegadores, recursos de áudio e eventuais bloqueios de rede que serão usados nas atividades. A validação pedagógica e a aceitação institucional também dependem da equipe responsável. Consulte **VERIFICACAO.md**.

O jogo não solicita nome, cadastro, câmera ou microfone e não envia respostas para um servidor. Somente a preferência de som é salva no navegador, quando esse recurso está disponível. O progresso e as vidas pertencem à partida atual e reiniciam ao recarregar, repetir ou escolher outro nível. Os registros da hospedagem pública seguem as regras do provedor.

## Arquivos

```text
FonoGame/
  index.html              Entrada do jogo
  css/styles.css          Aparência e animações
  js/questions.js         Níveis, perguntas e alternativas
  js/app.js               Navegação, vidas, resultados e áudio
  assets/
    capivara.svg          Personagem
    capivara-happy.svg    Personagem comemorando
    images/               Fotografias locais
    illustrations/        Ilustrações didáticas locais
    fonts/                Fontes e licenças
  LEIA-ME.md              Instruções de uso
  CREDITOS.md             Referências e recursos
  PERGUNTAS.md            Perguntas, respostas e procedência
  VERIFICACAO.md          Critérios, testes e validações pendentes
```

Para alterar perguntas, edite **js/questions.js**, mantendo os identificadores únicos, as imagens correspondentes e uma resposta correta por pergunta. Não há dependências de pacotes externos. Os textos originais das licenças das fontes foram preservados.
