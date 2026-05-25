# Creative Brief Agency 風 — 設計指引

> **來源**：`~/Downloads/活動簡報版面參考.pdf`
> **調性**：Design agency / Studio / Creative Brief 呈現
> **適用**：品牌企劃簡報、Design sprint、概念提案、年輕世代活動
> **Slide size**：16:9 widescreen，`pptxgenjs` `LAYOUT_WIDE`（13.333 × 7.5 inch）
> **版本**：v2.0 / 2026-05-10（補完 18 版型；原 v1.0 只收錄前 5 頁）

---

## 〇、整體視覺 DNA

| 元素 | 規格 |
|---|---|
| **調性關鍵詞** | 黑底 × 螢光綠 × 超粗 condensed 字體 × 全出血照片 × 四等分/三等分切割 |
| **情緒** | 年輕、酷、有態度、不規整（有設計感的「亂」）|
| **禁忌** | 不用漸層、不用陰影、不用圓形裝飾、不用淺色底（要用就對比到底）|

---

## 一、色票

```javascript
const COLORS = {
  BLACK:    "0F0F0F",  // 主深底（不是純黑）
  LIME:     "C6F53D",  // 螢光黃綠（signature）
  WHITE:    "FFFFFF",
  GRAY_TX:  "8E8E8E",  // 次要灰字（很少用）
};
```

**比例**：BLACK 60% + LIME 25% + WHITE + 照片 15%

---

## 二、字體

```javascript
const FONT = {
  display: "Druk Wide Bold", // 或用「Impact」「Anton」「Bebas Neue」替代
  body:    "Helvetica Neue",
  body_zh: "Microsoft YaHei UI",
};
```

**必用條件**：Display 一定要是**極粗 condensed sans-serif**（字寬比高壓縮）。一般 Arial Bold 不行，要找 Druk / Anton / Bebas Neue 類。

---

## 三、版型 1：封面（Cover）

```javascript
// 13.333 × 7.5 inch slide
slide.background = { color: COLORS.BLACK };

// Header 橫條（頂部三等分）
{ text: "STUDIO SHODWE",        x: 0.5,  y: 0.35, w: 3.5, h: 0.3,  fontSize: 10, color: WHITE, fontFace: body, bold: true, charSpacing: 2 },
{ text: "JANUARY 2025",         x: 4.5,  y: 0.35, w: 3.5, h: 0.3,  fontSize: 10, color: WHITE, fontFace: body, bold: true, charSpacing: 2, align: "center" },
{ text: "WWW.REALLYGREATSITE.COM", x: 8.5, y: 0.35, w: 4.3, h: 0.3,  fontSize: 10, color: WHITE, fontFace: body, bold: true, charSpacing: 2, align: "right" },

// 主標題（兩行，左側佔 45%）
{ text: "CREATIVE",  x: 0.5, y: 1.2, w: 5.5, h: 1.8, fontSize: 130, color: WHITE, fontFace: display, bold: true, charSpacing: -4 },
{ text: "BRIEF",     x: 0.5, y: 3.0, w: 5.5, h: 1.8, fontSize: 130, color: WHITE, fontFace: display, bold: true, charSpacing: -4 },

// 右側大照片（45% 寬）
slide.addImage({ path: "team.jpg", x: 6.2, y: 1.0, w: 6.6, h: 4.0 }),

// 底部螢光綠橫條（presented by/to）
{ rect: true, x: 0.5, y: 5.4, w: 12.3, h: 1.6, fill: LIME },
{ text: "PRESENTED BY :",  x: 7.0,  y: 5.7, w: 2.5, h: 0.3, fontSize: 11, color: BLACK, fontFace: body, bold: true },
{ text: "Morgan Maxwell",  x: 7.0,  y: 6.0, w: 2.5, h: 0.4, fontSize: 14, color: BLACK, fontFace: body },
{ text: "PRESENTED TO :",  x: 10.0, y: 5.7, w: 2.5, h: 0.3, fontSize: 11, color: BLACK, fontFace: body, bold: true },
{ text: "Marketing Team",  x: 10.0, y: 6.0, w: 2.5, h: 0.4, fontSize: 14, color: BLACK, fontFace: body },
```

---

## 四、版型 2：目錄 / AGENDA（三欄直切）

