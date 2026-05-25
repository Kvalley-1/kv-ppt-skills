# Green Proposal Vertical A4 — 設計語言分析

> **命名**：`green-proposal-vertical-a4`（2026 智谷 Sales Kit 標準版型）
> **來源**：`sample-pages/original.pdf`（`版面參考 (1).pdf`，17 頁，業務提案模板集合）
> **調性**：深森林綠 × 螢光黃綠 / 黃 × 白底 × 粗體標題 × 圓角方形模組
> **適用**：A4 直式提案書、年度報告、業務銷售套件、B2B 提案
> **版面**：A4 Portrait (8.27 × 11.69 inch) — **直式文件，非投影格式**
> **入庫日**：2026-04-16（更新：2026-05-10，補 12 版型目錄 + HTML demo）

---

## 色票（Design Tokens）

```javascript
const COLORS = {
  DEEP_GREEN: "0F3A2B",  // 主色：深森林綠（封面大底、內頁標題、色條）
  LIME:       "C9E83F",  // 螢光黃綠（強調區塊底色、圓角卡片、右側色條）
  YELLOW:     "FFCE00",  // 鮮黃（TOC 數字、HIGHLIGHT 大字、icon）
  DKBLUE:     "1E2B4A",  // 深藍（heading accent，部分版型標題）
  BLACK:      "0F0F0F",
  WHITE:      "FFFFFF",
  GRAY_LINE:  "E5E5E5",  // 細分隔線
  BODY:       "333333",  // 內文灰
};
```

**配色規則**：
- 封面 / 章節大頁：DEEP_GREEN 60% + WHITE 大字
- 內文頁：WHITE 底 + BLACK/BODY 文字 + LIME 強調條（置底或側邊）
- 目錄 / 大數字：YELLOW 搶眼
- 標題 heading：DKBLUE 或 DEEP_GREEN 二擇一

---

## 字型系統

```javascript
const FONT = {
  display: "Montserrat Black",   // 粗到極致的無襯線（Impact 標題、大字）
  title:   "Montserrat Bold",    // 版型主標、卡片標題
  body:    "Inter Regular",      // 或 "Helvetica Neue"
  body_zh: "Microsoft YaHei UI", // 中文 body
};
```

**字級速查**：

| 角色 | 字級 (pt) | 說明 |
|------|-----------|------|
| 封面主標 | 60–72 | Montserrat Black |
| TOC 大字 | 60–72 | YELLOW 色 |
| Section Title（內頁標題） | 36–48 | DEEP_GREEN |
| Sub Title | 18–22 | DEEP_GREEN Bold |
| Card Title | 24–28 | Bold |
| Body | 10–11 | lineSpacing 14 |
| Meta / Label | 9–10 | charSpacing +2 全大寫 |

---

## 視覺元素特徵

- **圓角卡片**：`border-radius 0.1–0.15 inch`，白底 + 細框（GRAY_LINE 0.5pt）
- **圓角大色塊**：LIME 底，用於 Highlights / Awards 區塊
- **右側 LIME 色條**：`width ≈ 0.47 inch`，貼右邊緣，垂直出血（多頁共用裝飾元素）
- **箭頭 icon**：`→` 在 LIME 小方塊內，用於 Phase 卡片
- **頁尾**：左下頁碼 + 右下網址，BODY 小字 9pt
- **頁眉**：左側 Section label（全大寫 10pt 字距 +2）+ 細分隔線延伸至右側

---

## 12 個版型（Layouts）

