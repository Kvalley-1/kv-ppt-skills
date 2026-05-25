/**
 * kv-proposal-formal — PptxGenJS Helper Library
 * Source: 合興_AI提案_兩方案版_v3.pptx (35 slides)
 * Slide: 13.333" × 7.5" (LAYOUT_WIDE)
 */

// ── Design Tokens ─────────────────────────────────────────
const COLORS = {
  navy:       '1A1A2E',
  navyMid:    '22223A',
  navyDeep:   '1F4E79',
  navyDark:   '11112A',
  lime:       'C4D600',
  amber:      'F09C29',
  pink:       'E91E63',
  blue:       '3F7FBF',
  bg:         'F5F5F7',
  grayDark:   '333333',
  grayMid:    '666666',
  grayLight:  'BBBBBB',
  white:      'FFFFFF',
};

const FONTS = {
  cn: 'Microsoft JhengHei',
  en: 'Arial',
};

const FS = {
  coverTitle:    52,  // Cover main title
  chapterNum:   160,  // Ch.N large number
  chapterTitle:  34,  // Chapter Chinese title
  slideTitle:    30,  // Standard inner page title
  phaseNum:      40,  // Phase 1/2 header number (Arial)
  courseCode:    28,  // A1/A2 course code (Arial)
  sub:           22,  // Sub-headings
  cardTitle:     20,  // Concept node titles
  body:          16,  // Main body text
  label:         17,  // Info card labels
  enSub:         13,  // English subtitles
  caption:       13,  // Captions, small body
  footnote:      10,  // Footnotes
  tiny:           9,  // Page numbers, "Since 1996"
};

// ── Shared Components ─────────────────────────────────────

/**
 * Add KV logo (top-right corner, all slides)
 * @param {Object} slide - pptxgenjs slide object
 * @param {boolean} darkSlide - true = white text for company name
 */
function addKvLogo(slide, darkSlide = false) {
  slide.addShape('rect', {
    x: 11.7, y: 0.2, w: 0.4, h: 0.4,
    fill: { color: COLORS.lime },
    line: { color: COLORS.lime },
  });
  slide.addText('K', {
    x: 11.7, y: 0.2, w: 0.4, h: 0.4,
    fontFace: FONTS.en, fontSize: 22, bold: true,
    color: COLORS.navy,
    align: 'center', valign: 'middle',
  });
  slide.addText('智谷網絡', {
    x: 12.2, y: 0.22, w: 1.1, h: 0.28,
    fontFace: FONTS.cn, fontSize: 13,
    color: darkSlide ? COLORS.white : COLORS.navy,
    valign: 'top',
  });
  slide.addText('Since 1996', {
    x: 12.2, y: 0.44, w: 1.1, h: 0.2,
    fontFace: FONTS.en, fontSize: FS.tiny,
    color: darkSlide ? COLORS.grayLight : COLORS.grayMid,
  });
}

/**
 * Add page number (bottom-right)
 */
function addPageNum(slide, current, total) {
  slide.addText(`${current} / ${total}`, {
    x: 12.4, y: 7.18, w: 0.9, h: 0.3,
    fontFace: FONTS.en, fontSize: FS.tiny,
    color: COLORS.grayMid, align: 'right',
  });
}

/**
 * Add standard content page header
 * (LIME accent bar + Chinese title + English subtitle)
 * @param {string} titleCn - Chinese slide title (30pt)
 * @param {string} titleEn - English subtitle (13pt)
 */
function addStdHeader(slide, titleCn, titleEn) {
  slide.addShape('rect', {
    x: 0.5, y: 0.55, w: 0.1, h: 0.75,
    fill: { color: COLORS.lime },
    line: { color: COLORS.lime },
  });
  slide.addText(titleCn, {
    x: 0.75, y: 0.38, w: 10.0, h: 0.55,
    fontFace: FONTS.cn, fontSize: FS.slideTitle, bold: true,
    color: COLORS.navy, valign: 'middle',
  });
  slide.addText(titleEn, {
    x: 0.75, y: 0.93, w: 10.0, h: 0.32,
    fontFace: FONTS.en, fontSize: FS.enSub,
    color: COLORS.grayMid,
  });
}

/**
 * Add footnote at bottom of content page
 */
function addFootnote(slide, text, color = COLORS.grayMid) {
  slide.addText(text, {
    x: 0.5, y: 7.0, w: 12.3, h: 0.3,
    fontFace: FONTS.cn, fontSize: 10,
    color,
  });
}

// ── Layout Builders ───────────────────────────────────────

