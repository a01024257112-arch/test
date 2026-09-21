/**
 * Vanilla TS quiz engine. No framework, no fetch — everything it needs is
 * embedded in the page as JSON. Scoring happens entirely in this file, in
 * the browser; nothing about a user's answers is ever sent anywhere.
 */

interface ScaleItem { value: number; label: string; }
interface QuizQuestion { id: string; dimension: string | null; reverseScored: boolean; scale: ScaleItem[]; }
interface QuizBand { id: string; minScore: number; maxScore: number; }
interface QuizPayload {
  slug: string;
  title: string;
  scoringMethod: 'sum' | 'mean' | 'per-dimension-sum';
  minPossible: number;
  maxPossible: number;
  dimensions: { id: string; name: string }[] | null;
  questions: QuizQuestion[];
  resultBands: QuizBand[];
  dimensionBands: Record<string, QuizBand[]> | null;
}

interface QuizResult {
  slug: string;
  completedAt: string;
  total?: number;
  bandId?: string;
  perDimension?: Record<string, { total: number; bandId: string }>;
}

(function init() {
  const dataEl = document.getElementById('quiz-data');
  const form = document.querySelector<HTMLFormElement>('[data-quiz-form]');
  if (!dataEl || !form) return;

  const quiz: QuizPayload = JSON.parse(dataEl.textContent || '{}');
  const fieldsets = Array.from(form.querySelectorAll<HTMLFieldSetElement>('[data-quiz-question]'));
  const nextBtn = document.querySelector<HTMLButtonElement>('[data-quiz-next]');
  const backBtn = document.querySelector<HTMLButtonElement>('[data-quiz-back]');
  const progressText = document.querySelector<HTMLElement>('[data-quiz-progress-text]');
  const progressFill = document.querySelector<HTMLElement>('[data-quiz-progress-fill]');
  const progressBar = document.querySelector<HTMLElement>('[data-quiz-progressbar]');
  const completeView = document.querySelector<HTMLElement>('[data-quiz-complete]');
  const resumeBanner = document.querySelector<HTMLElement>('[data-resume-banner]');
  const resumeContinue = document.querySelector<HTMLButtonElement>('[data-resume-continue]');
  const resumeRestart = document.querySelector<HTMLButtonElement>('[data-resume-restart]');

  const STORAGE_KEY = `clarity:progress:${quiz.slug}`;
  const RESULT_KEY = `clarity:result:${quiz.slug}`;
  const total = fieldsets.length;

  let answers: Record<string, number> = {};
  let currentIndex = 0;

  function loadProgress(): { answers: Record<string, number>; currentIndex: number } | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, currentIndex }));
    } catch {
      /* localStorage unavailable (private mode, quota) — quiz still works, just won't resume. */
    }
  }

  function clearProgress() {
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* noop */ }
  }

  function showQuestion(index: number) {
    fieldsets.forEach((fs, i) => {
      fs.hidden = i !== index;
    });
    const q = quiz.questions[index];
    const savedValue = answers[q.id];
    if (savedValue !== undefined) {
      const input = form!.querySelector<HTMLInputElement>(`input[name="${q.id}"][value="${savedValue}"]`);
      if (input) input.checked = true;
    }
    if (progressText) progressText.textContent = `Question ${index + 1} / ${total}`;
    if (progressFill) progressFill.style.width = `${((index + 1) / total) * 100}%`;
    if (progressBar) progressBar.setAttribute('aria-valuenow', String(index + 1));
    if (backBtn) backBtn.disabled = index === 0;
    if (nextBtn) {
      nextBtn.textContent = index === total - 1 ? 'See your results' : 'Next';
      nextBtn.disabled = answers[q.id] === undefined;
    }
    const legend = fieldsets[index].querySelector('legend');
    legend?.setAttribute('tabindex', '-1');
    (legend as HTMLElement | null)?.focus?.();
  }

  function currentQuestionAnswered(): boolean {
    const q = quiz.questions[currentIndex];
    return answers[q.id] !== undefined;
  }

  function computeResult(): QuizResult {
    const result: QuizResult = { slug: quiz.slug, completedAt: new Date().toISOString() };

    if (quiz.scoringMethod === 'per-dimension-sum' && quiz.dimensions) {
      const perDimension: Record<string, { total: number; bandId: string }> = {};
      for (const dim of quiz.dimensions) {
        const dimQuestions = quiz.questions.filter((q) => q.dimension === dim.id);
        let sum = 0;
        for (const q of dimQuestions) {
          const raw = answers[q.id];
          const scaleValues = q.scale.map((s) => s.value);
          const min = Math.min(...scaleValues);
          const max = Math.max(...scaleValues);
          sum += q.reverseScored ? min + max - raw : raw;
        }
        const bands = quiz.dimensionBands?.[dim.id] ?? [];
        const band = bands.find((b) => sum >= b.minScore && sum <= b.maxScore);
        perDimension[dim.id] = { total: sum, bandId: band?.id ?? bands[bands.length - 1]?.id ?? 'unknown' };
      }
      result.perDimension = perDimension;
    } else {
      let sum = 0;
      for (const q of quiz.questions) {
        const raw = answers[q.id];
        const scaleValues = q.scale.map((s) => s.value);
        const min = Math.min(...scaleValues);
        const max = Math.max(...scaleValues);
        sum += q.reverseScored ? min + max - raw : raw;
      }
      const band = quiz.resultBands.find((b) => sum >= b.minScore && sum <= b.maxScore);
      result.total = sum;
      result.bandId = band?.id ?? quiz.resultBands[quiz.resultBands.length - 1]?.id ?? 'unknown';
    }
    return result;
  }

  function finish() {
    const result = computeResult();
    try {
      localStorage.setItem(RESULT_KEY, JSON.stringify(result));
    } catch {
      /* If storage fails we still navigate — the results page will show a friendly retake prompt. */
    }
    clearProgress();
    form!.hidden = true;
    if (completeView) completeView.hidden = false;
    const resultsUrl = (window as unknown as { __QUIZ_RESULTS_URL__?: string }).__QUIZ_RESULTS_URL__;
    setTimeout(() => {
      if (resultsUrl) window.location.href = resultsUrl;
    }, 500);
  }

  form.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    if (target?.type !== 'radio') return;
    const q = quiz.questions[currentIndex];
    if (target.name !== q.id) return;
    answers[q.id] = Number(target.value);
    saveProgress();
    if (nextBtn) nextBtn.disabled = false;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentQuestionAnswered()) return;
    if (currentIndex < total - 1) {
      currentIndex++;
      saveProgress();
      showQuestion(currentIndex);
    } else {
      finish();
    }
  });

  backBtn?.addEventListener('click', () => {
    if (currentIndex === 0) return;
    currentIndex--;
    saveProgress();
    showQuestion(currentIndex);
  });

  // Resume-from-localStorage flow
  const saved = loadProgress();
  if (saved && Object.keys(saved.answers).length > 0 && resumeBanner) {
    resumeBanner.style.display = 'flex';
    resumeContinue?.addEventListener('click', () => {
      answers = saved.answers;
      currentIndex = Math.min(saved.currentIndex, total - 1);
      resumeBanner.style.display = 'none';
      showQuestion(currentIndex);
    });
    resumeRestart?.addEventListener('click', () => {
      clearProgress();
      answers = {};
      currentIndex = 0;
      resumeBanner.style.display = 'none';
      showQuestion(currentIndex);
    });
  }

  showQuestion(0);
})();
