fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTgR8nUxQGU9zJOcC8X0AGGrPq8AhbXHPaYW7A9eoFvEmcTWlrbm64w16Z1qFFGR6MGb1RnenlPCl07/pub?output=csv')
  .then(res => res.text())
  .then(csvText => {
    // Quebrar o CSV em linhas
    const linhas = csvText.trim().split('\n');
    
    // A primeira linha são os cabeçalhos, então começamos do índice 1
    const lista = document.getElementById('lista-animais');
    lista.innerHTML = ''; // limpa lista antes
    
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].split(',');
      const nome = colunas[0];      // coluna Nome
      const especie = colunas[1];   // coluna Espécie
      const idade = colunas[2];     // coluna Idade
      
      const li = document.createElement('li');
      li.textContent = `${nome} - ${especie} - ${idade} anos`;
      lista.appendChild(li);
    }
  })
  .catch(err => console.error('Erro ao carregar dados:', err));