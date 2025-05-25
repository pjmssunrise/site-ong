// js/formulario.js

async function carregarDadosFormulario() {
    const urlCSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTgR8nUxQGU9zJOcC8X0AGGrPq8AhbXHPaYW7A9eoFvEmcTWlrbm64w16Z1qFFGR6MGb1RnenlPCl07/pub?output=csv';
  
    try {
      const response = await fetch(urlCSV);
      const data = await response.text();
      const linhas = data.split('\n').slice(1); // Ignora o cabeçalho
      const lista = document.getElementById('dados-lista');
      lista.innerHTML = ''; // Limpa a lista
  
      linhas.forEach(linha => {
        const colunas = linha.split(',');
        const nome = colunas[1];
        const especie = colunas[2];
        const idade = colunas[3];
        if (nome && especie && idade) {
          const li = document.createElement('li');
          li.textContent = `Nome: ${nome} | Espécie: ${especie} | Idade: ${idade}`;
          lista.appendChild(li);
        }
      });
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
      document.getElementById('dados-lista').innerHTML = '<li>Erro ao carregar os dados.</li>';
    }
  }
  
  window.addEventListener('DOMContentLoaded', carregarDadosFormulario);
  