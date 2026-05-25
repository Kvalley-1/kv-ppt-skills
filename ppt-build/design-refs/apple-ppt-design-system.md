# Apple 風 PPT 設計系統（Jimmy 定案版）

> **建立**：2026-04-16（台水 Day1 v2 實戰驗證後固化）
> **用途**：所有給 Jimmy 的 PPT 提案、教材、deck 都遵循這套規範。未來新 PPT 直接套用，不再逐次討論。
> **配套程式**：`../scripts/pptx_apple_style.py`（可 import 的 helper library）
> **維護**：Jimmy 修改偏好時更新本檔 + 同步 .py 模組

---

## 〇、為什麼有這套規範？

**背景**：2026-04-16 台水 Day1 PPT v1 被 Jimmy 指出單調、圓圈難看、紅綠配色怪異、版面沒節奏。花了一整個下午把 62 頁重做成 Apple 風，定案了這套規範，避免未來每個 PPT 都從零討論。

**核心哲學**（一句話）：**Apple Keynote 的極簡 + 圓角方形 + 藍白對比 + 深色章節節奏**。

**絕對排除**：
- ❌ 正圓圈裝資訊（圓角方形永遠優先）
- ❌ 紅綠對比（用灰 vs 藍）
- ❌ 紫色、紅色、綠色作為主色
- ❌ 智谷品牌綠 `#C4D600`、金琥珀 `#E8A838`（這些是舊版，已棄用於 PPT）
- ❌ 人物卡通插畫（除非 Jimmy 明確要求）
- ❌ 陰影、發光、漸層特效（Apple 式極簡）
- ❌ 「亞太教育訓練網 | Kvalley」純文字（一律用 logo）

---

## 一、色票（7 色系統）

| 名稱 | 色碼 | 角色 | 用在 |
|---|---|---|---|
| **SKY** | `#29B6F6` | 主色 / 強調 | 左豎色條、CTA、主卡片、章節線條 |
| **OCEAN** | `#1E5A8B` | 深藍 / 對比 | 深藍卡片、次要強調、表格頭底 |
| **INK** | `#1D1D1F` | 近黑（不用純黑） | 主文字、章節過場底色、Hero 深底 |
| **FOG** | `#F5F5F7` | Apple 淺灰 | 次級背景、呼吸區塊、頁首色條 |
| **WHITE** | `#FFFFFF` | 純白 | 主背景 |
| **HAIRLINE** | `#D2D2D7` | 細線分隔 | 0.5pt 分隔線、淺底卡片邊框 |
| **MUTED** | `#6E6E73` | 次要文字 | 副標、描述、頁碼 |

**深色底專用**：
- `DARK_HL` `#3A3A3C` — INK 底上的 hairline
- `LIGHT_MUTED` `#8E8E93` — INK 底上的次要文字
- `LIGHT_INK` `#A0A0A5` — INK 底上的次要標題

**色彩使用比例**（光桌節奏）：
```
白底內容頁 55%  +  INK 深底過場 15%  +  Hero 大字頁 15%  +  休息頁 / 特殊頁 15%
```

---

## 二、字體

**中文一律 Microsoft YaHei UI**（雅黑 UI）。

**必須在 python-pptx 強制設定三個 typeface**（否則 Mac 渲染會 fallback 成怪字）：
```python
rpr = run._r.get_or_add_rPr()
for tag in ('latin', 'ea', 'cs'):
    existing = rpr.find(qn(f'a:{tag}'))
    if existing is not None: rpr.remove(existing)
    rpr.append(rpr.makeelement(qn(f'a:{tag}'), {'typeface': 'Microsoft YaHei UI'}))
```

---

## 三、字級系統

