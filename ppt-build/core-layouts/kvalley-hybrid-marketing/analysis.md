# 智谷 B2B 行銷 + 課程說明混合風 — 設計指引

> **來源**：`~/Downloads/【智谷網絡】4小時AI自動話辦公術快速落地包班.pdf`
> **調性**：黃黑 DM 海報（封面）+ 藍灰專業簡報（內頁）雙模切換
> **適用**：B2B 課程行銷、企業提案入口頁、快速落地方案說明
> **Slide size**：16:9（13.333 × 7.5 inch）
> **版本**：v1.0 / 2026-04-16

---

## 〇、整體視覺 DNA（雙模）

這個模板有**兩種完全不同**的頁型：

### Mode A：海報封面（首頁 / 吸睛頁）
- 亮黃色底（`#F3E04D`）+ 白塊 + 藍人物插畫
- 大膽字體「4小時」紅底白字的標題印章感
- 大量條列資訊密度（像傳單 DM）
- **功能**：社群分享、電話拓客的入口圖，不是簡報

### Mode B：提案內頁（第 2 頁之後）
- 淺米白 / 亞麻色底（`#F4F0E9`）
- 藍色 header（`#4A6B9C` / Ocean 近似）
- Serif 黑色大標 + Sans 內文
- 圓角方形資訊卡，三欄制
- **功能**：正式提案、會議講解

**混用原則**：封面用 Mode A 抓眼球，內頁切回 Mode B 講細節。

---

## 一、色票

```javascript
const COLORS = {
  // Mode A 海報色
  POSTER_YELLOW: "F3E04D",  // 主底亮黃
  POSTER_RED:    "E73037",  // 主標印章紅（「4小時」底）
  POSTER_BLUE:   "2C5F9C",  // 人物插畫藍
  POSTER_WHITE:  "FFFFFF",

  // Mode B 內頁色
  CREAM:      "F4F0E9",  // 內頁底（米白）
  NAVY:       "2F4A6E",  // 主標深藍
  SLATE:      "5A7596",  // 卡片邊框藍
  BODY_DARK:  "1F2937",
  BODY:       "4B5563",
  ACCENT_GRN: "C4D600",  // 智谷 Pantone 382C（Logo K 綠，小範圍用）
};
```

---

## 二、字體

```javascript
const FONT = {
  title_serif: "Noto Serif TC Bold",   // 或「思源宋體」— 內頁大標用
  title_sans:  "Microsoft YaHei UI Bold",
  body_zh:     "Microsoft YaHei UI",
  body_en:     "Inter / Helvetica Neue",
};
```

**分工**：
- 內頁主標用**襯線黑體**（增添正式感）
- 內文全用 YaHei UI
- 封面海報標用極粗 sans

---

## 三、版型 1：海報封面（Mode A）

**⚠️ 這頁不是一般簡報頁，是 social DM 風**。16:9 滿版。

