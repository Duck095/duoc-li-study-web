# Huyết học Subject Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Huyết học → Bài 1 with all 32 source-indexed question entries to the offline study app, with subject- and lesson-scoped progress.

**Architecture:** Keep the existing study engine and add a small registry that maps each subject and lesson to its question bank. Store progress and saved sessions under the selected subject and lesson, migrate the current Dược lý state on first load, and load the Huyết học data from a separate script.

**Tech Stack:** Plain HTML, CSS, and browser JavaScript; localStorage; existing offline question-bank shape.

**Spec:** `docs/superpowers/specs/2026-11-03-hematology-subject-design.md`

## Global Constraints

- “The app remains usable by opening `index.html` directly, with no server or dependency installation.”
- “Keep the current Dược lý bank and its existing study behavior.”
- “Do not wire `pathology-data.js` as part of this change.”
- “Preserve source order and the two duplicate entries corresponding to images 27 and 28.”
- “Store progress and saved sessions by subject so question IDs in different banks cannot collide.”
- Preserve all pre-existing uncommitted changes in `README.txt`, `app.js`, `data.js`, `index.html`, and `styles.css`; do not stage or revert them as part of the implementation.

## Review Focus

1. Legacy Dược lý progress may contain malformed or partial JSON; verify migration preserves valid fields and falls back safely without deleting the old key.
2. The same numeric question ID appears in Dược lý and Huyết học; verify status, attempts, wrong-answer filters, and progress counts stay isolated by subject and lesson.
3. Images 27 and 28 contain duplicate question text; verify both entries remain in their original positions with distinct IDs.
4. Huyết học has 32 questions while existing quick-range chips assume 40; verify displayed range labels and inputs never imply unavailable questions.
5. A saved session may belong to another subject or lesson; verify restoring or switching context resolves IDs only against that context's bank.

## File Structure

- `hematology-data.js`: new Huyết học lesson data; exports `window.HEMATOLOGY_LESSONS`.
- `index.html`: subject/lesson controls and script load order.
- `app.js`: subject registry, selected bank/lesson, scoped state/session helpers, migration, and dynamic context labels.
- `styles.css`: responsive styling for the new selectors.
- `README.txt`: course/lesson selection and instructions for adding future lessons.
- `data.js`: preserve the existing `window.QUESTION_BANK` unchanged.

### Task 1: Add Huyết học Bài 1 data

**Files:**
- Create: `hematology-data.js`

**Interfaces:**
- Produces `window.HEMATOLOGY_LESSONS`, an array with one lesson `{id: "bai-1", label: "Bài 1", description: "...", questions: [...]}`. `description` carries the source's note that its analyzed answers are not official instructor answers.
- Each question uses the existing `{id, question, answer, options, keyNote?}` shape. IDs are integers 1–32 local to the lesson.

- [x] Transcribe all 32 question entries, choices, answer keys, per-choice explanations, and applicable caution notes from the supplied DOCX into `hematology-data.js`; retain image order and the duplicate entries at positions 27 and 28.
- [x] Review the resulting data against the source DOCX: confirm 32 entries, IDs 1–32, four options A–D per entry, and the repeated question at positions 27–28.

### Task 2: Add subject/lesson selection and scoped progress

**Files:**
- Modify: `index.html`
- Modify: `app.js`
- Modify: `styles.css`

**Interfaces:**
- `SUBJECTS` maps `duoc` to the existing question bank and `huyet` to `window.HEMATOLOGY_LESSONS`.
- Dược lý is represented by one lesson `{id: "all", label: "Bộ câu hỏi hiện tại", questions: window.QUESTION_BANK}`; Huyết học uses lesson IDs from `HEMATOLOGY_LESSONS`.
- `activeSubject()`, `activeLesson()`, `questions()`, and `progress()` resolve the selected context and its data/state.
- New state contains `activeSubject`, `activeLesson`, and `subjects[subjectId][lessonId]`; each lesson state keeps the existing `status`, `wrongIds`, `rightIds`, `attempts`, `setup`, and `session` fields.
- Persist the new structure under `medicalStudyHub.v4`; retain `duocLiStudy.v2` as the migration source and do not remove it.

- [x] Add subject and lesson `<select>` controls with stable IDs and labels in the app header so they remain available in setup, progress, and session views; style them with existing `.field` controls.
- [x] Load `hematology-data.js` after `data.js` and before `app.js` in `index.html`.
- [x] Show the selected lesson's `description` near the selectors so the DOCX's non-official answer analysis remains clear to the learner.
- [x] Replace the fixed `QUESTIONS` binding with the subject registry and context helpers; route setup counts, ranges, study/test/flashcard views, filters, completion, retry actions, progress, reset, and export through the selected lesson's question list and progress.
- [x] Save active subject/lesson and each lesson's setup/session independently; on context change or reload, resolve saved question IDs only within the saved subject and lesson, and show that lesson's saved session or setup.
- [x] Migrate a valid `duocLiStudy.v2` state once into `subjects.duoc.all` in `medicalStudyHub.v4`; migrate only when the destination has no Dược lý lesson state, preserve the old key, and use blank Dược lý progress if the old value is invalid.
- [x] Make quick-range chips adapt to the selected lesson's question count, so Huyết học's last range ends at question 32.
- [x] Update the visible app title/context to identify the active subject and lesson; keep progress export complete for all subjects and use a neutral filename.
- [x] Scope the reset action to the currently selected lesson and state this in its confirmation text.
- [x] Inspect the full subject/lesson flow in the browser: switch subjects, switch lessons, start each learning mode, check all/wrong/forgot/unlearned filters, view progress, reload a saved session, and verify Dược lý progress migration with representative legacy data.

### Task 3: Update usage documentation and final source review

**Files:**
- Modify: `README.txt`
- Review: `index.html`, `app.js`, `data.js`, `hematology-data.js`, `styles.css`

- [x] Document Dược lý and Huyết học → Bài 1, the 32-entry numbering, subject-specific progress, and how future lessons are added.
- [x] Review the diff to confirm the Dược lý question data and unrelated pre-existing changes were not rewritten or staged.
- [x] Run JavaScript syntax checks on `app.js`, `data.js`, and `hematology-data.js`; inspect the resulting diff and working-tree status.

## Execution Notes

- Keep the implementation focused on the current working tree; do not restore the previously committed Bệnh học integration.
- Preserve the DOCX's answer analysis as educational explanation and do not label its answer key as official instructor guidance.
- Do not add dependencies or require a local server.

## Completion

- Browser flow inspection passed for both subjects, all study modes, filters, progress, saved-session restoration, reset scope, and legacy Dược lý migration.
- JavaScript syntax checks and `git diff --check` passed; browser console finished with zero errors and zero warnings.
- Independent review found and prompted fixes for partial attempt-count migration and out-of-range setup inputs; the reviewer confirmed both fixes and reported no remaining Critical, Important, or Minor issues.
- Browser inspection verified the full subject/lesson flow before the final review fixes; the fix-specific behavior was independently checked with Node VM assertions by the reviewer, plus syntax and diff checks.
