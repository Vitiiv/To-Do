# Projeto Full-Stack: API de Tarefas com Interface Vue.js 📝

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📄 Descrição

Este é um projeto **full-stack** completo de uma lista de tarefas (To-Do List). Ele consiste em duas partes principais:

1.  **Back-end:** Uma API RESTful robusta construída com **Node.js, Express e TypeScript**. Ela é responsável por toda a lógica de negócio, incluindo a criação, leitura, atualização e deleção de tarefas, com os dados sendo persistidos em um arquivo JSON.
2.  **Front-end:** Uma interface de usuário moderna, reativa e amigável construída com **Vue.js e TypeScript**. Ela consome a API do back-end para permitir que o usuário gerencie suas tarefas de forma visual e em tempo real.

Este projeto representa uma jornada completa pelo desenvolvimento de uma aplicação web, desde a modelagem dos dados no servidor até a interação do usuário na tela.

## 📖 Índice

* [Funcionalidades](#-funcionalidades)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [Como Executar o Projeto](#-como-executar-o-projeto)
* [Endpoints da API](#-endpoints-da-api)
* [Próximos Passos](#-próximos-passos)
* [Autor](#-autor)

## ✨ Funcionalidades

- Interface reativa para **adicionar, visualizar, marcar como concluída e deletar** tarefas em tempo real.
- **API RESTful completa** com todas as operações CRUD (Create, Read, Update, Delete).
- **Persistência de dados**: As tarefas são salvas no servidor e não se perdem ao recarregar a página.
- Design limpo, minimalista e responsivo.

## 🚀 Tecnologias Utilizadas

### ⚙️ Back-end
* **Node.js**: Ambiente de execução para o JavaScript no servidor.
* **TypeScript**: Linguagem principal para adicionar tipagem estática e robustez.
* **Express.js**: Framework para a criação do servidor e gerenciamento das rotas da API.
* **`ts-node-dev`**: Ferramenta para o ambiente de desenvolvimento com reinicialização automática.
* **`cors`**: Middleware para permitir a comunicação entre o front-end e o back-end.

### 🎨 Front-end
* **Vue.js**: Framework progressivo para a construção da interface de usuário reativa.
* **TypeScript**: Utilizado com o `<script setup lang="ts">` для um desenvolvimento seguro e organizado.
* **Vite**: Ferramenta de build extremamente rápida para o ambiente de desenvolvimento front-end.
* **Axios**: Cliente HTTP para realizar as requisições à API do back-end.
* **HTML5 & CSS3**: Para a estruturação e estilização da página.

## 📁 Estrutura do Projeto

O repositório está organizado com as duas aplicações em pastas separadas para manter a distinção entre cliente e servidor.

```

/projeto-todo-fullstack
|-- /backend      (Contém a API em Node.js/Express)
|-- /frontend     (Contém a aplicação em Vue.js)
|-- README.md

````

## ⚙️ Como Executar o Projeto

Para executar o projeto completo, você precisará de **dois terminais abertos**: um para o back-end e outro para o front-end.

```bash
# 1. Clone o repositório para sua máquina
$ git clone [https://github.com/SEU-USUARIO-DO-GITHUB/NOME-DO-SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO-DO-GITHUB/NOME-DO-SEU-REPOSITORIO.git)

# 2. Navegue até a pasta principal
$ cd NOME-DO-SEU-REPOSITORIO
```

-----

### Rodando o Back-end (API)

Abra um primeiro terminal e siga os passos:

```bash
# 1. Navegue até a pasta do back-end
$ cd backend

# 2. Instale as dependências
$ npm install

# 3. Rode o servidor da API
$ npm run dev

# ✅ O servidor da API estará rodando em http://localhost:3000
```

-----

### **Rodando o Front-end (Interface)**

Abra um **segundo terminal** (mantenha o primeiro rodando\!) e siga os passos:

```bash
# 1. Navegue até a pasta do front-end (a partir da pasta raiz do projeto)
$ cd frontend

# 2. Instale as dependências
$ npm install

# 3. Rode a aplicação Vue.js
$ npm run dev

# ✅ A aplicação front-end estará acessível em http://localhost:5173 (ou outra porta indicada no terminal)
```


## Endpoints da API

O front-end se comunica com os seguintes endpoints do back-end:

| Método HTTP | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/tarefas` | Retorna a lista completa de todas as tarefas. |
| `POST` | `/tarefas` | Cria uma nova tarefa. |
| `PUT` | `/tarefas/:id` | Atualiza uma tarefa existente pelo seu `id`. |
| `DELETE`| `/tarefas/:id`| Deleta uma tarefa existente pelo seu `id`. |

## 🔮 Próximos Passos

  - **Refatoração do Back-end**: Implementar as camadas de `Controller` e `Service`.
  - **Testes Automatizados**: Adicionar testes unitários para a API (com Jest) e para os componentes Vue (com Vitest).
  - **Banco de Dados**: Migrar a persistência de dados para um banco de dados real (ex: SQLite, PostgreSQL).
  - **Autenticação**: Criar um sistema de usuários e login (com JWT) para que cada usuário tenha sua própria lista.
  - **Deploy**: Publicar o back-end (ex: no Render) e o front-end (ex: no Vercel) para que a aplicação fique acessível online.

## 👨‍💻 Autor

Desenvolvido por **Victor Hugo de Lima Ribeiro**.

  - LinkedIn: [`https://linkedin.com/in/victorhugo-ribeiro`](linkedin.com/in/victorhugo-ribeiro)
  - GitHub: [`@Vitiiv`](https://github.com/Vitiiv)

<!-- end list -->
