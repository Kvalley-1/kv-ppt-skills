# Brand Guidelines Presentation — 版型規格文件

> **來源**：~/Downloads/Brand Guidelines Presentation.pdf（逆向工程）
> **建立**：2026-04-24
> **用途**：鎖定 XY 點位，content 分離使用
> **Script**：`/tmp/gen_brand_guidelines_template.js`
> **輸出**：`~/Downloads/brand-guidelines-template.pptx`

---

## 一、基礎規格

| 項目 | 值 |
|------|-----|
| 投影片尺寸 | 13.33" × 7.5"（標準 16:9 PowerPoint） |
| 主色 TEAL | `#2DDEC8` |
| 黑 BLACK | `#000000` |
| 白 WHITE | `#FFFFFF` |
| 標題欄底色 HBKG | `#0C0C0C` |
| 內文 BODY | `#1A1A1A` |
| 分隔線 LINE | `#222222` |

---

## 二、字體系統

| 層級 | fontFace | fontSize | bold | color | 用途 |
|------|----------|----------|------|-------|------|
| Hero XL | `Arial Black` | 115pt | true | BLACK | BRAND / GUIDELINES（封面） |
| Hero L | `Arial Black` | 72–78pt | true | BLACK | CORE VALUES / VOICE & TONE 等 |
| Section Title | `Arial` | 32pt | false | TEAL | About the brand |
| Item Title | `Arial` | 22–24pt | false | TEAL | 各條目標題（Creativity 等） |
| Nav Text | `Arial` | 15–16pt | false | TEAL/WHITE | 標題欄導覽文字 |
| Body | `Arial` | 13–14pt | false | BODY | 正文 |
| Page Num | `Arial` | 18pt | true | BODY | 頁碼 |

> **字體替換建議**：原始 PDF 使用幾何黑體（近似 Space Grotesk / Neue Haas Grotesk）。  
> 替換方式：在 script 中搜尋 `Arial Black` 改為目標字體名稱即可。

---

## 三、版面常數（Layout Constants）

```
HBAR_H   = 0.83"   // 標題欄高度
L_MARGIN = 0.42"   // 左邊距
R_EDGE   = 12.91"  // 右邊界
CW       = 12.49"  // 內容總寬 (R_EDGE - L_MARGIN)
COL_MID  = 6.68"   // 雙欄分割點（左欄結束 / 右欄開始）
CONTENT_TOP = 1.07" // 標題欄下方內容起始 y
PGNUM_Y  = 7.07"   // 頁碼 y 座標
```

---

## 四、共用元件

### 4-1. 標題欄 navHeader（適用 Slides 02–05）

```
BLACK 矩形：   x=0,    y=0,     w=13.33, h=0.83
左文字：       x=0.42, y=0,     w=3.50,  h=0.83  → 15pt TEAL, valign=middle
中間文字：     x=5.00, y=0,     w=3.00,  h=0.83  → 15pt TEAL, align=center, valign=middle
右文字(年份)： x=11.20,y=0,     w=1.70,  h=0.83  → 15pt WHITE bold, align=right
```

### 4-2. 分隔線 hairline

```
細矩形：w=目標寬度, h=0.012", fill=#222222
線重：視覺效果 0.75pt
```

### 4-3. 頁碼 pgNum

```
x=12.45, y=7.07, w=0.60, h=0.33
18pt BLACK bold, align=right
格式：01 / 02 / 03…（零填充）
```

---

## 五、各頁型 XY 點位

### Slide 01 — COVER（封面）

```
標題欄 BLACK：     x=0,    y=0,    w=13.33, h=0.83
Logo 色塊 A：      x=0.42, y=0.18, w=0.18,  h=0.47  fill=TEAL
Logo 色塊 B：      x=0.62, y=0.18, w=0.12,  h=0.27  fill=TEAL
品牌名稱：         x=0.98, y=0,    w=3.00,  h=0.83  16pt WHITE bold
右側標語：         x=7.80, y=0,    w=5.10,  h=0.83  14pt WHITE align=right

TEAL 主色塊：      x=0,    y=0.83, w=12.20, h=6.67
右側 BLACK 條：    x=12.20,y=0.83, w=1.13,  h=6.67

"BRAND" 文字：     x=0.47, y=1.20, w=11.5,  h=2.48  115pt BLACK bold
水平分隔線：       x=0.47, y=3.82, w=11.5
"GUIDELINES" 文字：x=0.47, y=3.92, w=11.5,  h=2.72  115pt BLACK bold
```