| 層級 | 字級 | 字重 | 用途 |
|---|---|---|---|
| **Hero XL** | 96–120pt | Bold | 封面主標、結尾「Day 1 完成！」、大金句 |
| **Hero L** | 60–80pt | Bold | 章節過場主標、視覺切換金句 |
| **Title** | **44pt** | Bold | 每頁頁面標題（Jimmy 指定） |
| **Section** | 32pt | Regular | 章節過場小副標 |
| **H2** | 22–28pt | Bold | 卡片內主標 |
| **H3** | 18–20pt | Bold | 卡片副標 / 提示條 |
| **Body** | 14–16pt | Regular | 內文 |
| **Caption** | 11–13pt | Regular | 次要說明、標籤 |
| **Micro** | 10–11pt | Regular | 頁碼、底部註解 |

**對比原則**：同一頁至少 3 級字級差距（例：44pt + 16pt + 11pt），避免「大標題+小內文」的平淡層次。

---

## 四、形狀規則（鐵律）

### 4.1 資訊載體

**只用圓角方形**（ROUNDED_RECTANGLE）：
- 大卡片 radius：`0.05–0.08`（corner 相對柔和）
- 中型卡片 radius：`0.10–0.15`
- 按鈕 / 標籤 radius：`0.25–0.30`（接近 pill）
- 小 chip / 編號圓形 radius：`0.5`（正圓角，用在數字標記、bullet）

**正圓禁區**：
- Round 1/2/3、階段、步驟、KPI 數字 → 一律改圓角方形
- 唯一例外：小裝飾點（bullet、0.1 英吋以下的點綴）

### 4.2 陰影 / 邊框

- **陰影**：一律關閉（`shape.shadow.inherit = False`）
- **邊框**：淺底卡片用 `HAIRLINE` 0.75pt、實色卡片無邊框
- **分隔**：用 0.5pt hairline 線條（不用粗線）

### 4.3 元素組合慣用手法

- **左豎色條 + 標題**：頁標左側 5pt × 50pt 的 SKY 色條（仿 Apple 官網章節標記）
- **章節編號帶 dash**：`─  SECTION 03  ─`（SKY 色，12pt bold）
- **Header 色帶圓角**：大卡片上方色帶用兩層 rect 疊加（上層圓角矩形 + 下層補滿色）

---

## 五、版面格線

**投影片尺寸**：16:9（寬 12192000 EMU × 高 6858000 EMU，標準 PowerPoint 預設）

**安全邊距**：
- 左右：914400 EMU（1 英吋 = 72pt）
- 上下：685800–914400 EMU
- 區塊間距：152400–304800 EMU（0.17–0.33 英吋）

**頁首區**（所有內容頁統一）：
```
Y 685800            [豎色條]  頁標 44pt                         頁碼
Y 1524000           ─────────────── hairline ───────────────
Y 1600000           副標 16pt muted
Y 2057400           ─────────────── hairline ───────────────
Y 2286000 以下      主要內容區
```

**頁尾區**：
- 左下：Logo（高 304800 EMU / 24pt，距左 762000 EMU）
- 右上：頁碼 02 格式（11pt MUTED）

---

## 六、頁型模板（10 種 + 何時用）

| # | 頁型 | 背景 | 特徵 | 何時用 |
|---|---|---|---|---|
| 1 | **封面** | 白 | 66pt 主標 + OCEAN 副標 + 右下幾何方塊裝飾 | 第 1 頁 |
| 2 | **章節過場** | INK | `─ SECTION NN ─` + 小副標 + 68–76pt 主題 + 時間戳 | 每章開頭 |
| 3 | **白底內容頁** | 白 | 頁標 44pt + 豎色條 + hairline + 卡片群 | 知識點、步驟、表格 |
| 4 | **Hero 深底** | INK | 大金句 60pt + SKY 色強調句 | 債 brief、金句 callback |
| 5 | **Hero 亮藍底** | SKY | 白字大標 104pt + 白色 CTA 框 | 活動啟動（開始訪談！）|
| 6 | **休息倒數** | 白 | 上方 FOG 色條 + 中央大時間 72pt + 下方提示 | 休息頁（14:20–14:35） |
| 7 | **表格頁** | 白 | INK header + 斑馬紋（白/FOG） + 左側 accent 色條 | 三層、對照、四天旅程 |
| 8 | **雙卡對比** | 白 | 左灰 × 不推薦 + 右 SKY ✓ 推薦 | Before/After、錯/對 |
| 9 | **Prompt 卡** | 白 | 左側 INK prompt 大卡 + 右側「用途」「輸出」雙 chip | 5 個進階 Prompt 呈現 |
| 10 | **結尾 Hero** | INK | 104pt 大標 + SKY 副 + 右下幾何方塊 | 最後一頁 |

