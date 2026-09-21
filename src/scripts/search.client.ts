interface SearchItem { title: string; description: string; url: string; type: string; keywords: string[]; }

(function init() {
  const dataEl = document.getElementById('search-index');
  const input = document.querySelector<HTMLInputElement>('[data-search-input]');
  const results = document.querySelector<HTMLElement>('[data-search-results]');
  const empty = document.querySelector<HTMLElement>('[data-search-empty]');
  if (!dataEl || !input || !results) return;

  const items: SearchItem[] = JSON.parse(dataEl.textContent || '[]');

  function render(query: string) {
    const q = query.trim().toLowerCase();
    const matches = q.length === 0 ? [] : items.filter((item) => {
      const haystack = [item.title, item.description, ...item.keywords].join(' ').toLowerCase();
      return haystack.includes(q);
    }).slice(0, 20);

    results!.innerHTML = matches.map((m) => `
      <a class="card" href="${m.url}">
        <h3>${m.title}</h3>
        <p style="color:var(--color-text-secondary); margin-bottom:0;">${m.description}</p>
      </a>
    `).join('');

    if (empty) empty.hidden = !(q.length > 0 && matches.length === 0);
  }

  input.addEventListener('input', () => render(input.value));

  const params = new URLSearchParams(window.location.search);
  const initial = params.get('q') || '';
  if (initial) {
    input.value = initial;
    render(initial);
  }
})();