| ID | 名稱 | HTML class | 適用情境 |
|----|------|-----------|---------|
| A | Cover | `.gs-cover` | 提案封面、主題封面 |
| B | TOC | `.gs-toc` | 目錄、章節索引 |
| C | RoundedBoxes | `.gs-rounded` | 公司概述、服務介紹、模組化說明 |
| D | HeadlineHighlights | `.gs-highlights` | 年度亮點、成果總結（有 bar chart 區） |
| E | SplitSection | `.gs-split` | SWOT 分析、機會/威脅、對比呈現 |
| F | GoalsKPI | `.gs-goals` | 目標 + KPI、數字成果、策略方向 |
| G | Timeline | `.gs-timeline` | 時間軸、Phase 卡片、執行計畫 |
| H | ItemsPhoto | `.gs-items` | 部門介紹、功能清單、服務項目 |
| I | MetricsPhoto | `.gs-metrics` | 問題數據、現況診斷、財務指標 |
| J | StatsGrid | `.gs-stats` | 公司簡介、規模數字、2×2 KPI |
| K | VisionMission | `.gs-vision` | 願景使命、策略目標、4 象限說明 |
| L | ImpactStatement | `.gs-impact` | 衝擊金句頁、論點頁、章節引言 |

---

## 版型詳細規格（pptxgenjs）

### 版型 A：Cover（封面）

```javascript
// A4 = 8.27 × 11.69 inch
slide.background = { color: WHITE };

// 上半部：深綠色塊（佔高 40%）
{ rect: true, x: 0, y: 0, w: 8.27, h: 4.7, fill: DEEP_GREEN },

// Logo
{ text: "⊙ Larana & Co",  x: 0, y: 0.8, w: 8.27, h: 0.5, fontSize: 20, color: WHITE, align: "center", fontFace: FONT.body, bold: true },

// 主標題兩行
{ text: "Project",   x: 0.7, y: 1.8, w: 7.0, h: 1.2, fontSize: 72, color: WHITE, fontFace: FONT.display },
{ text: "Proposal",  x: 0.7, y: 2.8, w: 7.0, h: 1.2, fontSize: 72, color: WHITE, fontFace: FONT.display },

// 引言（右側 " " 符號 + 三行說明）
{ text: "❝",                x: 0.7, y: 4.2, w: 0.5, h: 0.4, fontSize: 28, color: WHITE },
{ text: "SmartGreen",       x: 1.3, y: 4.2, w: 6.0, h: 0.4, fontSize: 24, color: WHITE, fontFace: FONT.title },
{ text: "Community Park",   x: 1.3, y: 4.55,w: 6.0, h: 0.4, fontSize: 24, color: WHITE, fontFace: FONT.title },
{ text: "Initiative",       x: 1.3, y: 4.9, w: 6.0, h: 0.4, fontSize: 24, color: WHITE, fontFace: FONT.title },

// 下半部：圖片滿版（帶頂部弧形切割）
slide.addImage({ path: "aerial.jpg", x: 0, y: 4.7, w: 8.27, h: 6.3 });
{ ellipse: true, x: -2, y: 4.2, w: 12.3, h: 1.5, fill: WHITE }, // 弧形遮罩

// 底部 Prepared by / 日期欄
{ rect: true, x: 0, y: 11.0, w: 8.27, h: 0.69, fill: DEEP_GREEN },
{ text: "Prepared by:",          x: 0.7, y: 11.05, w: 3.5, h: 0.25, fontSize: 10, color: WHITE, charSpacing: 1 },
{ text: "Larana & Co Solutions", x: 0.7, y: 11.35, w: 3.5, h: 0.3,  fontSize: 13, color: WHITE, bold: true },
{ text: "April 2025",            x: 4.7, y: 11.35, w: 3.0, h: 0.3,  fontSize: 13, color: WHITE, bold: true },
```

### 版型 B：TOC（目錄）

```javascript
slide.background = { color: WHITE };

// 左上大字標題
{ text: "TABLE OF",  x: 0.5, y: 0.7, w: 7.5, h: 1.2, fontSize: 72, color: YELLOW, fontFace: FONT.display },
{ text: "CONTENTS",  x: 0.5, y: 1.7, w: 7.5, h: 1.2, fontSize: 72, color: YELLOW, fontFace: FONT.display },

// 每個目錄項 = 標題 2 行 + 右側大編號
const items = [
  { title: "LETTER FROM\nTHE CEO",    num: "1", y: 4.0 },
  { title: "COMPANY\nOVERVIEW",       num: "2", y: 5.0 },
  { title: "FINANCIAL\nHIGHLIGHTS",  num: "3", y: 6.0 },
  { title: "PERFORMANCE\nOVERVIEW",   num: "4", y: 7.0 },
  { title: "CLIENT SUCCESS\nSTORIES", num: "5", y: 8.0 },
];
items.forEach(({title, num, y}) => {
  { text: title, x: 4.5, y: y, w: 2.5, h: 0.8, fontSize: 16, color: BLACK, bold: true, lineSpacing: 20 };
  { text: num,   x: 7.3, y: y, w: 0.8, h: 0.8, fontSize: 54, color: YELLOW, fontFace: FONT.display };
});
```