/**
 * L01: Cover slide
 * Dark NAVY background with LIME corner blocks
 */
function buildCover(pptx, slide, {
  clientName,
  mainTitle,
  option1Text,
  option2Text,
  presenter,
  date,
}) {
  slide.background = { color: COLORS.navy };

  // LIME corner blocks
  slide.addShape('rect', { x: 0, y: 0, w: 3, h: 3, fill: { color: COLORS.lime }, line: { color: COLORS.lime } });
  slide.addShape('rect', { x: 10.33, y: 4.5, w: 3, h: 3, fill: { color: COLORS.lime }, line: { color: COLORS.lime } });

  // Client name
  slide.addText(clientName, {
    x: 1.5, y: 1.5, w: 10, h: 0.8,
    fontFace: FONTS.cn, fontSize: 24,
    color: COLORS.grayLight,
  });

  // Main title
  slide.addText(mainTitle, {
    x: 1.5, y: 2.15, w: 10, h: 1.2,
    fontFace: FONTS.cn, fontSize: FS.coverTitle, bold: true,
    color: COLORS.white,
  });

  // Option pills
  slide.addText(option1Text, {
    x: 1.5, y: 3.65, w: 10, h: 0.45,
    fontFace: FONTS.cn, fontSize: 18,
    color: COLORS.lime,
  });
  slide.addText(option2Text, {
    x: 1.5, y: 4.1, w: 10, h: 0.45,
    fontFace: FONTS.cn, fontSize: 18,
    color: 'AACCFF',
  });

  // Footer
  slide.addText(presenter, {
    x: 1.5, y: 4.8, w: 10, h: 0.4,
    fontFace: FONTS.cn, fontSize: 15,
    color: COLORS.grayLight,
  });
  slide.addText(date, {
    x: 1.5, y: 5.2, w: 10, h: 0.35,
    fontFace: FONTS.cn, fontSize: 14,
    color: '888888',
  });

  addKvLogo(slide, true);
}

/**
 * L03: Chapter divider
 * Dark NAVY + large Ch.N + Chinese title + English + tagline
 */
function buildChapter(slide, {
  chNum,       // e.g. 'Ch.1'
  titleCn,     // e.g. '計畫緣起'
  titleEn,     // e.g. 'Project Background'
  tagline,     // e.g. '為何需要 AI？'
  pageNum, total,
}) {
  slide.background = { color: COLORS.navy };

  // LIME corner blocks (slightly smaller than cover)
  slide.addShape('rect', { x: 0, y: 0, w: 2.5, h: 2.5, fill: { color: COLORS.lime }, line: { color: COLORS.lime } });
  slide.addShape('rect', { x: 10.83, y: 5.0, w: 2.5, h: 2.5, fill: { color: COLORS.lime }, line: { color: COLORS.lime } });

  // Large chapter number
  slide.addText(chNum, {
    x: 1.5, y: 2.3, w: 5, h: 1.0,
    fontFace: FONTS.en, fontSize: FS.chapterNum, bold: true,
    color: COLORS.lime,
  });

  // Chinese title
  slide.addText(titleCn, {
    x: 1.5, y: 3.5, w: 10, h: 0.9,
    fontFace: FONTS.cn, fontSize: FS.chapterTitle, bold: true,
    color: COLORS.white,
  });

  // English subtitle
  slide.addText(titleEn, {
    x: 1.5, y: 4.4, w: 10, h: 0.5,
    fontFace: FONTS.en, fontSize: 16,
    color: COLORS.grayLight,
  });

  // Tagline
  slide.addText(tagline, {
    x: 1.5, y: 5.2, w: 10, h: 0.5,
    fontFace: FONTS.cn, fontSize: 15,
    color: COLORS.white,
  });

  addKvLogo(slide, true);
  addPageNum(slide, pageNum, total);
}

/**
 * L06: Info grid (2×2 LIME-header cards)
 * @param {Array} cards - [{label, body}] × 4
 */
