# Section AI Proficiency Report 風 — 設計指引

> **來源**：`~/Desktop/The AI Proficiency Report_2024_Section AI.pdf`
> **調性**：純黑底 + 螢光粉紫綠黃拼貼 + 3D AI 手 + Serif 襯線標題
> **適用**：研究報告、產業洞察、趨勢觀點、品牌思想領導內容
> **⚠️ 注意**：直式 A4 portrait 為主（印刷/閱讀）
> **Slide size**：A4 portrait (8.27 × 11.69 inch)
> **版本**：v1.0 / 2026-04-16

---

## 〇、整體視覺 DNA

| 元素 | 規格 |
|---|---|
| **調性** | 高端品牌 research report、科技感 × 手作塗鴉感混搭 |
| **特色** | **純黑底 + 多色彩漸層 3D 手勢**、**襯線大標**、螢光跳色矩形、彩色圓餅圖、手寫噴漆符號 |
| **情緒** | 有權威感（研究報告）+ 有反叛感（screen printing 塗鴉風格）|
| **禁忌** | 不用溫和藍、不用商務灰、不用簡約無機感 |

---

## 一、色票

```javascript
const COLORS = {
  BG_BLACK:   "0A0A0A",   // 主深底
  WHITE:      "FAFAFA",   // 內文白

  // 五彩調色板（拼貼感）
  NEON_PINK:  "E826D2",   // 螢光粉（AI Experts）
  NEON_LIME:  "C5FF3A",   // 螢光綠（AI Practitioners）
  NEON_CYAN:  "40E8D0",   // 薄荷綠（AI Experimenters）
  NEON_VIOLET:"8B5CF6",   // 螢光紫（AI Novices）
  NEON_ORANGE:"FF8A3D",   // 橙色（AI Skeptics）
  NEON_YELLOW:"FFE045",   // 鮮黃（標籤、柱狀圖）

  MUTED:      "9CA3AF",   // 次要文字灰
};
```

**特別用法**：
- 封面大字中**某幾個字**用 NEON 色高亮（例：deploy AI 紅底白字）
- 圓餅圖用螢光 5 色各佔一塊
- 章節 banner 用對應的 neon 色

---

## 二、字體

```javascript
const FONT = {
  title_serif: "Playfair Display Bold",  // 或「Cormorant Garamond」「Didot」
  body:        "Inter Regular",
  body_zh:     "Noto Serif TC",
  mono:        "JetBrains Mono",   // 用於百分比、數字
};
```

**關鍵**：主標**一定要用襯線字體**（Playfair、Didot、Cormorant 類），提供「報告感」的正統氣息。

---

## 三、版型 1：封面（Hero）

A4 portrait = 8.27 × 11.69。`pres.defineLayout({ name: "A4P", width: 8.27, height: 11.69 })`

```javascript
slide.background = { color: BG_BLACK };

// 頂部 logo（波浪線 S icon）
slide.addImage({ path: "section-logo-white.png", x: 0.5, y: 0.5, w: 1.5, h: 0.5 });

// 主標（三行，Playfair Bold，超大）
{ text: "The AI",                 x: 0.5, y: 1.5, w: 7.5, h: 1.3, fontSize: 72, color: WHITE, fontFace: title_serif, bold: true };
{ text: "Proficiency",            x: 0.5, y: 2.6, w: 7.5, h: 1.3, fontSize: 72, color: WHITE, fontFace: title_serif, bold: true };
{ text: "Report",                 x: 0.5, y: 3.7, w: 7.5, h: 1.3, fontSize: 72, color: WHITE, fontFace: title_serif, bold: true };

// 細分隔線
{ line: true, x: 0.5, y: 5.3, w: 1.0, color: WHITE, w_line: 2 };

// 副標兩行，「deploy AI」有 pill 標籤
{ text: "Most organizations are", x: 0.5, y: 5.5, w: 7.5, h: 0.4, fontSize: 16, color: MUTED, fontFace: body };
{ text: "not ready to",           x: 0.5, y: 5.9, w: 3.5, h: 0.4, fontSize: 16, color: MUTED, fontFace: body };
// "deploy AI" pill 貼在 "not ready to" 後面
{ rect: { type: "roundRect", rectRadius: 0.2 }, x: 2.9, y: 5.87, w: 1.4, h: 0.45, fill: NEON_PINK };
{ text: "deploy AI", x: 2.9, y: 5.87, w: 1.4, h: 0.45, fontSize: 15, color: WHITE, fontFace: body, bold: true, align: "center", anchor: "middle" };

// 下半部大型拼貼圖（手 / 人物剪影 / 彩色 abstract）
slide.addImage({ path: "hero-collage.png", x: 0, y: 7.0, w: 8.27, h: 4.69 });
```

