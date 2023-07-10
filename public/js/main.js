// Set input variable & key-press event listener
const input = document.querySelector('input');
const searchBtn = document.getElementById('search-btn');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    getCharacter();
  }
});

searchBtn.addEventListener('click', getCharacter);

async function getCharacter() {
    const characterName = document.querySelector('input').value.toLowerCase().trim();
  
    try {
      const res = await fetch(`/api/${characterName}`);
      const data = await res.json();
  
      if (res.ok) {
        renderResults(data);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error(err);
    }
  }

function renderResults(results) {
  const characterList = document.getElementById('character-list');
  characterList.innerHTML = '';

  if (results.length) {
    results.forEach((character) => {
      const li = document.createElement('li');
      li.classList.add('character-data');
      li.innerHTML = `
        <span>Name: ${character.name}</span>
        <span>Race: ${character.race}</span>
        <span>Affiliation: ${character.affiliation}</span>
        <span>Skill: ${character.skill}</span>
      `;
      characterList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.classList.add('character-data');
    li.innerHTML = `<span> No character found. (Psst! Error could totally be on us but we're adding characters everyday!)</span>`
    li.textContent = 'No characters found.';
    characterList.appendChild(li);
  }
}
