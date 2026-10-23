/* 60 perguntas. As entradas excluídas do documento foram substituídas por atividades novas.
   Cada nível tem 4 temas, com 5 perguntas por tema. origin indica a proveniência.
   As figuras SVG são locais e independem de acesso à internet. */
'use strict';
window.FONOGAME_LEVELS = [
  {
    "id": "easy",
    "name": "Fácil",
    "icon": "🌟",
    "questions": [
      {
        "id": "e01",
        "theme": "language",
        "prompt": "A capivara ouviu o som \"B\". Qual imagem começa com esse som?",
        "correct": "bola",
        "options": [
          {
            "id": "bola",
            "label": "Bola",
            "image": "bola.jpg",
            "alt": "Bola de futebol"
          },
          {
            "id": "gato",
            "label": "Gato",
            "image": "gato.jpg",
            "alt": "Gato"
          },
          {
            "id": "casa",
            "label": "Casa",
            "image": "casa.jpg",
            "alt": "Casa"
          },
          {
            "id": "pato",
            "label": "Pato",
            "image": "pato.jpg",
            "alt": "Pato"
          }
        ],
        "visual": {
          "image": "sound-b.svg",
          "alt": "A letra B, o som que devemos procurar."
        },
        "type": "images",
        "origin": "document",
        "cue": "Som inicial: B"
      },
      {
        "id": "e02",
        "theme": "language",
        "prompt": "Qual imagem começa com o som \"M\"?",
        "correct": "apple",
        "options": [
          {
            "id": "apple",
            "label": "Maçã",
            "art": "apple.svg",
            "alt": "Maçã"
          },
          {
            "id": "ball",
            "label": "Bola",
            "art": "ball.svg",
            "alt": "Bola"
          },
          {
            "id": "duck",
            "label": "Pato",
            "art": "duck.svg",
            "alt": "Pato"
          },
          {
            "id": "house",
            "label": "Casa",
            "art": "house.svg",
            "alt": "Casa"
          }
        ],
        "visual": {
          "image": "sound-m.svg",
          "alt": "A letra M, o som que devemos procurar."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Som inicial: M"
      },
      {
        "id": "e03",
        "theme": "language",
        "prompt": "Qual é a primeira letra da palavra SAPO?",
        "correct": "S",
        "options": [
          {
            "id": "S",
            "label": "S"
          },
          {
            "id": "B",
            "label": "B"
          },
          {
            "id": "P",
            "label": "P"
          },
          {
            "id": "M",
            "label": "M"
          }
        ],
        "visual": {
          "image": "word-sapo.svg",
          "alt": "Um sapo ao lado da palavra SAPO."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "SAPO"
      },
      {
        "id": "e04",
        "theme": "language",
        "prompt": "Qual palavra começa com o mesmo som de BOLA?",
        "correct": "doll",
        "options": [
          {
            "id": "doll",
            "label": "Boneca",
            "art": "doll.svg",
            "alt": "Boneca"
          },
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          },
          {
            "id": "house",
            "label": "Casa",
            "art": "house.svg",
            "alt": "Casa"
          },
          {
            "id": "duck",
            "label": "Pato",
            "art": "duck.svg",
            "alt": "Pato"
          }
        ],
        "visual": {
          "image": "word-bola.svg",
          "alt": "Uma bola ao lado da palavra BOLA."
        },
        "type": "images",
        "origin": "document",
        "cue": "BOLA"
      },
      {
        "id": "e05",
        "theme": "language",
        "prompt": "Qual imagem começa com o mesmo som de CASA?",
        "correct": "dog",
        "options": [
          {
            "id": "dog",
            "label": "Cachorro",
            "art": "dog.svg",
            "alt": "Cachorro"
          },
          {
            "id": "frog",
            "label": "Sapo",
            "art": "frog.svg",
            "alt": "Sapo"
          },
          {
            "id": "apple",
            "label": "Maçã",
            "art": "apple.svg",
            "alt": "Maçã"
          },
          {
            "id": "duck",
            "label": "Pato",
            "art": "duck.svg",
            "alt": "Pato"
          }
        ],
        "visual": {
          "image": "word-casa.svg",
          "alt": "Uma casa ao lado da palavra CASA."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "CASA"
      },
      {
        "id": "e06",
        "theme": "space",
        "prompt": "O gato está em cima da cadeira. Onde ele está?",
        "correct": "above",
        "options": [
          {
            "id": "above",
            "label": "Em cima",
            "art": "position-above.svg",
            "alt": "Em cima"
          },
          {
            "id": "below",
            "label": "Embaixo",
            "art": "position-below.svg",
            "alt": "Embaixo"
          },
          {
            "id": "beside",
            "label": "Ao lado",
            "art": "position-beside.svg",
            "alt": "Ao lado"
          },
          {
            "id": "behind",
            "label": "Atrás",
            "art": "position-behind.svg",
            "alt": "Atrás"
          }
        ],
        "visual": {
          "image": "cat-chair.svg",
          "alt": "Um gato em cima de uma cadeira."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe a posição do gato"
      },
      {
        "id": "e07",
        "theme": "space",
        "prompt": "A bola está embaixo da mesa. Onde está a bola?",
        "correct": "below",
        "options": [
          {
            "id": "above",
            "label": "Em cima",
            "art": "position-above.svg",
            "alt": "Em cima"
          },
          {
            "id": "below",
            "label": "Embaixo",
            "art": "position-below.svg",
            "alt": "Embaixo"
          },
          {
            "id": "beside",
            "label": "Ao lado",
            "art": "position-beside.svg",
            "alt": "Ao lado"
          },
          {
            "id": "front",
            "label": "Na frente",
            "art": "position-front.svg",
            "alt": "Na frente"
          }
        ],
        "visual": {
          "image": "ball-table.svg",
          "alt": "Uma bola embaixo de uma mesa."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe a posição da bola"
      },
      {
        "id": "e08",
        "theme": "space",
        "prompt": "O cachorro está dentro da casinha. Onde está o cachorro?",
        "correct": "inside",
        "options": [
          {
            "id": "inside",
            "label": "Dentro",
            "art": "position-inside.svg",
            "alt": "Dentro"
          },
          {
            "id": "outside",
            "label": "Fora",
            "art": "position-outside.svg",
            "alt": "Fora"
          },
          {
            "id": "above",
            "label": "Em cima",
            "art": "position-above.svg",
            "alt": "Em cima"
          },
          {
            "id": "beside",
            "label": "Ao lado",
            "art": "position-beside.svg",
            "alt": "Ao lado"
          }
        ],
        "visual": {
          "image": "dog-house.svg",
          "alt": "Um cachorro dentro da abertura da sua casinha."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe a casinha"
      },
      {
        "id": "e09",
        "theme": "space",
        "prompt": "Olhando a imagem, a bola está à direita do menino. Onde está a bola?",
        "correct": "right",
        "options": [
          {
            "id": "right",
            "label": "À direita",
            "art": "arrow-right.svg",
            "alt": "À direita"
          },
          {
            "id": "left",
            "label": "À esquerda",
            "art": "arrow-left.svg",
            "alt": "À esquerda"
          },
          {
            "id": "above",
            "label": "Acima",
            "art": "arrow-up.svg",
            "alt": "Acima"
          },
          {
            "id": "below",
            "label": "Embaixo",
            "art": "arrow-down.svg",
            "alt": "Embaixo"
          }
        ],
        "visual": {
          "image": "ball-right-boy.svg",
          "alt": "Um menino à esquerda e uma bola à sua direita, no ponto de vista de quem observa."
        },
        "type": "images",
        "origin": "document",
        "cue": "Direita e esquerda na imagem"
      },
      {
        "id": "e10",
        "theme": "space",
        "prompt": "O gato está ao lado da árvore. Onde está o gato?",
        "correct": "beside",
        "options": [
          {
            "id": "beside",
            "label": "Ao lado",
            "art": "position-beside.svg",
            "alt": "Ao lado"
          },
          {
            "id": "inside",
            "label": "Dentro",
            "art": "position-inside.svg",
            "alt": "Dentro"
          },
          {
            "id": "above",
            "label": "Em cima",
            "art": "position-above.svg",
            "alt": "Em cima"
          },
          {
            "id": "behind",
            "label": "Atrás",
            "art": "position-behind.svg",
            "alt": "Atrás"
          }
        ],
        "visual": {
          "image": "cat-next-tree.svg",
          "alt": "Um gato ao lado de uma árvore."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe o gato e a árvore"
      },
      {
        "id": "e11",
        "theme": "math",
        "prompt": "Quantas maçãs aparecem na imagem?",
        "correct": "3",
        "options": [
          {
            "id": "1",
            "label": "1"
          },
          {
            "id": "2",
            "label": "2"
          },
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          }
        ],
        "visual": {
          "image": "three-apples.svg",
          "alt": "Três maçãs."
        },
        "type": "numbers",
        "origin": "replacement",
        "cue": "Conte as maçãs"
      },
      {
        "id": "e12",
        "theme": "math",
        "prompt": "Qual grupo tem mais estrelas: o grupo com 2 ou o grupo com 4?",
        "correct": "four",
        "options": [
          {
            "id": "two",
            "label": "2 estrelas",
            "art": "star-yellow-2.svg",
            "alt": "2 estrelas"
          },
          {
            "id": "four",
            "label": "4 estrelas",
            "art": "star-yellow-4.svg",
            "alt": "4 estrelas"
          }
        ],
        "visual": {
          "image": "more-stars.svg",
          "alt": "Dois grupos: um com duas estrelas e outro com quatro estrelas."
        },
        "type": "images",
        "origin": "document",
        "cue": "Compare os dois grupos"
      },
      {
        "id": "e13",
        "theme": "math",
        "prompt": "Qual grupo tem apenas uma bola?",
        "correct": "one",
        "options": [
          {
            "id": "one",
            "label": "1 bola",
            "art": "ball-1.svg",
            "alt": "1 bola"
          },
          {
            "id": "two",
            "label": "2 bolas",
            "art": "ball-2.svg",
            "alt": "2 bolas"
          },
          {
            "id": "three",
            "label": "3 bolas",
            "art": "ball-3.svg",
            "alt": "3 bolas"
          },
          {
            "id": "four",
            "label": "4 bolas",
            "art": "ball-4.svg",
            "alt": "4 bolas"
          }
        ],
        "type": "images",
        "origin": "replacement",
        "cue": "Encontre uma bola"
      },
      {
        "id": "e14",
        "theme": "math",
        "prompt": "Qual é maior: o elefante ou o gato?",
        "correct": "elephant",
        "options": [
          {
            "id": "elephant",
            "label": "Elefante",
            "art": "elephant.svg",
            "alt": "Elefante"
          },
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          }
        ],
        "visual": {
          "image": "elephant-cat.svg",
          "alt": "Um elefante grande e um gato pequeno na mesma linha de chão."
        },
        "type": "images",
        "origin": "document",
        "cue": "Compare os tamanhos"
      },
      {
        "id": "e15",
        "theme": "math",
        "prompt": "Qual é menor: o elefante ou o rato?",
        "correct": "mouse",
        "options": [
          {
            "id": "elephant",
            "label": "Elefante",
            "art": "elephant.svg",
            "alt": "Elefante"
          },
          {
            "id": "mouse",
            "label": "Rato",
            "art": "mouse.svg",
            "alt": "Rato"
          }
        ],
        "visual": {
          "image": "elephant-mouse.svg",
          "alt": "Um elefante grande e um rato muito menor na mesma linha de chão."
        },
        "type": "images",
        "origin": "document",
        "cue": "Compare os tamanhos"
      },
      {
        "id": "e16",
        "theme": "visual",
        "prompt": "Qual bola tem a cor vermelha?",
        "correct": "red",
        "options": [
          {
            "id": "red",
            "label": "Vermelha",
            "art": "ball-red.svg",
            "alt": "Vermelha"
          },
          {
            "id": "blue",
            "label": "Azul",
            "art": "ball-blue.svg",
            "alt": "Azul"
          },
          {
            "id": "green",
            "label": "Verde",
            "art": "ball-green.svg",
            "alt": "Verde"
          },
          {
            "id": "yellow",
            "label": "Amarela",
            "art": "ball-yellow.svg",
            "alt": "Amarela"
          }
        ],
        "type": "images",
        "origin": "document",
        "cue": "Encontre a cor vermelha"
      },
      {
        "id": "e17",
        "theme": "visual",
        "prompt": "Qual figura é igual ao modelo apresentado?",
        "correct": "star",
        "options": [
          {
            "id": "star",
            "label": "Estrela vermelha",
            "art": "star-red.svg",
            "alt": "Estrela vermelha"
          },
          {
            "id": "circle",
            "label": "Círculo azul",
            "art": "circle-blue.svg",
            "alt": "Círculo azul"
          },
          {
            "id": "square",
            "label": "Quadrado verde",
            "art": "square-green.svg",
            "alt": "Quadrado verde"
          },
          {
            "id": "triangle",
            "label": "Triângulo amarelo",
            "art": "triangle-yellow.svg",
            "alt": "Triângulo amarelo"
          }
        ],
        "visual": {
          "image": "model-star.svg",
          "alt": "Modelo: uma estrela vermelha. Encontre a mesma figura nas opções."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe o modelo"
      },
      {
        "id": "e18",
        "theme": "visual",
        "prompt": "Qual figura é um círculo?",
        "correct": "circle",
        "options": [
          {
            "id": "circle",
            "label": "Círculo",
            "art": "circle-blue.svg",
            "alt": "Círculo"
          },
          {
            "id": "square",
            "label": "Quadrado",
            "art": "square-green.svg",
            "alt": "Quadrado"
          },
          {
            "id": "star",
            "label": "Estrela",
            "art": "star-red.svg",
            "alt": "Estrela"
          },
          {
            "id": "triangle",
            "label": "Triângulo",
            "art": "triangle-yellow.svg",
            "alt": "Triângulo"
          }
        ],
        "visual": {
          "image": "shapes.svg",
          "alt": "Um círculo azul, um triângulo amarelo e um quadrado verde."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Descubra a forma"
      },
      {
        "id": "e19",
        "theme": "visual",
        "prompt": "Qual animal vive na água: cachorro, peixe ou leão?",
        "correct": "fish",
        "options": [
          {
            "id": "dog",
            "label": "Cachorro",
            "art": "dog.svg",
            "alt": "Cachorro"
          },
          {
            "id": "fish",
            "label": "Peixe",
            "art": "fish.svg",
            "alt": "Peixe"
          },
          {
            "id": "lion",
            "label": "Leão",
            "art": "lion.svg",
            "alt": "Leão"
          }
        ],
        "visual": {
          "image": "water-animals.svg",
          "alt": "Um cachorro, um peixe e um leão."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe os animais"
      },
      {
        "id": "e20",
        "theme": "visual",
        "prompt": "Qual figura é diferente neste grupo de três maçãs e uma banana?",
        "correct": "banana",
        "options": [
          {
            "id": "apple",
            "label": "Maçã",
            "art": "apple.svg",
            "alt": "Maçã"
          },
          {
            "id": "banana",
            "label": "Banana",
            "art": "banana.svg",
            "alt": "Banana"
          }
        ],
        "visual": {
          "image": "odd-fruit.svg",
          "alt": "Três maçãs e uma banana."
        },
        "type": "images",
        "origin": "document",
        "cue": "Encontre a figura diferente"
      }
    ]
  },
  {
    "id": "medium",
    "name": "Médio",
    "icon": "🔥",
    "questions": [
      {
        "id": "m01",
        "theme": "language",
        "prompt": "Qual palavra começa com o mesmo som de PATO?",
        "correct": "pan",
        "options": [
          {
            "id": "pan",
            "label": "Panela",
            "art": "pan.svg",
            "alt": "Panela"
          },
          {
            "id": "doll",
            "label": "Boneca",
            "art": "doll.svg",
            "alt": "Boneca"
          },
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          },
          {
            "id": "house",
            "label": "Casa",
            "art": "house.svg",
            "alt": "Casa"
          }
        ],
        "visual": {
          "image": "word-pato.svg",
          "alt": "Um pato ao lado da palavra PATO."
        },
        "type": "images",
        "origin": "document",
        "cue": "PATO"
      },
      {
        "id": "m02",
        "theme": "language",
        "prompt": "Qual é a primeira sílaba da palavra CASA?",
        "correct": "CA",
        "options": [
          {
            "id": "CA",
            "label": "CA"
          },
          {
            "id": "SA",
            "label": "SA"
          },
          {
            "id": "PA",
            "label": "PA"
          },
          {
            "id": "BO",
            "label": "BO"
          }
        ],
        "visual": {
          "image": "word-casa.svg",
          "alt": "Uma casa ao lado da palavra CASA."
        },
        "type": "numbers",
        "origin": "replacement",
        "cue": "CA · SA"
      },
      {
        "id": "m03",
        "theme": "language",
        "prompt": "Qual palavra rima com GATO?",
        "correct": "duck",
        "options": [
          {
            "id": "duck",
            "label": "Pato",
            "art": "duck.svg",
            "alt": "Pato"
          },
          {
            "id": "ball",
            "label": "Bola",
            "art": "ball.svg",
            "alt": "Bola"
          },
          {
            "id": "house",
            "label": "Casa",
            "art": "house.svg",
            "alt": "Casa"
          },
          {
            "id": "banana",
            "label": "Banana",
            "art": "banana.svg",
            "alt": "Banana"
          }
        ],
        "visual": {
          "image": "word-gato.svg",
          "alt": "Um gato ao lado da palavra GATO."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "GATO"
      },
      {
        "id": "m04",
        "theme": "language",
        "prompt": "Qual palavra tem mais sílabas: PÃO ou BANANA?",
        "correct": "banana",
        "options": [
          {
            "id": "bread",
            "label": "PÃO",
            "art": "bread.svg",
            "alt": "PÃO"
          },
          {
            "id": "banana",
            "label": "BA-NA-NA",
            "art": "banana.svg",
            "alt": "BA-NA-NA"
          }
        ],
        "visual": {
          "image": "bread-banana.svg",
          "alt": "Pão com uma sílaba e banana com três sílabas."
        },
        "type": "images",
        "origin": "document",
        "cue": "PÃO = 1 · BA-NA-NA = 3"
      },
      {
        "id": "m05",
        "theme": "language",
        "prompt": "Qual palavra começa com um som diferente: BOLA, BONECA ou SAPO?",
        "correct": "frog",
        "options": [
          {
            "id": "ball",
            "label": "Bola",
            "art": "ball.svg",
            "alt": "Bola"
          },
          {
            "id": "doll",
            "label": "Boneca",
            "art": "doll.svg",
            "alt": "Boneca"
          },
          {
            "id": "frog",
            "label": "Sapo",
            "art": "frog.svg",
            "alt": "Sapo"
          }
        ],
        "visual": {
          "image": "odd-sound.svg",
          "alt": "Uma bola, uma boneca e um sapo, com os nomes escritos."
        },
        "type": "images",
        "origin": "document",
        "cue": "Compare os sons iniciais"
      },
      {
        "id": "m06",
        "theme": "space",
        "prompt": "O passarinho está acima da árvore. Onde ele está?",
        "correct": "above",
        "options": [
          {
            "id": "above",
            "label": "Acima",
            "art": "position-above.svg",
            "alt": "Acima"
          },
          {
            "id": "below",
            "label": "Embaixo",
            "art": "position-below.svg",
            "alt": "Embaixo"
          },
          {
            "id": "beside",
            "label": "Ao lado",
            "art": "position-beside.svg",
            "alt": "Ao lado"
          },
          {
            "id": "inside",
            "label": "Dentro",
            "art": "position-inside.svg",
            "alt": "Dentro"
          }
        ],
        "visual": {
          "image": "bird-above-tree.svg",
          "alt": "Um passarinho acima da copa de uma árvore."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe o passarinho"
      },
      {
        "id": "m07",
        "theme": "space",
        "prompt": "A mochila está na frente da cadeira. Onde está a mochila?",
        "correct": "front",
        "options": [
          {
            "id": "front",
            "label": "Na frente",
            "art": "position-front.svg",
            "alt": "Na frente"
          },
          {
            "id": "behind",
            "label": "Atrás",
            "art": "position-behind.svg",
            "alt": "Atrás"
          },
          {
            "id": "above",
            "label": "Em cima",
            "art": "position-above.svg",
            "alt": "Em cima"
          },
          {
            "id": "below",
            "label": "Embaixo",
            "art": "position-below.svg",
            "alt": "Embaixo"
          }
        ],
        "visual": {
          "image": "backpack-front-chair.svg",
          "alt": "Uma mochila na frente de uma cadeira, cobrindo a parte de baixo da cadeira."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe a mochila"
      },
      {
        "id": "m08",
        "theme": "space",
        "prompt": "Olhando a imagem, a bola está à esquerda do menino. Onde está a bola?",
        "correct": "left",
        "options": [
          {
            "id": "left",
            "label": "À esquerda",
            "art": "arrow-left.svg",
            "alt": "À esquerda"
          },
          {
            "id": "right",
            "label": "À direita",
            "art": "arrow-right.svg",
            "alt": "À direita"
          },
          {
            "id": "above",
            "label": "Acima",
            "art": "arrow-up.svg",
            "alt": "Acima"
          },
          {
            "id": "below",
            "label": "Embaixo",
            "art": "arrow-down.svg",
            "alt": "Embaixo"
          }
        ],
        "visual": {
          "image": "ball-left-boy.svg",
          "alt": "Uma bola à esquerda de um menino, no ponto de vista de quem observa."
        },
        "type": "images",
        "origin": "document",
        "cue": "Direita e esquerda na imagem"
      },
      {
        "id": "m09",
        "theme": "space",
        "prompt": "O livro está embaixo da mesa. Onde está o livro?",
        "correct": "below",
        "options": [
          {
            "id": "below",
            "label": "Embaixo",
            "art": "position-below.svg",
            "alt": "Embaixo"
          },
          {
            "id": "above",
            "label": "Em cima",
            "art": "position-above.svg",
            "alt": "Em cima"
          },
          {
            "id": "beside",
            "label": "Ao lado",
            "art": "position-beside.svg",
            "alt": "Ao lado"
          },
          {
            "id": "front",
            "label": "Na frente",
            "art": "position-front.svg",
            "alt": "Na frente"
          }
        ],
        "visual": {
          "image": "book-table.svg",
          "alt": "Um livro embaixo de uma mesa."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe a posição do livro"
      },
      {
        "id": "m10",
        "theme": "space",
        "prompt": "O cachorro está atrás da menina. Onde ele está?",
        "correct": "behind",
        "options": [
          {
            "id": "behind",
            "label": "Atrás",
            "art": "position-behind.svg",
            "alt": "Atrás"
          },
          {
            "id": "front",
            "label": "Na frente",
            "art": "position-front.svg",
            "alt": "Na frente"
          },
          {
            "id": "above",
            "label": "Em cima",
            "art": "position-above.svg",
            "alt": "Em cima"
          },
          {
            "id": "inside",
            "label": "Dentro",
            "art": "position-inside.svg",
            "alt": "Dentro"
          }
        ],
        "visual": {
          "image": "dog-behind-girl.svg",
          "alt": "Um cachorro atrás de uma menina, parcialmente coberto por ela."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe o cachorro"
      },
      {
        "id": "m11",
        "theme": "math",
        "prompt": "Quantas estrelas aparecem na imagem?",
        "correct": "5",
        "options": [
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          }
        ],
        "visual": {
          "image": "five-stars.svg",
          "alt": "Cinco estrelas amarelas."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "Conte as estrelas"
      },
      {
        "id": "m12",
        "theme": "math",
        "prompt": "Você tem 3 bolas e ganha mais 1. Com quantas bolas fica?",
        "correct": "4",
        "options": [
          {
            "id": "2",
            "label": "2"
          },
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          }
        ],
        "visual": {
          "image": "three-plus-one.svg",
          "alt": "Três bolas mais uma bola."
        },
        "type": "numbers",
        "origin": "replacement",
        "cue": "3 + 1 = ?"
      },
      {
        "id": "m13",
        "theme": "math",
        "prompt": "Qual grupo tem menos objetos: 4 maçãs, 2 maçãs ou 3 maçãs?",
        "correct": "two",
        "options": [
          {
            "id": "four",
            "label": "4 maçãs",
            "art": "apple-4.svg",
            "alt": "4 maçãs"
          },
          {
            "id": "two",
            "label": "2 maçãs",
            "art": "apple-2.svg",
            "alt": "2 maçãs"
          },
          {
            "id": "three",
            "label": "3 maçãs",
            "art": "apple-3.svg",
            "alt": "3 maçãs"
          }
        ],
        "visual": {
          "image": "apple-groups.svg",
          "alt": "Três grupos de maçãs: quatro maçãs, duas maçãs e três maçãs."
        },
        "type": "images",
        "origin": "document",
        "cue": "Compare as quantidades"
      },
      {
        "id": "m14",
        "theme": "math",
        "prompt": "Qual número vem depois do 5?",
        "correct": "6",
        "options": [
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          },
          {
            "id": "8",
            "label": "8"
          }
        ],
        "visual": {
          "image": "after-five.svg",
          "alt": "Uma sequência de números: quatro, cinco e um espaço para o próximo número."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "5 → ?"
      },
      {
        "id": "m15",
        "theme": "math",
        "prompt": "Qual número vem antes do 8?",
        "correct": "7",
        "options": [
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          },
          {
            "id": "9",
            "label": "9"
          }
        ],
        "visual": {
          "image": "before-eight.svg",
          "alt": "Uma sequência de números: um espaço, oito e nove."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "? → 8"
      },
      {
        "id": "m16",
        "theme": "visual",
        "prompt": "Ouça o som: \"miau\". Qual animal faz esse som?",
        "correct": "cat",
        "options": [
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          },
          {
            "id": "dog",
            "label": "Cachorro",
            "art": "dog.svg",
            "alt": "Cachorro"
          },
          {
            "id": "duck",
            "label": "Pato",
            "art": "duck.svg",
            "alt": "Pato"
          },
          {
            "id": "lion",
            "label": "Leão",
            "art": "lion.svg",
            "alt": "Leão"
          }
        ],
        "visual": {
          "image": "listen-miau.svg",
          "alt": "Um alto-falante com a palavra MIAU."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Escute com atenção"
      },
      {
        "id": "m17",
        "theme": "visual",
        "prompt": "Qual figura tem três lados?",
        "correct": "triangle",
        "options": [
          {
            "id": "circle",
            "label": "Círculo",
            "art": "circle-blue.svg",
            "alt": "Círculo"
          },
          {
            "id": "triangle",
            "label": "Triângulo",
            "art": "triangle-yellow.svg",
            "alt": "Triângulo"
          },
          {
            "id": "square",
            "label": "Quadrado",
            "art": "square-green.svg",
            "alt": "Quadrado"
          },
          {
            "id": "star",
            "label": "Estrela",
            "art": "star-red.svg",
            "alt": "Estrela"
          }
        ],
        "visual": {
          "image": "shapes.svg",
          "alt": "Um círculo azul, um triângulo amarelo e um quadrado verde."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe as formas"
      },
      {
        "id": "m18",
        "theme": "visual",
        "prompt": "Ouça a frase: \"O menino está pulando\". Qual imagem corresponde ao que você ouviu?",
        "correct": "jumping",
        "options": [
          {
            "id": "jumping",
            "label": "Pulando",
            "art": "jumping.svg",
            "alt": "Pulando"
          },
          {
            "id": "sitting",
            "label": "Sentado",
            "art": "sitting.svg",
            "alt": "Sentado"
          },
          {
            "id": "running",
            "label": "Correndo",
            "art": "running.svg",
            "alt": "Correndo"
          }
        ],
        "visual": {
          "image": "listen-jump.svg",
          "alt": "Um alto-falante. Ouça a frase e escolha a imagem correspondente."
        },
        "type": "images",
        "origin": "document",
        "cue": "Toque na fala para ouvir novamente"
      },
      {
        "id": "m19",
        "theme": "visual",
        "prompt": "Qual objeto está parcialmente escondido atrás das folhas?",
        "correct": "ball",
        "options": [
          {
            "id": "ball",
            "label": "Bola",
            "art": "ball.svg",
            "alt": "Bola"
          },
          {
            "id": "book",
            "label": "Livro",
            "art": "book.svg",
            "alt": "Livro"
          },
          {
            "id": "car",
            "label": "Carro",
            "art": "car.svg",
            "alt": "Carro"
          },
          {
            "id": "doll",
            "label": "Boneca",
            "art": "doll.svg",
            "alt": "Boneca"
          }
        ],
        "visual": {
          "image": "hidden-ball.svg",
          "alt": "Uma bola vermelha parcialmente escondida atrás das folhas verdes."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe os detalhes da imagem"
      },
      {
        "id": "m20",
        "theme": "visual",
        "prompt": "Complete a sequência: vermelho, azul, vermelho. Qual cor vem depois?",
        "correct": "blue",
        "options": [
          {
            "id": "blue",
            "label": "Azul",
            "art": "circle-blue.svg",
            "alt": "Azul"
          },
          {
            "id": "red",
            "label": "Vermelho",
            "art": "circle-red.svg",
            "alt": "Vermelho"
          },
          {
            "id": "green",
            "label": "Verde",
            "art": "circle-green.svg",
            "alt": "Verde"
          },
          {
            "id": "yellow",
            "label": "Amarelo",
            "art": "circle-yellow.svg",
            "alt": "Amarelo"
          }
        ],
        "visual": {
          "image": "red-blue-sequence.svg",
          "alt": "Sequência: vermelho, azul, vermelho e um espaço vazio."
        },
        "type": "images",
        "origin": "document",
        "cue": "Descubra o padrão"
      }
    ]
  },
  {
    "id": "hard",
    "name": "Difícil",
    "icon": "💎",
    "questions": [
      {
        "id": "h01",
        "theme": "language",
        "prompt": "Qual é a última sílaba da palavra SAPATO?",
        "correct": "TO",
        "options": [
          {
            "id": "SA",
            "label": "SA"
          },
          {
            "id": "PA",
            "label": "PA"
          },
          {
            "id": "TO",
            "label": "TO"
          },
          {
            "id": "CA",
            "label": "CA"
          }
        ],
        "visual": {
          "image": "word-sapato.svg",
          "alt": "A palavra SAPATO separada em três sílabas."
        },
        "type": "numbers",
        "origin": "replacement",
        "cue": "SA · PA · TO"
      },
      {
        "id": "h02",
        "theme": "language",
        "prompt": "Quantas sílabas existem em CA-DEI-RA?",
        "correct": "3",
        "options": [
          {
            "id": "2",
            "label": "2"
          },
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          }
        ],
        "visual": {
          "image": "word-cadeira.svg",
          "alt": "Uma cadeira e a palavra CADEIRA separada em sílabas."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "CA · DEI · RA"
      },
      {
        "id": "h03",
        "theme": "language",
        "prompt": "Qual é a última letra da palavra BOLA?",
        "correct": "A",
        "options": [
          {
            "id": "B",
            "label": "B"
          },
          {
            "id": "O",
            "label": "O"
          },
          {
            "id": "L",
            "label": "L"
          },
          {
            "id": "A",
            "label": "A"
          }
        ],
        "visual": {
          "image": "word-bola.svg",
          "alt": "Uma bola ao lado da palavra BOLA."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "BOLA"
      },
      {
        "id": "h04",
        "theme": "language",
        "prompt": "Qual palavra tem 3 sílabas: SOL, CASA ou BANANA?",
        "correct": "banana",
        "options": [
          {
            "id": "sun",
            "label": "SOL",
            "art": "sun.svg",
            "alt": "SOL"
          },
          {
            "id": "house",
            "label": "CA-SA",
            "art": "house.svg",
            "alt": "CA-SA"
          },
          {
            "id": "banana",
            "label": "BA-NA-NA",
            "art": "banana.svg",
            "alt": "BA-NA-NA"
          }
        ],
        "visual": {
          "image": "three-syllables.svg",
          "alt": "Sol, casa e banana, com as palavras separadas em sílabas."
        },
        "type": "images",
        "origin": "document",
        "cue": "Conte as sílabas"
      },
      {
        "id": "h05",
        "theme": "language",
        "prompt": "Qual palavra rima com CORAÇÃO?",
        "correct": "balloon",
        "options": [
          {
            "id": "balloon",
            "label": "Balão",
            "art": "balloon.svg",
            "alt": "Balão"
          },
          {
            "id": "house",
            "label": "Casa",
            "art": "house.svg",
            "alt": "Casa"
          },
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          },
          {
            "id": "frog",
            "label": "Sapo",
            "art": "frog.svg",
            "alt": "Sapo"
          }
        ],
        "visual": {
          "image": "word-coracao.svg",
          "alt": "Um coração e a palavra CORAÇÃO."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Ouça o final das palavras"
      },
      {
        "id": "h06",
        "theme": "space",
        "prompt": "A bola está entre o gato e o cachorro. Quem está no meio?",
        "correct": "ball",
        "options": [
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          },
          {
            "id": "ball",
            "label": "Bola",
            "art": "ball.svg",
            "alt": "Bola"
          },
          {
            "id": "dog",
            "label": "Cachorro",
            "art": "dog.svg",
            "alt": "Cachorro"
          }
        ],
        "visual": {
          "image": "ball-between.svg",
          "alt": "Da esquerda para a direita: gato, bola e cachorro. A bola está no meio."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe os três elementos"
      },
      {
        "id": "h07",
        "theme": "space",
        "prompt": "A caixa está em cima da mesa. Onde está a bola vermelha?",
        "correct": "inside",
        "options": [
          {
            "id": "inside",
            "label": "Dentro da caixa",
            "art": "ball-inside-box.svg",
            "alt": "Dentro da caixa"
          },
          {
            "id": "below",
            "label": "Embaixo da mesa",
            "art": "ball-below-table.svg",
            "alt": "Embaixo da mesa"
          },
          {
            "id": "beside",
            "label": "Ao lado da mesa",
            "art": "ball-beside-table.svg",
            "alt": "Ao lado da mesa"
          },
          {
            "id": "behind",
            "label": "Atrás da mesa",
            "art": "ball-behind-table.svg",
            "alt": "Atrás da mesa"
          }
        ],
        "visual": {
          "image": "ball-box-table.svg",
          "alt": "Uma caixa em cima de uma mesa, com uma bola dentro da caixa."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe a bola e a caixa"
      },
      {
        "id": "h08",
        "theme": "space",
        "prompt": "Na imagem, o gato está à direita do cachorro, e o cachorro à direita da bola. Quem está mais à esquerda?",
        "correct": "ball",
        "options": [
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          },
          {
            "id": "dog",
            "label": "Cachorro",
            "art": "dog.svg",
            "alt": "Cachorro"
          },
          {
            "id": "ball",
            "label": "Bola",
            "art": "ball.svg",
            "alt": "Bola"
          }
        ],
        "visual": {
          "image": "leftmost-ball.svg",
          "alt": "Da esquerda para a direita: bola, cachorro e gato."
        },
        "type": "images",
        "origin": "document",
        "cue": "Direita e esquerda na imagem"
      },
      {
        "id": "h09",
        "theme": "space",
        "prompt": "O livro está entre a mochila e o lápis. Qual objeto está à direita do livro na imagem?",
        "correct": "pencil",
        "options": [
          {
            "id": "backpack",
            "label": "Mochila",
            "art": "backpack.svg",
            "alt": "Mochila"
          },
          {
            "id": "book",
            "label": "Livro",
            "art": "book.svg",
            "alt": "Livro"
          },
          {
            "id": "pencil",
            "label": "Lápis",
            "art": "pencil.svg",
            "alt": "Lápis"
          }
        ],
        "visual": {
          "image": "book-between.svg",
          "alt": "Da esquerda para a direita: mochila, livro e lápis."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe a ordem dos objetos"
      },
      {
        "id": "h10",
        "theme": "space",
        "prompt": "O pássaro está em cima da árvore e o gato está embaixo dela. Quem está mais acima?",
        "correct": "bird",
        "options": [
          {
            "id": "bird",
            "label": "Pássaro",
            "art": "bird.svg",
            "alt": "Pássaro"
          },
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          }
        ],
        "visual": {
          "image": "bird-cat-tree.svg",
          "alt": "Um pássaro em cima da árvore e um gato embaixo dela."
        },
        "type": "images",
        "origin": "document",
        "cue": "Compare as posições"
      },
      {
        "id": "h11",
        "theme": "math",
        "prompt": "Há 4 maçãs e chegam mais 3. Quantas maçãs há ao todo?",
        "correct": "7",
        "options": [
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          },
          {
            "id": "8",
            "label": "8"
          }
        ],
        "visual": {
          "image": "four-plus-three.svg",
          "alt": "Quatro maçãs mais três maçãs."
        },
        "type": "numbers",
        "origin": "replacement",
        "cue": "4 + 3 = ?"
      },
      {
        "id": "h12",
        "theme": "math",
        "prompt": "Há 8 passarinhos. 2 voam embora. Quantos ficam?",
        "correct": "6",
        "options": [
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          }
        ],
        "visual": {
          "image": "birds-leaving.svg",
          "alt": "Oito passarinhos ao todo: seis ficam e dois estão voando para longe."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "8 − 2 = ?"
      },
      {
        "id": "h13",
        "theme": "math",
        "prompt": "Qual número é maior: 6, 9 ou 4?",
        "correct": "9",
        "options": [
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "9",
            "label": "9"
          },
          {
            "id": "4",
            "label": "4"
          }
        ],
        "visual": {
          "image": "largest-number.svg",
          "alt": "Os números seis, nove e quatro."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "Compare os números"
      },
      {
        "id": "h14",
        "theme": "math",
        "prompt": "Ao juntar um grupo com 2 flores e outro com 3, quantas flores ficam?",
        "correct": "5",
        "options": [
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          }
        ],
        "visual": {
          "image": "two-plus-three.svg",
          "alt": "Duas flores mais três flores."
        },
        "type": "numbers",
        "origin": "replacement",
        "cue": "2 + 3 = ?"
      },
      {
        "id": "h15",
        "theme": "math",
        "prompt": "Complete a sequência: 1, 2, 3, 4. Qual número vem depois?",
        "correct": "5",
        "options": [
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          }
        ],
        "visual": {
          "image": "number-sequence.svg",
          "alt": "A sequência um, dois, três, quatro e um espaço vazio."
        },
        "type": "numbers",
        "origin": "document",
        "cue": "Descubra o próximo número"
      },
      {
        "id": "h16",
        "theme": "visual",
        "prompt": "Complete a sequência: círculo, quadrado, círculo, quadrado. Qual figura vem depois?",
        "correct": "circle",
        "options": [
          {
            "id": "circle",
            "label": "Círculo",
            "art": "circle-blue.svg",
            "alt": "Círculo"
          },
          {
            "id": "square",
            "label": "Quadrado",
            "art": "square-yellow.svg",
            "alt": "Quadrado"
          },
          {
            "id": "star",
            "label": "Estrela",
            "art": "star-red.svg",
            "alt": "Estrela"
          },
          {
            "id": "triangle",
            "label": "Triângulo",
            "art": "triangle-green.svg",
            "alt": "Triângulo"
          }
        ],
        "visual": {
          "image": "shape-sequence.svg",
          "alt": "Sequência: círculo, quadrado, círculo, quadrado e um espaço vazio."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe o padrão das formas"
      },
      {
        "id": "h17",
        "theme": "visual",
        "prompt": "Complete a sequência: vermelho, azul, verde, vermelho, azul. Qual cor vem depois?",
        "correct": "green",
        "options": [
          {
            "id": "green",
            "label": "Verde",
            "art": "circle-green.svg",
            "alt": "Verde"
          },
          {
            "id": "red",
            "label": "Vermelho",
            "art": "circle-red.svg",
            "alt": "Vermelho"
          },
          {
            "id": "blue",
            "label": "Azul",
            "art": "circle-blue.svg",
            "alt": "Azul"
          },
          {
            "id": "yellow",
            "label": "Amarelo",
            "art": "circle-yellow.svg",
            "alt": "Amarelo"
          }
        ],
        "visual": {
          "image": "three-color-sequence.svg",
          "alt": "Sequência: vermelho, azul, verde, vermelho, azul e um espaço vazio."
        },
        "type": "images",
        "origin": "document",
        "cue": "Observe o padrão das cores"
      },
      {
        "id": "h18",
        "theme": "visual",
        "prompt": "Qual destes animais nasce de um ovo?",
        "correct": "hen",
        "options": [
          {
            "id": "hen",
            "label": "Galinha",
            "art": "hen.svg",
            "alt": "Galinha"
          },
          {
            "id": "dog",
            "label": "Cachorro",
            "art": "dog.svg",
            "alt": "Cachorro"
          },
          {
            "id": "cat",
            "label": "Gato",
            "art": "cat.svg",
            "alt": "Gato"
          },
          {
            "id": "horse",
            "label": "Cavalo",
            "art": "horse.svg",
            "alt": "Cavalo"
          }
        ],
        "visual": {
          "image": "egg.svg",
          "alt": "Um ovo."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Observe os animais"
      },
      {
        "id": "h19",
        "theme": "visual",
        "prompt": "Qual objeto é diferente dos outros: maçã, banana ou carro?",
        "correct": "car",
        "options": [
          {
            "id": "apple",
            "label": "Maçã",
            "art": "apple.svg",
            "alt": "Maçã"
          },
          {
            "id": "banana",
            "label": "Banana",
            "art": "banana.svg",
            "alt": "Banana"
          },
          {
            "id": "car",
            "label": "Carro",
            "art": "car.svg",
            "alt": "Carro"
          }
        ],
        "visual": {
          "image": "odd-object.svg",
          "alt": "Uma maçã, uma banana e um carro."
        },
        "type": "images",
        "origin": "document",
        "cue": "Encontre o que não é uma fruta"
      },
      {
        "id": "h20",
        "theme": "visual",
        "prompt": "Qual figura tem a mesma forma e cor do modelo, mas é menor?",
        "correct": "small-square",
        "options": [
          {
            "id": "small-square",
            "label": "Quadrado azul menor",
            "art": "small-square-blue.svg",
            "alt": "Quadrado azul menor"
          },
          {
            "id": "triangle",
            "label": "Triângulo azul",
            "art": "triangle-blue.svg",
            "alt": "Triângulo azul"
          },
          {
            "id": "circle",
            "label": "Círculo azul",
            "art": "circle-blue.svg",
            "alt": "Círculo azul"
          },
          {
            "id": "red-square",
            "label": "Quadrado vermelho",
            "art": "square-red.svg",
            "alt": "Quadrado vermelho"
          }
        ],
        "visual": {
          "image": "model-square.svg",
          "alt": "Modelo: um quadrado azul grande. Procure a mesma forma em tamanho menor."
        },
        "type": "images",
        "origin": "replacement",
        "cue": "Compare forma, cor e tamanho"
      }
    ]
  }
];
