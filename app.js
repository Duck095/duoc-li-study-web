(() => {
  const SUBJECTS = {
    duoc: {
      label: 'Dược lý', icon: '💊',
      lessons: [{ id: 'all', label: 'Bộ câu hỏi hiện tại', questions: window.QUESTION_BANK || [] }]
    },
    huyet: {
      label: 'Huyết học', icon: '🩸',
      lessons: window.HEMATOLOGY_LESSONS || []
    }
  };
  const STORAGE_KEY = 'medicalStudyHub.v4';
  const OLD_STORAGE_KEY = 'duocLiStudy.v2';
  const THEME_KEY = 'duocLiStudy.theme';

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const shuffle = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const blankProgress = () => ({
    status: {},          // id -> learned | forgot
    wrongIds: [],
    rightIds: [],
    attempts: {},        // id -> {right, wrong}
    lastMode: 'study',
    setup: { sourceType:'range', from:1, to:20, randomCount:20, orderType:'ordered' },
    session: null,
    updatedAt: null
  });

  function blankState() {
    const subjects = {};
    const lastLessonBySubject = {};
    for (const [subjectId, subject] of Object.entries(SUBJECTS)) {
      subjects[subjectId] = {};
      for (const lesson of subject.lessons) subjects[subjectId][lesson.id] = blankProgress();
      if (subject.lessons.length) lastLessonBySubject[subjectId] = subject.lessons[0].id;
    }
    return {
      activeSubject: 'duoc',
      activeLesson: 'all',
      lastLessonBySubject,
      lastMode: 'study',
      subjects,
      migrations: {},
      updatedAt: null
    };
  }

  const isRecord = value => value && typeof value === 'object' && !Array.isArray(value);
  function parseStoredRecord(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || 'null');
      return isRecord(value) ? value : null;
    } catch { return null; }
  }

  function normalizeProgress(value) {
    const base = blankProgress();
    const saved = isRecord(value) ? value : {};
    const attempts = {};
    if (isRecord(saved.attempts)) {
      for (const [id, counts] of Object.entries(saved.attempts)) {
        const normalizeCount = count => Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
        attempts[id] = {
          right: isRecord(counts) ? normalizeCount(counts.right) : 0,
          wrong: isRecord(counts) ? normalizeCount(counts.wrong) : 0
        };
      }
    }
    return {
      ...base,
      ...saved,
      status: isRecord(saved.status) ? saved.status : {},
      wrongIds: Array.isArray(saved.wrongIds) ? saved.wrongIds : [],
      rightIds: Array.isArray(saved.rightIds) ? saved.rightIds : [],
      attempts,
      setup: { ...base.setup, ...(isRecord(saved.setup) ? saved.setup : {}) },
      session: isRecord(saved.session) ? saved.session : null
    };
  }

  function loadState() {
    const saved = parseStoredRecord(STORAGE_KEY) || {};
    const base = blankState();
    const state = {
      ...base,
      ...saved,
      activeSubject: SUBJECTS[saved.activeSubject] ? saved.activeSubject : 'duoc',
      subjects: { ...base.subjects },
      lastLessonBySubject: { ...base.lastLessonBySubject, ...(isRecord(saved.lastLessonBySubject) ? saved.lastLessonBySubject : {}) },
      migrations: { ...(isRecord(saved.migrations) ? saved.migrations : {}) }
    };

    for (const [subjectId, subject] of Object.entries(SUBJECTS)) {
      const savedLessons = isRecord(saved.subjects?.[subjectId]) ? saved.subjects[subjectId] : {};
      state.subjects[subjectId] ||= {};
      for (const lesson of subject.lessons) {
        state.subjects[subjectId][lesson.id] = normalizeProgress(savedLessons[lesson.id]);
      }
      if (!subject.lessons.some(lesson => lesson.id === state.lastLessonBySubject[subjectId])) {
        state.lastLessonBySubject[subjectId] = subject.lessons[0]?.id || '';
      }
    }

    if (!SUBJECTS[state.activeSubject].lessons.some(lesson => lesson.id === saved.activeLesson)) {
      state.activeLesson = state.lastLessonBySubject[state.activeSubject] || SUBJECTS[state.activeSubject].lessons[0]?.id || '';
    } else {
      state.activeLesson = saved.activeLesson;
    }
    state.lastLessonBySubject[state.activeSubject] = state.activeLesson;
    if (!['study', 'test', 'flashcard', 'progress'].includes(state.lastMode)) state.lastMode = 'study';

    if (!state.migrations.duocLiV2) {
      const legacy = parseStoredRecord(OLD_STORAGE_KEY);
      if (legacy && !isRecord(saved.subjects?.duoc?.all)) {
        state.subjects.duoc.all = normalizeProgress(legacy);
        state.lastMode = ['study', 'test', 'flashcard', 'progress'].includes(legacy.lastMode) ? legacy.lastMode : state.lastMode;
      }
      state.migrations.duocLiV2 = true;
    }
    return state;
  }

  let state = loadState();
  let mode = state.lastMode === 'progress' ? 'study' : (state.lastMode || 'study');
  let session = null;

  const els = {
    setupPanel: $('#setupPanel'),
    sessionPanel: $('#sessionPanel'),
    progressPanel: $('#progressPanel'),
    sessionContent: $('#sessionContent'),
    appTitle: $('#appTitle'),
    subjectSelect: $('#subjectSelect'),
    lessonSelect: $('#lessonSelect'),
    lessonDescription: $('#lessonDescription'),
    quickRanges: $('#quickRanges'),
    quickFilters: $('#quickFilters'),
    sourceType: $('#sourceType'),
    from: $('#fromQuestion'),
    to: $('#toQuestion'),
    randomCount: $('#randomCount'),
    orderType: $('#orderType'),
    startBtn: $('#startBtn'),
    poolInfo: $('#poolInfo'),
    setupTitle: $('#setupTitle'),
    setupHint: $('#setupHint'),
    totalBadge: $('#totalBadge'),
    themeBtn: $('#themeBtn'),
    resetBtn: $('#resetBtn')
  };

  const activeSubject = () => SUBJECTS[state.activeSubject] || SUBJECTS.duoc;
  const activeLesson = () => activeSubject().lessons.find(lesson => lesson.id === state.activeLesson) || activeSubject().lessons[0];
  const questions = () => activeLesson()?.questions || [];
  function progress() {
    const subjectId = state.activeSubject;
    const lessonId = activeLesson()?.id;
    if (!state.subjects[subjectId]) state.subjects[subjectId] = {};
    if (!state.subjects[subjectId][lessonId]) state.subjects[subjectId][lessonId] = blankProgress();
    return state.subjects[subjectId][lessonId];
  }

  function saveState() {
    state.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
  function saveSession() {
    if (!session) return;
    progress().session = {
      subjectId: state.activeSubject,
      lessonId: activeLesson().id,
      mode: session.mode,
      ids: session.questions.map(q => q.id),
      index: session.index,
      answers: session.answers,
      revealed: session.revealed,
      flipped: session.flipped,
      submitted: session.submitted || false
    };
    saveState();
  }
  function restoreSession() {
    const s = progress().session;
    if (!s || !Array.isArray(s.ids) || !s.ids.length) return false;
    if (!['study', 'test', 'flashcard'].includes(s.mode)) {
      progress().session = null;
      return false;
    }
    if (s.subjectId && s.subjectId !== state.activeSubject || s.lessonId && s.lessonId !== activeLesson().id) {
      progress().session = null;
      return false;
    }
    const bank = questions();
    const qs = s.ids.map(id => bank.find(q => q.id === id));
    if (!qs.length || qs.some(q => !q)) {
      progress().session = null;
      return false;
    }
    session = {
      mode: s.mode,
      questions: qs,
      index: Math.min(Number.isInteger(s.index) && s.index >= 0 ? s.index : 0, qs.length - 1),
      answers: isRecord(s.answers) ? s.answers : {},
      revealed: isRecord(s.revealed) ? s.revealed : {},
      flipped: !!s.flipped,
      submitted: !!s.submitted
    };
    mode = session.mode;
    switchMode(mode, false);
    showSession();
    return true;
  }

  function syncContextControls() {
    els.subjectSelect.innerHTML = Object.entries(SUBJECTS).map(([id, subject]) =>
      `<option value="${id}">${escapeHtml(subject.label)}</option>`).join('');
    els.subjectSelect.value = state.activeSubject;
    els.lessonSelect.innerHTML = activeSubject().lessons.map(lesson =>
      `<option value="${escapeHtml(lesson.id)}">${escapeHtml(lesson.label)}</option>`).join('');
    els.lessonSelect.value = activeLesson()?.id || '';
    const description = activeLesson()?.description || '';
    els.lessonDescription.textContent = description;
    els.lessonDescription.classList.toggle('hidden', !description);
    const contextTitle = state.activeSubject === 'duoc'
      ? activeSubject().label
      : `${activeSubject().label} — ${activeLesson()?.label || ''}`;
    els.appTitle.textContent = `${contextTitle} — Ôn tập, Kiểm tra & Flashcard`;
    document.title = `${activeSubject().label} — Ôn tập`;
  }

  function changeContext(updateSelection) {
    if (session) saveSession();
    session = null;
    updateSelection();
    saveState();
    syncContextControls();
    if (!els.progressPanel.classList.contains('hidden')) {
      renderProgress();
      return;
    }
    if (!restoreSession()) switchMode(mode, false);
  }

  els.subjectSelect.addEventListener('change', () => {
    const next = els.subjectSelect.value;
    if (!SUBJECTS[next]) return;
    changeContext(() => {
      state.activeSubject = next;
      state.activeLesson = state.lastLessonBySubject[next] || SUBJECTS[next].lessons[0]?.id || '';
    });
  });
  els.lessonSelect.addEventListener('change', () => {
    const next = els.lessonSelect.value;
    if (!activeSubject().lessons.some(lesson => lesson.id === next)) return;
    changeContext(() => {
      state.activeLesson = next;
      state.lastLessonBySubject[state.activeSubject] = next;
    });
  });

  function applyTheme() {
    const theme = localStorage.getItem(THEME_KEY) || 'light';
    document.body.classList.toggle('dark', theme === 'dark');
    els.themeBtn.textContent = theme === 'dark' ? '☀️ Giao diện' : '🌙 Giao diện';
  }
  applyTheme();

  els.themeBtn.addEventListener('click', () => {
    const next = document.body.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme();
  });

  els.resetBtn.addEventListener('click', () => {
    if (!confirm(`Xóa tiến độ ${activeSubject().label} — ${activeLesson().label}, gồm câu sai và trạng thái đã học/chưa nhớ?`)) return;
    state.subjects[state.activeSubject][activeLesson().id] = blankProgress();
    session = null;
    saveState();
    if (!els.progressPanel.classList.contains('hidden')) renderProgress();
    else switchMode(mode, false);
  });

  $$('.tab').forEach(tab => tab.addEventListener('click', () => switchMode(tab.dataset.mode)));

  function switchMode(next, clearSession = true) {
    mode = next;
    state.lastMode = next;
    saveState();
    $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.mode === next));
    if (clearSession) {
      session = null;
      progress().session = null;
      saveState();
    }

    const isProgress = next === 'progress';
    els.setupPanel.classList.toggle('hidden', isProgress);
    els.sessionPanel.classList.add('hidden');
    els.progressPanel.classList.toggle('hidden', !isProgress);

    if (isProgress) renderProgress();
    else renderSetup();
  }

  function renderSetup() {
    syncContextControls();
    const bank = questions();
    els.totalBadge.textContent = `${bank.length} câu`;
    const labels = {
      study: ['Chọn câu để ôn tập', 'Trả lời từng câu, xem đáp án và giải thích ngay.'],
      test: ['Tạo bài kiểm tra', 'Không hiện đúng/sai cho đến khi bạn nộp bài.'],
      flashcard: ['Chọn thẻ ghi nhớ', 'Click hoặc nhấn Space để lật thẻ; đánh dấu Đã học / Chưa nhớ.']
    };
    const [title, hint] = labels[mode];
    els.setupTitle.textContent = title;
    els.setupHint.textContent = hint;
    els.startBtn.textContent = mode === 'study' ? 'Bắt đầu ôn tập' : mode === 'test' ? 'Bắt đầu kiểm tra' : 'Bắt đầu flashcard';

    const setup = progress().setup;
    els.sourceType.value = setup.sourceType || 'range';
    els.from.value = Math.max(1, Math.min(bank.length || 1, +setup.from || 1));
    els.to.value = Math.max(1, Math.min(bank.length || 1, +setup.to || Math.min(20, bank.length)));
    els.randomCount.value = Math.max(1, Math.min(bank.length || 1, +setup.randomCount || Math.min(20, bank.length)));
    els.orderType.value = setup.orderType || 'ordered';

    els.from.max = bank.length;
    els.to.max = bank.length;
    els.randomCount.max = bank.length;
    renderQuickRanges();
    updateConditionals();
    updatePoolInfo();
  }

  function persistSetup() {
    progress().setup = {
      sourceType: els.sourceType.value,
      from: +els.from.value || 1,
      to: +els.to.value || questions().length,
      randomCount: +els.randomCount.value || 1,
      orderType: els.orderType.value
    };
    saveState();
  }

  function clampSetupInputs() {
    const max = questions().length;
    [els.from, els.to, els.randomCount].forEach(input => {
      if (input.value === '') return;
      const value = Number(input.value);
      if (Number.isFinite(value)) input.value = String(Math.max(1, Math.min(max, Math.floor(value))));
    });
  }

  function getPool(applyOrder = true) {
    const bank = questions();
    const lessonProgress = progress();
    const type = els.sourceType.value;
    let pool = [];
    if (type === 'range') {
      let a = Math.max(1, Math.min(bank.length, +els.from.value || 1));
      let b = Math.max(1, Math.min(bank.length, +els.to.value || bank.length));
      if (a > b) [a, b] = [b, a];
      pool = bank.filter(q => q.id >= a && q.id <= b);
    } else if (type === 'random') {
      const n = Math.max(1, Math.min(bank.length, +els.randomCount.value || 1));
      pool = shuffle(bank).slice(0, n);
    } else if (type === 'all') {
      pool = [...bank];
    } else if (type === 'wrong') {
      const ids = new Set(lessonProgress.wrongIds || []);
      pool = bank.filter(q => ids.has(q.id));
    } else if (type === 'forgot') {
      pool = bank.filter(q => lessonProgress.status[q.id] === 'forgot');
    } else if (type === 'unlearned') {
      pool = bank.filter(q => !lessonProgress.status[q.id]);
    }
    if (applyOrder && els.orderType.value === 'shuffle' && type !== 'random') pool = shuffle(pool);
    return pool;
  }

  function updateConditionals() {
    const type = els.sourceType.value;
    $$('.conditional').forEach(el => el.classList.toggle('hidden', el.dataset.show !== type));
  }
  function renderQuickRanges() {
    const count = questions().length;
    const buttons = [];
    for (let from = 1; from <= count; from += 20) {
      const to = Math.min(from + 19, count);
      buttons.push(`<button class="chip" data-quick="range" data-from="${from}" data-to="${to}">${from}–${to}</button>`);
    }
    els.quickRanges.innerHTML = buttons.join('');
  }

  function updatePoolInfo() {
    const pool = getPool(false);
    const type = els.sourceType.value;
    const name = {range:'khoảng đã chọn', random:'random', all:'toàn bộ', wrong:'câu đã làm sai', forgot:'câu chưa nhớ', unlearned:'câu chưa học'}[type];
    els.poolInfo.innerHTML = pool.length
      ? `Sẵn sàng <strong>${pool.length}</strong> câu từ ${name}.`
      : `Không có câu nào trong nhóm này. Hãy chọn nguồn khác hoặc làm bài trước.`;
    els.startBtn.disabled = pool.length === 0;
  }

  [els.sourceType, els.from, els.to, els.randomCount, els.orderType].forEach(el => {
    el.addEventListener('input', () => { clampSetupInputs(); updateConditionals(); persistSetup(); updatePoolInfo(); });
    el.addEventListener('change', () => { clampSetupInputs(); updateConditionals(); persistSetup(); updatePoolInfo(); });
  });

  els.quickFilters.addEventListener('click', event => {
    const chip = event.target.closest('[data-quick]');
    if (!chip) return;
    const q = chip.dataset.quick;
    if (q === 'range') {
      els.sourceType.value = 'range'; els.from.value = chip.dataset.from; els.to.value = chip.dataset.to;
    } else if (q === 'all') els.sourceType.value = 'all';
    else if (q === 'wrong') els.sourceType.value = 'wrong';
    else if (q === 'forgot') els.sourceType.value = 'forgot';
    updateConditionals(); persistSetup(); updatePoolInfo();
  });

  els.startBtn.addEventListener('click', () => {
    const pool = getPool(true);
    if (!pool.length) return;
    session = { mode, questions: pool, index:0, answers:{}, revealed:{}, flipped:false, submitted:false };
    saveSession();
    showSession();
  });

  function showSession() {
    els.setupPanel.classList.add('hidden');
    els.progressPanel.classList.add('hidden');
    els.sessionPanel.classList.remove('hidden');
    if (session.mode === 'study') renderStudy();
    else if (session.mode === 'test') session.submitted ? renderTestResult() : renderTest();
    else renderFlashcard();
  }

  function commonHeader(title) {
    const current = session.index + 1;
    const total = session.questions.length;
    const pct = Math.round((current / total) * 100);
    return `
      <div class="session-toolbar">
        <div><strong>${title}</strong><div class="muted">${escapeHtml(activeSubject().label)} • ${escapeHtml(activeLesson().label)} • ${current}/${total}</div></div>
        <button class="btn ghost" data-action="exit">← Chọn lại câu</button>
      </div>
      <div class="progress-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
    `;
  }

  function optionExplanations(q, chosen) {
    return `<div class="explanations">${q.options.map(o => {
      const cls = o.key === q.answer ? 'correct' : (o.key === chosen ? 'chosen-wrong' : '');
      const tag = o.key === q.answer ? '✓ Đáp án theo đề' : (o.key === chosen ? '✕ Bạn đã chọn' : '');
      return `<div class="explain-row ${cls}"><strong>${o.key}. ${escapeHtml(o.text)}</strong>${tag ? ` <span class="muted">— ${tag}</span>` : ''}<br>${escapeHtml(o.explanation)}</div>`;
    }).join('')}</div>${q.keyNote ? `<div class="key-note">⚠ ${escapeHtml(q.keyNote)}</div>` : ''}`;
  }

  function renderStudy() {
    const q = session.questions[session.index];
    const chosen = session.answers[q.id];
    const revealed = !!session.revealed[q.id];
    const status = progress().status[q.id];

    els.sessionContent.innerHTML = `${commonHeader('📘 Ôn tập')}
      <div class="question-number">Câu ${q.id}</div>
      <div class="question">${escapeHtml(q.question)}</div>
      <div class="options">${q.options.map((o, i) => {
        let cls = '';
        if (revealed) cls = o.key === q.answer ? 'correct' : (o.key === chosen ? 'incorrect' : '');
        else if (o.key === chosen) cls = 'selected';
        return `<button class="option ${cls}" data-answer="${o.key}" ${revealed ? 'disabled' : ''}><span class="letter">${o.key}</span><span>${escapeHtml(o.text)}</span></button>`;
      }).join('')}</div>
      ${revealed ? `<div class="feedback ${chosen === q.answer ? 'good' : 'bad'}"><strong>${chosen === q.answer ? '✓ Chính xác' : `✕ Chưa đúng — đáp án theo đề là ${q.answer}`}</strong>${optionExplanations(q, chosen)}</div>` : ''}
      <div class="session-actions">
        <div class="left-actions">
          <button class="btn ghost status-btn ${status==='learned'?'active learned':''}" data-status="learned">✓ Đã học</button>
          <button class="btn ghost status-btn ${status==='forgot'?'active forgot':''}" data-status="forgot">✕ Chưa nhớ</button>
        </div>
        <div class="right-actions">
          <button class="btn ghost" data-action="prev" ${session.index===0?'disabled':''}>← Trước</button>
          <button class="btn primary" data-action="next" ${session.index===session.questions.length-1?'':' '}>${session.index===session.questions.length-1?'Hoàn thành':'Tiếp →'}</button>
        </div>
      </div>`;

    bindCommon();
    $$('.option[data-answer]').forEach(btn => btn.addEventListener('click', () => answerStudy(q, btn.dataset.answer)));
    $$('[data-status]').forEach(btn => btn.addEventListener('click', () => setStatus(q.id, btn.dataset.status, renderStudy)));
  }

  function answerStudy(q, key) {
    session.answers[q.id] = key;
    session.revealed[q.id] = true;
    recordAttempt(q.id, key === q.answer);
    saveSession();
    renderStudy();
  }

  function renderTest() {
    const q = session.questions[session.index];
    const chosen = session.answers[q.id];
    els.sessionContent.innerHTML = `${commonHeader('📝 Kiểm tra')}
      <div class="question-nav">${session.questions.map((x,i)=>`<button class="nav-dot ${i===session.index?'current':''} ${session.answers[x.id]?'answered':''}" data-jump="${i}">${i+1}</button>`).join('')}</div>
      <div class="question-number">Câu ${q.id}</div>
      <div class="question">${escapeHtml(q.question)}</div>
      <div class="options">${q.options.map(o => `<button class="option ${chosen===o.key?'selected':''}" data-answer="${o.key}"><span class="letter">${o.key}</span><span>${escapeHtml(o.text)}</span></button>`).join('')}</div>
      <div class="session-actions">
        <div class="left-actions"><span class="muted">Đã trả lời ${Object.keys(session.answers).filter(id=>session.questions.some(q=>String(q.id)===String(id))).length}/${session.questions.length}</span></div>
        <div class="right-actions">
          <button class="btn ghost" data-action="prev" ${session.index===0?'disabled':''}>← Trước</button>
          ${session.index < session.questions.length-1 ? `<button class="btn primary" data-action="next">Tiếp →</button>` : `<button class="btn primary" data-action="submit">Nộp bài</button>`}
        </div>
      </div>`;
    bindCommon();
    $$('.option[data-answer]').forEach(btn => btn.addEventListener('click', () => { session.answers[q.id] = btn.dataset.answer; saveSession(); renderTest(); }));
    $$('[data-jump]').forEach(btn => btn.addEventListener('click', () => { session.index = +btn.dataset.jump; saveSession(); renderTest(); }));
    $('[data-action="submit"]')?.addEventListener('click', submitTest);
  }

  function submitTest() {
    const unanswered = session.questions.filter(q => !session.answers[q.id]).length;
    if (unanswered && !confirm(`Bạn còn ${unanswered} câu chưa trả lời. Vẫn nộp bài?`)) return;
    session.submitted = true;
    session.questions.forEach(q => {
      const chosen = session.answers[q.id];
      if (chosen) recordAttempt(q.id, chosen === q.answer);
      else addWrong(q.id);
    });
    saveSession();
    renderTestResult();
  }

  function renderTestResult() {
    const total = session.questions.length;
    const right = session.questions.filter(q => session.answers[q.id] === q.answer).length;
    const wrong = total - right;
    const pct = Math.round((right / total) * 100);
    els.sessionContent.innerHTML = `
      <div class="session-toolbar"><strong>📝 Kết quả kiểm tra</strong><button class="btn ghost" data-action="exit">← Chọn bài khác</button></div>
      <div class="result-hero"><div class="score">${pct}%</div><h2>${right}/${total} câu đúng</h2><p class="muted">Mở từng câu bên dưới để xem giải thích của tất cả đáp án.</p></div>
      <div class="result-grid">
        <div class="metric"><span class="muted">Đúng</span><strong>${right}</strong></div>
        <div class="metric"><span class="muted">Sai / bỏ trống</span><strong>${wrong}</strong></div>
        <div class="metric"><span class="muted">Tổng câu sai đang lưu</span><strong>${progress().wrongIds.length}</strong></div>
      </div>
      <div class="quick-filters" style="margin-bottom:18px">
        <button class="btn danger" data-action="retry-current-wrong" ${wrong===0?'disabled':''}>↻ Làm lại câu sai của bài này</button>
        <button class="btn secondary" data-action="study-current-wrong" ${wrong===0?'disabled':''}>📘 Ôn lại câu sai</button>
      </div>
      <div class="result-list">${session.questions.map((q,i) => {
        const chosen = session.answers[q.id];
        const ok = chosen === q.answer;
        return `<details class="result-item"><summary>${ok?'✓':'✕'} Câu ${q.id}: ${escapeHtml(q.question)}</summary><p><strong>Bạn chọn:</strong> ${chosen || 'Bỏ trống'} • <strong>Đáp án theo đề:</strong> ${q.answer}</p>${optionExplanations(q, chosen)}</details>`;
      }).join('')}</div>`;
    bindCommon();
    $('[data-action="retry-current-wrong"]')?.addEventListener('click', () => startFromWrongInResult('test'));
    $('[data-action="study-current-wrong"]')?.addEventListener('click', () => startFromWrongInResult('study'));
  }

  function startFromWrongInResult(targetMode) {
    const wrongQs = session.questions.filter(q => session.answers[q.id] !== q.answer);
    if (!wrongQs.length) return;
    mode = targetMode;
    state.lastMode = targetMode;
    session = { mode:targetMode, questions:wrongQs, index:0, answers:{}, revealed:{}, flipped:false, submitted:false };
    $$('.tab').forEach(t=>t.classList.toggle('active', t.dataset.mode===targetMode));
    saveSession(); showSession();
  }

  function renderFlashcard() {
    const q = session.questions[session.index];
    const status = progress().status[q.id];
    const correct = q.options.find(o => o.key === q.answer);
    els.sessionContent.innerHTML = `${commonHeader('🧠 Flashcard')}
      <div class="flash-wrap">
        <div class="flashcard ${session.flipped?'flipped':''}" id="flashcard" tabindex="0">
          <div class="flash-face flash-front">
            <div class="flash-label">Câu ${q.id} • Mặt câu hỏi</div>
            <div class="flash-question">${escapeHtml(q.question)}</div>
            <p class="muted">Click hoặc nhấn Space để xem đáp án.</p>
          </div>
          <div class="flash-face flash-back">
            <div class="flash-label">Đáp án theo đề</div>
            <div class="flash-answer">${q.answer}. ${escapeHtml(correct?.text || '')}</div>
            <div class="flash-explain">${escapeHtml(correct?.explanation || '')}</div>
            ${q.keyNote ? `<div class="key-note">⚠ ${escapeHtml(q.keyNote)}</div>` : ''}
            <details style="margin-top:14px"><summary><strong>Xem giải thích tất cả lựa chọn</strong></summary>${optionExplanations(q, null)}</details>
          </div>
        </div>
      </div>
      <div class="session-actions">
        <div class="left-actions">
          <button class="btn ghost status-btn ${status==='learned'?'active learned':''}" data-status="learned">✓ Đã học</button>
          <button class="btn ghost status-btn ${status==='forgot'?'active forgot':''}" data-status="forgot">✕ Chưa nhớ</button>
        </div>
        <div class="right-actions">
          <button class="btn ghost" data-action="prev" ${session.index===0?'disabled':''}>← Trước</button>
          <button class="btn secondary" data-action="flip">Lật thẻ (Space)</button>
          <button class="btn primary" data-action="next">${session.index===session.questions.length-1?'Hoàn thành':'Tiếp →'}</button>
        </div>
      </div>`;
    bindCommon();
    $('#flashcard').addEventListener('click', flipCard);
    $('[data-action="flip"]').addEventListener('click', flipCard);
    $$('[data-status]').forEach(btn => btn.addEventListener('click', () => setStatus(q.id, btn.dataset.status, renderFlashcard)));
  }

  function flipCard() { session.flipped = !session.flipped; saveSession(); renderFlashcard(); }

  function bindCommon() {
    $('[data-action="exit"]')?.addEventListener('click', exitSession);
    $('[data-action="prev"]')?.addEventListener('click', prevQuestion);
    $('[data-action="next"]')?.addEventListener('click', nextQuestion);
  }
  function prevQuestion() {
    if (!session || session.index <= 0) return;
    session.index--; session.flipped = false; saveSession(); showSession();
  }
  function nextQuestion() {
    if (!session) return;
    if (session.index >= session.questions.length - 1) {
      if (session.mode === 'study' || session.mode === 'flashcard') renderCompletion();
      return;
    }
    session.index++; session.flipped = false; saveSession(); showSession();
  }
  function exitSession() {
    session = null; progress().session = null; saveState();
    els.sessionPanel.classList.add('hidden'); els.setupPanel.classList.remove('hidden'); renderSetup();
  }

  function renderCompletion() {
    const currentMode = session.mode;
    const wrongInStudy = session.questions.filter(q => session.answers[q.id] && session.answers[q.id] !== q.answer);
    const forgot = session.questions.filter(q => progress().status[q.id] === 'forgot');
    els.sessionContent.innerHTML = `
      <div class="empty-state">
        <div class="icon">🎉</div><h2>Hoàn thành ${currentMode==='flashcard'?'bộ flashcard':'lượt ôn tập'}!</h2>
        <p class="muted">Tiến độ đã được lưu tự động trên máy.</p>
        <div class="quick-filters" style="justify-content:center">
          ${wrongInStudy.length ? `<button class="btn danger" data-action="retry-wrong-local">↻ Làm lại ${wrongInStudy.length} câu sai</button>` : ''}
          ${forgot.length ? `<button class="btn secondary" data-action="retry-forgot-local">🧠 Ôn lại ${forgot.length} câu chưa nhớ</button>` : ''}
          <button class="btn primary" data-action="exit">Chọn bộ câu khác</button>
        </div>
      </div>`;
    $('[data-action="exit"]')?.addEventListener('click', exitSession);
    $('[data-action="retry-wrong-local"]')?.addEventListener('click', () => {
      session = { mode:'study', questions:wrongInStudy, index:0, answers:{}, revealed:{}, flipped:false, submitted:false }; mode='study'; saveSession(); showSession();
    });
    $('[data-action="retry-forgot-local"]')?.addEventListener('click', () => {
      session = { mode:currentMode, questions:forgot, index:0, answers:{}, revealed:{}, flipped:false, submitted:false }; saveSession(); showSession();
    });
  }

  function setStatus(id, status, rerender) {
    const lessonProgress = progress();
    lessonProgress.status[id] = lessonProgress.status[id] === status ? undefined : status;
    if (!lessonProgress.status[id]) delete lessonProgress.status[id];
    saveState(); rerender();
  }

  function recordAttempt(id, correct) {
    const lessonProgress = progress();
    lessonProgress.attempts[id] ||= {right:0, wrong:0};
    if (correct) {
      lessonProgress.attempts[id].right++;
      lessonProgress.rightIds = [...new Set([...(lessonProgress.rightIds||[]), id])];
      lessonProgress.wrongIds = (lessonProgress.wrongIds||[]).filter(x => x !== id);
    } else {
      lessonProgress.attempts[id].wrong++;
      addWrong(id);
    }
    saveState();
  }
  function addWrong(id) {
    const lessonProgress = progress();
    lessonProgress.wrongIds = [...new Set([...(lessonProgress.wrongIds||[]), id])];
    lessonProgress.rightIds = (lessonProgress.rightIds||[]).filter(x => x !== id);
    saveState();
  }

  function renderProgress() {
    const bank = questions();
    const lessonProgress = progress();
    const learned = bank.filter(q => lessonProgress.status[q.id] === 'learned').length;
    const forgot = bank.filter(q => lessonProgress.status[q.id] === 'forgot').length;
    const wrong = lessonProgress.wrongIds.length;
    const attempted = bank.filter(q => lessonProgress.attempts[q.id] && (lessonProgress.attempts[q.id].right + lessonProgress.attempts[q.id].wrong > 0)).length;
    els.progressPanel.innerHTML = `
      <div class="panel-head"><div><h2>📊 Tiến độ học</h2><p class="muted">${escapeHtml(activeSubject().label)} • ${escapeHtml(activeLesson().label)}. Dữ liệu lưu trên trình duyệt này.</p></div><button class="btn ghost" id="exportBtn">Xuất toàn bộ tiến độ JSON</button></div>
      <div class="stats-grid">
        <div class="stat-card"><span class="muted">Đã học</span><b>${learned}</b></div>
        <div class="stat-card"><span class="muted">Chưa nhớ</span><b>${forgot}</b></div>
        <div class="stat-card"><span class="muted">Câu sai đang lưu</span><b>${wrong}</b></div>
        <div class="stat-card"><span class="muted">Đã từng làm</span><b>${attempted}</b></div>
      </div>
      <div class="quick-filters">
        <button class="btn danger" data-progress-start="wrong" ${wrong? '':'disabled'}>↻ Làm lại câu sai</button>
        <button class="btn secondary" data-progress-start="forgot" ${forgot? '':'disabled'}>🧠 Ôn câu chưa nhớ</button>
        <button class="btn ghost" data-progress-start="unlearned">📘 Học câu chưa học</button>
      </div>
      <div class="table-wrap"><table><thead><tr><th>Câu</th><th>Trạng thái</th><th>Đúng</th><th>Sai</th><th>Còn trong danh sách sai?</th></tr></thead><tbody>
        ${bank.map(q => {
          const s = lessonProgress.status[q.id]; const a = lessonProgress.attempts[q.id] || {right:0,wrong:0};
          return `<tr><td><strong>${q.id}</strong> — ${escapeHtml(q.question)}</td><td><span class="status-pill ${s||'none'}">${s==='learned'?'Đã học':s==='forgot'?'Chưa nhớ':'Chưa đánh dấu'}</span></td><td>${a.right}</td><td>${a.wrong}</td><td>${lessonProgress.wrongIds.includes(q.id)?'Có':'Không'}</td></tr>`;
        }).join('')}
      </tbody></table></div>`;

    $('#exportBtn').addEventListener('click', exportProgress);
    $$('[data-progress-start]').forEach(btn => btn.addEventListener('click', () => {
      const kind = btn.dataset.progressStart;
      const current = progress();
      const bank = questions();
      const qs = kind === 'wrong' ? bank.filter(q=>current.wrongIds.includes(q.id)) : kind==='forgot' ? bank.filter(q=>current.status[q.id]==='forgot') : bank.filter(q=>!current.status[q.id]);
      if (!qs.length) return;
      mode = 'study'; state.lastMode = 'study'; session = {mode:'study', questions:qs, index:0, answers:{}, revealed:{}, flipped:false, submitted:false};
      $$('.tab').forEach(t=>t.classList.toggle('active', t.dataset.mode==='study')); saveSession(); showSession();
    }));
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(state, null, 2)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'medical-study-progress.json'; a.click(); URL.revokeObjectURL(a.href);
  }

  function escapeHtml(v='') {
    return String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  document.addEventListener('keydown', (e) => {
    if (!session || els.sessionPanel.classList.contains('hidden')) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;

    if (session.mode === 'flashcard' && e.code === 'Space') { e.preventDefault(); flipCard(); return; }
    if (e.key === 'ArrowLeft') { prevQuestion(); return; }
    if (e.key === 'ArrowRight') { nextQuestion(); return; }
    if (/^[1-4]$/.test(e.key) && session.mode !== 'flashcard') {
      const q = session.questions[session.index]; const key = ['A','B','C','D'][+e.key-1];
      if (session.mode === 'study' && !session.revealed[q.id]) answerStudy(q, key);
      if (session.mode === 'test' && !session.submitted) { session.answers[q.id] = key; saveSession(); renderTest(); }
    }
  });

  // Khởi tạo
  if (!restoreSession()) switchMode(mode, false);
})();
