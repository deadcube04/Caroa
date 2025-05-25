# Caroá - E-commerce de Moda Autoral

Este projeto é um e-commerce completo para a marca Caroá, focado em moda autoral e familiar, desenvolvido com React, TypeScript e Styled Components. A marca Caroá é de autoria de Aryelly Serafim, e seu manual completo pode ser encontrado em: [Manual da marca Caroá](https://www.behance.net/gallery/194748109/Manual-da-marca-Caroa).

O sistema permite navegação por coleções, visualização de produtos, adição ao carrinho com escolha de tamanho, histórico de pedidos e controle de estoque.

## Sumário
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Principais Páginas e Componentes](#principais-páginas-e-componentes)
- [API e Mock de Dados](#api-e-mock-de-dados)
- [Customização e Temas](#customização-e-temas)
- [Scripts Disponíveis](#scripts-disponíveis)

---

## Funcionalidades
- Listagem de produtos únicos por nome, filtrados por coleção.
- Página de detalhes do produto com seleção de tamanho.
- Adição de produtos ao carrinho, considerando tamanho como instância única.
- Finalização de compra com atualização de estoque e quantidade vendida.
- Histórico de pedidos com detalhes de produtos e tamanhos adquiridos.
- Navegação por coleções e página institucional.
- Layout responsivo e visual moderno.

## Estrutura do Projeto
```
Caroa_frontend/
├── db.json                # Mock de dados (produtos, coleções, pedidos)
├── public/                # Arquivos públicos e estáticos
├── src/
│   ├── @types/            # Tipos TypeScript globais (Product, Order, etc)
│   ├── assets/            # Imagens do site e produtos
│   ├── components/        # Componentes reutilizáveis (Card, Navbar, Footer, Carousel, etc)
│   ├── pages/             # Páginas principais (Home, Products, Product, Cart, OrderHistory, etc)
│   ├── router/            # Rotas da aplicação
│   ├── services/          # Serviços de API (mockados via db.json)
│   ├── styles/            # Estilos globais
│   └── theme/             # Tema e tipagem do styled-components
├── package.json           # Dependências e scripts
├── vite.config.ts         # Configuração do Vite
└── ...
```

## Como Rodar o Projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o mock da API (json-server):
   ```bash
   npx json-server --watch db.json --port 3000
   ```
3. Em outro terminal, rode o frontend:
   ```bash
   npm run dev
   ```
4. Acesse em [http://localhost:5173](http://localhost:5173)

## Principais Páginas e Componentes
- **Home**: Destaques, carrossel e produtos mais vendidos.
- **Products**: Lista de produtos únicos, busca e filtro por coleção.
- **Product**: Detalhes do produto, seleção de tamanho e adicionar ao carrinho.
- **Cart**: Visualização do carrinho, remoção de itens, finalização de compra.
- **OrderHistory**: Histórico de pedidos finalizados, com detalhes de produtos e tamanhos.
- **Collections/Collection**: Listagem e detalhes das coleções.
- **Navbar/Footer**: Navegação principal e rodapé institucional.

## API e Mock de Dados
- O arquivo `db.json` simula a API REST, com endpoints para produtos, coleções e pedidos.
- Produtos não possuem campo de tamanho; o tamanho é registrado por item no pedido.
- Pedidos possuem status (`Pendente` ou `Concluído`), valor total e lista de produtos comprados (com tamanho).

## Customização e Temas
- O tema visual está em `src/theme/theme.ts`.
- Cores, espaçamentos e fontes podem ser facilmente alterados.
- O layout é responsivo e utiliza styled-components.

## Scripts Disponíveis
- `npm run dev` — Inicia o frontend em modo desenvolvimento.
- `npm run build` — Gera build de produção.
- `npm run lint` — Executa o linter.

---

Desenvolvido por Gabriel Albuquerque, utilizando marca e roupas feitas por Aryelly Serafim.
Para dúvidas ou sugestões, entre em contato!