```javascript
// 全頁分三欄：左黑（25%）+ 中圖（30%）+ 右螢光綠（45%）
{ rect: true, x: 0,   y: 0,   w: 3.3,  h: 7.5, fill: BLACK },
{ img:  true, x: 3.3, y: 0,   w: 4.0,  h: 7.5, src: "room.jpg" },
{ rect: true, x: 7.3, y: 0,   w: 6.03, h: 7.5, fill: LIME  },

// 左欄：小 header + 底部大字
{ text: "STUDIO SHODWE", x: 0.5, y: 0.5, w: 2.8, h: 0.3, fontSize: 10, color: WHITE, fontFace: body, bold: true, charSpacing: 2 },
{ text: "AGENDA",        x: 0.5, y: 5.4, w: 2.8, h: 1.5, fontSize: 72, color: WHITE, fontFace: display, bold: true },

// 右欄：5 項目錄
const items = [
  "01. Campaign",
  "02. Target Audience",
  "03. References",
  "04. Deliverables",
  "05. Contact Us",
];
items.forEach((t, i) => {
  const y = 1.2 + i * 1.15;
  { text: t, x: 8.0, y: y, w: 4.5, h: 0.8, fontSize: 28, color: BLACK, fontFace: display, bold: true },
  { text: "↘", x: 12.5, y: y, w: 0.5, h: 0.8, fontSize: 22, color: BLACK, align: "right" },
  { line: true, x: 7.8, y: y + 0.85, w: 5.3, h: 0, color: BLACK, w_line: 1.5 },
});
```

---

## 五、版型 3：章節引言（Section Intro）

```javascript
slide.background = { color: BLACK };

// 上方照片（全寬，佔 40%）
slide.addImage({ path: "team2.jpg", x: 0, y: 0, w: 13.333, h: 2.8 });

// 螢光綠 label 橫條（只佔左半寬，切照片邊緣）
{ rect: true, x: 0, y: 2.4, w: 6.5, h: 0.5, fill: LIME },
{ text: "INTRODUCTION", x: 0.5, y: 2.4, w: 6, h: 0.5, fontSize: 13, color: BLACK, fontFace: body, bold: true, charSpacing: 3, anchor: "middle" },

// 下方黑塊 + 大字標題（佔左 60%）
{ rect: true, x: 0, y: 2.9, w: 8, h: 4.6, fill: BLACK },
{ text: "WE ARE A PROFESSIONAL", x: 0.5, y: 4.0, w: 7.3, h: 1.2, fontSize: 72, color: WHITE, fontFace: display, bold: true },
{ text: "DESIGN STUDIO",         x: 0.5, y: 5.2, w: 7.3, h: 1.2, fontSize: 72, color: WHITE, fontFace: display, bold: true },

// 右下副圖
slide.addImage({ path: "team3.jpg", x: 8, y: 2.9, w: 5.333, h: 4.6 });
```

---

## 六、版型 4：對稱雙欄（左黑 + 中圖 + 右黑）

```javascript
slide.background = { color: BLACK };

// 頂部標題
{ text: "THE CAMPAIGN",       x: 0,   y: 0.5,  w: 13.333, h: 0.4, fontSize: 14, color: LIME,  align: "center", bold: true, charSpacing: 3 },
{ text: "ABOUT THE CAMPAIGN", x: 0,   y: 0.95, w: 13.333, h: 1.5, fontSize: 72, color: WHITE, align: "center", fontFace: display, bold: true },

// 中間 3 欄：左文字 / 中圖 / 右文字
const GAP = 0.2;
const COL_W = (13.333 - 1 - 2 * GAP) / 3; // 4.31

// 左：小標題
{ text: "Keep Things on",     x: 0.5,                y: 3.0, w: COL_W, h: 0.5, fontSize: 26, color: LIME, fontFace: display, bold: true, align: "center" },
{ text: "Track",              x: 0.5,                y: 3.5, w: COL_W, h: 0.5, fontSize: 26, color: LIME, fontFace: display, bold: true, align: "center" },
// 左：內文
{ text: "This is it! Time...",x: 0.5,                y: 5.5, w: COL_W, h: 1.5, fontSize: 11, color: WHITE, fontFace: body },

// 中：大圖
slide.addImage({ path: "hands.jpg", x: 0.5 + COL_W + GAP, y: 3.0, w: COL_W, h: 4.0 });

// 右：對稱
{ text: "Introduce the",      x: 0.5 + 2*(COL_W+GAP), y: 3.0, w: COL_W, h: 0.5, fontSize: 26, color: LIME, fontFace: display, bold: true, align: "center" },
{ text: "Campaign",           x: 0.5 + 2*(COL_W+GAP), y: 3.5, w: COL_W, h: 0.5, fontSize: 26, color: LIME, fontFace: display, bold: true, align: "center" },
{ text: "Creativity can...",  x: 0.5 + 2*(COL_W+GAP), y: 5.5, w: COL_W, h: 1.5, fontSize: 11, color: WHITE, fontFace: body },
```

---

## 七、版型 5：拼貼（Collage）— 左大標 + 右多圖

