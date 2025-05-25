import Database from 'better-sqlite3';
import fs from 'fs';

// Caminho do banco de dados
const dbPath = './db/animais.db';

// Cria a pasta /db se não existir
if (!fs.existsSync('./db')) {
  fs.mkdirSync('./db');
}

// Cria (ou abre) o banco de dados no caminho certo
const db = new Database(dbPath);

// Cria a tabela "animais" se não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS animais (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    especie TEXT,
    idade INTEGER
  )
`).run();

console.log("Banco de dados criado com sucesso em:", dbPath);