function buildInfoGrid(slide, { titleCn, titleEn, cards, footnote, pageNum, total }) {
  slide.background = { color: COLORS.bg };
  addStdHeader(slide, titleCn, titleEn);
  addKvLogo(slide, false);
  if (footnote) addFootnote(slide, footnote, COLORS.navyDeep);
  addPageNum(slide, pageNum, total);

  const positions = [
    { x: 0.5, y: 1.55 }, { x: 7.0, y: 1.55 },
    { x: 0.5, y: 4.25 }, { x: 7.0, y: 4.25 },
  ];

  cards.forEach((card, i) => {
    const pos = positions[i];
    const W = 6.1, H = 2.4;

    // Card background
    slide.addShape('rect', {
      x: pos.x, y: pos.y, w: W, h: H,
      fill: { color: COLORS.bg },
      line: { color: 'DDDDDF' },
    });

    // Header
    slide.addShape('rect', {
      x: pos.x, y: pos.y, w: W, h: 0.55,
      fill: { color: COLORS.lime },
      line: { color: COLORS.lime },
    });
    slide.addText(card.label, {
      x: pos.x + 0.2, y: pos.y, w: W - 0.3, h: 0.55,
      fontFace: FONTS.cn, fontSize: FS.label, bold: true,
      color: COLORS.navy, valign: 'middle',
    });

    // Body
    slide.addText(card.body, {
      x: pos.x + 0.2, y: pos.y + 0.6, w: W - 0.3, h: H - 0.7,
      fontFace: FONTS.cn, fontSize: FS.body,
      color: COLORS.grayDark, valign: 'top',
    });
  });
}

/**
 * L07: Course detail
 * Full-width NAVY header + description + table
 */
function buildCourseDetail(slide, {
  code, title, duration,
  description,
  tableHeaders, tableRows,
  pageNum, total,
}) {
  slide.background = { color: COLORS.bg };

  // NAVY header bar
  slide.addShape('rect', {
    x: 0, y: 0, w: 13.33, h: 1.15,
    fill: { color: COLORS.navy },
    line: { color: COLORS.navy },
  });

  // Course code
  slide.addText(code, {
    x: 0.5, y: 0.18, w: 0.8, h: 0.7,
    fontFace: FONTS.en, fontSize: FS.courseCode, bold: true,
    color: COLORS.lime, valign: 'middle',
  });

  // Course title
  slide.addText(title, {
    x: 1.4, y: 0.12, w: 9.5, h: 0.85,
    fontFace: FONTS.cn, fontSize: 30, bold: true,
    color: COLORS.white, valign: 'middle',
  });

  // Duration badge
  slide.addShape('rect', {
    x: 11.5, y: 0.28, w: 1.7, h: 0.6,
    fill: { color: COLORS.amber },
    line: { color: COLORS.amber },
  });
  slide.addText(duration, {
    x: 11.5, y: 0.28, w: 1.7, h: 0.6,
    fontFace: FONTS.cn, fontSize: 14, bold: true,
    color: COLORS.navy, align: 'center', valign: 'middle',
  });

  // Description
  slide.addText(description, {
    x: 0.5, y: 1.3, w: 12.3, h: 0.7,
    fontFace: FONTS.cn, fontSize: FS.body,
    color: COLORS.grayMid,
  });

  addKvLogo(slide, true);
  addPageNum(slide, pageNum, total);
}

/**
 * L09: Module columns (5 modules A-E)
 * @param {Array} modules - [{letter, name, color, items: []}]
 */
function buildModuleColumns(slide, { titleCn, titleEn, modules, pageNum, total }) {
  slide.background = { color: COLORS.bg };
  addStdHeader(slide, titleCn, titleEn);
  addKvLogo(slide, false);
  addPageNum(slide, pageNum, total);

  const colW = 2.4;
  const colH = 5.8;
  const startX = 0.3;
  const startY = 1.4;
  const gap = 0.17;

  modules.forEach((mod, i) => {
    const x = startX + i * (colW + gap);

    // Column background
    slide.addShape('rect', {
      x, y: startY, w: colW, h: colH,
      fill: { color: COLORS.bg },
      line: { color: 'DDDDDF' },
    });

    // Header
    slide.addShape('rect', {
      x, y: startY, w: colW, h: 0.9,
      fill: { color: mod.color },
      line: { color: mod.color },
    });
    slide.addText(mod.letter, {
      x: x + 0.05, y: startY + 0.02, w: colW - 0.1, h: 0.45,
      fontFace: FONTS.en, fontSize: 22, bold: true,
      color: mod.letter === 'A' ? COLORS.navy : COLORS.white,
    });
    slide.addText(mod.name, {
      x: x + 0.1, y: startY + 0.45, w: colW - 0.15, h: 0.4,
      fontFace: FONTS.cn, fontSize: 13,
      color: mod.letter === 'A' ? COLORS.navy : COLORS.white,
    });

    // Items
    mod.items.forEach((item, j) => {
      const itemY = startY + 1.0 + j * 0.72;
      slide.addShape('rect', {
        x: x + 0.15, y: itemY + 0.1, w: 0.12, h: 0.12,
        fill: { color: mod.color },
        line: { color: mod.color },
      });
      slide.addText(item, {
        x: x + 0.32, y: itemY, w: colW - 0.4, h: 0.65,
        fontFace: FONTS.cn, fontSize: 12,
        color: COLORS.grayDark,
      });
    });
  });
}

