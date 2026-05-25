# Tooling — PPT 建構工具

> 此資料夾收錄 ppt-build skill 用到的工具腳本。

---

## 工具清單

### `merge-chapters.py` — 合併章節 PPT
**何時用**：Step 7 — 把 `chapters-pptx/01.pptx ~ NN.pptx` 合併成 `final.pptx`

**用法**：
```bash
python3 merge-chapters.py \
  --input projects/<案>/ppt-build/chapters-pptx/ \
  --output ~/Downloads/<案>_完整版.pptx
```

**注意**：用 python-pptx 合併，保留每章原本版型，不重新渲染。

---

### `html-to-coords.js` — HTML 量座標轉 JSON
**何時用**：Step 4-5 — 從 HTML 模板量出座標、字級比例 → JSON 給 pptxgenjs helper 用

**用法**：
```bash
node html-to-coords.js \
  --html visual-references/台水藍/index.html \
  --output visual-references/台水藍/coords.json
```

**輸出格式**：
```json
{
  "section-title": {
    "x_percent": 5, "y_percent": 10, "w_percent": 90, "h_percent": 15,
    "fontSize_ratio": 0.045
  }
}
```

---

### `extract-template.js` — 模板 vision read
**何時用**：Step 3 — Jimmy 提供 PPT/PDF 模板時，agent 要消化

**用法**：
```bash
# 直橫式 PPT 都支援
node extract-template.js \
  --input <Jimmy 提供的模板.pptx 或 .pdf> \
  --output projects/<案>/ppt-build/template-analysis.md
```

**輸出**：`template-analysis.md`，含：
- 既有版型清單（含每頁樣本）
- 設計語言（色票、字體、間距、質感）
- 「故事需要但模板缺」的版型建議

---

### `fetch-client-logo.js` — 客戶 Logo 自動抓取
**何時用**：Step 0 — agent 主動詢問「需要客戶 logo 嗎」 → Jimmy 同意後跑

**用法**：
```bash
node fetch-client-logo.js \
  --client "華城電機" \
  --website "https://www.fortune.com.tw" \
  --output knowledge/clients/assets/華城電機/
```

**4 個來源優先序**：
1. 官網 footer / about
2. 年報 PDF
3. 維基百科
4. Google Image

**模糊判斷**：
- < 300px 寬 → 模糊
- 邊緣鋸齒 → 模糊
- 顏色失真 → 模糊

模糊 → 跳出修圖選擇（A: ChatGPT prompt / B: Claude 處理）

---

## 實作狀態

| 工具 | 狀態 | 備註 |
|------|------|------|
| `merge-chapters.py` | 🟡 待實作 | 用 python-pptx 即可 |
| `html-to-coords.js` | 🟡 待實作 | Node.js + jsdom 量元素 |
| `extract-template.js` | 🟡 待實作 | 結合 vision API |
| `fetch-client-logo.js` | 🟡 待實作 | Web Search + 圖片下載 + 品質檢查 |

**啟動策略**：先用 SKILL.md 走流程（agent 手動執行各步驟），工具腳本逐一補上。
