# Gradient Pitch BW — Design Language Analysis

> Source PDF: `sample-pages/original.pdf` (11 pages, 16:9)  
> Style: 黑白漸層商務簡報 — 雙模背景交替 + 超大 Ultra Black 標題 + 圓角卡片系統  
> Version: v1.0 / 2026-05-10

---

## 色彩系統

| Token | Hex | 用途 |
|-------|-----|------|
| `LIGHT_BG` | `#E5E8EA` | 淺色頁背景（銀白漸層，由左暗至右亮）|
| `DARK_BG` | `#1E1E1E` | 深色頁背景（近黑，含微妙徑向漸層）|
| `WHITE` | `#FFFFFF` | 白卡片、淺頁上的文字 |
| `BLACK` | `#0D0D0D` | 黑卡片、深頁上的字、標題 |
| `GRAY_MID` | `#888888` | 次要文字、小標、header 分隔線 |
| `GRAY_CARD` | `#2C2C2C` | 深頁上的深色卡片（略亮於背景）|
| `GRAY_PHOTO` | `rgba(0,0,0,0.5)` | 照片暗部 overlay（深頁照片效果）|

**單色系統（無任何彩色 accent）**

---

## 字體系統

| 角色 | 字體 | 備用 |
|------|------|------|
| Display heading（超大） | Inter Black / Montserrat ExtraBold | Arial Black |
| Sub-heading | Inter Bold / Montserrat Bold | Arial Bold |
| Body | Inter Regular | Helvetica Neue, Arial |
| Caption / Label | Inter Medium | Arial |

**字重特徵**：標題 font-weight 900，與 body 400 形成極大對比（無中間過渡）

---

## 版面規格

| 項目 | 值 |
|------|-----|
| 版面比例 | 16:9 橫式 |
| pptxgenjs layout | `LAYOUT_WIDE`（13.333 × 7.5 inch） |
| 主內容邊距（左右） | 0.6 inch |
| 主內容邊距（上下） | 0.5 inch |
| 卡片圓角 | ~0.25 inch（= 24px @ 96dpi）|

---

## 簽名元素（Signature Elements）

1. **雙背景交替** — 淺色頁（cover/services/why/performance）與深色頁（who/market/team/portfolio/next）間隔出現，形成節奏感
2. **超大 Ultra Black 標題** — 多行大字佔左側或全版，字高約 1–2 inch，weight: 900，tracking 略緊
3. **圓角卡片系統** — 所有資訊盒一律 radius 24px；白卡在深背景，深卡在淺背景（對比互補）
4. **照片全圓角** — 所有照片 border-radius 24px，與卡片風格統一；可局部出血（上截）
5. **淺色頁 Header bar** — 左：Logo + 公司名；細橫線；右：日期，字型小、gray
6. **浮動 stat widget** — 圓角白卡，左：頭像圓圈疊排，右：大數字 + 斜體說明（出現在 cover/thank you）
7. **Donut chart** — 黑灰雙色圓環，中心顯示百分比大字（白卡包覆）
8. **Bar chart** — 灰色系雙柱，無花俏配色

---

## 版型目錄（11 layouts，對應 PDF 11 頁）

| 版型 | 代號 | PDF頁 | 背景 | 說明 |
|------|------|-------|------|------|
| Cover | A | 1 | 淺 | 左：高樓照片出血；右：header bar + 超大主標 + 副標 + presenter info + 浮動 stat widget |
| Table of Contents | B | 2 | 淺+深 | 左：超大 "LIST OF CONTENTS" + 雙欄編號清單 + 垂直分隔線；中：圓角照片白卡；右：深色圓角文字卡 |
| Who We Are | C | 3 | 深 | 左：圓角照片；右：超大標題 + body + 底部兩個並排圓角卡（白:Vision / 深:Mission）|
| Market Insights | D | 4 | 深 | 上：3格橫排（2圓角照片 + 1白圓角卡含 donut chart）；下：超大標題 + 2欄 body |
| Services We Offer | E | 5 | 淺 | 左：局部照片 + 超大標題 + body；右：照片底 + 3個縱向疊排深色圓角服務卡 |
| Why Choose Us? | F | 6 | 淺 | 左：超大標題 + body + 底部2卡（白+深）；右：2張圓角照片（上小下大出血）|
| Our Team | G | 7 | 深 | 頂部居中超大標題 + body；底部：4張圓角人像照，照片下方姓名+職稱，白底+細灰邊框 |
| Our Portfolio | H | 8 | 深 | 左：圓角照片；右：超大標題 + 小標 + body + 白圓角卡（大數字 stat）|
| Our Performance | I | 9 | 淺 | 上半：bar chart + 深色圓角 stat 卡（60%）+ 圓角照片；下半：超大標題 + body |
| What's Next | J | 10 | 深 | 左：超大標題 + body + 白圓角文字框；右：2×2 圓角照片格（photo grid）|
| Thank You | K | 11 | 淺 | 同 Cover 版型：左照片 + 右超大標題 + presenter info + 浮動 stat widget |

---

## pptxgenjs 常用座標（13.333 × 7.5 inch）

```js
// 淺色頁 Header bar
{ x: 0.5, y: 0.15, w: 12.3, h: 0.02, fill: { color: '888888' } }  // 分隔線
// Logo 文字
{ x: 0.5, y: 0.08, w: 3, h: 0.25, fontSize: 10, color: '333333' }
// 日期（右對齊）
{ x: 10, y: 0.08, w: 2.8, h: 0.25, fontSize: 10, color: '333333', align: 'right' }

// 超大標題（左側）
{ x: 0.55, y: 1.0, w: 5.5, h: 4.0, fontSize: 72, bold: true, color: '0D0D0D' }

// 圓角卡片（白，深頁上）
{ x: 1.0, y: 4.5, w: 5.5, h: 2.5, fill: { color: 'FFFFFF' }, line: { color: 'EEEEEE', width: 0.5 } }
// 套用圓角需用 shape: 'roundRect', rectRadius: 0.25

// 圓角卡片（深，淺頁上）
{ x: 7.0, y: 4.5, w: 5.5, h: 2.5, fill: { color: '1E1E1E' } }
// 同上套 roundRect

// 浮動 stat widget（白卡）
{ x: 8.5, y: 5.0, w: 4.4, h: 2.0, fill: { color: 'FFFFFF' }, shape: 'roundRect', rectRadius: 0.3 }

// 4-portrait team grid
// card width: 2.8, height: 3.5, gap: 0.25, start x: 0.5
// Cards at x: 0.5, 3.55, 6.6, 9.65; y: 2.8
```

---

## 背景製作（CSS / pptxgenjs）

```js
// 淺色頁
pres.addSlide().background = { fill: 'E5E8EA' }
// 或用漸層圖片：left → right, darker silver to lighter

// 深色頁
pres.addSlide().background = { fill: '1E1E1E' }
```

---

## 調性 / 使用情境

| 面向 | 說明 |
|------|------|
| 調性 | 現代、簡潔、高級黑白、商務正式 |
| 受眾 | 投資人、B2B 客戶、企業高層 |
| 場景 | 融資 Pitch Deck、B2B 提案、服務介紹、年度報告 |
| 優勢 | 視覺衝擊強（黑白對比）+ 卡片系統整齊 + 適合照片密集型簡報 |
| 版面特性 | 超大標題佔據視覺重心，內容簡短精練，不適合大量文字 |
