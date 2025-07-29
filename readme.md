# Tiles Move

Um pequeno projeto web para movimentação de tiles em uma grade usando teclado e mouse.

## Estrutura do Projeto
```
.
├── assets/                   # Diretório com recursos estáticos (CSS e JS)
│   ├── css/                  # Estilos do projeto
│   │   ├── reset.css         # Reset de estilos para padronizar entre navegadores
│   │   └── style.css         # Estilos personalizados do layout e elementos
│   └── js/                   # Scripts JavaScript
│       ├── genTiles.js       # Geração dinâmica dos blocos/tiles do jogo ou interface
│       └── script.js         # Script principal com lógica de interação ou animações
└── index.html                # Página HTML principal do projeto
```

## Como funciona

- O arquivo `index.html` exibe uma tabela (`#grid`) que representa a grade de tiles.
- Os arquivos JS em `assets/js/` geram a grade e controlam a movimentação dos tiles:
  - Use as teclas **WASD** ou **Setas** para mover a seleção.
  - Pressione **Enter** para exibir o valor do tile selecionado no painel de debug.
  - Clique em um tile para selecioná-lo (em desenvolvimento).
- O painel de debug mostra as coordenadas atuais e o valor do tile selecionado.

## Como rodar

1. Acesse o [link](https://angelo-miguel.github.io/tilesmove/)
