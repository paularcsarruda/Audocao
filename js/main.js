const petGrid = document.getElementById('pet-grid');

function carregarPets(lista) {
     // Limpa o grid antes de carregar
     petGrid.innerHTML = "";

     lista.forEach(pet => {
          // Cria as tags de saúde (vacinado, etc)
          const tagsHtml = pet.tags.map(tag => `<span>${tag}</span>`).join('');

          // Estrutura do Card
          const card = `
            <article class="pet-card">
                <div class="pet-image">
                    <img src="${pet.img}" alt="${pet.nome}">
                    <span class="tag-status">${pet.especie}</span>
                </div>
                <div class="pet-info">
                    <h3>${pet.nome}</h3>
                    <p>${pet.sexo} • ${pet.idade} • ${pet.porte}</p>
                    <div class="pet-tags">${tagsHtml}</div>
                    <a href="perfil.html?id=${pet.id}" class="btn-details" style="text-align: center; display: block; text-decoration: none;">Ver Perfil</a>
                </div>
            </article>
        `;

          petGrid.innerHTML += card;
     });
}

// Inicializa a página com todos os pets
carregarPets(pets);

// Lógica básica de filtro (Opcional, mas recomendado para ADS)
document.querySelectorAll('.filter-btn').forEach(botao => {
     botao.addEventListener('click', (e) => {
          // Estilo visual dos botões
          document.querySelector('.filter-btn.active').classList.remove('active');
          e.target.classList.add('active');

          const filtro = e.target.getAttribute('data-filter');

          if (filtro === "Todos") {
               carregarPets(pets);
          } else {
               const filtrados = pets.filter(p => p.especie === filtro);
               carregarPets(filtrados);
          }
     });
});