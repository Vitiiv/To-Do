import express from "express";
import tarefa_routes from "./routes/tarefa_routes";

const app = express();
app.use(express.json());

app.use("/tarefas", tarefa_routes);

app.get("/tarefas", (req, res) => {
    res.send("API To-Do funcioando com sucesso!");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