---

## 七、Logo 規則

**檔案位置**：`教學設計師/assets/brand/`
- `kvalley - 1996粗框版.png` — 彩色版（綠 K + 藍智谷網絡 + Since 1996）
- `kvalley - 白色.png` — 全白版

**使用判斷**：
- 背景是白 / FOG / 淺色 → 彩色版
- 背景是 INK / OCEAN / SKY 深色 → 白色版
- 用 `logo(slide, dark=True/False)` 自動判斷

**尺寸與位置**：
- 高度：304800 EMU（24pt）
- 距左：762000 EMU（60pt）
- 距下：304800 EMU（24pt）
- **左下角**，與右上角頁碼對角呼應

**不要做的事**：
- ❌ logo 放置超過頁面高度 5%
- ❌ 拉伸變形（永遠等比例縮放，只設 height）
- ❌ 淺底用白版、深底用彩版（會看不見）
- ❌ 加陰影、外框、旋轉

---

## 八、節奏編排（光桌層級）

**問題**：Jimmy 最討厭的光桌是「一片片同色、同版型的單調感」。

**解法**：每 3–4 張就切換頁型 / 背景：
```
白底內容 → 白底內容 → INK 章節過場 → 白底內容 → Hero 金句 → 白底 → 休息倒數 → 白底...
```

**具體規則**：
1. 連續兩張不能同色同版型
2. 每章結束至少有 1 張 Hero 大字頁做收尾
3. 休息頁前後一定有節奏差異（休息是白底 → 下章用 INK 過場）
4. 章節過場頁永遠用 INK 底（全書一致性）

---

## 九、python-pptx 實作注意

1. **Margins**：所有 textbox 先把 margin 設 0，否則會有奇怪內縮
2. **YaHei 三個 typeface**：必須手動塞 rPr XML（python-pptx 內建 font 只設 latin）
3. **圓角矩形半徑**：用 `shape.adjustments[0] = 0.06` 之類（0–1 比例，不是 pt）
4. **連接線 (connector)**：type 1 = 直線，拿來畫 hairline 最省事
5. **背景色**：用 `slide.background.fill.solid()`，不要用大色塊 rect 鋪滿（會蓋掉其他 shape）
6. **圓角色帶**（上圓下方）：用兩層 rect 疊加 — 上層 ROUNDED_RECTANGLE + 下層 RECTANGLE 補滿同色

---

## 十、使用流程（新 PPT 如何套用）

### 步驟 1：複製模板或從白檔起
```bash
cp ~/Downloads/台水Day1_完整版_v2.pptx ~/Downloads/新專案_v1.pptx
```
（或從頭產生 blank Presentation）

### 步驟 2：import helper 庫
```python
import sys
sys.path.insert(0, "/path/to/教學設計師/scripts")
from pptx_apple_style import *
```

### 步驟 3：照頁型模板套
```python
prs = Presentation("新專案_v1.pptx")
slide = prs.slides[0]
clear(slide); bg(slide, WHITE)
title_header(slide, "我的頁標", "副標說明")
# ... 放內容卡片
logo(slide); page_num(slide, 1)
prs.save("新專案_v2.pptx")
```

### 步驟 4：渲染檢查
```bash
soffice --headless --convert-to pdf 新專案.pptx
pdftoppm -r 120 新專案.pdf preview
```

---

## 十一、版本紀錄

- **v1.0 / 2026-04-16**：初版，台水 Day1 62 頁實戰驗證
