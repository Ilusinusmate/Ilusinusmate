---
name: generate-resume
description: Generate a job-specific, ATS-friendly resume from the candidate dossier.
triggers: ["user"]
argument-hint: <job description or job file>
---

# Resume Generation Procedure

## Phase 1 — Understand the candidate

Read the candidate dossier.

Do not assume facts that are not explicitly supported.

Create an internal evidence map.

## Phase 2 — Understand the job

Extract:

- required skills
- preferred skills
- responsibilities
- seniority
- domain
- keywords
- education requirements

## Phase 3 — Match

For every important job requirement:

1. Find supporting evidence.
2. Classify relevance.
3. Record the evidence source.
4. Never fabricate missing experience.

## Phase 4 — Select

Select only the experiences, projects,
technologies and achievements that strengthen
the application.

Do not attempt to include the entire dossier.

## Phase 5 — Write

Write concise, evidence-based resume content.

Prefer measurable outcomes when they are supported
by the dossier.

Never invent metrics.

## Phase 6 — ATS

Ensure important keywords appear naturally.

Do not keyword-stuff.

Avoid layouts that make text extraction difficult.

## Phase 7 — Render

Generate the resume using the canonical template.

Compile the PDF.

## Phase 8 — Audit

Extract the PDF text and inspect the rendered pages.

Check:

- factual accuracy
- completeness
- ATS compatibility
- typography
- spacing
- page breaks
- links

Fix any problems.

## Phase 9 — Output

Save:

resume.pdf
resume.tex
resume.json
match-report.md

## Repo-specific conventions

- The dossier is in `dossie/` (index in `dossie/README.md`, reusable bullets in
  `dossie/08-bullets-reutilizaveis.md`, template in `dossie/templates/curriculo-base.md`, checklist
  in `dossie/templates/checklist-por-vaga.md`, divergences and gaps in
  `dossie/09-fontes-e-lacunas.md`).
- Job artifacts go in `curriculos/<slug-da-vaga>/` with `resume.pdf`, `resume.tex`, `resume.json`,
  `match-report.md`.
- Never use facts marked with ⚠ by the dossier as if they were confirmed.
- Never include CPF, matrícula, códigos de autenticação ou contatos de terceiros (the repo is public).
