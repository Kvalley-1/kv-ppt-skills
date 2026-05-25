# SAP AppHaus — Business Opportunities With AI 模板解析

> **來源**：SAP AppHaus《Business Opportunities With Artificial Intelligence — Exploration Deck》
> **原始素材**：見 `sample-pages/`（含原始 PDF + 16 頁 PNG 截圖）⭐
> **配套知識庫**：`../../../resources/SAP_AppHaus_Complete_Raw_Text_Extract.md`、`SAP_AppHaus_AI_Workshop_逐字稿.txt`
> **解析日期**：2026-04-15（initial）/ 2026-05-09（補 sample-pages）
> **用途**：Jimmy 核可的主力模板——台水 Day 1 PPT、AI Capability Card 教材、凡成人專業學習場域
> **狀態**：✅ 設計語言完整消化，可用 pptxgenjs 重生

## 📂 sample-pages/ 內容（回溯來源）

| 檔案 | 用途 |
|------|------|
| `original.pdf` | Jimmy 於 2026-04-15 提供的原始 PDF（156KB，16 頁）|
| `slide-01.png` ~ `slide-16.png` | 各頁截圖（150 DPI），快速視覺對照用 |

**何時開 sample-pages**：
- 想驗證下方 analysis 描述準確嗎？對照 PNG
- 想知道某個版型實際視覺？看對應 slide-NN.png
- 想微調設計？開 PNG 當底圖比對

---

## 一、定位與為什麼選這套

### SAP AppHaus 這套的強項

| 特質 | 說明 |
|------|------|
| **零 stock photo** | 全靠排版 × 色塊 × 粗體字，不需換圖、無倫理風險 |
| **色彩分區邏輯** | 每個「Opportunity」一種顏色，章節節奏自然 |
| **Dual-tone 三角幾何** | 每個色系雙色（深底 + 淺襯）堆疊，視覺衝擊強 |
| **四角對稱** | 左上 + 右上 + 左下 + 右下 都放三角，版面被「包起來」 |
| **雙欄層次** | 主內容 65% + 彩色側欄 35%，閱讀錨點明確 |
| **Bold 大標 + 留白** | 成人教室適合，公務員不排斥 |
| **SAP 背書** | 本來就是「成人專業學習」現成設計系統 |

### Jimmy 的評語（2026-04-15）

> 「最早生成的那個還行」—— 確認此風格方向是 go。

---

## 二、基本規格

| 項目 | SAP 原版 | **智谷採用規格（16:9）** |
|------|---------|----------------------|
| 原始尺寸 | 約 5.0" × 3.5"（印刷卡牌尺寸，約 10:7）| — |
| 設計用途 | 印刷卡牌 | **投影簡報** |
| 智谷 canvas | — | **13.333" × 7.5"**（標準 16:9）|
| pptxgenjs | `layout: 'LAYOUT_WIDE'` | |

**為什麼不用 20×11.25？** SAP 原版偏方正，不是寬 16:9。強行拉到 20×11.25 反而版面比例失衡。用標準 `LAYOUT_WIDE` 13.33×7.5 剛好。

---

## 三、色彩系統（核心）

### 3.1 SAP 原版 — 7 個 Opportunity 各一色，雙色調

| # | 色系 | 主深色（bg） | 配淺色（三角）| SAP Opportunity |
|---|------|------------|--------------|----------------|
| 1 | **紫** | `#2B2475` | `#9D91C6` | Automate info processing |
| 2 | **藍** | `#14398F` | `#5596E5` | Streamline content creation |
| 3 | **桃紅** | `#761849` | `#E04A93` | Simplify access to knowledge |
| 4 | **綠** | `#10462C` | `#24A85C` | Explore suggestions & ideas |
| 5 | **紅** | `#5A0E20` | `#DE4852` | Augment decision-making |
| 6 | **青綠** | `#0D4850` | `#1DA5AB` | Streamline tests & simulations |
| 7 | **橘** | `#591709` | `#E6763A` | Get coding assistance |

**配色邏輯**：**深色作 cover 底 + 淺色作三角裝飾**，兩色是同一色系的明暗變化。

