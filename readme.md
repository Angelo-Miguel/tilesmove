# Tiles Move

Um pequeno projeto web para movimentação de tiles em uma grade usando teclado e mouse.

## Estrutura do Projeto
index.html  \
assets/  \
├── css/  \
│   ├── reset.css  \
│   └── style.css  \
├── js/  \
│   ├── genTiles.js\
│   └── script.js  

## Como funciona

- O arquivo `index.html` exibe uma tabela (`#grid`) que representa a grade de tiles.
- Os arquivos JS em `assets/js/` geram a grade e controlam a movimentação dos tiles:
  - Use as teclas **WASD** ou **Setas** para mover a seleção.
  - Pressione **Enter** para exibir o valor do tile selecionado no painel de debug.
  - Clique em um tile para selecioná-lo (em desenvolvimento).
- O painel de debug mostra as coordenadas atuais e o valor do tile selecionado.

## Como rodar

1. Acesse o [link](angelo-miguel.github.io/tilesmove/)