```javascript
slide.background = { color: POSTER_YELLOW };

// 左上 Logo
slide.addImage({ path: "kvalley-logo.png", x: 0.3, y: 0.2, w: 1.5, h: 0.5 });

// 主標：「4 小時」紅色印章塊
{ rect: { type: "rect" }, x: 0.5, y: 0.3, w: 3.8, h: 1.6, fill: POSTER_RED, rotate: -2 };
{ text: "4小時", x: 0.5, y: 0.3, w: 3.8, h: 1.6, fontSize: 72, color: POSTER_WHITE, fontFace: title_sans, bold: true, align: "center", anchor: "middle" };

// 主標右側白框內標
{ rect: true, x: 4.3, y: 0.5, w: 6.5, h: 1.3, fill: POSTER_WHITE, line: "000000", lw: 1.5 };
{ text: "AI自動化辦公術",   x: 4.3, y: 0.5, w: 6.5, h: 0.7, fontSize: 32, color: "000000", fontFace: title_sans, bold: true, align: "center", anchor: "middle" };
{ text: "快速落地包班",    x: 4.3, y: 1.1, w: 6.5, h: 0.7, fontSize: 32, color: "000000", fontFace: title_sans, bold: true, align: "center", anchor: "middle" };

// 中央人物插畫（透明背景 PNG）
slide.addImage({ path: "person-illustration.png", x: 1.0, y: 2.0, w: 3.5, h: 4.5 });

// 左中三件式文字
{ text: "1式", x: 4.8, y: 2.3, w: 0.7, h: 0.6, fontSize: 40, color: POSTER_BLUE, fontFace: title_sans, bold: true };
{ text: "個人 AI 能力測評", x: 5.6, y: 2.4, w: 3.5, h: 0.5, fontSize: 18, color: "000000", bold: true, anchor: "middle" };
{ text: "5套", x: 4.8, y: 3.0, w: 0.7, h: 0.6, fontSize: 40, color: POSTER_BLUE, fontFace: title_sans, bold: true };
{ text: "招商業 AI 指令架構", x: 5.6, y: 3.1, w: 3.5, h: 0.5, fontSize: 18, color: "000000", bold: true, anchor: "middle" };
{ text: "8套", x: 4.8, y: 3.7, w: 0.7, h: 0.6, fontSize: 40, color: POSTER_BLUE, fontFace: title_sans, bold: true };
{ text: "好用公司 AI 流程", x: 5.6, y: 3.8, w: 3.5, h: 0.5, fontSize: 18, color: "000000", bold: true, anchor: "middle" };

// 右側 8 個圓點 Q&A 問題清單
const qna = [
  "Line 群組檔案怎麼有效歸檔？",
  "將同仁經驗化作部門知識地圖？",
  "如何搭建 FAQ 自動取機器人？",
  "如何省下發票報帳的時間？",
  "如何調入樓驗結構優化圖放大？",
  "用 AI 強化會議效能與行銷設計？",
  "如何用 AI 跟銀聞諜客開說？",
  "左家層片取得我預整醜被客執？",
];
qna.forEach((q, i) => {
  const y = 2.2 + i * 0.45;
  { ellipse: true, x: 9.2, y: y, w: 0.3, h: 0.3, fill: POSTER_BLUE };
  { text: (i + 1).toString(), x: 9.2, y: y, w: 0.3, h: 0.3, fontSize: 12, color: POSTER_WHITE, bold: true, align: "center", anchor: "middle" };
  { text: q, x: 9.6, y: y, w: 3.5, h: 0.35, fontSize: 11, color: "000000", fontFace: body_zh };
});

// 底部選單列
{ text: "可安排在", x: 0.5, y: 5.2, w: 1.5, h: 0.4, fontSize: 12, color: "000000", bold: true };
// 6 個膠囊藍底
const tags = ["AI 通識課", "新人訓練", "MA 訓", "管理訓", "業務訓練", "儲備 / 接班訓"];
tags.forEach((t, i) => {
  { rect: { type: "roundRect", rectRadius: 0.12 }, x: 2.0 + i * 1.45, y: 5.2, w: 1.35, h: 0.4, fill: POSTER_BLUE };
  { text: t, x: 2.0 + i * 1.45, y: 5.2, w: 1.35, h: 0.4, fontSize: 10, color: POSTER_WHITE, bold: true, align: "center", anchor: "middle" };
});

// 底部主訴求橫條（紅底白字）
{ rect: true, x: 0.5, y: 5.8, w: 8.0, h: 0.7, fill: POSTER_RED };
{ text: "評測 + 課程 + 回訓 + 送流程模板", x: 0.5, y: 5.8, w: 8.0, h: 0.7, fontSize: 22, color: POSTER_WHITE, bold: true, align: "center", anchor: "middle" };
{ text: "不只教你工具，更要教你 AI 思維的邏輯道理", x: 0.5, y: 6.55, w: 8.0, h: 0.35, fontSize: 12, color: "000000" };

// 右下聯絡
{ text: "+2 2736-3878",               x: 10.0, y: 5.6, w: 3.0, h: 0.3, fontSize: 12, color: "000000", bold: true };
{ text: "candy@asia-learning.com",    x: 10.0, y: 5.9, w: 3.0, h: 0.3, fontSize: 10, color: "000000" };
{ text: "105 台北市松山區慶城街23-2號3樓", x: 10.0, y: 6.2, w: 3.0, h: 0.3, fontSize: 9, color: "000000" };
```