### 3.2 中性色（封面、簡介、轉場用）

| 用途 | Hex |
|------|-----|
| 封面底（淺米灰） | `#E8ECEF` |
| 深藍（SAP 標題色）| `#122D4A` |
| 深灰（正文） | `#2B3A4E` |
| 中灰（副文） | `#6B7C93` |

### 3.3 智谷適配版（台水 Day 1 為例）

```
模組 A 上午 認知翻轉 → 綠色系（#10462C / #24A85C） [智谷品牌錨點]
模組 B 下午 AI 工具實作 → 藍色系（#14398F / #5596E5）
中性 / 過場 / 衝擊頁 → 深藍 #122D4A 為底
```

**注意**：智谷品牌綠 `#C4D600` 偏螢光，不適合做 SAP 的深底。綠色系用 SAP 的深綠 `#10462C`（穩重），智谷綠保留給「小徽章 / 品牌標示 / 強調錨點」。

---

## 四、字型

| 層級 | SAP 原版 | 中文採用 |
|------|---------|---------|
| 超粗大標 | SAP 72 Black / Fira Sans Heavy | **Microsoft YaHei UI** Bold |
| 粗體 | SAP 72 Bold | Microsoft YaHei UI Bold |
| 常規 | SAP 72 Regular | Microsoft YaHei UI |
| 小標 / 標籤 | SAP 72 Bold（小寫大字距）| Microsoft YaHei UI Bold（charSpacing 3-5）|

🔴 **中文字型一律 `Microsoft YaHei UI`**（Jimmy 2026-04-15 全域指定，見 auto-memory）

---

## 五、版型字級規格（13.33×7.5 canvas 專用）

| 元素 | 字級（pt） | 字重 | 示例 |
|------|---------|------|------|
| Cover 超大主標 | **72-88** | Heavy Bold | 馬戲團 / 知識 vs 資訊 vs 心法 |
| Cover 小標籤（OPPORTUNITY 類） | 14-16 | Bold 大字距 | 段落 3 \| 09:50-10:05 |
| 內容頁主標 | 36-44 | Bold | 資訊 · 知識 · 心法 |
| 章節 eyebrow | 11-13 | Bold charSpacing 3 | 段落 3 · 核心框架 |
| 副提示 | 16-20 | Regular | 你寫的那些文件… |
| 表格 body | 14-18 | Regular | 對照表內文 |
| 情境題 body | 18-22 | Regular | 情境描述 |
| 選項大字 | 24-32 | Bold | 🅐 萃取 |
| 衝擊頁金句 | 72-96 | Heavy Bold | 找根因，而不是治症狀 |
| 衝擊頁 eyebrow | 14-18 | charSpacing 5 | 輔導員的看家本領 |
| 頁腳 | 9-10 | Regular | P05 / 20 |

---

## 六、關鍵版型解析（五類）

### 版型 ① Cover / Section Divider（章節封面）

```
┌──────────────────────────────────────────────────┐
│▲▲                                            ▲▲▲│ ← 四角三角 dual-tone
│▲                                              ▲▲│
│                                                  │
│    OPPORTUNITY                                   │ ← eyebrow 14pt
│                                                  │
│    馬戲團                                         │ ← 主標 80pt Heavy
│                                                  │
│                                                  │
│                                                  │
│    體驗我會做 ≠ 別人會了                          │ ← 副描述 20pt
│                                                  │
│▲▲                                              ▲│
│▲▲▲                                            ▲▲│ ← 四角三角
└──────────────────────────────────────────────────┘

背景：全版面深色（該 Opportunity 主色）
文字顏色：白 / 淺色配色
```

**四角三角幾何規格**（13.33×7.5 canvas）：
```
每角 2 個三角形疊加：
- 外層大三角：2.5" × 2.5"，主色或淺色
- 內層小三角：1.2" × 1.2"，深一階（視覺層次）
四角各自對應 rtTriangle 的四種 flip:
- 左上：flipV=true
- 右上：flipH=true, flipV=true
- 左下：無 flip
- 右下：flipH=true
```

