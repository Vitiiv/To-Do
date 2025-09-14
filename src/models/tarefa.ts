// Definições de modelos / entidades / interface
import fs from 'fs';
import path from 'path';

const caminhdoArquivo = path.join(__dirname, '..', '..', 'tarefas.json'); //arquivo onde fica armazenado as tarefas

export interface Tarefa {
    id: number;
    descricao: string;
    concluida: boolean;
}

//Lê os arquivos e carrega os dados do arquivo
function carregarTarefas(): Tarefa[] {
    try {
        const DadosArquivo = fs.readFileSync(caminhdoArquivo, 'utf-8');
        return JSON.parse(DadosArquivo);
    } catch (error) {
        console.log("Lista vazia");
        return [];
    }
}

export function salvarTarefas(): void {
    const conversaoString = JSON.stringify(tarefas, null, 2)

    fs.writeFileSync(caminhdoArquivo, conversaoString)
}
// Array de tarefas para arnmazenar os dados
export const tarefas: Tarefa[] = carregarTarefas();



