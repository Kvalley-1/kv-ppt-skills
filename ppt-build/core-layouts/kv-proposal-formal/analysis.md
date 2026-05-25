# kv-proposal-formal — Design Analysis

> Source: `sample-pages/original.pptx` (合興_AI提案_兩方案版_v3.pptx, 35 slides)
> Extracted: 2026-05-11 via python-pptx coordinate analysis

---

## Design Language

### Colors

| Token | Hex | Role |
|-------|-----|------|
| `--navy` | `#1A1A2E` | Primary dark — backgrounds, text, panels |
| `--navy-mid` | `#22223A` | Dark card backgrounds (phase timeline, skill cards) |
| `--navy-deep` | `#1F4E79` | Phase/section header bars, accent boxes |
| `--navy-darkest` | `#11112A` | Skill card section header |
| `--lime` | `#C4D600` | KV brand accent — badges, left accents, highlights |
| `--amber` | `#F09C29` | Secondary accent — B modules, duration badges |
| `--pink` | `#E91E63` | Emphasis — D module, special labels |
| `--blue` | `#3F7FBF` | Client/C module color, flow steps |
| `--bg` | `#F5F5F7` | Slide background (content pages) |
| `--gray-dark` | `#333333` | Body text |
| `--gray-mid` | `#666666` | Secondary text, captions |
| `--gray-light` | `#BBBBBB` | Subtle captions |
| `--white` | `#FFFFFF` | Text on dark backgrounds |

### Fonts

| Usage | Font | Size (PPTX pt) | CSS px (at 90px/in) |
|-------|------|----------------|----------------------|
| Cover main title | Microsoft JhengHei | 52pt | 65px |
| Chapter number | Arial | 160pt | 200px |
| Chapter title | Microsoft JhengHei | 34pt | 43px |
| Slide title | Microsoft JhengHei | 30pt | 38px |
| Phase title (Arial) | Arial | 40pt | 50px |
| Course code (Arial) | Arial | 28pt | 35px |
| Sub-heading | Microsoft JhengHei | 22–24pt | 27–30px |
| Card title | Microsoft JhengHei | 20pt | 25px |
| English subtitle | Arial | 13–16pt | 16–20px |
| Body text | Microsoft JhengHei | 16pt | 20px |
| Card label | Microsoft JhengHei | 17pt | 21px |
| Small body | Microsoft JhengHei | 14–15pt | 18–19px |
| Caption/note | Microsoft JhengHei | 13pt | 16px |
| Tiny (page num, badge) | Arial | 9pt | 11px |

CSS font stack: `'Microsoft JhengHei', 'PingFang TC', 'Noto Sans TC', sans-serif`

### Tone

**Professional consulting proposal** — structured, data-forward, warm-but-formal. Uses LIME as the KV signature energy against a professional NAVY foundation. Not flashy; every color choice is functional (each module A/B/C/D/E has its own color for scannability).

---

## KV Logo System (Top-Right, All Slides)

Always at top-right corner. Coordinate: `[11.7, 0.2]` (inches).

| Element | Size | Color (light slide) | Color (dark slide) |
|---------|------|---------------------|---------------------|
| "K" square background | 0.4×0.4" | `#C4D600` LIME | `#C4D600` LIME |
| "K" letter | 22pt Arial | `#1A1A2E` Navy | `#1A1A2E` Navy |
| "智谷網絡" | 13pt JhengHei | `#1A1A2E` | `#FFFFFF` |
| "Since 1996" | 9pt Arial | `#666666` | `#BBBBBB` |

---

## Layout Catalog

| ID | Name | CSS class | Source slides | Best for |
|----|------|-----------|---------------|----------|
| L01 | Cover | `slide-cover` | P01 | Opening slide |
| L02 | Table of Contents | `slide-toc` | P02 | Navigation |
| L03 | Chapter Divider | `slide-chapter` | P03,05,08,10,20,29,33 | Section breaks |
| L04 | Split Content | `slide-split` | P04 | Context + two options |
| L05 | Data Table | `slide-table` | P06,07,09,12,18,34 | Structured comparison data |
| L06 | Info Grid | `slide-info-grid` | P11,21 | 2×2 key-value cards |
| L07 | Course Detail | `slide-course` | P13–17 | Course/service card |
| L08 | Assessment Flow | `slide-flow` | P19,28 | 3-step horizontal process |
| L09 | Module Columns | `slide-modules` | P22 | 5-module service overview |
| L10 | Phase Timeline | `slide-phase` | P23,24 | Phase task card grid |
| L11 | Concept 3-Node | `slide-concept` | P25 | Triangle relationship |
| L12 | Rhythm Schedule | `slide-rhythm` | P27 | Weekly/biweekly cadence |
| L13 | Skill Cards | `slide-cards` | P30–32 | Card grid (dark header) |
| L14 | Closing | `slide-closing` | P35 | Thank you / CTA |

---

## When to Use This Template

- **Audience**: Corporate clients (mid/large enterprise), manufacturing, HR/training buyers, executives
- **Scenario**: B2B consulting proposals, AI training programs, multi-option service presentations, annual project pitches
- **Emotion/feel**: Professional, trustworthy, structured, data-backed

---

## Coordinate System (PptxGenJS)

