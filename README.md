# API de Tarefas (To-Do List) 📝

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)

Uma API RESTful simples e funcional para gerenciamento de uma lista de tarefas (To-Do), desenvolvida como parte de um projeto de aprendizado em back-end com Node.js e TypeScript.

A API permite criar, listar, atualizar e deletar tarefas, com todos os dados sendo salvos em um arquivo JSON para garantir a persistência.

## 📖 Índice

* [Funcionalidades](#-funcionalidades)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Pré-requisitos](#-pré-requisitos)
* [Como Executar o Projeto](#-como-executar-o-projeto)
* [Endpoints da API](#-endpoints-da-api)
* [Próximos Passos](#-próximos-passos)
* [Autor](#-autor)

## ✨ Funcionalidades

- [x] **Criar** novas tarefas.
- [x] **Listar** todas as tarefas cadastradas.
- [x] **Atualizar** a descrição e o status (concluída/pendente) de uma tarefa específica.
- [x] **Deletar** uma tarefa específica.
- [x] **Persistência de dados**: Todas as alterações são salvas em um arquivo `tarefas.json` local.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o JavaScript no servidor.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática, aumentando a robustez do código.
* **Express.js**: Framework minimalista para a criação do servidor e gerenciamento das rotas.
* **ts-node-dev**: Ferramenta para rodar o servidor em ambiente de desenvolvimento, reiniciando automaticamente a cada alteração no código.

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
* [npm](https://www.npmjs.com/) (geralmente já vem com o Node.js) ou [Yarn](https://yarnpkg.com/)
