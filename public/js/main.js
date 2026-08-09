const input = document.getElementById('character-search');
const searchBtn = document.getElementById('search-btn');
const resetBtn = document.getElementById('reset-btn');
const characterList = document.getElementById('character-list');
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
  const isDark = theme === 'dark';

  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.classList.toggle('is-dark', isDark);
}

if (themeToggle) {
  const initialTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  setTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);

    try {
      localStorage.setItem('theme', nextTheme);
    } catch (error) {
      return;
    }
  });
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    return entities[character];
  });
}

function renderMessage(message) {
  characterList.innerHTML = `<li class="empty-state">${escapeHtml(message)}</li>`;
}

function getRaceClass(race) {
  return `race-tag--${String(race ?? '').trim().toLowerCase()}`;
}

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    getCharacter();
  }
});

searchBtn.addEventListener('click', getCharacter);

resetBtn.addEventListener('click', () => {
  input.value = '';
  characterList.innerHTML = '';
  input.focus();
});

async function getCharacter() {
  const characterName = input.value.toLowerCase().trim();

  if (!characterName) {
    renderMessage('Enter a character name to search.');
    return;
  }

  renderMessage('Searching...');
  characterList.setAttribute('aria-busy', 'true');
  searchBtn.disabled = true;

  try {
    const res = await fetch(`/api/${encodeURIComponent(characterName)}`);
    const data = await res.json();

    if (res.ok) {
      renderResults(data);
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    renderMessage(err.message || 'No characters found.');
  } finally {
    characterList.removeAttribute('aria-busy');
    searchBtn.disabled = false;
  }
}

function renderResults(results) {
  characterList.innerHTML = '';

  if (!results.length) {
    renderMessage('No characters found.');
    return;
  }

  results.forEach((character) => {
    const li = document.createElement('li');
    li.classList.add('character-card');

    const essenceCardMarkup = character.essenceCard ? `
      <figure class="essence-card">
        <img
          src="${escapeHtml(character.essenceCard)}"
          alt="${escapeHtml(character.essenceCardAlt)}"
          loading="lazy"
          onerror="this.closest('.character-card').classList.add('no-image'); this.closest('.essence-card').remove()"
        >
      </figure>
    ` : '';

    li.innerHTML = `
      ${essenceCardMarkup}
      <div class="character-content">
        <div class="character-header">
          <div>
            <p class="character-id">#${escapeHtml(character.id)}</p>
            <h3>${escapeHtml(character.name)}</h3>
          </div>
          <span class="race-tag ${escapeHtml(getRaceClass(character.race))}">${escapeHtml(character.race)}</span>
        </div>

        <dl class="character-facts">
          <div>
            <dt>Affiliation</dt>
            <dd>${escapeHtml(character.affiliation)}</dd>
          </div>
          <div>
            <dt>Skill</dt>
            <dd>${escapeHtml(character.skill)}</dd>
          </div>
          <div>
            <dt>Quote</dt>
            <dd class="character-quote">${escapeHtml(character.quote)}</dd>
          </div>
        </dl>
      </div>
    `;

    characterList.appendChild(li);
  });
}