---

## 四、版型 2：問題列舉（Mode B — 「AI 無法在公司落地？」）

```javascript
slide.background = { color: CREAM };

// 左上 Logo
slide.addImage({ path: "kvalley-logo-color.png", x: 0.3, y: 0.2, w: 1.3, h: 0.45 });

// 左側：大字主題問句（襯線體）
{ text: "AI無法在\n公司落地?", x: 0.8, y: 1.5, w: 5.0, h: 2.5, fontSize: 48, color: NAVY, fontFace: title_serif, bold: true, lineSpacing: 55 };
{ text: "在導入 AI 的過程中，您是否也遇到以下的問題。", x: 0.8, y: 4.2, w: 5.0, h: 0.6, fontSize: 13, color: BODY, fontFace: body_zh };

// 右側：3 個問題（大號數字 + 短橫線 + 標題 + 說明）
const problems = [
  { no: "01", title: "有學 / 有概念 但不知道可以怎麼用？", desc: "雖然員工理解 AI 工具的基本概念，但缺乏實際應用場景與操作指引，難以將知識轉化為日常工作中可執行的行動。" },
  { no: "02", title: "公司花錢做 AI 系統，但是大家都沒在用？", desc: "儘管企業投入大量金錢購買 AI 系統，員工因為缺乏操作培訓、系統難以操作或未能與實際需求對接，導致系統沒有效使用。" },
  { no: "03", title: "老闆希望馬上導入，要員工上一天課就會使用 AI", desc: "老闆期望短時間內見效，但員工往往需要深入了解與練習，無法在一天內掌握 AI 工具，導致培訓期望落差、學習效果不佳。" },
];
problems.forEach(({no, title, desc}, i) => {
  const y = 0.8 + i * 2.0;
  { text: no, x: 6.2,  y: y + 0.1, w: 1.0, h: 0.8, fontSize: 44, color: NAVY, fontFace: title_serif, bold: true };
  { line: true, x: 7.4, y: y + 0.5, w: 0.5, color: NAVY, w_line: 1.5 };
  { text: title, x: 8.0, y: y, w: 5.0, h: 0.8, fontSize: 16, color: NAVY, fontFace: title_sans, bold: true, lineSpacing: 22 };
  { text: desc,  x: 8.0, y: y + 0.85, w: 5.0, h: 1.0, fontSize: 10, color: BODY, fontFace: body_zh, lineSpacing: 14 };
});
```

---

## 五、版型 3：三欄方案卡（「我們的解決方案」）

```javascript
slide.background = { color: CREAM };
// Logo 右上
slide.addImage({ path: "kvalley-logo-color.png", x: 11.5, y: 0.2, w: 1.3, h: 0.45 });

// 標題區
{ text: "我們的解決方案", x: 0.5, y: 0.5, w: 8.0, h: 0.8, fontSize: 40, color: NAVY, fontFace: title_serif, bold: true };
{ text: "4 小時 AI 自動化辦公術  帶你快速將 AI 應用在實際工作場景", x: 0.5, y: 1.35, w: 10.0, h: 0.4, fontSize: 14, color: BODY };

// 三欄卡片
const solutions = [
  { title: "八種工作\n應用場景教學", tags: ["#依照企業現有 AI 資源設計課程", "#不講理論，只教實際應用"], desc: "透過八種真實工作場景，教學如何將 AI 工具應用於日常工作中。..." },
  { title: "全方位個人\nAI能力評測",   tags: ["#專業 AI 測評問卷", "#提供客製化 AI 學習建議"],       desc: "提供全面的 AI 能力測評..." },
  { title: "講師回訓和\n落地輔導",     tags: ["#提供後續應用問題解惑", "#給予企業人推動的下一步建議"], desc: "提供專業課程後的回訓服務..." },
];
const CW = 3.8; const GAP = 0.25; const CARD_X0 = 0.6;
solutions.forEach(({title, tags, desc}, i) => {
  const x = CARD_X0 + i * (CW + GAP);
  // 卡片邊框
  { rect: { type: "roundRect", rectRadius: 0.05 }, x: x, y: 2.0, w: CW, h: 5.0, line: SLATE, lw: 1.5, fill: POSTER_WHITE };
  // 標題（置中）
  { text: title, x: x, y: 2.3, w: CW, h: 1.2, fontSize: 22, color: NAVY, fontFace: title_sans, bold: true, align: "center", lineSpacing: 28 };
  // 橫分隔線
  { line: true, x: x + 0.5, y: 3.6, w: CW - 1.0, color: SLATE, w_line: 0.5 };
  // Tag 行
  tags.forEach((t, ti) => {
    { text: t, x: x + 0.3, y: 3.9 + ti * 0.3, w: CW - 0.6, h: 0.25, fontSize: 10, color: NAVY };
  });
  // 內文
  { text: desc, x: x + 0.3, y: 4.7, w: CW - 0.6, h: 2.2, fontSize: 10, color: BODY, fontFace: body_zh, lineSpacing: 15 };
});
```

