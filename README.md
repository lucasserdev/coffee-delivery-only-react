# ☕ Coffee Delivery

Aplicação de e-commerce de café desenvolvida como desafio do programa **Ignite** da [Rocketseat](https://rocketseat.com.br/).

## 🔗 Deploy

🚀 **[Acesse o projeto ao vivo](https://coffee-delivery-only-react.vercel.app)**

---

## 🎯 Sobre o projeto

O Coffee Delivery é uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia. O usuário pode navegar pelo catálogo de cafés, adicionar e remover itens, ajustar quantidades, preencher o endereço de entrega e escolher a forma de pagamento.

---

## ✨ Funcionalidades

- 📋 Listagem de produtos com categorias
- 🛒 Adicionar e remover itens do carrinho
- ➕ ➖ Controle de quantidade por item (na listagem e no checkout)
- 💾 Persistência do carrinho via `localStorage`
- 📝 Formulário completo de endereço de entrega
- 💳 Seleção de método de pagamento (crédito, débito ou dinheiro)
- ✅ Página de confirmação do pedido com resumo
- 📱 Layout totalmente responsivo

---

## 🚀 Tecnologias

| Tecnologia | Versão |
|---|---|
| [Next.js](https://nextjs.org/) | 15 (App Router) |
| [React](https://react.dev/) | 19 |
| [TypeScript](https://www.typescriptlang.org/) | 5 |
| [Tailwind CSS](https://tailwindcss.com/) | v4 |

**Gerenciamento de estado:** Context API + `useReducer`

---

## 🖥️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/lucasserdev/coffee-delivery-only-react.git

# Entre na pasta
cd coffee-delivery-only-react

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── page.tsx          # Página inicial com listagem de cafés
│   ├── checkout/         # Página de checkout
│   └── success/          # Página de confirmação do pedido
├── components/           # Componentes reutilizáveis
├── contexts/             # Context API (CartContext, OrderContext)
├── reducers/             # Reducers do carrinho e endereço
├── types/                # Tipagens TypeScript
└── data/                 # Dados dos cafés
```

---

## 👨‍💻 Autor

Feito com 💜 por **Lucas Dias**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucasdiasleandro/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lucasserdev)