### 版型 D：HeadlineHighlights（年度亮點）

```javascript
slide.background = { color: WHITE };

// 頂部標題
{ text: "Highlights\nof the Year", x: 0.5, y: 0.5, w: 5.5, h: 1.8, fontSize: 48, color: DEEP_GREEN, fontFace: FONT.display, lineSpacing: 50 },
// 右上圓形 icon（LIME 圓 + 箭頭）
{ ellipse: true, x: 7.0, y: 0.5, w: 0.7, h: 0.7, fill: LIME },
{ text: "➜",     x: 7.0, y: 0.5, w: 0.7, h: 0.7, fontSize: 18, color: BLACK, align: "center", anchor: "middle" },

// 左圖
slide.addImage({ path: "photo.jpg", x: 0.5, y: 2.5, w: 3.0, h: 4.0 });

// 右側：Business Milestones 卡
{ text: "Business Milestones", x: 3.8, y: 2.5, w: 4.0, h: 0.4, fontSize: 16, color: DEEP_GREEN, bold: true },
{ text: "Lorem ipsum...",       x: 3.8, y: 3.0, w: 4.0, h: 1.5, fontSize: 10, color: BODY, lineSpacing: 14 },

// 底部：Awards & Recognition（LIME 底圓角卡）
{ rect: { type: "roundRect", rectRadius: 0.15 }, x: 0.5, y: 7.5, w: 7.27, h: 3.0, fill: LIME },
{ text: "Awards & Recognition", x: 0.9, y: 7.8, w: 6.5, h: 0.4, fontSize: 18, bold: true },
{ text: "Lorem ipsum dolor...", x: 0.9, y: 8.3, w: 6.5, h: 1.9, fontSize: 10, lineSpacing: 14 },
```

### 版型 E：SplitSection（SWOT 上下堆疊）

```javascript
// 頂部 label 小字 + 分隔線
{ text: "February 15, 2030", x: 0.5, y: 0.3, w: 4.0, h: 0.2, fontSize: 9, color: BODY },
{ line: true, x: 0.5, y: 0.55, w: 7.27, color: GRAY_LINE, w_line: 0.5 },

// 上塊：OPPORTUNITIES（白底 + 右側圖）
{ rect: true, x: 0, y: 0.8, w: 5.0, h: 4.8, fill: WHITE },
slide.addImage({ path: "building.jpg", x: 5.0, y: 0.8, w: 3.27, h: 4.8, transparency: 30 });
{ text: "OPPORTUNITIES", x: 0.5, y: 1.3, w: 4.5, h: 1.0, fontSize: 44, color: BLACK, fontFace: FONT.display },
// bullet list（每條 0.35" 間距）
items.forEach((t, i) => {
  { text: "• " + t, x: 0.7, y: 2.6 + i * 0.35, w: 4.3, h: 0.3, fontSize: 11, color: BODY };
});

// 下塊：THREATS（LIME 底）
{ rect: true, x: 0, y: 5.8, w: 5.5, h: 4.6, fill: LIME },
{ text: "THREATS", x: 0.5, y: 6.2, w: 4.5, h: 1.0, fontSize: 44, color: BLACK, fontFace: FONT.display },

// 底部頁碼
{ text: "06  |  www.reallygreatsite.com", x: 0.5, y: 11.3, w: 5.0, h: 0.2, fontSize: 9, color: BODY },
```

### 版型 G：Timeline（Phase 卡）

