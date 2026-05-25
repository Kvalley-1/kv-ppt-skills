# SAP Joule Workshop Guide 風 — 設計指引

> **來源**：`~/Downloads/SAP工作坊教材/JouleAgentDesignWorkshopResources/01_Joule_AgentDesignWorkshop_Guide.pdf`
> **調性**：企業級淨白 + 紫藍漸層 + 六邊形蜂巢 + SAP 品牌級精緻
> **適用**：工作坊主持指南、企業培訓教材、高端 B2B 產品說明
> **Slide size**：16:9（13.333 × 7.5 inch）
> **版本**：v1.0 / 2026-04-16

---

## 〇、整體視覺 DNA

| 元素 | 規格 |
|---|---|
| **調性** | 淨白 + 漸層 + 幾何 + 真人照片 + 企業品牌化 |
| **特色** | **紫藍線性漸層字**（signature）、六邊形蜂巢、對話框半透明、真人商務照 |
| **情緒** | 專業、現代、國際級、親切（人物照提供溫度）|
| **禁忌** | 不用卡通、不用螢光色、不用俗氣字體 |

---

## 一、色票

```javascript
const COLORS = {
  BG_TOP:        "F0F7FF",  // 頁頂淡藍
  BG_BOTTOM:     "E8F3FF",  // 頁底淡藍（背景上下漸層）
  INK_PURPLE:    "1B1464",  // 主文字深紫（漸層左端）
  LINK_BLUE:     "2D7FF9",  // 主文字亮藍（漸層右端）
  ACCENT_VIOLET: "7B4EF5",  // 紫色強調（Call to action）
  BODY:          "30334E",  // 內文
  MUTED:         "6E7194",
  WHITE:         "FFFFFF",
  HEX_TINT:      "D8E6F7",  // 六邊形淡色邊
};
```

**漸層字**（signature）：從 `#1B1464`（左/上）→ `#2D7FF9`（右/下）。
pptxgenjs 不直接支援文字漸層，**替代方案**：
- 方案 A：把漸層標題做成 PNG 圖片再插入
- 方案 B：拆成多個 Text，每段顏色不同（漸進深→淺）
- 方案 C：用純 INK_PURPLE 或 LINK_BLUE 單色

---

## 二、字體

```javascript
const FONT = {
  display: "72 Bold",        // SAP 官方字，或用「Inter Bold」替代
  title:   "Inter Bold",
  body:    "Inter Regular",
  body_zh: "Microsoft YaHei UI",
};
```

**SAP「72」字體**：SAP 官方字，外部用可用 Inter 或 Work Sans 替代。**不要**用 Arial（沒有品牌感）。

---

## 三、版型 1：封面（真人照左偏 + 深紫底）

```javascript
// 整頁深紫底
slide.background = { color: "2D1B5E" }; // 或用漸層 image

// 左上 SAP logo
slide.addImage({ path: "sap-logo.png", x: 0.4, y: 0.4, w: 0.7, h: 0.3 });

// 右上 AppHaus logo
slide.addImage({ path: "apphaus-logo.png", x: 11.5, y: 0.4, w: 1.3, h: 0.3 });

// 左側文字區（35% 寬）
{ text: "Joule Agent",        x: 0.8, y: 2.0, w: 4.5, h: 0.8, fontSize: 32, color: WHITE, fontFace: display, bold: true };
{ text: "Design Workshop",    x: 0.8, y: 2.7, w: 4.5, h: 0.8, fontSize: 32, color: WHITE, fontFace: display, bold: true };
{ text: "Facilitation Guide", x: 0.8, y: 3.8, w: 4.5, h: 0.4, fontSize: 14, color: "C8B8F2", fontFace: body };

// 左下版本 + 日期
{ text: "v1",      x: 0.8, y: 6.2, w: 2.0, h: 0.3, fontSize: 11, color: WHITE, fontFace: body, bold: true };
{ text: "Dec 2025", x: 0.8, y: 6.5, w: 2.0, h: 0.3, fontSize: 11, color: "C8B8F2", fontFace: body };

// 右側真人照片（滿高，佔 55%）
slide.addImage({ path: "person.png", x: 5.8, y: 0.8, w: 7.0, h: 6.4 });

// 右下小裝飾：紫色粒子（可省略）
// 實作用小圓或星形，x = 7-11, y = 3-5, 幾個隨機位置

// 底部 metadata
{ text: "© 2025 SAP SE or an SAP affiliate company. All rights reserved. | Public",
  x: 7.5, y: 7.1, w: 5.5, h: 0.3, fontSize: 8, color: "C8B8F2", align: "right" };
```