### 版型 ② Opportunity Detail（內容頁：主 + 側欄）

```
┌────────────────────────────────────┬──────────────┐
│  OPPORTUNITY                        │  EXAMPLE     │
│  Automate info processing           │  SCENARIOS   │
│                                     │              │
│  AI enables the **automatic**       │  [Finance]   │
│  **processing and analysis**...    │  Accountants │
│                                     │  get...      │
│  • creating summaries               │              │
│  • translating content              │  [Social]    │
│  • identifying patterns             │  Content...  │
│                                     │              │
│  What scenarios could be            │  [Service]   │
│  improved with automated            │  Officers... │
│  information processing?            │              │
│                                     │          SAP │
└────────────────────────────────────┴──────────────┘
   ← 主內容區 65% 白底  →  ← 側欄 35% 彩色底 →

結構：
- 主區（左 65%）白 / 淺底，黑字
- 側欄（右 35%）該 Opportunity 色底，白字
- 側欄每個例子有「小膠囊色塊標籤」如 [Finance]、[Social Media]
```

### 版型 ③ 對照表（SAP 無此版型，智谷擴充）

```
參考 v1 P5 三層對照表：
- 標題 + Eyebrow（上方）
- 表格 4 欄：層次 / 定義 / 台水範例 / 文件形式
- 每列圓角卡片（非純表格線），更柔和
- 「層次」欄用該模組色 + 編號徽章
```

### 版型 ④ 情境題（SAP 無此版型，智谷擴充）

```
┌──────────────────────────────────────────────┐
│  情境 X  （eyebrow）                          │
│                                              │
│  ┌────────────────────────────────────────┐  │ ← 白框 + 左側色條
│  │  情境描述全文（18-22pt）                │  │
│  │  ...                                    │  │
│  │  「學員的抱怨引用句」                   │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  🅐 選項一     🅑 選項二     🅒 選項三        │ ← 三選項卡片
│                                              │
└──────────────────────────────────────────────┘
```

### 版型 ⑤ 衝擊頁 / 收斂金句

```
┌──────────────────────────────────────────────┐
│▲▲                                        ▲▲▲│ ← 四角三角（淺色 + 深色）
│                                              │
│                                              │
│          輔導員的看家本領                     │ ← eyebrow 18pt
│                                              │
│          找根因，                              │ ← 超大 96pt Heavy
│          而不是治症狀。                        │ ← 主色系強調
│                                              │
│                                              │
│▲▲▲                                         ▲▲│
└──────────────────────────────────────────────┘

背景：整版深色主色底 #122D4A 或該模組深色
文字：白 / 主色系淺色做強調
```

---

## 七、四角三角幾何（pptxgenjs 精準寫法）

```js
// 畫四角對稱三角（SAP 核心視覺元素）
function sapCorners(slide, darkColor, lightColor) {
  const configs = [
    // 左上
    { x: 0, y: 0, w: 2.3, h: 2.3, c: lightColor, flipV: true },
    { x: 1.0, y: 0, w: 1.3, h: 1.3, c: darkColor, flipV: true },
    // 右上
    { x: 11.0, y: 0, w: 2.3, h: 2.3, c: lightColor, flipH: true, flipV: true },
    { x: 11.0, y: 0, w: 1.3, h: 1.3, c: darkColor, flipH: true, flipV: true },
    // 左下
    { x: 0, y: 5.2, w: 2.3, h: 2.3, c: lightColor },
    { x: 0, y: 6.1, w: 1.3, h: 1.4, c: darkColor },
    // 右下
    { x: 11.0, y: 5.2, w: 2.3, h: 2.3, c: lightColor, flipH: true },
    { x: 12.0, y: 6.1, w: 1.3, h: 1.4, c: darkColor, flipH: true },
  ];
  configs.forEach(cfg => {
    slide.addShape('rtTriangle', {
      x: cfg.x, y: cfg.y, w: cfg.w, h: cfg.h,
      fill: { color: cfg.c }, line: { type: 'none' },
      flipH: cfg.flipH || false, flipV: cfg.flipV || false,
    });
  });
}
```

