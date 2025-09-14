// Criação das rotas
// Base da rota http://localhost:3000

import { Router } from "express";
import { tarefas, salvarTarefas } from "../models/tarefa";


const router = Router();

router.get("/", (req, res) => {
    res.json(tarefas);
});

// lógica para adicionar tarefa
router.post("/", (req, res) => {
    const { descricao } = req.body; //aqui será extraído o título da tarefa.ts

    if (!descricao) {
        return res.status(400).json({ error: "Descricao da tarefa obrigatorio" });
    }

    let ultimoID;
    if (tarefas.length > 0) {
        ultimoID = tarefas[tarefas.length - 1].id;
    } else {
        ultimoID = 0;
    }

    // 2. Calcula o novo ID baseado no que foi descoberto
    const novoId = ultimoID + 1;

    // 3. Novo ID para um NOVA Tarefa
    const novaTarefa = {
        id: novoId,
        concluida: false,
        descricao: descricao,
    }

    tarefas.push(novaTarefa);
    salvarTarefas();
    res.status(201).json(novaTarefa); // 201 - Created
})

// Deletar tarefa pelo id - por isso o parametro id "/:id"
router.delete("/:id", (req, res) => {
    const deleteID = parseInt(req.params.id);
    const index = tarefas.findIndex((tarefas) => tarefas.id === deleteID);

    // se findIndex retornar -1, a tarefa nao foi encontrada
    if (index === -1) {
        return res.status(404).json({ error: "Tarefa nao encontrada" });
    }

    tarefas.splice(index, 1);
    salvarTarefas();
    res.status(200).json({ message: `Tarefa ${deleteID} deletada com sucesso!` });
})

// Atualizar tarefa pelo id - por isso o parametro id "/:id"
router.put("/:id", (req, res) => {
    const findId = parseInt(req.params.id);
    const { descricao, concluida } = req.body;

    const findTarefa = tarefas.find(tarefa => tarefa.id === findId);

    if (findTarefa) {
        if (descricao !== undefined) {
            findTarefa.descricao = descricao;
        }
        if (concluida !== undefined) {
            findTarefa.concluida = concluida;
        }
        salvarTarefas();

        return res.status(200).json(findTarefa);
    } else {
    
        return res.status(404).json({ message: "Tarefa não encontrada" });
    }
});


export default router;