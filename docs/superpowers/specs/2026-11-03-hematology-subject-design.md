# Huyết học course integration design

## Goal

Add a Huyết học subject to the existing offline study app so the supplied hematology questions are easy to find and study separately from other subjects.

## Current source state

- The working tree currently runs one question bank, Dược lý, through `data.js` and `app.js`.
- `pathology-data.js` is present but is not loaded by `index.html` or used by the current app.
- No Huyết học subject or question bank is present in the working tree.
- The supplied DOCX contains 32 image-indexed question entries. Entries 27 and 28 repeat the same question; preserve both entries so numbering remains aligned with the source images.
- There are pre-existing uncommitted changes in `README.txt`, `app.js`, `data.js`, `index.html`, and `styles.css`. This design targets the current working tree and does not authorize reverting or absorbing those changes.

## Proposed approach

Extend the current page with a subject selector and a lesson selector, and keep each subject's question bank in its own data file. The shared study, test, flashcard, and progress views continue to use the existing question shape. Add Huyết học as a subject with one lesson, **Bài 1**, containing all 32 DOCX entries in source order, including the repeated question at entries 27–28.

Keep the current Dược lý bank and its existing study behavior. Do not turn the unrelated Dược lý or Bệnh học data into Huyết học lessons. Do not wire `pathology-data.js` as part of this change.

Store progress and saved sessions by subject so question IDs in different banks cannot collide. Preserve existing Dược lý progress by migrating the current `duocLiStudy.v2` state into the Dược lý namespace when the new state format is first loaded. Selecting a subject should restore that subject's last selected lesson and session setup.

## User experience

1. The learner selects a subject before choosing a study mode and question source.
2. The lesson selector shows the lessons available for that subject. Huyết học initially has only Bài 1.
3. Question numbering and range selection are local to the selected lesson. The Huyết học lesson has 32 numbered entries.
4. Existing modes and filters (study, test, flashcards, range, random, all, wrong, forgotten, unlearned, and progress) operate only on the selected subject and lesson where relevant.
5. Switching subjects never shows another subject's attempts, status, wrong-answer list, or saved session.

## Content requirements

- Transcribe all questions, answer choices, correct answers, and per-choice explanations from the supplied DOCX.
- Preserve source order and the two duplicate entries corresponding to images 27 and 28.
- Preserve caution notes for ambiguous or source-sensitive answers as question notes where the data format supports them; do not present the DOCX's non-official answer analysis as an official instructor key.
- Escape rendered text through the app's existing HTML escaping path.

## Scope and likely files

- `index.html`: add subject and lesson controls and load the hematology data file.
- `app.js`: select the active subject/lesson, scope question operations and progress to them, and migrate existing Dược lý progress.
- `data.js`: keep the current Dược lý bank intact.
- New `hematology-data.js`: hold Huyết học Bài 1 data in the existing question shape, with stable IDs 1–32.
- `styles.css`: style the added controls consistently with existing form fields and responsive layouts.
- `README.txt`: document the new subject and how to add future lessons without changing current Dược lý behavior.

## Out of scope

- Adding or changing Bệnh học behavior.
- Rewriting explanations or independently changing answer keys beyond correcting transcription errors against the supplied DOCX.
- Adding external services, dependencies, or a server requirement.
- Reorganizing unrelated existing working-tree changes.

## Acceptance criteria

- The page offers Dược lý and Huyết học as selectable subjects.
- Huyết học shows Bài 1 and exactly 32 entries in source order; the duplicate at positions 27 and 28 is retained.
- The existing Dược lý question bank and its current behavior remain available.
- Study, test, flashcard, filters, progress, and saved sessions are scoped to the selected subject/lesson.
- Existing Dược lý progress under `duocLiStudy.v2` remains available after migration.
- The app remains usable by opening `index.html` directly, with no server or dependency installation.