```javascript
slide.background = { color: WHITE };

// 左上：黑底大標
{ rect: true, x: 0, y: 0, w: 5.0, h: 4.2, fill: BLACK },
{ text: "A BRIEF",   x: 0.5, y: 0.8, w: 4.5, h: 1.5, fontSize: 80, color: WHITE, fontFace: display, bold: true },
{ text: "HISTORY",   x: 0.5, y: 2.2, w: 4.5, h: 1.5, fontSize: 80, color: WHITE, fontFace: display, bold: true },

// 右上：照片
slide.addImage({ path: "people.jpg", x: 5.0, y: 0, w: 4.5, h: 4.2 });

// 右上文字框
{ text: "Lorem ipsum dolor sit amet...", x: 9.5, y: 0.3, w: 3.6, h: 2.0, fontSize: 11, color: BLACK, fontFace: body },

// 螢光綠區塊（佔底部左半）
{ rect: true, x: 0, y: 4.2, w: 7.5, h: 3.3, fill: LIME },
{ text: "Giving some background...",     x: 0.5, y: 5.3, w: 6.5, h: 1.8, fontSize: 11, color: BLACK, fontFace: body },

// 右下：大圖（延續）
slide.addImage({ path: "team_sofa.jpg", x: 7.5, y: 4.2, w: 5.833, h: 3.3 });
```

---

## 八、通用尺寸速查

| 元素類型 | 字級 (pt) | 說明 |
|---|---|---|
| **Display Hero**（封面主字）| 120–140 | Druk Bold，字距 -4 |
| **Section Title**（章節）| 68–80 | Druk Bold |
| **Sub Title**（副標）| 24–28 | Druk Bold 或 Helvetica Neue Bold |
| **Body**（內文）| 11–12 | Helvetica Neue / 雅黑 |
| **Tag / Label**（標籤）| 10–11 | 字距 +3（全大寫）|

---

## 八-B、版型完整目錄（A–R，共 18 個）

| ID | 名稱 | HTML class | PDF頁 | 結構描述 |
|----|------|-----------|------|---------|
| A | Cover | `.A` | p1 | 黑底 · 頂3欄標 · 左Impact大字 · 右圖 · 底LIME橫條 |
| B | Agenda | `.B` | p2 | 黑左25% · 中圖30% · 螢光綠右45% · 目錄列表 |
| C | SectionIntroA | `.C` | p3 | 上全寬圖 · LIME label條 · 左黑Impact · 右下副圖 |
| D | SectionIntroB | `.D` | p4 | 左半portrait圖 · 右上LIME條 · 右下黑Impact+body |
| E | ContentSplit3Col | `.E` | p5 | 黑底 · 頂置中標題 · 三欄LIME|圖|LIME |
| F | AboutBrand | `.F` | p6 | 左全高圖 · 中黑大字 · 右上LIME文字 · 右下圖 |
| G | BriefHistoryCollage | `.G` | p7 | 5格拼貼: 黑左上Impact · 中圖 · 右LIME · 左下LIME · 右下圖 |
| H | TargetAudience | `.H` | p8 | 左黑Impact · 右上全寬圖 · 底LIME橫條(標題+body) |
| I | References | `.I` | p9 | 上全寬圖 · 左下黑Impact · 右下LIME body |
| J | PhotoMoodboard | `.J` | p10 | 黑底 · 3col照片卡 · LIME caption條 |
| K | TwoColPhotoLime | `.K` | p11 | 左黑+圖 · 右LIME(STUDIO+嵌入圖+body) |
| L | Competitors | `.L` | p12 | 左LIME全高(圖+Impact) · 右黑(2個LIME卡) |
| M | ChartSplit | `.M` | p13 | 左黑條形圖 · 右LIME(Impact+body+圖) |
| N | RiskTable | `.N` | p14 | 黑底 · 左上Impact · 右上圖 · LIME表頭table |
| O | Deliverables | `.O` | p15 | 上3個LIME卡+body · 下大圖overlay Impact |
| P | Timeline | `.P` | p16 | Phase 1-4 LIME方框 · 連接線 · 2張圖 · 左下Impact |
| Q | OurTeam | `.Q` | p17 | 左LIME豎條+OUR TEAM · 3欄portrait · 底黑名字條 |
| R | ThankYou | `.R` | p18 | 左portrait圖 · 右LIME(THANK YOU Impact+聯絡資訊) |

---

## 九、何時用這個模板

- ✅ 給行銷、活動、品牌企劃、創意部門的提案
- ✅ 跟年輕世代（< 40）溝通
- ✅ 想要「衝擊力 > 資訊密度」的場合
- ❌ 不適合：政府標案、傳統企業高階管理層、法務合規類內容
- ❌ 不適合：超過 20 頁長篇簡報（調性太重，看久累）

---

## 十、速度包（10 行產出 Cover）

```javascript
import pptxgen from "pptxgenjs";
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
const s = pres.addSlide();
s.background = { color: "0F0F0F" };
s.addText("CREATIVE", { x: 0.5, y: 1.2, w: 5.5, h: 1.8, fontSize: 130, color: "FFFFFF", bold: true, fontFace: "Impact" });
s.addText("BRIEF",    { x: 0.5, y: 3.0, w: 5.5, h: 1.8, fontSize: 130, color: "FFFFFF", bold: true, fontFace: "Impact" });
s.addImage({ path: "hero.jpg", x: 6.2, y: 1.0, w: 6.6, h: 4.0 });
s.addShape("rect", { x: 0.5, y: 5.4, w: 12.3, h: 1.6, fill: "C6F53D" });
pres.writeFile("creative-brief.pptx");
```
