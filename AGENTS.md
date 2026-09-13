# 🤖 AGENTS.md — KawaiiSIMPIC

> **Project:** Exam practice for SIMPIC contest
> **Repository:** `KawaiiSIMPIC`
> **Created:** 2026-09-13

---

## 📌 Project Overview

**KawaiiSIMPIC** is an exam practice platform for the **SIMPIC** (Student International Medical Preclinical Integrated Competition). The project provides interactive question banks, clinical vignette drills, and performance analytics to help medical students prepare effectively for the SIMPIC contest.

---

## 🏗️ Agent Directives

### Bootstrap
- Read [`ANTIGRAVITY.md`](file:///Users/tanatornonsrirot/.gemini/config/ANTIGRAVITY.md) and [`Learning.md`](file:///Users/tanatornonsrirot/.gemini/config/Learning.md) at every task startup.

### Design Standards
- **UI Theme:** Warm Zen Minimal (`#FAF9F5` canvas, Stone borders, Amber accents).
- **Typography:** Clean, readable. English for medical/scientific terminology. Thai for UI copy and explanations.
- **Anti-AI Style:** No neon glow, no glassmorphism, no decorative emojis in formal content.

### Medical Content Standards
- Retain Latin binomial nomenclature in italics (*Genus species*).
- Keep pharmacology and microbiology terms in English for board exam alignment.
- Per-option exhaustive rationales: explain why each distractor is wrong.
- Embed step-by-step mathematical derivations for computational physiology questions.

### Technical Standards
- **Stack:** TypeScript + Vite (or as determined by project needs).
- **State:** LocalStorage-first with optional cloud sync.
- **Deployment:** Netlify SPA routing (`_redirects` / `netlify.toml`).
- **Build Verification:** Run build checks before commits.

---

## 📂 Repository Structure

```
KawaiiSIMPIC/
├── AGENTS.md           # This file — agent directives
├── README.md           # Project documentation
├── src/                # Source code
├── public/             # Static assets
└── ...
```

---

## 🔗 Related Resources

- **SIMPIC Competition:** Student International Medical Preclinical Integrated Competition
- **Existing Practice Platforms:** [`KawaiiMedicine`](https://github.com/fn4tanatorn/KawaiiMedicine), [`Respi-II`](https://github.com/fn4tanatorn/Respi-II)