---

## 八、pptxgenjs 起手範本

```js
const PptxGenJS = require('pptxgenjs');
const pres = new PptxGenJS();
pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5

// ============ SAP 色盤（7 組 dual-tone + 中性色）============
const SAP = {
  // 7 色主題（dark 作 bg，light 作 accent/triangle）
  purple:  { dark: '2B2475', light: '9D91C6' },
  blue:    { dark: '14398F', light: '5596E5' },
  magenta: { dark: '761849', light: 'E04A93' },
  green:   { dark: '10462C', light: '24A85C' },
  red:     { dark: '5A0E20', light: 'DE4852' },
  teal:    { dark: '0D4850', light: '1DA5AB' },
  orange:  { dark: '591709', light: 'E6763A' },
  // 中性
  paper:    'E8ECEF',
  inkDark:  '122D4A',
  ink:      '2B3A4E',
  inkSoft:  '6B7C93',
  white:    'FFFFFF',
  kvalley:  'C4D600',  // 智谷綠錨點，微量使用
};

const F = { main: 'Microsoft YaHei UI' };

// 設定當前模組主題色
const theme = SAP.green; // 可換 SAP.blue / SAP.magenta ...
```

---

## 九、適用 / 不適用

### ✅ 適用
- 成人專業學習
- 公務員 / 企業員工培訓
- AI / 科技類主題
- 多章節結構（用色彩分區）
- 有衝擊金句的場域
- Jimmy 的風格偏好（視覺有 weight，不浮誇）

### ⚠️ 不完全適用
- 文字超密集的講義（SAP 偏留白）
- 需要大量 chart / graph 的場合
- 客戶 CI 色系強烈衝突時

### ❌ 絕對不用
- 兒童 / 青少年培訓（太嚴肅）
- 網紅 / 行銷類（太沉重）

---

## 十、配套素材（assets/）

待補充：
- [ ] 四角三角 SVG 參考（方便未來非 pptxgenjs 工具使用）
- [ ] 色票 PDF 打樣（7 組 dual-tone 並列）
- [ ] 膠囊標籤 SVG（側欄用的 [Finance] 之類）

**目前可用**：
- 本 analysis.md 涵蓋色碼、字級、座標、範例程式
- sample-pages/ 若有 Jimmy 提供的 PDF 可放入作視覺參考

---

## 十一、參考檔案

- 原始解析素材：`../../../resources/SAP_AppHaus_Complete_Raw_Text_Extract.md`
- 逐字稿：`../../../resources/SAP_AppHaus_AI_Workshop_逐字稿.txt`
- v1 生成腳本（有學習價值但不盡精準）：`/tmp/taiwater-pptx/generate.js`（暫存，請重做時參考）
- v1 產出 PPT（Jimmy 核可方向）：`~/Downloads/台水Day1_雛型_段落1-3-5.pptx`

---

## 十二、已知問題 / 待修項

**v1 做的 20 頁雛型（Jimmy 說還行），但仍有以下問題**：

1. ❌ 三角只有對角兩個（左上 + 右下），沒做四角對稱
2. ❌ 只用智谷綠一色，沒做 SAP 的色彩分區（模組切換時沒色彩節奏）
3. ❌ Cover 做成右半色塊 + 左半白底，沒學到 SAP 的「深色全版 + 四角三角 + 標題中左」
4. ❌ 內容頁雙欄平均分，沒有 SAP「主 65% + 彩色側欄 35%」的層次
5. ⚠️ 活動指引頁、情境題版型是智谷擴充，要持續打磨

**後續改版重點**：
- 用上述 sapCorners() 函式替換所有內容頁的角落裝飾
- 依模組切換色系：上午綠 / 下午藍 / 衝擊深藍
- Cover 採 SAP「深底全版 + 四角 + 標題中左」結構
- 對照表、情境題版型微調以更貼近 SAP 質感

---

*此檔為 SAP AppHaus 模板的永久知識庫。要用這風格做 PPT，第一件事就是讀此檔。*
