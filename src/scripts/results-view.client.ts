/**
 * Reads a previously computed result out of localStorage (written by
 * quiz-engine.client.ts) and reveals the matching pre-rendered content
 * blocks. Nothing here ever talks to a server — if there's no local
 * result, we show the "take the test" empty state instead of guessing.
 */

interface QuizResult {
  slug: string;
  completedAt: string;
  total?: number;
  bandId?: string;
  perDimension?: Record<string, { total: number; bandId: string }>;
}

(function init() {
  const root = document.querySelector<HTMLElement>('[data-results-root]');
  if (!root) return;
  const slug = root.dataset.slug;
  if (!slug) return;

  const RESULT_KEY = `clarity:result:${slug}`;
  let result: QuizResult | null = null;
  try {
    const raw = localStorage.getItem(RESULT_KEY);
    if (raw) result = JSON.parse(raw);
  } catch {
    result = null;
  }

  const emptyState = root.querySelector<HTMLElement>('[data-result-empty]');
  const filledState = root.querySelector<HTMLElement>('[data-result-filled]');

  if (!result) {
    if (emptyState) emptyState.hidden = false;
    if (filledState) filledState.hidden = true;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  if (filledState) filledState.hidden = false;

  // Single-score tests
  if (result.bandId) {
    root.querySelectorAll<HTMLElement>('[data-band-content]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.bandId === result!.bandId);
    });
    root.querySelectorAll<HTMLElement>('[data-fill="score"]').forEach((el) => {
      el.textContent = String(result!.total);
    });
  }

  // Per-dimension tests
  if (result.perDimension) {
    for (const [dimId, dimResult] of Object.entries(result.perDimension)) {
      root.querySelectorAll<HTMLElement>(`[data-dimension-result][data-dimension="${dimId}"]`).forEach((el) => {
        el.classList.toggle('is-active', el.dataset.bandId === dimResult.bandId);
      });
      const scoreEl = root.querySelector<HTMLElement>(`[data-dim-score="${dimId}"]`);
      if (scoreEl) scoreEl.textContent = String(dimResult.total);
      const barEl = root.querySelector<HTMLElement>(`[data-dim-bar="${dimId}"]`);
      if (barEl) {
        const min = Number(barEl.dataset.min ?? '0');
        const max = Number(barEl.dataset.max ?? '100');
        const pct = ((dimResult.total - min) / (max - min)) * 100;
        barEl.style.width = `${Math.max(0, Math.min(100, pct))}%`;
      }
    }
  }

  // Retake
  root.querySelectorAll<HTMLElement>('[data-action="retake"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      try {
        localStorage.removeItem(RESULT_KEY);
        localStorage.removeItem(`clarity:progress:${slug}`);
      } catch { /* noop */ }
      const href = btn.dataset.href;
      if (href) window.location.href = href;
    });
  });

  // Copy link — copies the TEST landing page URL, never a URL containing results.
  root.querySelectorAll<HTMLElement>('[data-action="copy-link"]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const url = btn.dataset.href;
      if (!url) return;
      try {
        await navigator.clipboard.writeText(url);
        const original = btn.textContent;
        btn.textContent = 'Link copied';
        setTimeout(() => { btn.textContent = original; }, 1800);
      } catch {
        /* Clipboard API unavailable — no-op; the href is still a real link for right-click-copy. */
      }
    });
  });

  root.querySelectorAll<HTMLElement>('[data-action="share"]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const url = btn.dataset.href;
      const title = btn.dataset.title || document.title;
      if (!url) return;
      if (navigator.share) {
        try { await navigator.share({ title, url }); } catch { /* user cancelled */ }
      } else {
        try {
          await navigator.clipboard.writeText(url);
          const original = btn.textContent;
          btn.textContent = 'Link copied';
          setTimeout(() => { btn.textContent = original; }, 1800);
        } catch { /* noop */ }
      }
    });
  });
})();