---

## 四、版型 2：全彩 Pie Chart（Our Results）

```javascript
slide.background = { color: BG_BLACK };

// 上方文字區
{ text: "Our Results",  x: 0.5, y: 0.5, w: 7.5, h: 0.9, fontSize: 48, color: WHITE, fontFace: title_serif, bold: true };
{ text: "It's been about 2 years since ChatGPT was released...",
  x: 0.5, y: 1.6, w: 7.27, h: 2.5, fontSize: 11, color: WHITE, fontFace: body, lineSpacing: 16 };
{ text: "The result is an anxious...",
  x: 0.5, y: 4.3, w: 7.27, h: 2.0, fontSize: 11, color: WHITE, fontFace: body, lineSpacing: 16 };

// 圓餅圖（pptxgenjs chart）
slide.addChart(pres.ChartType.pie,
  [{
    name: "AI User Types",
    labels: ["AI NOVICE", "AI EXPERIMENTERS", "AI SKEPTICS", "AI PRACTITIONER", "AI EXPERT"],
    values: [47, 34, 11, 8, 1],
  }],
  {
    x: 1.0, y: 6.5, w: 6.27, h: 4.5,
    chartColors: [NEON_VIOLET, NEON_CYAN, NEON_LIME, NEON_YELLOW, NEON_PINK],
    showLegend: false,
    dataLabelFontSize: 10,
    dataLabelColor: BG_BLACK,
    dataLabelFontBold: true,
    showLabel: true,
    dataLabelPosition: "bestFit",
    // 中心洞（寫「BREAKDOWN OF AI USERS」）實作用 overlay rect
  }
);
// 中心文字
{ rect: { type: "ellipse" }, x: 3.6, y: 8.0, w: 1.5, h: 1.5, fill: BG_BLACK };
{ text: "BREAKDOWN\nOF AI USERS", x: 3.6, y: 8.0, w: 1.5, h: 1.5, fontSize: 10, color: WHITE, bold: true, align: "center", anchor: "middle", lineSpacing: 14 };

// Footer：logo + 頁碼 + 標題
{ line: true, x: 0.5, y: 11.2, w: 7.27, color: MUTED, w_line: 0.5 };
slide.addImage({ path: "section-logo-white.png", x: 0.5, y: 11.35, w: 0.8, h: 0.25 });
{ text: "The AI Proficiency Report | 4", x: 0, y: 11.35, w: 7.77, h: 0.3, fontSize: 9, color: MUTED, align: "right" };
```

---

## 五、版型 3：五類人卡（五彩彩色區塊 + 3D 手）

```javascript
slide.background = { color: BG_BLACK };

// 標題（襯線）
{ text: 'The five "AI types" in the',     x: 0.5, y: 0.5, w: 7.27, h: 0.7, fontSize: 32, color: WHITE, fontFace: title_serif, bold: true };
{ text: "knowledge workforce",            x: 0.5, y: 1.2, w: 7.27, h: 0.7, fontSize: 32, color: WHITE, fontFace: title_serif, bold: true };

// 簡介文字
{ text: "The knowledge workforce is split into 5 classifications...",
  x: 0.5, y: 2.0, w: 7.27, h: 0.7, fontSize: 11, color: WHITE, fontFace: body, lineSpacing: 15 };

// 5 個彩色區塊
const types = [
  { name: "AI EXPERTS",       color: NEON_PINK,    hand: "hand-pink.png",   desc: "AI power users and expert prompters. They have a strong grasp on AI's capabilities..." },
  { name: "AI PRACTITIONERS", color: NEON_LIME,    hand: "hand-lime.png",   desc: "They haven't integrated AI into every workflow, but they use it once a week..." },
  { name: "AI EXPERIMENTERS", color: NEON_CYAN,    hand: "hand-cyan.png",   desc: "AI Experimenters are just getting started..." },
  { name: "AI NOVICES",       color: NEON_VIOLET,  hand: "hand-violet.png", desc: "They've tried AI, but they're using it rarely, and not well..." },
  { name: "AI SKEPTICS",      color: NEON_ORANGE,  hand: "hand-orange.png", desc: "They're either not yet using AI at all, or tried it once or twice..." },
];
const BW = 7.27; const BH = 1.5; const BX = 0.5; const GAP = 0.1;
types.forEach(({name, color, hand, desc}, i) => {
  const y = 3.0 + i * (BH + GAP);
  // 背景色塊（圓角）
  { rect: { type: "roundRect", rectRadius: 0.1 }, x: BX, y: y, w: BW, h: BH, fill: color };
  // 左側 3D 手（1.5" 高，透明 PNG）
  slide.addImage({ path: hand, x: BX + 0.15, y: y - 0.15, w: 1.7, h: 1.8 });
  // 右側文字
  { text: name, x: BX + 2.0, y: y + 0.2, w: BW - 2.2, h: 0.5, fontSize: 18, color: BG_BLACK, fontFace: body, bold: true, charSpacing: 1 };
  { text: desc, x: BX + 2.0, y: y + 0.75, w: BW - 2.2, h: 0.7, fontSize: 10, color: BG_BLACK, fontFace: body, lineSpacing: 14 };
});

// Footer
slide.addImage({ path: "section-logo-white.png", x: 0.5, y: 11.35, w: 0.8, h: 0.25 });
{ text: "The AI Proficiency Report | 5", x: 0, y: 11.35, w: 7.77, h: 0.3, fontSize: 9, color: MUTED, align: "right" };
```