---

## 四、版型 2：章節大標（淡藍底 + 超大漸層字）

```javascript
slide.background = { color: BG_TOP };

// 左上角 logo flag 裝飾
slide.addImage({ path: "corner-flag.png", x: 0.3, y: 0.2, w: 0.8, h: 0.3 });

// 中央編號（極淡）
{ text: "1",  x: 0, y: 1.8, w: 13.333, h: 1.0, fontSize: 64, color: "D8E6F7", align: "center", fontFace: display, bold: true };
// 編號下短線
{ line: true, x: 6.3, y: 2.8, w: 0.6, color: INK_PURPLE, w_line: 1.5 };

// 主標（兩行，極大，模擬漸層就用 INK_PURPLE → LINK_BLUE 分色）
{ text: "Introduction",  x: 0, y: 3.0, w: 13.333, h: 1.8, fontSize: 104, color: INK_PURPLE, align: "center", fontFace: display, bold: true };
{ text: "and Overview",  x: 0, y: 4.8, w: 13.333, h: 1.8, fontSize: 104, color: LINK_BLUE,   align: "center", fontFace: display, bold: true };

// 右下 copyright + | Public
{ text: "© 2025 SAP SE or an SAP affiliate company. All rights reserved. | Public",
  x: 7.5, y: 7.2, w: 5.5, h: 0.2, fontSize: 7, color: MUTED, align: "right" };
```

---

## 五、版型 3：S 曲線流程圖（5 階段）

```javascript
slide.background = { color: BG_TOP };

// 標題（混色）
{ text: "A Human-Centered Approach",  x: 0, y: 0.5, w: 13.333, h: 0.6, fontSize: 28, color: INK_PURPLE, align: "center", fontFace: display, bold: true };
{ text: "to Run Innovation Projects", x: 0, y: 1.0, w: 13.333, h: 0.4, fontSize: 16, color: BODY,        align: "center", fontFace: body };

// 上方說明左右兩欄
{ text: "The SAP's Human-Centered Approach to Innovation (HCAI) is an end-to-end process for developing innovations...",
  x: 0.5, y: 1.8, w: 5.8, h: 1.0, fontSize: 10, color: BODY, fontFace: body, lineSpacing: 14 };
{ text: "It supports the entire innovation lifecycle: from generating novel business ideas to developing and delivering high-value solutions. This process consists of five phases:",
  x: 6.8, y: 1.8, w: 5.8, h: 1.0, fontSize: 10, color: BODY, fontFace: body, lineSpacing: 14 };

// S 曲線（用 addShape 手繪或貼預畫 SVG 轉 PNG）
slide.addImage({ path: "s-curve-wave.png", x: 0.5, y: 3.0, w: 12.3, h: 2.0 });

// 5 階段標籤（沿 S 曲線分佈）
const phases = [
  { name: "Explore",    x: 0.5,  y: 4.3, highlight: false },
  { name: "Discover",   x: 2.8,  y: 4.0, highlight: true },
  { name: "Design",     x: 5.5,  y: 4.0, highlight: true },
  { name: "Deliver",    x: 8.2,  y: 4.0, highlight: true },
  { name: "Run & Scale",x: 10.7, y: 4.3, highlight: false },
];
phases.forEach(({name, x, y, highlight}) => {
  { text: name,  x: x, y: y, w: 2.0, h: 0.5,
    fontSize: highlight ? 20 : 16,
    color: highlight ? INK_PURPLE : BODY,
    fontFace: display, bold: true, align: "center" };
});

// 下方 5 個描述（對齊 phase）
const desc = [
  { t: "Explore innovation opportunities that will support your strategic business goals.", x: 0.5 },
  { t: "Discover the needs and challenges of customers and target users.",               x: 2.8 },
  { t: "Design a prototype...",   x: 5.5 },
  { t: "Deliver both business and technical solutions...", x: 8.2 },
  { t: "Run and scale your solution...",                   x: 10.7 },
];
desc.forEach(({t, x}) => {
  { text: t, x: x, y: 5.5, w: 2.3, h: 1.5, fontSize: 9, color: MUTED, fontFace: body, align: "center", lineSpacing: 13 };
});
```