```javascript
// 頂部 Section label + 標題
{ text: "SOLUTION",  x: 0.5, y: 0.3, w: 2.0, h: 0.25, fontSize: 10, color: BLACK, bold: true, charSpacing: 2 },
{ line: true, x: 0.5, y: 0.55, w: 7.27, color: GRAY_LINE, w_line: 0.5 },
{ text: "Timeline",  x: 0.5, y: 0.8, w: 4.0, h: 0.8, fontSize: 36, color: DEEP_GREEN, fontFace: FONT.display },

// 左側：圖片
slide.addImage({ path: "calendar.jpg", x: 0.5, y: 1.8, w: 3.5, h: 5.0 });

// 右側：3 個 Phase 圓角卡
phases.forEach(({no, month, y}) => {
  { rect: { type: "roundRect", rectRadius: 0.1 }, x: 4.3, y: y, w: 3.7, h: 1.7, fill: WHITE, line: GRAY_LINE, lw: 0.5 };
  { rect: { type: "roundRect", rectRadius: 0.05 }, x: 4.5, y: y + 0.2, w: 0.3, h: 0.3, fill: LIME }; // LIME 小方塊
  { text: "➜",  x: 4.5, y: y + 0.2, w: 0.3, h: 0.3, fontSize: 10, color: BLACK, align: "center" };
  { text: no,    x: 4.9, y: y + 0.2, w: 2.5, h: 0.3, fontSize: 10, color: BLACK, bold: true, charSpacing: 2 };
  { text: month, x: 4.5, y: y + 0.55, w: 3.0, h: 0.5, fontSize: 26, color: DEEP_GREEN, fontFace: FONT.display };
  { text: "Lorem ipsum...", x: 4.5, y: y + 1.1, w: 3.3, h: 0.5, fontSize: 9, color: BODY };
});

// 右側 LIME 出血色條
{ rect: true, x: 7.8, y: 0.5, w: 0.47, h: 10.5, fill: LIME },
```

---

## 版面通用規則

- **頁邊距**：左右 0.5"，上 0.3–0.7"，下 0.5"
- **Grid**：2 欄制（欄寬 3.5" + 中間 0.25" gap + 欄寬 3.52"）
- **圓角**：所有 card radius 0.1–0.15 inch
- **分隔線**：GRAY_LINE 0.5pt
- **頁眉**：Section label 10pt 全大寫字距 +2
- **頁腳**：`頁碼 | www.site.com`，9pt BODY

---

## 何時用這個模板

| 場景 | 適合 |
|------|------|
| ✅ | 年度報告、B2B 專案提案書、ESG 報告、永續發展報告 |
| ✅ | 需要正式感但又想現代的文件（螢光色跳色） |
| ✅ | 要印刷（A4）的場合 |
| ❌ | 現場投影（直式不適合投影） |
| ❌ | 給年輕消費性品牌 |

---

## pptxgenjs 速度包

```javascript
import pptxgen from "pptxgenjs";
const pres = new pptxgen();
pres.defineLayout({ name: "A4P", width: 8.27, height: 11.69 });
pres.layout = "A4P";

// Design tokens
const C = {
  dkgreen: "0F3A2B",
  lime:    "C9E83F",
  yellow:  "FFCE00",
  dkblue:  "1E2B4A",
  black:   "0F0F0F",
  white:   "FFFFFF",
  gray:    "E5E5E5",
  body:    "333333",
};
const margin = 0.5; // inch

// Cover（最小可跑版本）
const s = pres.addSlide();
s.background = { color: C.white };
s.addShape("rect", { x: 0, y: 0, w: 8.27, h: 4.7, fill: C.dkgreen });
s.addText("Project",  { x: 0.7, y: 1.8, w: 7.0, h: 1.2, fontSize: 72, color: C.white, fontFace: "Montserrat Black" });
s.addText("Proposal", { x: 0.7, y: 2.8, w: 7.0, h: 1.2, fontSize: 72, color: C.white, fontFace: "Montserrat Black" });
s.addImage({ path: "photo.jpg", x: 0, y: 4.7, w: 8.27, h: 6.3 });
s.addShape("rect", { x: 0, y: 11.0, w: 8.27, h: 0.69, fill: C.dkgreen });
pres.writeFile("proposal.pptx");
```