### Slide 02 — ABOUT（左圖 + 右文）

```
標題欄：           navHeader()
左圖區 placeholder：x=0.42, y=1.07, w=6.20,  h=6.17
右標題：           x=7.40, y=3.50, w=5.50,  h=0.60  32pt TEAL
hairline：         x=7.40, y=4.18, w=5.50
右內文：           x=7.40, y=4.32, w=5.50,  h=2.60  14pt BODY
頁碼：             pgNum(2)
```

### Slide 03 — CORE VALUES（分割：左文 + 右圖+清單）

```
標題欄：           navHeader()
大 Logo 色塊 A：   x=0.42, y=1.07, w=0.60,  h=0.85  fill=TEAL
大 Logo 色塊 B：   x=1.05, y=1.07, w=0.45,  h=0.50  fill=TEAL
"CORE\nVALUES"：   x=0.42, y=4.78, w=5.80,  h=2.45  75pt BLACK bold
右圖 placeholder： x=6.68, y=1.07, w=6.22,  h=3.05

條目 1 標題：      x=6.68, y=4.28, w=3.00,  h=0.48  24pt TEAL
條目 1 說明：      x=9.78, y=4.28, w=3.12,  h=0.48  13pt BODY
hairline：         x=6.68, y=4.82, w=6.22

條目 2 標題：      x=6.68, y=4.95, w=3.00,  h=0.48  24pt TEAL
條目 2 說明：      x=9.78, y=4.95, w=3.12,  h=0.48  13pt BODY
hairline：         x=6.68, y=5.49, w=6.22

條目 3 標題：      x=6.68, y=5.62, w=3.00,  h=0.48  24pt TEAL
條目 3 說明：      x=9.78, y=5.62, w=3.12,  h=0.48  13pt BODY
hairline：         x=6.68, y=6.18, w=6.22

頁碼：             pgNum(3)
```

### Slide 04 — VOICE & TONE（大標題 + 右圖 + 底部文字）

```
標題欄：           navHeader()
"VOICE &\nTONE"：  x=0.42, y=1.50, w=6.20,  h=3.85  78pt BLACK bold
右圖 placeholder： x=7.60, y=1.07, w=5.30,  h=3.70
底部 hairline：    x=0.42, y=5.57, w=12.48
底部內文：         x=0.42, y=5.78, w=5.50,  h=1.20  14pt BODY
頁碼：             pgNum(4)
```

### Slide 05 — COMMUNICATION GUIDELINES（大標題 + 右側三條目）

```
標題欄：           navHeader()
"COMMUNICATION\nGUIDELINES"：x=0.42, y=1.40, w=8.50, h=3.30  72pt BLACK bold

右欄 x 起點：      6.42"
右欄寬度：         6.48"

條目 1 標題：      x=6.42, y=4.22, w=6.48, h=0.42  22pt TEAL
條目 1 說明：      x=6.42, y=4.68, w=6.48, h=0.32  13pt BODY
hairline：         x=6.42, y=5.04, w=6.48

條目 2 標題：      x=6.42, y=5.18, w=6.48, h=0.42  22pt TEAL
條目 2 說明：      x=6.42, y=5.64, w=6.48, h=0.32  13pt BODY
hairline：         x=6.42, y=6.00, w=6.48

條目 3 標題：      x=6.42, y=6.14, w=6.48, h=0.42  22pt TEAL
條目 3 說明：      x=6.42, y=6.60, w=6.48, h=0.32  13pt BODY
hairline：         x=6.42, y=6.96, w=6.48

頁碼：             pgNum(5)
```

### Slide 06 — LOGO（左圖 + 右：大字 LOGO + logo mark + 說明）

```
標題欄：           navHeader()
左圖 placeholder： x=0.42, y=1.07, w=5.33,  h=6.17
右大字 "LOGO"：    x=6.93, y=2.70, w=4.00,  h=1.50  72pt BLACK bold
右 logo mark：     x=9.80, y=1.95, w=2.10,  h=1.65  fill=TEAL
右說明：           x=6.93, y=4.75, w=5.98,  h=1.20  14pt BODY
頁碼：             pgNum(6)
```

### Slide 07 — LOGO VARIANTS（3 欄：Primary / Secondary / Submark）