/**
 * L10: Phase timeline header + task cards
 * @param {Array} tasks - [{code, name, hours, stripeColor}]
 */
function buildPhaseTimeline(slide, {
  phaseNum,        // 'Phase 1'
  phaseTitleCn,    // '建立 AI 共同認識'
  hoursTotal,      // '顧問投入 36.5 H'
  period,          // '約第 1 – 4 月'
  tasks,           // [{code, name, hours, stripeColor}]
  pageNum, total,
}) {
  slide.background = { color: COLORS.bg };

  // Deep blue phase header
  slide.addShape('rect', {
    x: 0, y: 0, w: 13.33, h: 1.4,
    fill: { color: COLORS.navyDeep },
    line: { color: COLORS.navyDeep },
  });

  slide.addText(phaseNum, {
    x: 0.5, y: 0.18, w: 3, h: 0.4,
    fontFace: FONTS.en, fontSize: FS.phaseNum, bold: true,
    color: COLORS.lime,
  });
  slide.addText(phaseTitleCn, {
    x: 0.5, y: 0.55, w: 8, h: 0.7,
    fontFace: FONTS.cn, fontSize: 26, bold: true,
    color: COLORS.white,
  });

  // Hours badge
  slide.addShape('rect', {
    x: 10.5, y: 0.7, w: 2.5, h: 0.55,
    fill: { color: COLORS.lime },
    line: { color: COLORS.lime },
  });
  slide.addText(hoursTotal, {
    x: 10.5, y: 0.7, w: 2.5, h: 0.55,
    fontFace: FONTS.cn, fontSize: 14, bold: true,
    color: COLORS.navy, align: 'center', valign: 'middle',
  });

  // Period label
  slide.addText(period, {
    x: 0.7, y: 6.6, w: 12, h: 0.4,
    fontFace: FONTS.cn, fontSize: 13,
    color: 'AAAACC',
  });

  // Task cards (up to 9, arranged 5+4 or 5+5)
  const CARD_W = 2.25;
  const CARD_H = 1.9;
  const startX = 0.7;
  const row1Y = 1.7;
  const row2Y = 4.1;
  const gap = 0.2;

  tasks.forEach((task, i) => {
    const row = i < 5 ? 0 : 1;
    const col = i < 5 ? i : i - 5;
    const x = startX + col * (CARD_W + gap);
    const y = row === 0 ? row1Y : row2Y;

    // Dark card
    slide.addShape('rect', {
      x, y, w: CARD_W, h: CARD_H,
      fill: { color: COLORS.navyMid },
      line: { color: COLORS.navyMid },
    });

    // Color stripe
    slide.addShape('rect', {
      x, y, w: CARD_W, h: 0.38,
      fill: { color: task.stripeColor },
      line: { color: task.stripeColor },
    });
    slide.addText(task.code, {
      x: x + 0.1, y, w: CARD_W - 0.1, h: 0.38,
      fontFace: FONTS.en, fontSize: 13, bold: true,
      color: COLORS.navy, valign: 'middle',
    });

    // Task name
    slide.addText(task.name, {
      x: x + 0.12, y: y + 0.42, w: CARD_W - 0.2, h: 0.7 * 2,
      fontFace: FONTS.cn, fontSize: 20, bold: true,
      color: COLORS.white, valign: 'middle',
    });

    // Hours
    slide.addText(task.hours, {
      x: x + 0.1, y: y + CARD_H - 0.4, w: CARD_W - 0.1, h: 0.35,
      fontFace: FONTS.en, fontSize: 12, bold: true,
      color: task.stripeColor,
    });
  });

  addKvLogo(slide, true);
  addPageNum(slide, pageNum, total);
}

/**
 * L12: Rhythm schedule
 * 4-column week grid + explanation rows
 */
