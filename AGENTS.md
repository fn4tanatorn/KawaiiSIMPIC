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

## 📚 Reference Materials (SIMPIC Official Sources)

### Microbiology
| Textbook | Edition | Authors |
|---|---|---|
| **Medical Microbiology** | 10th | Patrick R. Murray, Ken Rosenthal, Michael A. Pfaller |
| **Jawetz, Melnick, & Adelberg's Medical Microbiology** | 29th | Stefan Riedel, Stephen A. Morse, Timothy A. Mietzner, Steve Miller |

### Parasitology
| Textbook | Edition | Authors |
|---|---|---|
| **Diagnostic Medical Parasitology** | 6th | Lynne Shore Garcia |

### Tropical Medicine
| Textbook | Edition | Authors |
|---|---|---|
| **Manson's Tropical Diseases** | 24th | Jeremy Farrar, Peter J Hotez, Thomas Junghanss, Gagandeep Kang, David Lalloo, Nicholas J. White, Patricia J. Garcia |

### Immunology
| Textbook | Edition | Authors |
|---|---|---|
| **Cellular and Molecular Immunology** | 11th | Abul K. Abbas, Andrew H. Lichtman, Shiv Pillai |

---

## 🔗 Related Resources

- **SIMPIC Competition:** Student International Medical Preclinical Integrated Competition
- **Existing Practice Platforms:** [`KawaiiMedicine`](https://github.com/fn4tanatorn/KawaiiMedicine), [`Respi-II`](https://github.com/fn4tanatorn/Respi-II)