```
標題欄：           navHeader()
左欄（Primary）：  x=1.33, y=2.10  → icon 上 + 2 行 wordmark 下
中欄（Secondary）：x=5.67, y=3.20  → icon 左 + 1 行 wordmark 右（水平排）
右欄（Submark）：  x=9.33, y=1.90  → large icon only
各欄標籤：         icon 下方, 14pt BODY align=center
頁碼：             pgNum(7)
```

### Slide 08 — COLOR PALETTE（左：大標 + 說明 / 右：圖片）

```
標題欄：           navHeader()
左大字 "COLOR\nPALETTE"：x=0.42, y=1.35, w=6.16, h=4.50  72pt BLACK bold
底部 hairline：    x=0.42, y=5.85, w=6.16
底部說明：         x=0.42, y=6.02, w=6.16, h=0.90  14pt BODY
右圖 placeholder： x=8.68, y=1.07, w=4.23, h=6.00
頁碼：             pgNum(8)
```

### Slide 09 — PRIMARY COLORS（標籤 + 分隔線 + 4 色塊）

```
標題欄：           navHeader()
小標籤 "Primary colors"：x=0.42, y=1.20, w=3.00, h=0.40  15pt BODY
hairline：         x=0.42, y=1.65, w=12.49
色塊 1（Deep Teal）：x=0.42, y=1.95, w=2.83, h=5.25  fill=#0D3330
色塊 2（Mid Teal）： x=3.45, y=1.95, w=2.83, h=5.25  fill=#1DC8B0
色塊 3（Teal）：     x=6.48, y=1.95, w=2.83, h=5.25  fill=#2DDEC8
色塊 4（Pale Mint）：x=9.51, y=1.95, w=2.83, h=5.25  fill=#AAFAE5
頁碼：             pgNum(9)
```

### Slide 10 — LOGO ON BACKGROUNDS（2×2 品牌色測試格）

```
標題欄：           navHeader()
Grid 2×2：         x=0.75, y=1.07, w=12.07, h=6.13
  左上 Teal bg：   fill=#2DDEC8  → logo icon+text in BLACK
  右上 Black bg：  fill=#000000  → logo icon+text in TEAL
  左下 Deep bg：   fill=#0D3330  → logo icon+text in TEAL
  右下 Pale bg：   fill=#AAFAE5  → logo icon+text in BLACK
各格 logo mark：   height≈0.42"（icon）16pt WHITE/BLACK/TEAL 水平排
頁碼：             pgNum(10)
```

---

## 五點五、Logo Mark 幾何結構

```
Logo mark = 3 階梯形色塊 + 底部門形缺口

SVG viewBox "0 0 60 40"（比例：寬=1.5×高）
  Block A（頂）：  x=20 y=0  w=20 h=13
  Block B（中）：  x=8  y=12 w=44 h=13
  Block C（底左）：x=0  y=24 w=35 h=16
  Block D（底右）：x=43 y=24 w=17 h=16
  Gap（門形缺口）：x=35～43（空隙），y=24 底部 → 形成 arch doorway 效果

注意：原 PDF 使用向量路徑，staircase 邊緣比上述 4 rect 更精準。
4 rect 近似已足夠用於 pptxgenjs 生成。
```

---

## 六、版型使用方式（layout / content 分離）

```javascript
// 1. 固定版型常數（本檔）
const LAYOUT = {
  slide02: {
    rightTitle: { x: 7.40, y: 3.50, w: 5.50, h: 0.60, fontSize: 32, color: TEAL },
    hairline:   { x: 7.40, y: 4.18, w: 5.50 },
    body:       { x: 7.40, y: 4.32, w: 5.50, h: 2.60, fontSize: 14 }
  }
  // ...
};

// 2. 分離的內容物件
const CONTENT = {
  slide02: {
    rightTitle: 'About the brand',
    body: 'Introduce the client...'
  }
};

// 3. 生成時只做代入，不動版型
s.addText(CONTENT.slide02.rightTitle, LAYOUT.slide02.rightTitle);
```

---

## 七、版本紀錄

- **v1.1 / 2026-05-10**：補 Slide 06–10（Logo / Logo Variants / Color Palette / Primary Colors / Logo on BG）；補 Logo Mark 幾何結構；建 `template-html/all-layouts-demo.html`（10 版型 HTML demo）
- **v1.0 / 2026-04-24**：初版，從 Brand Guidelines PDF 逆向工程，5 種頁型完整記錄