function buildRhythm(slide, {
  titleCn, titleEn, introText,
  activeWeeks,   // [0, 2] = week 1 and 3 are LIME active
  explanations,  // [{label, desc}]
  pageNum, total,
}) {
  slide.background = { color: COLORS.bg };
  addStdHeader(slide, titleCn, titleEn);

  slide.addText(introText, {
    x: 0.6, y: 1.42, w: 12, h: 0.38,
    fontFace: FONTS.cn, fontSize: 14,
    color: COLORS.grayMid,
  });

  const weekLabels = ['第 1 週', '第 2 週', '第 3 週', '第 4 週'];
  const CELL_W = 12.3 / 4;
  const startX = 0.5;
  const headerY = 2.0;
  const cellY = 2.55;

  weekLabels.forEach((label, i) => {
    const x = startX + i * CELL_W;
    // Header
    slide.addShape('rect', {
      x, y: headerY, w: CELL_W, h: 0.55,
      fill: { color: COLORS.navy },
      line: { color: COLORS.navy },
    });
    slide.addText(label, {
      x, y: headerY, w: CELL_W, h: 0.55,
      fontFace: FONTS.cn, fontSize: 16, bold: true,
      color: COLORS.white, align: 'center', valign: 'middle',
    });

    // Cell
    const isActive = activeWeeks.includes(i);
    slide.addShape('rect', {
      x, y: cellY, w: CELL_W, h: 1.2,
      fill: { color: isActive ? COLORS.lime : COLORS.bg },
      line: { color: isActive ? COLORS.lime : 'DDDDDF' },
    });
  });

  // Explanation rows
  explanations.forEach((exp, i) => {
    const y = 4.8 + i * 0.65;
    const bg = i % 2 === 0 ? COLORS.bg : COLORS.white;
    slide.addShape('rect', {
      x: 0.5, y, w: 12.3, h: 0.65,
      fill: { color: bg },
      line: { color: bg },
    });
    slide.addShape('rect', {
      x: 0.5, y: y + 0.1, w: 0.1, h: 0.45,
      fill: { color: COLORS.lime },
      line: { color: COLORS.lime },
    });
    slide.addText(exp.label, {
      x: 0.75, y, w: 2.5, h: 0.65,
      fontFace: FONTS.cn, fontSize: 15, bold: true,
      color: COLORS.navy, valign: 'middle',
    });
    slide.addText(exp.desc, {
      x: 3.3, y, w: 9.3, h: 0.65,
      fontFace: FONTS.cn, fontSize: 14,
      color: COLORS.grayDark, valign: 'middle',
    });
  });

  addKvLogo(slide, false);
  addPageNum(slide, pageNum, total);
}

/**
 * L14: Closing slide
 */
function buildClosing(slide, {
  mainText,    // '謝謝您'
  subText,     // '期待與合興工業的合作'
  company, person, email, website,
}) {
  slide.background = { color: COLORS.navy };

  slide.addShape('rect', { x: 0, y: 0, w: 3, h: 3, fill: { color: COLORS.lime }, line: { color: COLORS.lime } });
  slide.addShape('rect', { x: 10.33, y: 4.5, w: 3, h: 3, fill: { color: COLORS.lime }, line: { color: COLORS.lime } });

  slide.addText(mainText, {
    x: 2, y: 1.8, w: 9, h: 1.2,
    fontFace: FONTS.cn, fontSize: 60, bold: true,
    color: COLORS.white,
  });
  slide.addText(subText, {
    x: 2, y: 3.0, w: 9, h: 0.6,
    fontFace: FONTS.cn, fontSize: 24,
    color: COLORS.lime,
  });
  slide.addText(company, {
    x: 2, y: 3.9, w: 9, h: 0.4,
    fontFace: FONTS.cn, fontSize: 16,
    color: COLORS.grayLight,
  });
  slide.addText(`${person}｜${email}`, {
    x: 2, y: 4.35, w: 9, h: 0.4,
    fontFace: FONTS.cn, fontSize: 16,
    color: COLORS.grayLight,
  });
  slide.addText(website, {
    x: 2, y: 4.75, w: 9, h: 0.38,
    fontFace: FONTS.en, fontSize: 15,
    color: COLORS.lime,
  });

  addKvLogo(slide, true);
}

// ── Module Color Map ──────────────────────────────────────
const MODULE_COLORS = {
  A: COLORS.lime,
  B: COLORS.amber,
  C: COLORS.blue,
  D: COLORS.pink,
  E: '888888',
};

// ── Exports ───────────────────────────────────────────────
module.exports = {
  COLORS,
  FONTS,
  FS,
  MODULE_COLORS,
  addKvLogo,
  addPageNum,
  addStdHeader,
  addFootnote,
  buildCover,
  buildChapter,
  buildInfoGrid,
  buildCourseDetail,
  buildModuleColumns,
  buildPhaseTimeline,
  buildRhythm,
  buildClosing,
};
