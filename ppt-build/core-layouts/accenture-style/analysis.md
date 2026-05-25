# Accenture Technology Vision 2024 — Design Language Analysis

> Source PDF: `sample-pages/original.pdf` (20 pages, 16:9)  
> Style: White paper / Research report — clean white + Accenture purple, editorial authority  
> Version: v1.0 / 2026-05-10

---

## 色彩系統

| Token | Hex | 用途 |
|-------|-----|------|
| `PURPLE` | `#7B2D8B` | Accenture brand violet — pullquote boxes, callout bgs, logo |
| `PURPLE_DARK` | `#5A1F6E` | 深紫 for pressed state / border |
| `WHITE` | `#FFFFFF` | 主背景、pullquote 內文 |
| `BLACK` | `#1A1A1A` | 標題、正文 |
| `GRAY_LIGHT` | `#F4F4F4` | 淡底色 section divider |
| `GRAY_MID` | `#888888` | Footer text、章節標籤、page number |
| `GRAY_WAVE` | `rgba(0,0,0,0.06)` | 封面/背景紋理疊層 |

---

## 字體系統

| 角色 | 字體 | 備用 |
|------|------|------|
| Display heading | Graphik / Accenture Sans | Helvetica Neue, Arial |
| Body | Graphik Regular | Helvetica Neue, Arial |
| Callout italic | Graphik Italic | Georgia Italic |
| Caption / Footer | Graphik Light | Arial |

---

## 版面規格

| 項目 | 值 |
|------|-----|
| 版面比例 | 16:9 橫式 |
| pptxgenjs layout | `LAYOUT_WIDE`（13.333 × 7.5 inch） |
| 安全邊距（左右） | 0.6 inch |
| 安全邊距（上） | 0.55 inch（header 區域）|
| 安全邊距（下） | 0.35 inch（footer 區域）|
| 主內容區 | 0.6–12.73 inch (x), 0.75–7.0 inch (y) |

---

## 簽名元素（Signature Elements）

1. **Accenture ">" 箭頭 Logo** — 頁面左下角，紫色，尺寸約 0.35 × 0.35 inch
2. **章節 Header** — 左上 `Technology Vision 2024 | Chapter Title`，灰色小字
3. **頁碼** — 右上角，灰色
4. **Purple pullquote box** — 全紫背景 box，白色大字引言，多種尺寸（全寬 / 半寬 / 1/3欄）
5. **Italic callout** — 斜體紫色大字（無背景），用於開篇/結語引言
6. **Gray wave texture** — 封面、分節頁的淡灰波浪漸層疊層
7. **Horizontal rule** — 1px 黑色 or 紫色分隔線，強調區塊邊界
8. **`#TechVision2024` footer tag** — 左下，GRAY_MID 小字

---

## 版型目錄（20 layouts，對應 PDF 20 頁）

| 版型 | 代號 | PDF頁 | 說明 |
|------|------|-------|------|
| Cover | A | 1 | 全幅紫色 + 波紋紋理，大白字主標題，副標 + 出版年份，">" logo |
| Foreword / Exec Letter | B | 2 | 左欄：頭像 + 簽名 + 職稱；右欄：大段 body text，黑底白字引言塊 |
| Table of Contents | C | 3 | 章節編號左側紫色大字，章節名稱右邊，頁碼右對齊，底部 purple bar |
| Section Intro | D | 4 | 章節大標題（黑色超大）+ 短副標 + 右側半幅圖片，purple accent line |
| Body + Purple Pullquote 2-col | E | 5 | 左欄：body text + 黑色小標；右欄：紫色 pullquote box（白字大引言）|
| Body + Photo + Quote | F | 6 | 上半：body text 3欄；下半：跨欄照片 + 紫色 italic callout 疊層 |
| Data Split + Chart | G | 7 | 左欄：大數字 stat + body；右欄：條形圖 / 資料視覺化 + 說明 |
| Photo + Pullquote Overlay | H | 8 | 全幅出血照片為底，左側紫色半透明 pullquote box 疊層 |
| Photo Top + 3-col Body | I | 9 | 上半全幅照片；下半 3 欄 body text，每欄有小標 + 正文 |
| Multi-section + Photo | J | 10 | 左：2–3 個文字區塊（編號 + 小標 + body）；右：大幅照片 |
| Staggered Pullquotes | K | 11 | 交錯排列的紫色 pullquote box（大中小尺寸），無照片，純排版衝擊 |
| Split Photo + Body | L | 12 | 左半幅照片（出血到邊）；右半幅：標題 + body text + 紫色 accent |
| Section Divider | M | 13 | 全幅紫色背景，章節編號（白色超大）+ 章節名稱，波浪紋理 |
| Timeline 3-row | N | 14 | 橫向時間軸 3 行，每行：年份節點 + 事件標題 + 說明，左側固定標籤 |
| Big Picture / Infographic | O | 15 | 中央大圖（流程圖/概念圖）+ 周圍短說明 labels，最小文字量 |
| Body + Pullquote Right | P | 16 | 左 2/3：body text（多段）；右 1/3：紫色 pullquote box 垂直居中 |
| Photo + Body 3-col | Q | 17 | 左側照片（1/3 寬）；右側 2 欄 body text，chapter header 貫穿頂部 |
| Photo Split + Pullquote | R | 18 | 上半：左圖右 pullquote；下半：body text 2欄 + 數據 callout |
| Photo + Body Right | S | 19 | 左 2/3：照片出血；右 1/3：白底，標題 + body + 小 logo |
| Pullquote 4-col + SubSection | T | 20 | 頂部大 italic pullquote（紫色）；下方 4欄結語文字區塊，back cover 資訊 |

---

## pptxgenjs 常用座標（13.333 × 7.5 inch）

```js
// Header 章節標籤
{ x: 0.6, y: 0.15, w: 10, h: 0.3, fontSize: 9, color: '888888' }

// 頁碼（右上）
{ x: 12.5, y: 0.15, w: 0.7, h: 0.3, fontSize: 9, color: '888888', align: 'right' }

// Accenture ">" logo（左下）
{ x: 0.35, y: 7.0, w: 0.35, h: 0.35, color: '7B2D8B' }

// Purple pullquote box（半寬）
{ x: 6.8, y: 0.75, w: 6.2, h: 6.0, fill: { color: '7B2D8B' } }
// 內文白字
{ x: 7.1, y: 1.5, w: 5.6, h: 4.5, fontSize: 24, color: 'FFFFFF', italic: true }

// 左欄 body（2/3寬）
{ x: 0.6, y: 0.75, w: 8.5, h: 6.0, fontSize: 12, color: '1A1A1A' }

// 右欄 body（1/3寬）
{ x: 9.4, y: 0.75, w: 3.5, h: 6.0, fontSize: 12, color: '1A1A1A' }
```

---

## 調性 / 使用情境

| 面向 | 說明 |
|------|------|
| 調性 | 權威、研究型、企業旗艦報告 |
| 受眾 | C-suite、企業數位轉型決策者 |
| 場景 | 年度研究報告、白皮書、高階提案 |
| 優勢 | 視覺衝擊（紫白對比）+ 內容密度高，適合長篇幅 |
| 版面特性 | 照片大量使用 + pullquote 打斷閱讀節奏，適合 storytelling 型簡報 |