---

## 六、版型 4：人物畫像詳細頁（左 3D 手 + 右資料塊）

```javascript
slide.background = { color: NEON_VIOLET }; // 整頁底色（對應類別色）

// 標題
{ text: "AI Experts", x: 0.5, y: 0.7, w: 7.27, h: 1.0, fontSize: 54, color: WHITE, fontFace: title_serif, bold: true };
{ text: "They're excited about AI's implications on their jobs (50%), trust its contributions completely (100%), and they'd be very disappointed to lose access (73%).",
  x: 0.5, y: 2.0, w: 7.27, h: 1.0, fontSize: 11, color: WHITE, fontFace: body, lineSpacing: 15 };

// 左側：3D 手
slide.addImage({ path: "hand-detail.png", x: 0.3, y: 3.0, w: 3.5, h: 4.5 });

// 左下：synopsis 文字
{ text: "The AI Experts synopsis:", x: 0.5, y: 7.8, w: 3.5, h: 0.35, fontSize: 12, color: WHITE, fontFace: body, bold: true };
{ text: "AI Experts only use premium/paid models and 100% of them use those models at work at least several times a week...",
  x: 0.5, y: 8.2, w: 3.5, h: 3.2, fontSize: 10, color: WHITE, fontFace: body, lineSpacing: 14 };

// 右欄：資料區
const RX = 4.2; const RW = 3.5;

// Who they are
{ text: "Who they are:", x: RX, y: 3.0, w: RW, h: 0.3, fontSize: 11, color: WHITE, fontFace: body, bold: true };
{ text: "1% of the US, UK, and Canadian workforce.", x: RX, y: 3.35, w: RW, h: 0.5, fontSize: 10, color: WHITE, lineSpacing: 14 };

// How they stack up
{ text: "How they stack up", x: RX, y: 4.0, w: RW, h: 0.3, fontSize: 11, color: WHITE, fontFace: body, bold: true };
// 橫柱圖 (pptxgenjs chart or 手繪 rect)
const metrics = [
  { label: "AI usage",       value: 85 },
  { label: "AI knowledge",   value: 89 },
  { label: "AI proficiency", value: 100 },
];
metrics.forEach(({label, value}, i) => {
  const y = 4.4 + i * 0.35;
  { text: label, x: RX, y: y, w: 1.2, h: 0.3, fontSize: 9, color: WHITE };
  // 橫柱
  { rect: true, x: RX + 1.3, y: y + 0.05, w: 2.0 * (value / 100), h: 0.2, fill: NEON_YELLOW };
  { text: value + "%", x: RX + 3.1, y: y, w: 0.4, h: 0.3, fontSize: 9, color: WHITE, fontFace: mono, bold: true };
});

// Their favorite tools
{ text: "Their favorite tools", x: RX, y: 5.7, w: RW, h: 0.3, fontSize: 11, color: WHITE, fontFace: body, bold: true };
// 3 個工具條
const tools = [{ n: "ChatGPT", v: 100 }, { n: "Google Gemini", v: 95 }, { n: "Microsoft Copilot", v: 67 }];
tools.forEach(({n, v}, i) => {
  const y = 6.1 + i * 0.3;
  { text: n,       x: RX,       y: y, w: 1.5, h: 0.25, fontSize: 9, color: WHITE };
  { rect: true,    x: RX + 1.5, y: y + 0.03, w: 1.5 * (v / 100), h: 0.2, fill: NEON_YELLOW };
  { text: v + "%", x: RX + 3.1, y: y, w: 0.4, h: 0.25, fontSize: 9, color: WHITE, fontFace: mono };
});

// Their key characteristics 條列
{ text: "Their key characteristics:", x: RX, y: 7.5, w: RW, h: 0.3, fontSize: 11, color: WHITE, fontFace: body, bold: true };
const traits = [
  "Most use AI everyday (67%)",
  "Only use the paid versions of LLMs (100%)",
  "The majority are saving more than 20% of their time each week using AI (57%)",
  "They're expert prompters (Average grade of 80% in prompt effectiveness)",
];
traits.forEach((t, i) => {
  { text: "• " + t, x: RX, y: 7.85 + i * 0.3, w: RW, h: 0.3, fontSize: 9, color: WHITE, lineSpacing: 13 };
});
```