---

## 六、版型 4：四個六邊形（Workshop Formats）

```javascript
slide.background = { color: BG_TOP };

// 標題
{ text: "AI Workshop Formats", x: 0, y: 0.5, w: 13.333, h: 0.7, fontSize: 30, color: INK_PURPLE, align: "center", fontFace: display, bold: true };
{ text: "from SAP AppHaus",    x: 0, y: 1.2, w: 13.333, h: 0.4, fontSize: 13, color: BODY, align: "center", fontFace: body };

// 4 個六邊形（pptxgenjs 有 hexagon shape: "hexagon"）
const formats = [
  { title: "Business AI Explore\nWorkshop",        desc: "Understand the possibilities of AI and identify AI use cases with business impact." },
  { title: "Business AI Design\nWorkshop",          desc: "Define a solution concept to address the pain points of an existing business process using AI capabilities." },
  { title: "Joule Agent Discovery\nWorkshop",       desc: "Understand the power of agents and identify agentic use cases to drive productivity." },
  { title: "Joule Agent Design\nWorkshop",          desc: "Design an AI agent that works for you." },
];
const HW = 2.6; const HGAP = 0.4; const HX0 = 0.6;
formats.forEach(({title, desc}, i) => {
  const x = HX0 + i * (HW + HGAP);
  // 六邊形（含內部圖片）
  slide.addShape("hexagon", { x: x, y: 2.0, w: HW, h: 2.5, fill: "FFFFFF", line: HEX_TINT, lw: 1.5 });
  slide.addImage({ path: `format${i+1}.jpg`, x: x + 0.1, y: 2.1, w: HW - 0.2, h: 2.3 }); // 內部填充圖
  // 標題
  { text: title, x: x, y: 4.8, w: HW, h: 0.7, fontSize: 14, color: ACCENT_VIOLET, fontFace: display, bold: true, align: "center", lineSpacing: 18 };
  // 描述
  { text: desc,  x: x, y: 5.6, w: HW, h: 1.4, fontSize: 10, color: BODY, fontFace: body, align: "center", lineSpacing: 14 };
});
```

---

## 七、版型 5：產品說明（左標 + 右 3D 對話氣泡）

```javascript
slide.background = { color: BG_TOP };

// 左側：大主標（漸層感單色）
{ text: "Joule Agent",          x: 0.5, y: 0.7, w: 5.5, h: 0.8, fontSize: 36, color: INK_PURPLE, fontFace: display, bold: true };
{ text: "Design Workshop",      x: 0.5, y: 1.4, w: 5.5, h: 0.8, fontSize: 36, color: INK_PURPLE, fontFace: display, bold: true };

// 左側說明
{ text: "A creative and collaborative approach to design an agent-driven solution that works for you.",
  x: 0.5, y: 2.5, w: 5.5, h: 1.0, fontSize: 13, color: BODY, fontFace: body, lineSpacing: 18 };

// Duration
{ text: "Duration:",                         x: 0.5, y: 3.8, w: 1.5, h: 0.3, fontSize: 12, color: INK_PURPLE, fontFace: body, bold: true };
{ text: "5 - 6 h on-site or 2 x 3 h day virtual", x: 0.5, y: 4.1, w: 5.5, h: 0.3, fontSize: 11, color: BODY };

// Goals（條列）
{ text: "Goals:",                                               x: 0.5, y: 4.6, w: 1.5, h: 0.3, fontSize: 12, color: INK_PURPLE, fontFace: body, bold: true };
{ text: "▶ Define what the agent should focus on.",              x: 0.5, y: 4.9, w: 5.5, h: 0.3, fontSize: 11, color: BODY };
{ text: "▶ Describe the objectives, tasks and instructions\nto configure the agent.",  x: 0.5, y: 5.2, w: 5.5, h: 0.6, fontSize: 11, color: BODY, lineSpacing: 15 };

// Method Website 連結（下劃線）
{ text: "Method Website",  x: 0.5, y: 6.2, w: 3.0, h: 0.3, fontSize: 12, color: LINK_BLUE, fontFace: body, bold: true, underline: true };

// 右側：主視覺 3D 圖片（Agent 填寫表格 + 對話氣泡）
slide.addImage({ path: "agent-hero.png", x: 6.0, y: 0.6, w: 3.5, h: 4.5 });

// 右側三個六邊形卡（Who / Why / What）
const qcards = [
  { label: "Who",  q: "should participate?",  desc: "Business department leads with process knowledge, IT and domain experts.", x: 9.8, y: 1.5 },
  { label: "Why",  q: "should you care?",     desc: "AI agents must have a clear purpose...", x: 6.0, y: 4.8 },
  { label: "What", q: "is the outcome?",      desc: "A clear description of your automation solution...", x: 9.8, y: 4.8 },
];
qcards.forEach(({label, q, desc, x, y}) => {
  slide.addShape("hexagon", { x: x, y: y, w: 2.8, h: 2.5, fill: "FFFFFF", line: HEX_TINT, lw: 1.5 });
  { text: label, x: x + 0.3, y: y + 0.3, w: 2.2, h: 0.5, fontSize: 22, color: ACCENT_VIOLET, fontFace: display, bold: true };
  { text: q,     x: x + 0.3, y: y + 0.8, w: 2.2, h: 0.3, fontSize: 11, color: INK_PURPLE, fontFace: body, bold: true };
  { text: desc,  x: x + 0.3, y: y + 1.2, w: 2.2, h: 1.2, fontSize: 9,  color: BODY, fontFace: body, lineSpacing: 13 };
});
```