Slide: 13.333" × 7.5" (LAYOUT_WIDE)
Scale reference: 1 inch = 90px in 1200×675 demo

### Standard Content Page Positions

| Element | x | y | w | h |
|---------|---|---|---|---|
| LIME left accent bar | 0.5" | 0.55" | 0.1" | 0.75" |
| Slide title (30pt) | 0.75" | 0.38" | 10" | 0.55" |
| English subtitle (13pt) | 0.75" | 0.93" | 10" | 0.32" |
| Content area start | 0.5" | 1.4" | 12.3" | — |
| Footnote area | 0.5" | 7.0" | 12.3" | 0.3" |
| KV "K" square | 11.7" | 0.2" | 0.4" | 0.4" |
| KV company name | 12.2" | 0.22" | 1.3" | 0.3" |
| KV tagline | 12.2" | 0.44" | 1.3" | 0.2" |
| Page number | 12.4" | 7.18" | 0.9" | 0.3" |

### Dark Slide Positions (Cover / Chapter)

| Element | x | y |
|---------|---|---|
| LIME corner (top-left) | 0" | 0" | 3×3" |
| LIME corner (bottom-right) | 10.33" | 4.5" | 3×3" |
| Client name (24pt gray) | 1.5" | 1.5" |
| Main title (52pt white) | 1.5" | 2.15" |
| Option pill 1 (18pt lime) | 1.5" | 3.65" |
| Option pill 2 (18pt light) | 1.5" | 4.1" |

### Chapter Divider Positions

| Element | x | y | Notes |
|---------|---|---|-------|
| Ch.N (160pt lime) | 1.5" | 2.3" | |
| Chinese title (34pt white) | 1.5" | 3.5" | |
| English subtitle (16pt gray) | 1.5" | 4.4" | |
| Tagline (15pt white) | 1.5" | 5.2" | |

---

## Module Color Map

| Module | Header Color | Token |
|--------|-------------|-------|
| A (培訓課程) | `#C4D600` | `--lime` |
| B (組織診斷) | `#F09C29` | `--amber` |
| C (部門陪跑) | `#3F7FBF` | `--blue` |
| D (文化建設) | `#E91E63` | `--pink` |
| E (結案) | `#888888` | gray |
| Phase 1 (B series) | `#F09C29` | `--amber` |
| Phase 2 (A series) | `#C4D600` | `--lime` |

---

## PptxGenJS Key Snippets

```js
const COLORS = {
  navy: '1A1A2E',
  navyMid: '22223A',
  navyDeep: '1F4E79',
  lime: 'C4D600',
  amber: 'F09C29',
  pink: 'E91E63',
  blue: '3F7FBF',
  bg: 'F5F5F7',
  grayDark: '333333',
  grayMid: '666666',
  grayLight: 'BBBBBB',
  white: 'FFFFFF',
};

const FONTS = {
  cn: 'Microsoft JhengHei',
  en: 'Arial',
};

const FS = {
  coverTitle: 52,
  chapterNum: 160,
  chapterTitle: 34,
  slideTitle: 30,
  phaseTitle: 40,
  courseCode: 28,
  sub: 22,
  cardTitle: 20,
  body: 16,
  enSub: 13,
  caption: 13,
  tiny: 9,
};

// Standard content page header
function addStdHeader(slide, titleCn, titleEn, pageNum) {
  // LIME accent bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 0.55, w: 0.1, h: 0.75, fill: { color: COLORS.lime }
  });
  // Chinese title
  slide.addText(titleCn, {
    x: 0.75, y: 0.38, w: 10, h: 0.55,
    fontFace: FONTS.cn, fontSize: FS.slideTitle,
    color: COLORS.navy, bold: true, valign: 'middle'
  });
  // English subtitle
  slide.addText(titleEn, {
    x: 0.75, y: 0.93, w: 10, h: 0.32,
    fontFace: FONTS.en, fontSize: FS.enSub,
    color: COLORS.grayMid, valign: 'middle'
  });
  // KV Logo
  addKvLogo(slide, false);
  // Page number
  slide.addText(pageNum, {
    x: 12.4, y: 7.18, w: 0.9, h: 0.3,
    fontFace: FONTS.en, fontSize: FS.tiny,
    color: COLORS.grayMid, align: 'right'
  });
}

// KV Logo top-right
function addKvLogo(slide, darkSlide) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 11.7, y: 0.2, w: 0.4, h: 0.4, fill: { color: COLORS.lime }
  });
  slide.addText('K', {
    x: 11.7, y: 0.2, w: 0.4, h: 0.4,
    fontFace: FONTS.en, fontSize: 22,
    color: COLORS.navy, bold: true, align: 'center', valign: 'middle'
  });
  const textColor = darkSlide ? COLORS.white : COLORS.navy;
  slide.addText('智谷網絡', {
    x: 12.2, y: 0.22, w: 1.3, h: 0.3,
    fontFace: FONTS.cn, fontSize: 13,
    color: textColor, valign: 'top'
  });
  slide.addText('Since 1996', {
    x: 12.2, y: 0.44, w: 1.3, h: 0.2,
    fontFace: FONTS.en, fontSize: FS.tiny,
    color: darkSlide ? COLORS.grayLight : COLORS.grayMid
  });
}
```