---

## 七、通用尺寸速查

| 元素 | 字級 (pt) | 字體 |
|---|---|---|
| **封面主標** | 60–72 | Playfair Display Bold |
| **章節大標** | 44–54 | Playfair Display Bold |
| **頁標題** | 28–36 | Playfair Display |
| **Section Header** | 18–22 | Inter Bold, charSpacing +1 |
| **Body** | 10–11 | Inter, lineSpacing 14 |
| **Data label / % 數字** | 9–11 | JetBrains Mono |
| **Footer** | 8–9 | Inter |

---

## 八、signature 視覺元素清單

1. **3D 彩色手勢**（預繪 PNG，每種 AI type 對應一個手勢 + 對應 neon 色）
2. **螢光色塊**（大面積，用在 5 類人卡片、章節 banner）
3. **圓餅圖**（5 色螢光分塊）
4. **pill 高亮**（關鍵詞加圓角小底色塊）
5. **拼貼 collage**（手寫符號 + 人像剪影，封面下半部）
6. **襯線大字**（主標整體）
7. **全黑底**（封面 / 資料頁）— 對比彩色元素

---

## 九、何時用這個模板

- ✅ 年度產業報告、白皮書、調研報告
- ✅ 思想領導內容（CEO 觀點、趨勢分析）
- ✅ 想要「有權威感但又酷」的 B2B 內容
- ❌ 不適合：現場簡報（直式不適合投影）
- ❌ 不適合：消費者端促銷
- ❌ 不適合：公部門（太前衛）

---

## 十、速度包（封面）

```javascript
import pptxgen from "pptxgenjs";
const pres = new pptxgen();
pres.defineLayout({ name: "A4P", width: 8.27, height: 11.69 });
pres.layout = "A4P";
const s = pres.addSlide();
s.background = { color: "0A0A0A" };
s.addImage({ path: "section-logo.png", x: 0.5, y: 0.5, w: 1.5, h: 0.5 });
s.addText("The AI",       { x: 0.5, y: 1.5, w: 7.5, h: 1.3, fontSize: 72, color: "FAFAFA", bold: true, fontFace: "Playfair Display" });
s.addText("Proficiency",  { x: 0.5, y: 2.6, w: 7.5, h: 1.3, fontSize: 72, color: "FAFAFA", bold: true, fontFace: "Playfair Display" });
s.addText("Report",       { x: 0.5, y: 3.7, w: 7.5, h: 1.3, fontSize: 72, color: "FAFAFA", bold: true, fontFace: "Playfair Display" });
s.addShape("line", { x: 0.5, y: 5.3, w: 1.0, h: 0, line: "FAFAFA", lw: 2 });
s.addText("Most organizations are not ready to", { x: 0.5, y: 5.5, w: 7.5, h: 0.4, fontSize: 16, color: "9CA3AF" });
s.addShape("roundRect", { x: 5.0, y: 5.5, w: 1.4, h: 0.45, fill: "E826D2", rectRadius: 0.2 });
s.addText("deploy AI", { x: 5.0, y: 5.5, w: 1.4, h: 0.45, fontSize: 15, color: "FAFAFA", bold: true, align: "center", valign: "middle" });
s.addImage({ path: "hero-collage.png", x: 0, y: 7.0, w: 8.27, h: 4.69 });
pres.writeFile("section-report.pptx");
```
