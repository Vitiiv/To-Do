<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

interface Task {
  id: number;
  descricao: string;
  concluida?: boolean
}

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/json'
  }
})

let taskName = ref<string>("");

let tasks = ref<Task[]>([]);

onBeforeMount(async () => {
  await getTasks();
})

async function addNewTask(value: string) {

  try {
    await api.post("/tarefas", {
      descricao: value
    });
    await getTasks();
  }
  catch (error) {
    console.error(error);
  }
  // console.table(tasks.value);
}

async function editTask(task: Task) {
  task.concluida = !task.concluida;

  try {
    await api.put(`/tarefas/${task.id}`, {
      concluida: task.concluida,
    });
    await getTasks();
  }
  catch (error) {
    console.error(error);
  }
}

async function deleteTask(id: number) {
  try {
    await api.delete(`/tarefas/${id}`);
    await getTasks();
  }
  catch (error) {
    console.error(error);
  }
}

async function getTasks() {
  try {
    const req = await api.get("/tarefas");
    tasks.value = req.data
  }
  catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <div class="container">

    <div class="task-container">
      <h1>Minha lista de tarefas</h1>

      <div class="input-group">
        <button class="addTask" @click="addNewTask(taskName)">
          <span class="material-symbols-rounded" style="font-size: 32px">add</span>
        </button>
        <input type="text" placeholder="Digite uma nova tarefa" v-model="taskName">
      </div>

      <div class="task-section">
        <div class="tasks" v-for="task in tasks">
          <input type="checkbox" @click="editTask(task)" v-model="task.concluida">
          <p :class="task.concluida ? 'task-checked' : ''">{{ task.descricao }}</p>
          <button class="check" @click="deleteTask(task.id)">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  margin-top: 12px;
  color: #1a237e;
  background-color: none;
}

input[type="text"] {
  padding: 10px;
  border: none #ccc;
  outline: none;
  flex: 1;
}

input[type="checkbox"] {
  scale: 1.25;
}


button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: #D95252;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
}

.task-container {
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tasks {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #E9EEF5;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 8px;
}

.input-group {
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  border: 1.5px solid #ccc;
  margin: 16px 0px;
  width: 100%;
}

.input-group button {
  color: white;
  cursor: pointer;
  background-color: #28a745;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}

.input-group button:hover {
  transform: scale(1);
}

.task-checked {
  text-decoration: line-through;
}

.task-section {
  gap: 12px;
  display: flex;
  max-height: 65%;
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  padding: 18px;
}
</style>