---

## 八、通用尺寸速查

| 元素 | 字級 (pt) | 特徵 |
|---|---|---|
| **章節編號（1 / 2 / 3）** | 64 | HEX_TINT 色極淡，置中 |
| **章節大標** | 104 | INK_PURPLE + LINK_BLUE 分色模擬漸層 |
| **頁標題** | 28–36 | INK_PURPLE Bold 置中 |
| **Section Header** | 22–24 | ACCENT_VIOLET |
| **Body** | 10–12 | BODY 色, lineSpacing 14 |
| **Micro / Footer** | 7–9 | MUTED |

---

## 九、signature 視覺元素清單

1. **六邊形蜂巢**（pptxgenjs `shape: "hexagon"`）—裝資訊、裝圖
2. **漸層大字**（INK_PURPLE → LINK_BLUE）— 章節標題
3. **S 曲線 / 波浪線**（預繪 PNG 插入）— 流程圖基底
4. **真人商務照**（滿版半身）— 封面 + 章節頁
5. **3D 對話氣泡**（預繪 PNG）— 產品說明頁
6. **淡藍漸層背景**（BG_TOP → BG_BOTTOM）— 非深底頁面一律用這
7. **左上角 flag**（小三角形裝飾）—頁首角落

---

## 十、何時用這個模板

- ✅ 企業級 B2B 工作坊教材（尤其國際客戶）
- ✅ 高端 SaaS 產品說明會
- ✅ AI / 創新 / 數位轉型主題
- ✅ 客戶要求「專業但不死板」的平衡感
- ❌ 不適合：消費性快消品、促銷導向
- ❌ 不適合：政府標案（視覺太前衛）

---

## 十一、速度包（章節頁）

```javascript
import pptxgen from "pptxgenjs";
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
const s = pres.addSlide();
s.background = { color: "F0F7FF" };
s.addText("1", { x: 0, y: 1.8, w: 13.333, h: 1.0, fontSize: 64, color: "D8E6F7", align: "center", bold: true });
s.addShape("line", { x: 6.3, y: 2.8, w: 0.6, h: 0, line: "1B1464", lw: 1.5 });
s.addText("Introduction", { x: 0, y: 3.0, w: 13.333, h: 1.8, fontSize: 104, color: "1B1464", align: "center", bold: true, fontFace: "Inter" });
s.addText("and Overview", { x: 0, y: 4.8, w: 13.333, h: 1.8, fontSize: 104, color: "2D7FF9", align: "center", bold: true, fontFace: "Inter" });
pres.writeFile("joule-section.pptx");
```
