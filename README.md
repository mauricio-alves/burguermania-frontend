# Projeto Final (FrontEnd) - Trilha Desenvolvimento FullStack ResTIC36

## Descrição do projeto

O objetivo é desenvolver o frontend da aplicação fullstack final da trilha, utilizando o framework Angular e seguindo o design fornecido no [Figma](https://www.figma.com/design/19zdCtwsVlhf1qkUmJWIaC/BurguerMania-(Copy)?node-id=1-2&node-type=canvas&t=AibeVoU3oEk7Uvs0-0). O projeto deve ser totalmente responsivo, funcionalmente intuitivo e seguir fielmente o layout proposto. É essencial que o frontend seja dividido em componentes para garantir sua reutilização em diferentes telas. Além disso, deve incluir funcionalidades dinâmicas, como formulários e navegação, além da utilização do Angular Material e do json-server para simular a troca de dados com uma api, o que será substituído no futuro pelo backend desse projeto.

## Requisitos

- Componentização: Criar os componentes de header, botão, card, descrição e input para serem reutilizados em outras partes do sistema.
- Roteamento: Implementar o roteamento para navegação entre as páginas, facilitando a transição de uma tela para outra.
- Estilos Globais com Variáveis CSS: Definir variáveis CSS no arquivo style.css para cores e tipografia. Estas variáveis devem ser aplicadas em todos os componentes e telas do projeto para garantir consistência visual e facilitar futuras modificações de estilo.

## Estrutura de Navegação

- Página de Pedido:

  - Ao clicar em "Pedido", o usuário deve ser direcionado para a tela de pedidos.

- Página de Cardápio:
  - Ao clicar em "Cardápio", o usuário deve ser direcionado para a tela com as categorias de hambúrguer.
  - Ao selecionar uma categoria, o usuário é direcionado para uma página com os hambúrgueres disponíveis nesta categoria.

## Instruções de como executar a aplicação

1. Primeiro, clone este repositório;
2. Abra com qualquer IDE;
3. Abra o terminal e rode o comando `npm install`;
4. Então, rode o comando `json-server db.json`;
5. Em outro terminal, rode o comando `npm start`;
6. Uma janela abrirá no seu navegador e a aplicação será executada.

## Tecnologias utilizadas

- HTML;
- CSS;
- Typescript;
- Node;
- Angular;
- [Angular Hot Toast](https://ngxpert.github.io/hot-toast/);
- [Angular Material](https://material.angular.io/);
- [JSON Server](https://www.npmjs.com/package/json-server);
