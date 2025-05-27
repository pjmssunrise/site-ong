async function carregarDadosFormulario() {
  const urlCSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTgR8nUxQGU9zJOcC8X0AGGrPq8AhbXHPaYW7A9eoFvEmcTWlrbm64w16Z1qFFGR6MGb1RnenlPCl07/pub?output=csv';

  try {
    const response = await fetch(urlCSV);
    const data = await response.text();
    const linhas = data.split('\n').slice(1); // Ignora o cabeçalho
    const container = document.getElementById('lista-animais');
    if (!container) {
      console.error('Elemento #lista-animais não encontrado!');
      return;
    }
    container.innerHTML = '';

    linhas.forEach(linha => {
      const colunas = linha.split(',');

      const nome = colunas[1]?.trim();
      const especie = colunas[2]?.trim();
      const idade = colunas[3]?.trim();
      const linkFotos = colunas[5]?.trim(); // Supondo que a coluna 5 contém o link para fotos

      if (nome && especie && idade && linkFotos) {
        const card = document.createElement('a');
        card.classList.add('card');
        card.href = linkFotos;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.innerHTML = `
          <h3>${nome}</h3>
          <p><strong>Espécie:</strong> ${especie}</p>
          <p><strong>Idade:</strong> ${idade}</p>
        `;
        container.appendChild(card);
      }
    });
  } catch (error) {
    console.error('Erro ao carregar os dados:', error);
    const container = document.getElementById('lista-animais');
    if (container) {
      container.innerHTML = '<p>Erro ao carregar os dados.</p>';
    }
  }
}

document.addEventListener('DOMContentLoaded', carregarDadosFormulario);