---

## 六、版型 4：專案流程（時間軸四階段）

```javascript
slide.background = { color: CREAM };

// 標題
{ text: "AI自動化辦公術 專案流程", x: 0.5, y: 0.5, w: 9.0, h: 0.8, fontSize: 36, color: NAVY, fontFace: title_serif, bold: true };
{ text: "因為上述原因，智谷特別安排跑跑計劃，協助企業將 AI 落地。", x: 0.5, y: 1.3, w: 10.0, h: 0.3, fontSize: 12, color: BODY };

// Logo 右上
slide.addImage({ path: "kvalley-logo-color.png", x: 11.5, y: 0.2, w: 1.3, h: 0.45 });

// 4 個階段：I / II / III / IV
const phases = [
  { no: "I",   title: "盤點組織 AI\n發展現況",       kv: "KV 輔導", 
    items: ["組織 AI 能力現況分析", "顧問與企業進行訪談"] },
  { no: "II",  title: "AI 工具學習與\n落地實戰階段",  kv: "KV 課程",  
    items: ["3 小時 AI 自動化辦公\n快速落地包班"], highlight: true },
  { no: "III", title: "學員實作後\n問題解惑",         kv: "企業主導",
    items: ["智谷專屬 Line 群\n諮詢服務"] },
  { no: "IV",  title: "學習成效與\n下一步",           kv: "",
    items: ["1小時回訓\n及成果發表", "後續發展建議"] },
];
const PW = 2.9; const PGAP = 0.15; const P_X0 = 0.5;
phases.forEach(({no, title, kv, items, highlight}, i) => {
  const x = P_X0 + i * (PW + PGAP);
  // Phase 編號 (羅馬)
  { text: no, x: x, y: 2.0, w: 0.7, h: 0.6, fontSize: 32, color: NAVY, fontFace: title_serif, bold: true };
  // 右側標題
  { text: title, x: x + 0.7, y: 2.0, w: PW - 0.7, h: 0.8, fontSize: 15, color: NAVY, fontFace: title_sans, bold: true, lineSpacing: 20 };
  // 橫分隔線
  { line: true, x: x, y: 2.9, w: PW, color: NAVY, w_line: 1.2 };
  // 子項目（每個是小卡）
  items.forEach((it, ii) => {
    const cy = 3.2 + ii * 1.0;
    { rect: { type: "roundRect", rectRadius: 0.05 }, x: x, y: cy, w: PW, h: 0.9, 
      fill: highlight && ii === 0 ? NAVY : POSTER_WHITE, line: SLATE, lw: 1 };
    { text: it, x: x + 0.2, y: cy, w: PW - 0.4, h: 0.9, fontSize: 12,
      color: highlight && ii === 0 ? POSTER_WHITE : NAVY, bold: true, align: "center", anchor: "middle", lineSpacing: 18 };
  });
});
```

---

## 七、版型 5：表格頁（專案細部說明）

