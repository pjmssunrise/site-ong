import express from 'express';
import Database from 'better-sqlite3';
import fs from 'fs';

const app = express();
const port = 3000;

const db = new Database('./db/animais.db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Rota de exemplo: listar animais
app.get('/animais', (req, res) => {
  const stmt = db.prepare('SELECT * FROM animais');
  const animais = stmt.all();
  res.json(animais);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});