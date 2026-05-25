# Jimmy 的流程圖視覺偏好（顧問風 Swimlane）

> ⚠️ **已升格為 Skill**：此文件是原始規格素材，正式工作流見 `../swimlane/SKILL.md`。
> 來源：2026-04-25 Jimmy 親自提供的 GPT Image 2.0 prompt（見最末段範本）— 這是「對的成品」基準。

---

## 為什麼是「顧問風」不是「流程圖」

Jimmy 要的不是技術流程圖，是**單頁顧問交付物**：
- 紅雲承擔內容（不是符號裝飾）
- 圖例 + 摘要 bar + footer 三層輔助結構
- 視覺像 Whimsical / Excalidraw（手繪感但結構嚴謹）
- 一張圖能講完整個診斷故事

如果只給「乾乾淨淨的 swimlane」就漏掉了 Jimmy 真正要的價值。

---

## 鐵律檢查清單（每張流程圖必對）

### 結構（必有）
- [ ] **16:9 比例**（presentation-ready）
- [ ] **左側固定 role column**（橫向 swimlane，role 名稱在最左欄專欄）
- [ ] **時間軸由左至右流動**
- [ ] **Decision 節點帶 Yes/No 標籤**（每個 branch 後接的動作要寫清楚）
- [ ] **跨 lane 箭頭**標示交接點

### 視覺語言（必依此色票形狀）
| 元件 | 形狀 | 顏色 |
|------|------|------|
| Start / End | rounded oval（圓角橢圓）| **sage green** 鼠尾草綠 |
| Action | rounded rectangle（圓角方形）| **sky blue** 天藍 |
| Decision | diamond（菱形）| **peach** 桃色 |
| Document / Form / 衛教單 | 文件形（波浪底邊矩形）| **pale yellow** 淡黃 |
| External transfer / 外部單位 | rounded rectangle | **pale lavender** 淡薰衣草 或 **light beige** 淡米色（區隔主場 vs 客場）|
| Issue / Problem | **red cloud（紅色雲朵）** + 短文字 | 紅色 |

### 風格（必設）
- 背景：**white background + very subtle paper texture**（純白底加淡淡紙紋）
- 風格：**clean modern + slightly hand-drawn but structured**（Whimsical / Excalidraw 質感）
- 線條：rounded shapes, slightly imperfect lines（圓角、線條微微不直）
- 字型：**Noto Sans TC / 思源黑體 / PingFang TC**（中文友善 sans-serif）
- 留白：generous whitespace（充裕留白，不擠）

### 三層輔助結構（必有，缺一不可）
1. **右上角小 legend**（圖例）
   - 列出所有形狀對應意義（oval / rectangle / diamond / cloud / document）
2. **底部 highlighted summary bar**（強調色橫條）
   - Title：「流程主要問題」
   - 列 4-6 個短 tag（每個 5-8 字內，是該案例的痛點分類收斂）
3. **Footer tag**
   - 列出所有牽涉角色（一句話帶過）

---

## 紅雲（Red Cloud）使用守則 ⚠️ 最常被忽略

**紅雲不是符號，是內容。**

❌ 錯誤：「在問題步驟旁放一個紅雲 icon」
✅ 正確：「在問題步驟旁放一個紅雲，**雲裡寫具體痛點文字**」

紅雲文字的寫法：
- 帶數字：「候診 1 小時 20 分」「醫師看診過短，僅 30 秒」
- 帶後果：「健保卡難找，延誤 30 分鐘」
- 帶情境：「停車場滿，繞 5 圈」
- 帶判斷：「衛教不足，回家後仍有疑問」

每個案例至少 8-12 朵紅雲，標在**對應的問題步驟**旁邊（不要集中放）。

---

## Decision 節點寫法

❌ 錯誤：只畫菱形寫「是否需 X 光？」
✅ 正確：
- 菱形寫決策問題
- Yes branch → 接後續動作框（「轉至仁愛醫院照 X 光」）
- No branch → 也接後續動作（如果不接，要寫 note 說明為何）

每個 decision 必須讓人**一眼看出兩條路後面發生什麼**。

---

## Prompt 撰寫策略（Jimmy 一發即用法）

Jimmy 不要「留白模板讓使用者填」，要**「全內容寫死的高密度成品 prompt」**。