```javascript
slide.background = { color: CREAM };

// 標題 + Logo
{ text: "專案細部說明", x: 0.5, y: 0.5, w: 8.0, h: 0.7, fontSize: 36, color: NAVY, fontFace: title_serif, bold: true };
slide.addImage({ path: "kvalley-logo-color.png", x: 11.5, y: 0.2, w: 1.3, h: 0.45 });

// 表格：4 欄 × N 列，header 深底 + 左 NAVY 色條
// pptxgenjs 原生 table
slide.addTable([
  [
    { text: "階段 PHASE", options: { bold: true, color: POSTER_WHITE, fill: NAVY, align: "center", valign: "middle" } },
    { text: "主要課程/工作 Course/Task", options: { bold: true, color: POSTER_WHITE, fill: NAVY, align: "center", valign: "middle" } },
    { text: "說明 Content",  options: { bold: true, color: POSTER_WHITE, fill: NAVY, align: "center", valign: "middle" } },
    { text: "顧問時數",       options: { bold: true, color: POSTER_WHITE, fill: NAVY, align: "center", valign: "middle" } },
  ],
  [
    { text: "盤點組織 AI\n發展現況",       options: { bold: true, fill: "EEF3F9", align: "center", valign: "middle" } },
    { text: "組織 AI 能力分析調查\n顧問與企業進行訪談", options: { valign: "middle" } },
    { text: "透過 AI 能力調查..." },
    { text: "待定", options: { align: "center", valign: "middle" } },
  ],
  // ...
], {
  x: 0.5, y: 1.5, w: 12.3, h: 5.5,
  fontFace: "Microsoft YaHei UI", fontSize: 11, color: BODY_DARK,
  rowH: 0.9, colW: [2.5, 3.5, 5.0, 1.3],
  border: { type: "solid", color: "D0D7E0", pt: 0.5 },
});
```

---

## 八、通用尺寸速查

| 元素 | 字級 (pt) | 字體 |
|---|---|---|
| **海報主標**（4 小時）| 72 | Bold，紅底白字 |
| **內頁主標**（X 無法落地？）| 40–48 | Serif Bold NAVY |
| **章節標題**（三欄卡）| 22 | Sans Bold NAVY |
| **數字強調**（01 02 03）| 44 | Serif NAVY |
| **內文** | 10–12 | YaHei UI, lineSpacing 14–16 |
| **Tag / 標籤** | 10 | Sans Bold，色底膠囊 |
| **Logo** | 寬 1.3–1.5" | 彩色版 |

---

## 九、何時用這個模板

- ✅ 智谷自家課程行銷（封面用 Mode A 做招生海報）
- ✅ B2B 企業客戶提案（內頁用 Mode B 講方案）
- ✅ 想要正式 + 俏皮感的混合場合（課程教材、說明會 deck）
- ❌ 不適合：高階管理層報告（封面太促銷感）
- ❌ 不適合：純學術 / 政府單位（封面不夠正式）

---

## 十、雙模切換原則

- **第 1 頁** — Mode A（抓眼球招生海報）
- **第 2 頁起** — Mode B（內頁提案，乾淨專業）
- 千萬不要混用在同頁 — 海報色塊不要出現在內頁，反之亦然
- 字體一致規則：封面可用極粗 sans，內頁一律 Serif 主標 + Sans 內文

---

## 十一、封面內頁輪播速度包

```javascript
import pptxgen from "pptxgenjs";
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";

// 第 1 頁 — Mode A 海報
const s1 = pres.addSlide();
s1.background = { color: "F3E04D" };
s1.addShape("rect", { x: 0.5, y: 0.3, w: 3.8, h: 1.6, fill: "E73037", rotate: -2 });
s1.addText("4小時", { x: 0.5, y: 0.3, w: 3.8, h: 1.6, fontSize: 72, color: "FFFFFF", bold: true, align: "center", valign: "middle" });
// ... 其他內容

// 第 2 頁 — Mode B 內頁
const s2 = pres.addSlide();
s2.background = { color: "F4F0E9" };
s2.addText("AI無法在公司落地?", { x: 0.8, y: 1.5, w: 5.0, h: 1.5, fontSize: 48, color: "2F4A6E", bold: true, fontFace: "Noto Serif TC" });
// ...

pres.writeFile("kvalley-proposal.pptx");
```
