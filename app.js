(() => {
  const SUBJECTS = {
    duoc: { label: 'Dược lý', icon: '💊', questions: window.QUESTION_BANK || [] },
    benh: { label: 'Bệnh học', icon: '🩺', questions: window.PATHOLOGY_BANK || [] }
  };

  const STORAGE_KEY = 'medicalStudyHub.v3';
  const OLD_STORAGE_KEY = 'duocLiStudy.v2';
  const THEME_KEY = 'medicalStudyHub.theme';

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

  const blankSubjectState = () => ({
    status: {},
    wrongIds: [],
    rightIds: [],
    attempts: {},
    setup: { sourceType: 'range', from: 1, to: 20, randomCount: 20, orderType: 'ordered', topic: 'all' },
    session: null
  });

  const blankState = () => ({
    activeSubject: 'duoc',
    lastMode: 'study',
    subjects: { duoc: blankSubjectState(), benh: blankSubjectState() },
    updatedAt: null
  });

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const base = blankState();
        const merged = { ...base, ...parsed };
        merged.subjects = merged.subjects || {};
        for (const key of Object.keys(SUBJECTS)) {
          merged.subjects[key] = { ...blankSubjectState(), ...(merged.subjects[key] || {}) };
          merged.subjects[key].setup = { ...blankSubjectState().setup, ...(merged.subjects[key].setup || {}) };
        }
        return merged;
      }

      // Tự động chuyển tiến độ Dược lý từ bản cũ sang bản đa môn.
      const oldRaw = localStorage.getItem(OLD_STORAGE_KEY);
      if (oldRaw) {
        const old = JSON.parse(oldRaw);
        const next = blankState();
        next.activeSubject = 'duoc';
        next.lastMode = old.lastMode || 'study';
        next.subjects.duoc = {
          ...blankSubjectState(),
          status: old.status || {},
          wrongIds: old.wrongIds || [],
          rightIds: old.rightIds || [],
          attempts: old.attempts || {},
          setup: { ...blankSubjectState().setup, ...(old.setup || {}) },
          session: old.session || null
        };
        return next;
      }
    } catch (err) {
      console.warn('Không đọc được tiến độ cũ:', err);
    }
    return blankState();
  }

  let state = loadState();
  let subjectKey = SUBJECTS[state.activeSubject] ? state.activeSubject : 'duoc';
  let mode = state.lastMode === 'progress' ? 'study' : (state.lastMode || 'study');
  let session = null;

  const els = {
    appTitle: $('#appTitle'),
    setupPanel: $('#setupPanel'),
    sessionPanel: $('#sessionPanel'),
    progressPanel: $('#progressPanel'),
    sessionContent: $('#sessionContent'),
    subjectSelect: $('#subjectSelect'),
    topicField: $('#topicField'),
    topicSelect: $('#topicSelect'),
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
    quickFilters: $('#quickFilters'),
    subjectBannerName: $('#subjectBannerName'),
    subjectBannerMeta: $('#subjectBannerMeta'),
    themeBtn: $('#themeBtn'),
    resetBtn: $('#resetBtn')
  };

  const subject = () => SUBJECTS[subjectKey];
  const questions = () => subject().questions;
  const progress = () => state.subjects[subjectKey];

  function saveState() {
    state.activeSubject = subjectKey;
    state.lastMode = mode;
    state.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function saveSession() {
    if (!session) return;
    progress().session = {
      subjectKey,
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
    const qs = s.ids.map(id => questions().find(q => q.id === id)).filter(Boolean);
    if (!qs.length) return false;
    session = {
      mode: s.mode,
      questions: qs,
      index: Math.min(s.index || 0, qs.length - 1),
      answers: s.answers || {},
      revealed: s.revealed || {},
      flipped: !!s.flipped,
      submitted: !!s.submitted
    };
    mode = session.mode || 'study';
    switchMode(mode, false);
    showSession();
    return true;
  }

  function applyTheme() {
    const theme = localStorage.getItem(THEME_KEY) || localStorage.getItem('duocLiStudy.theme') || 'light';
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
    if (!confirm(`Xóa toàn bộ tiến độ của môn ${subject().label}? Dữ liệu môn còn lại vẫn được giữ.`)) return;
    state.subjects[subjectKey] = blankSubjectState();
    session = null;
    saveState();
    if (mode === 'progress') renderProgress();
    else renderSetup();
  });

  $$('.tab').forEach(tab => tab.addEventListener('click', () => switchMode(tab.dataset.mode)));

  els.subjectSelect.addEventListener('change', () => {
    persistSetup();
    subjectKey = els.subjectSelect.value;
    state.activeSubject = subjectKey;
    session = null;
    saveState();
    if (mode === 'progress') renderProgress();
    else renderSetup();
  });

  function switchMode(next, clearSession = true) {
    mode = next;
    state.lastMode = next;
    if (clearSession) {
      session = null;
      progress().session = null;
    }
    saveState();
    $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.mode === next));

    const isProgress = next === 'progress';
    els.setupPanel.classList.toggle('hidden', isProgress);
    els.sessionPanel.classList.add('hidden');
    els.progressPanel.classList.toggle('hidden', !isProgress);

    if (isProgress) renderProgress();
    else renderSetup();
  }

  function topicList() {
    return [...new Set(questions().map(q => q.topic).filter(Boolean))];
  }

  function renderTopicSelect() {
    const topics = topicList();
    const saved = progress().setup.topic || 'all';
    els.topicSelect.innerHTML = `<option value="all">Tất cả chủ đề</option>` + topics.map(t => `<option value="${escapeAttr(t)}">${escapeHtml(t)}</option>`).join('');
    els.topicSelect.value = topics.includes(saved) ? saved : 'all';
    els.topicField.classList.toggle('hidden', topics.length === 0);
  }

  function renderQuickFilters() {
    const total = questions().length;
    const ranges = total <= 40
      ? [[1, Math.min(20,total)], [21,total]].filter(([a,b])=>a<=b)
      : [[1,20],[21,40],[41,80],[81,120],[121,total]].filter(([a,b])=>a<=b);
    els.quickFilters.innerHTML = ranges.map(([a,b]) => `<button class="chip" data-quick="${a}-${b}">${a}–${b}</button>`).join('') +
      `<button class="chip" data-quick="all">Tất cả</button>
       <button class="chip warning" data-quick="wrong">↻ Làm lại câu sai</button>
       <button class="chip danger" data-quick="forgot">🧠 Chưa nhớ</button>`;

    els.quickFilters.querySelectorAll('.chip').forEach(chip => chip.addEventListener('click', () => {
      const q = chip.dataset.quick;
      if (/^\d+-\d+$/.test(q)) {
        const [a,b] = q.split('-').map(Number);
        els.sourceType.value = 'range';
        els.from.value = Math.min(a, total);
        els.to.value = Math.min(b, total);
      } else if (q === 'all') els.sourceType.value = 'all';
      else if (q === 'wrong') els.sourceType.value = 'wrong';
      else if (q === 'forgot') els.sourceType.value = 'forgot';
      updateConditionals(); persistSetup(); updatePoolInfo();
    }));
  }

  function renderSetup() {
    const qs = questions();
    const s = progress().setup;
    els.subjectSelect.value = subjectKey;
    renderTopicSelect();
    renderQuickFilters();

    els.appTitle.textContent = `${subject().label} — Ôn tập, Kiểm tra & Flashcard`;
    els.subjectBannerName.textContent = `${subject().icon} ${subject().label}`;
    const topicCount = topicList().length;
    els.subjectBannerMeta.textContent = `${qs.length} câu${topicCount ? ` • ${topicCount} chủ đề` : ''}`;
    els.totalBadge.textContent = `${qs.length} câu`;

    const labels = {
      study: ['Chọn câu để ôn tập', 'Trả lời từng câu, xem đáp án và giải thích ngay.'],
      test: ['Tạo bài kiểm tra', 'Không hiện đúng/sai cho đến khi bạn nộp bài.'],
      flashcard: ['Chọn thẻ ghi nhớ', 'Click hoặc nhấn Space để lật thẻ; đánh dấu Đã học / Chưa nhớ.']
    };
    const [title, hint] = labels[mode];
    els.setupTitle.textContent = `${title} — ${subject().label}`;
    els.setupHint.textContent = hint;
    els.startBtn.textContent = mode === 'study' ? 'Bắt đầu ôn tập' : mode === 'test' ? 'Bắt đầu kiểm tra' : 'Bắt đầu flashcard';

    els.sourceType.value = s.sourceType || 'range';
    els.from.value = s.from || 1;
    els.to.value = Math.min(s.to || 20, qs.length);
    els.randomCount.value = Math.min(s.randomCount || 20, qs.length);
    els.orderType.value = s.orderType || 'ordered';

    els.from.max = qs.length;
    els.to.max = qs.length;
    els.randomCount.max = qs.length;
    updateConditionals();
    updatePoolInfo();
  }

  function persistSetup() {
    if (!state.subjects[subjectKey]) state.subjects[subjectKey] = blankSubjectState();
    progress().setup = {
      sourceType: els.sourceType.value,
      from: +els.from.value || 1,
      to: +els.to.value || questions().length,
      randomCount: +els.randomCount.value || 1,
      orderType: els.orderType.value,
      topic: els.topicSelect.value || 'all'
    };
    saveState();
  }

  function basePool() {
    const topic = els.topicSelect.value || 'all';
    return topic === 'all' ? [...questions()] : questions().filter(q => q.topic === topic);
  }

  function getPool(applyOrder = true) {
    const type = els.sourceType.value;
    const all = questions();
    const base = basePool();
    const p = progress();
    let pool = [];

    if (type === 'range') {
      let a = Math.max(1, Math.min(all.length, +els.from.value || 1));
      let b = Math.max(1, Math.min(all.length, +els.to.value || all.length));
      if (a > b) [a, b] = [b, a];
      pool = base.filter(q => q.id >= a && q.id <= b);
    } else if (type === 'random') {
      const n = Math.max(1, Math.min(base.length || 1, +els.randomCount.value || 1));
      pool = shuffle(base).slice(0, n);
    } else if (type === 'all') {
      pool = [...base];
    } else if (type === 'wrong') {
      const ids = new Set(p.wrongIds || []);
      pool = base.filter(q => ids.has(q.id));
    } else if (type === 'forgot') {
      pool = base.filter(q => p.status[q.id] === 'forgot');
    } else if (type === 'unlearned') {
      pool = base.filter(q => !p.status[q.id]);
    }

    if (applyOrder && els.orderType.value === 'shuffle' && type !== 'random') pool = shuffle(pool);
    return pool;
  }

  function updateConditionals() {
    const type = els.sourceType.value;
    $$('.conditional').forEach(el => el.classList.toggle('hidden', el.dataset.show !== type));
  }

  function updatePoolInfo() {
    const pool = getPool(false);
    const type = els.sourceType.value;
    const topic = els.topicSelect.value || 'all';
    const name = {range:'khoảng đã chọn', random:'random', all:'toàn bộ', wrong:'câu đã làm sai', forgot:'câu chưa nhớ', unlearned:'câu chưa học'}[type];
    const topicText = topic === 'all' ? '' : ` thuộc chủ đề <strong>${escapeHtml(topic)}</strong>`;
    els.poolInfo.innerHTML = pool.length
      ? `Sẵn sàng <strong>${pool.length}</strong> câu từ ${name}${topicText}.`
      : `Không có câu nào trong nhóm này${topicText}. Hãy chọn nguồn/chủ đề khác hoặc làm bài trước.`;
    els.startBtn.disabled = pool.length === 0;
  }

  [els.sourceType, els.from, els.to, els.randomCount, els.orderType, els.topicSelect].forEach(el => {
    el.addEventListener('input', () => { updateConditionals(); persistSetup(); updatePoolInfo(); });
    el.addEventListener('change', () => { updateConditionals(); persistSetup(); updatePoolInfo(); });
  });

  els.startBtn.addEventListener('click', () => {
    const pool = getPool(true);
    if (!pool.length) return;
    session = { mode, questions: pool, index: 0, answers: {}, revealed: {}, flipped: false, submitted: false };
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
        <div><strong>${title} • ${subject().icon} ${subject().label}</strong><div class="muted">${current}/${total}</div></div>
        <button class="btn ghost" data-action="exit">← Chọn lại câu</button>
      </div>
      <div class="progress-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
    `;
  }

  function answerLabel(q) {
    if (subjectKey === 'benh') return 'Đáp án theo tài liệu';
    return q.answerBasis ? 'Đáp án bổ sung' : 'Đáp án theo đề';
  }

  function sourceMeta(q) {
    if (subjectKey === 'benh') {
      const parts = [q.source || 'Bệnh học'];
      if (q.sourceSet) parts.push(q.sourceSet);
      if (q.topic) parts.push(q.topic);
      if (q.sourceQuestion) parts.push(`Câu gốc ${q.sourceQuestion}`);
      return `<span class="source-tag">${escapeHtml(parts.join(' • '))}</span>${q.answerBasis ? `<span class="source-tag secondary">${escapeHtml(q.answerBasis)}</span>` : ''}`;
    }
    if (!q.sourceQuestion) return '<span class="source-tag">Dược lý • File 1</span>';
    return `<span class="source-tag">Dược lý • File 2 • Câu gốc ${q.sourceQuestion}</span><span class="source-tag secondary">Đáp án bổ sung</span>`;
  }

  function formatText(v = '') {
    return escapeHtml(v).replace(/\n/g, '<br>');
  }

  function optionExplanations(q, chosen) {
    return `<div class="explanations">${q.options.map(o => {
      const cls = o.key === q.answer ? 'correct' : (o.key === chosen ? 'chosen-wrong' : '');
      const tag = o.key === q.answer ? `✓ ${answerLabel(q)}` : (o.key === chosen ? '✕ Bạn đã chọn' : '');
      return `<div class="explain-row ${cls}"><strong>${o.key}. ${escapeHtml(o.text)}</strong>${tag ? ` <span class="muted">— ${tag}</span>` : ''}<br>${escapeHtml(o.explanation || '')}</div>`;
    }).join('')}</div>${q.keyNote ? `<div class="key-note">⚠ ${escapeHtml(q.keyNote)}</div>` : ''}`;
  }

  function renderStudy() {
    const q = session.questions[session.index];
    const p = progress();
    const chosen = session.answers[q.id];
    const revealed = !!session.revealed[q.id];
    const status = p.status[q.id];

    els.sessionContent.innerHTML = `${commonHeader('📘 Ôn tập')}
      <div class="question-number">Câu ${q.id}</div>
      <div class="source-meta">${sourceMeta(q)}</div>
      <div class="question">${formatText(q.question)}</div>
      <div class="options">${q.options.map(o => {
        let cls = '';
        if (revealed) cls = o.key === q.answer ? 'correct' : (o.key === chosen ? 'incorrect' : '');
        else if (o.key === chosen) cls = 'selected';
        return `<button class="option ${cls}" data-answer="${o.key}" ${revealed ? 'disabled' : ''}><span class="letter">${o.key}</span><span>${escapeHtml(o.text)}</span></button>`;
      }).join('')}</div>
      ${revealed ? `<div class="feedback ${chosen === q.answer ? 'good' : 'bad'}"><strong>${chosen === q.answer ? '✓ Chính xác' : `✕ Chưa đúng — ${answerLabel(q).toLowerCase()} là ${q.answer}`}</strong>${optionExplanations(q, chosen)}</div>` : ''}
      <div class="session-actions">
        <div class="left-actions">
          <button class="btn ghost status-btn ${status === 'learned' ? 'active learned' : ''}" data-status="learned">✓ Đã học</button>
          <button class="btn ghost status-btn ${status === 'forgot' ? 'active forgot' : ''}" data-status="forgot">✕ Chưa nhớ</button>
        </div>
        <div class="right-actions">
          <button class="btn ghost" data-action="prev" ${session.index === 0 ? 'disabled' : ''}>← Trước</button>
          <button class="btn primary" data-action="next">${session.index === session.questions.length - 1 ? 'Hoàn thành' : 'Tiếp →'}</button>
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
      <div class="question-nav">${session.questions.map((x, i) => `<button class="nav-dot ${i === session.index ? 'current' : ''} ${session.answers[x.id] ? 'answered' : ''}" data-jump="${i}">${i + 1}</button>`).join('')}</div>
      <div class="question-number">Câu ${q.id}</div>
      <div class="source-meta">${sourceMeta(q)}</div>
      <div class="question">${formatText(q.question)}</div>
      <div class="options">${q.options.map(o => `<button class="option ${chosen === o.key ? 'selected' : ''}" data-answer="${o.key}"><span class="letter">${o.key}</span><span>${escapeHtml(o.text)}</span></button>`).join('')}</div>
      <div class="session-actions">
        <div class="left-actions"><span class="muted">Đã trả lời ${Object.keys(session.answers).filter(id => session.questions.some(x => String(x.id) === String(id))).length}/${session.questions.length}</span></div>
        <div class="right-actions">
          <button class="btn ghost" data-action="prev" ${session.index === 0 ? 'disabled' : ''}>← Trước</button>
          ${session.index < session.questions.length - 1 ? `<button class="btn primary" data-action="next">Tiếp →</button>` : `<button class="btn primary" data-action="submit">Nộp bài</button>`}
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
    const p = progress();
    const total = session.questions.length;
    const right = session.questions.filter(q => session.answers[q.id] === q.answer).length;
    const wrong = total - right;
    const pct = Math.round((right / total) * 100);
    els.sessionContent.innerHTML = `
      <div class="session-toolbar"><strong>📝 Kết quả kiểm tra • ${subject().label}</strong><button class="btn ghost" data-action="exit">← Chọn bài khác</button></div>
      <div class="result-hero"><div class="score">${pct}%</div><h2>${right}/${total} câu đúng</h2><p class="muted">Mở từng câu bên dưới để xem đáp án và giải thích của tất cả lựa chọn.</p></div>
      <div class="result-grid">
        <div class="metric"><span class="muted">Đúng</span><strong>${right}</strong></div>
        <div class="metric"><span class="muted">Sai / bỏ trống</span><strong>${wrong}</strong></div>
        <div class="metric"><span class="muted">Tổng câu sai đang lưu</span><strong>${p.wrongIds.length}</strong></div>
      </div>
      <div class="quick-filters" style="margin-bottom:18px">
        <button class="btn danger" data-action="retry-current-wrong" ${wrong === 0 ? 'disabled' : ''}>↻ Làm lại câu sai của bài này</button>
        <button class="btn secondary" data-action="study-current-wrong" ${wrong === 0 ? 'disabled' : ''}>📘 Ôn lại câu sai</button>
      </div>
      <div class="result-list">${session.questions.map(q => {
        const chosen = session.answers[q.id];
        const ok = chosen === q.answer;
        return `<details class="result-item"><summary>${ok ? '✓' : '✕'} Câu ${q.id}: ${escapeHtml(q.question)}</summary><p>${sourceMeta(q)}<br><strong>Bạn chọn:</strong> ${chosen || 'Bỏ trống'} • <strong>${answerLabel(q)}:</strong> ${q.answer}</p>${optionExplanations(q, chosen)}</details>`;
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
    session = { mode: targetMode, questions: wrongQs, index: 0, answers: {}, revealed: {}, flipped: false, submitted: false };
    $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.mode === targetMode));
    saveSession(); showSession();
  }

  function renderFlashcard() {
    const q = session.questions[session.index];
    const status = progress().status[q.id];
    const correct = q.options.find(o => o.key === q.answer);
    els.sessionContent.innerHTML = `${commonHeader('🧠 Flashcard')}
      <div class="flash-wrap">
        <div class="flashcard ${session.flipped ? 'flipped' : ''}" id="flashcard" tabindex="0">
          <div class="flash-face flash-front">
            <div class="flash-label">Câu ${q.id} • Mặt câu hỏi</div>
            <div class="source-meta">${sourceMeta(q)}</div>
            <div class="flash-question">${formatText(q.question)}</div>
            <p class="muted">Click hoặc nhấn Space để xem đáp án.</p>
          </div>
          <div class="flash-face flash-back">
            <div class="flash-label">${answerLabel(q)}</div>
            <div class="flash-answer">${q.answer}. ${escapeHtml(correct?.text || '')}</div>
            <div class="flash-explain">${escapeHtml(correct?.explanation || '')}</div>
            ${q.keyNote ? `<div class="key-note">⚠ ${escapeHtml(q.keyNote)}</div>` : ''}
            <details style="margin-top:14px"><summary><strong>Xem giải thích tất cả lựa chọn</strong></summary>${optionExplanations(q, null)}</details>
          </div>
        </div>
      </div>
      <div class="session-actions">
        <div class="left-actions">
          <button class="btn ghost status-btn ${status === 'learned' ? 'active learned' : ''}" data-status="learned">✓ Đã học</button>
          <button class="btn ghost status-btn ${status === 'forgot' ? 'active forgot' : ''}" data-status="forgot">✕ Chưa nhớ</button>
        </div>
        <div class="right-actions">
          <button class="btn ghost" data-action="prev" ${session.index === 0 ? 'disabled' : ''}>← Trước</button>
          <button class="btn secondary" data-action="flip">Lật thẻ (Space)</button>
          <button class="btn primary" data-action="next">${session.index === session.questions.length - 1 ? 'Hoàn thành' : 'Tiếp →'}</button>
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
    session = null;
    progress().session = null;
    saveState();
    els.sessionPanel.classList.add('hidden');
    els.setupPanel.classList.remove('hidden');
    renderSetup();
  }

  function renderCompletion() {
    const currentMode = session.mode;
    const p = progress();
    const wrongInStudy = session.questions.filter(q => session.answers[q.id] && session.answers[q.id] !== q.answer);
    const forgot = session.questions.filter(q => p.status[q.id] === 'forgot');
    els.sessionContent.innerHTML = `
      <div class="empty-state">
        <div class="icon">🎉</div><h2>Hoàn thành ${currentMode === 'flashcard' ? 'bộ flashcard' : 'lượt ôn tập'} ${subject().label}!</h2>
        <p class="muted">Tiến độ đã được lưu tự động riêng cho môn này.</p>
        <div class="quick-filters" style="justify-content:center">
          ${wrongInStudy.length ? `<button class="btn danger" data-action="retry-wrong-local">↻ Làm lại ${wrongInStudy.length} câu sai</button>` : ''}
          ${forgot.length ? `<button class="btn secondary" data-action="retry-forgot-local">🧠 Ôn lại ${forgot.length} câu chưa nhớ</button>` : ''}
          <button class="btn primary" data-action="exit">Chọn bộ câu khác</button>
        </div>
      </div>`;
    $('[data-action="exit"]')?.addEventListener('click', exitSession);
    $('[data-action="retry-wrong-local"]')?.addEventListener('click', () => {
      session = { mode: 'study', questions: wrongInStudy, index: 0, answers: {}, revealed: {}, flipped: false, submitted: false };
      mode = 'study'; saveSession(); showSession();
    });
    $('[data-action="retry-forgot-local"]')?.addEventListener('click', () => {
      session = { mode: currentMode, questions: forgot, index: 0, answers: {}, revealed: {}, flipped: false, submitted: false };
      saveSession(); showSession();
    });
  }

  function setStatus(id, status, rerender) {
    const p = progress();
    p.status[id] = p.status[id] === status ? undefined : status;
    if (!p.status[id]) delete p.status[id];
    saveState(); rerender();
  }

  function recordAttempt(id, correct) {
    const p = progress();
    p.attempts[id] ||= { right: 0, wrong: 0 };
    if (correct) {
      p.attempts[id].right++;
      p.rightIds = [...new Set([...(p.rightIds || []), id])];
      p.wrongIds = (p.wrongIds || []).filter(x => x !== id);
    } else {
      p.attempts[id].wrong++;
      addWrong(id);
    }
    saveState();
  }

  function addWrong(id) {
    const p = progress();
    p.wrongIds = [...new Set([...(p.wrongIds || []), id])];
    p.rightIds = (p.rightIds || []).filter(x => x !== id);
    saveState();
  }

  function renderProgress() {
    const qs = questions();
    const p = progress();
    els.subjectSelect.value = subjectKey;
    const learned = qs.filter(q => p.status[q.id] === 'learned').length;
    const forgot = qs.filter(q => p.status[q.id] === 'forgot').length;
    const wrong = p.wrongIds.length;
    const attempted = qs.filter(q => p.attempts[q.id] && (p.attempts[q.id].right + p.attempts[q.id].wrong > 0)).length;

    els.progressPanel.innerHTML = `
      <div class="panel-head"><div><h2>📊 Tiến độ — ${subject().icon} ${subject().label}</h2><p class="muted">Mỗi môn có dữ liệu riêng trên trình duyệt này.</p></div><div class="progress-actions"><select id="progressSubject" class="compact-select"><option value="duoc" ${subjectKey === 'duoc' ? 'selected' : ''}>💊 Dược lý</option><option value="benh" ${subjectKey === 'benh' ? 'selected' : ''}>🩺 Bệnh học</option></select><button class="btn ghost" id="exportBtn">Xuất tiến độ JSON</button></div></div>
      <div class="stats-grid">
        <div class="stat-card"><span class="muted">Tổng câu</span><b>${qs.length}</b></div>
        <div class="stat-card"><span class="muted">Đã học</span><b>${learned}</b></div>
        <div class="stat-card"><span class="muted">Chưa nhớ</span><b>${forgot}</b></div>
        <div class="stat-card"><span class="muted">Câu sai đang lưu</span><b>${wrong}</b></div>
        <div class="stat-card"><span class="muted">Đã từng làm</span><b>${attempted}</b></div>
      </div>
      <div class="quick-filters">
        <button class="btn danger" data-progress-start="wrong" ${wrong ? '' : 'disabled'}>↻ Làm lại câu sai</button>
        <button class="btn secondary" data-progress-start="forgot" ${forgot ? '' : 'disabled'}>🧠 Ôn câu chưa nhớ</button>
        <button class="btn ghost" data-progress-start="unlearned">📘 Học câu chưa học</button>
      </div>
      <div class="table-wrap"><table><thead><tr><th>Câu</th><th>Chủ đề</th><th>Trạng thái</th><th>Đúng</th><th>Sai</th><th>Còn trong DS sai?</th></tr></thead><tbody>
        ${qs.map(q => {
          const s = p.status[q.id]; const a = p.attempts[q.id] || { right: 0, wrong: 0 };
          return `<tr><td><strong>${q.id}</strong> — ${escapeHtml(q.question)}</td><td>${escapeHtml(q.topic || '—')}</td><td><span class="status-pill ${s || 'none'}">${s === 'learned' ? 'Đã học' : s === 'forgot' ? 'Chưa nhớ' : 'Chưa đánh dấu'}</span></td><td>${a.right}</td><td>${a.wrong}</td><td>${p.wrongIds.includes(q.id) ? 'Có' : 'Không'}</td></tr>`;
        }).join('')}
      </tbody></table></div>`;

    $('#progressSubject').addEventListener('change', (e) => {
      subjectKey = e.target.value;
      state.activeSubject = subjectKey;
      session = null;
      saveState();
      renderProgress();
    });
    $('#exportBtn').addEventListener('click', exportProgress);
    $$('[data-progress-start]').forEach(btn => btn.addEventListener('click', () => {
      const kind = btn.dataset.progressStart;
      const current = progress();
      const pool = kind === 'wrong'
        ? questions().filter(q => current.wrongIds.includes(q.id))
        : kind === 'forgot'
          ? questions().filter(q => current.status[q.id] === 'forgot')
          : questions().filter(q => !current.status[q.id]);
      if (!pool.length) return;
      mode = 'study'; state.lastMode = 'study';
      session = { mode: 'study', questions: pool, index: 0, answers: {}, revealed: {}, flipped: false, submitted: false };
      $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.mode === 'study'));
      saveSession(); showSession();
    }));
  }

  function exportProgress() {
    const payload = {
      subject: subject().label,
      exportedAt: new Date().toISOString(),
      progress: progress()
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${subjectKey}-progress.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function escapeHtml(v = '') {
    return String(v).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
  }

  function escapeAttr(v = '') {
    return escapeHtml(v);
  }

  document.addEventListener('keydown', (e) => {
    if (!session || els.sessionPanel.classList.contains('hidden')) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;

    if (session.mode === 'flashcard' && e.code === 'Space') { e.preventDefault(); flipCard(); return; }
    if (e.key === 'ArrowLeft') { prevQuestion(); return; }
    if (e.key === 'ArrowRight') { nextQuestion(); return; }
    if (/^[1-4]$/.test(e.key) && session.mode !== 'flashcard') {
      const q = session.questions[session.index];
      const key = ['A', 'B', 'C', 'D'][+e.key - 1];
      if (session.mode === 'study' && !session.revealed[q.id]) answerStudy(q, key);
      if (session.mode === 'test' && !session.submitted) { session.answers[q.id] = key; saveSession(); renderTest(); }
    }
  });

  // Khởi tạo
  saveState();
  if (!restoreSession()) switchMode(mode, false);
})();