每次幫他生流程圖，prompt 必須包含：
1. **總體規格**（16:9 / Whimsical 風 / paper texture）
2. **顏色與形狀對應表**（完整列出）
3. **Layout 規則**（swimlane / 左欄 role / 時間左到右 / decision Yes/No / 紅雲位置）
4. **Legend 內容**（右上小圖例的具體項目）
5. **Lanes 完整列表**（從上到下每個角色）
6. **每個 lane 的所有動作**（按時序逐條列）
7. **所有 decision 點 + 後續分支**
8. **所有紅雲 + 對應步驟 + 雲內文字**
9. **底部 summary bar 標題 + 4-6 個 tag**
10. **Footer 角色列表**

⚠️ 不要分步驟給、不要留白、不要說「請補充內容」— Jimmy 工作風格是「prompt 一次給齊」。

---

## 黃金成品 Prompt 範本（2026-04-25 Jimmy 親給）

> 以下是 Jimmy 用 GPT Image 2.0 生「老王陪診案例」流程圖的完整 prompt，產出他評價「完全是我要的格式，非常高質量」。
> **直接拿這個改內容即可，結構不要動。**

```
Generate a clean modern swimlane flowchart infographic in Traditional Chinese, 16:9 aspect ratio.

Topic:
「【此處填案例名】」

Goal:
Visualize the full [此處填情境] journey as a swimlane diagram, showing:
1. key process steps in sequence
2. decision points
3. problem points marked with red cloud icons
4. roles involved in each lane

Overall style:
- Clean, modern, professional
- Slightly hand-drawn but structured, similar to Whimsical / Excalidraw
- White background with very subtle paper texture
- Soft pastel palette
- Rounded shapes, slightly imperfect lines
- Sans-serif Chinese-friendly font (Noto Sans TC / 思源黑體 / PingFang TC)
- Generous whitespace
- Easy to read, presentation-ready, consulting style

Layout:
- Horizontal flow from left to right
- Swimlanes arranged vertically
- A fixed left column shows the role names
- Each lane contains the steps handled by that role
- Use connectors and arrows to show sequence across lanes
- Put red cloud issue markers attached next to the problematic step
- Add Yes/No labels for decision branches where appropriate
- Add a small legend in the top-right corner:
  - rounded oval = start/end
  - rounded rectangle = action
  - diamond = decision
  - red cloud = issue/problem
  - document shape = form / report /衛教單

Visual conventions:
- Start / End = rounded oval, sage green fill
- Action = rounded rectangle, sky blue fill
- Decision = diamond, peach fill
- Document / form = pale yellow document shape with wavy bottom edge
- Issue = small red cloud with short problem label
- External transfer / hospital exam can be a slightly different pale lavender or light beige

Swimlanes from top to bottom:
1. 【角色 1】
2. 【角色 2】
...

Process content:
Start node: 「【起點動作】」

Lane: 【角色 1】
- 「【動作 1】」
- 「【動作 2】」
- ...
End node: 「【終點】」

Lane: 【角色 2】
- ...

[每個 lane 完整列出]

Decision points to show explicitly:
1. 「【決策問題 1】」→ Yes / No → 接什麼動作
2. ...

Red cloud issue markers, placed right next to corresponding process boxes:
1. At 「【步驟】」: red cloud text: 「【痛點具體描述】」
2. ...
[8-12 個]

Add a highlighted bottom summary bar:
Title: 「流程主要問題」
Include 4-6 short tags:
- 【痛點分類 1】
- ...

Add another small footer tag:
「牽涉角色：【全部角色一句話列出】」

The final image should look like a polished consulting-style swimlane diagram, highly readable, visually tidy, with red problem clouds clearly visible at the exact problematic steps.
```

---

## 工具優先順序（更新）

| 工具 | 適用 | 備註 |
|------|------|------|
| **GPT Image 2.0** ⭐ | 顧問風 swimlane（首選）| 2026-04-25 實證一發即中 |
| Gemini Nano Banana | 備案 | 風格較自由可愛，不夠顧問風 |
| napkin.ai | 結構化但版型固定 | 客製空間小 |
| whimsical.com | 商務正規版 | 需手動排，不適合大量產 |
| excalidraw.com | 真手繪 | 學員自畫用 |

→ **首選 GPT Image 2.0**，套用上方範本 prompt。

---

## 不要做的事

- ❌ 用 Mermaid（Jimmy 嫌醜，已棄）
- ❌ 用單線流程圖（看不出角色互動）
- ❌ 紅雲只放 icon 不放文字
- ❌ 分步驟給 prompt 讓 Jimmy 補
- ❌ 留白模板讓使用者填內容
- ❌ 缺 legend / summary bar / footer 任一層
- ❌ 自由發揮配色（必照 sage green / sky blue / peach / pale yellow / pale lavender）
