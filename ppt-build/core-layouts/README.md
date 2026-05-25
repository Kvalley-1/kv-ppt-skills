# PPT 模板知識庫 — core-layouts

> **目的**：持久化存放拆解過的 PPT 模板設計語言，避免重複解包。  
> **格式**：每套模板一個資料夾，結構統一（見下方規範）。  
> **設計規範文件**（非模板）→ 放在 `../design-refs/`，不在本目錄。

---

## 模板一覽

| 資料夾 | 名稱 / 調性 | 版面 | 主色 | 狀態 |
|--------|------------|------|------|------|
| `sap-apphaus/` | SAP AppHaus — 色彩分區 + 幾何橫列 | 16:9 | 7 色 dual-tone | ✅ 完整（HTML demo） |
| `greenbigtitle/` | Green Big Title — 黑 nav bar + teal 大字 impact | 16:9 | 黑 + `#2DDEC8` | ✅ 完整（HTML demo） |
| `creative-brief-agency/` | Creative Brief Agency — 黑底螢光綠超粗 condensed，18 版型 | 16:9 | 黑 + 螢光綠 | ✅ 完整（HTML demo） |
| `green-proposal-vertical-a4/` | Proposal 直式 A4 — 深綠 + 螢光黃綠 + 黃，12 版型 | A4 直式 | 深綠 + 黃 | ✅ 完整（HTML demo） |
| `kvalley-hybrid-marketing/` | 智谷行銷混合 — 黃黑封面 + 米白 Serif 內頁 | 16:9 | 黃黑 + 米白 | 📄 analysis only |
| `sap-joule-workshop-guide/` | SAP Joule Workshop — 淨白 + 紫藍漸層 + 六邊形 | 16:9 | 白 + 紫藍 | 📄 analysis only |
| `section-ai-proficiency-report/` | Section AI Report — 純黑 + 螢光拼貼 + 襯線大字 | A4 直式 | 黑 + 螢光 | 📄 analysis only |
| `kvalley-hr-salon-dark/` | 智谷 HR 沙龍 — 深紫靛 + 螢光黃綠 + 點陣 | 16:9 | 深紫 + 黃綠 | 📄 analysis only |
| `accenture-style/` | Accenture Style — 白底 + 紫 pullquote + 企業旗艦研究報告，20 版型 | 16:9 | 白 + 紫 `#7B2D8B` | ✅ 完整（HTML demo） |
| `gradient-pitch-bw/` | Gradient Pitch BW — 黑白漸層雙模 + 超大 Ultra Black 標題 + 圓角卡片，11 版型 | 16:9 | 黑白灰（純單色） | ✅ 完整（HTML demo） |
| `kv-proposal-formal/` | KV 正式提案 — NAVY + LIME 角塊 + 五模組多色系 + 14 版型，KV 對外企劃書標準 | 16:9 | NAVY `#1A1A2E` + LIME `#C4D600` | ✅ 完整（HTML demo） |

> **狀態說明**
> - ✅ 完整：有 `analysis/layout.md` + `template-html/all-layouts-demo.html` + `sample-pages/`
> - 📄 analysis only：只有設計語言分析，尚未拆 HTML+CSS（未完成 SKILL Step 3）

---

## 怎麼選模板

### 依受眾
| 受眾 | 推薦 |
|------|------|
| 高階主管、政府、傳統企業 | `kv-proposal-formal` / `green-proposal-vertical-a4` / `sap-joule-workshop-guide` / `accenture-style` |
| HR、培訓負責人 | `kvalley-hr-salon-dark` / `sap-apphaus` |
| 行銷、品牌、創意 | `creative-brief-agency` / `section-ai-proficiency-report` |
| 科技業內部培訓 | `sap-apphaus` / `greenbigtitle` |
| 投資人 Pitch、B2B 商務簡報 | `gradient-pitch-bw` / `accenture-style` |
| 研究報告、白皮書 | `accenture-style` / `section-ai-proficiency-report` / `green-proposal-vertical-a4` |
| 顧問公司、專業服務業 | `accenture-style` / `sap-joule-workshop-guide` |

### 依場景
| 場景 | 推薦 |
|------|------|
| 投影（現場） | `sap-apphaus` / `greenbigtitle` / `creative-brief-agency` / `kvalley-hr-salon-dark` |
| 印刷 / PDF 閱讀 | `green-proposal-vertical-a4` / `section-ai-proficiency-report` / `accenture-style` |
| 工作坊教材 | `sap-apphaus` / `sap-joule-workshop-guide` |
| B2B 提案 | `kv-proposal-formal` / `accenture-style` / `sap-joule-workshop-guide` / `green-proposal-vertical-a4` |
| AI / 科技主題課程 | `greenbigtitle` / `sap-apphaus` |
| 年度報告 / 旗艦研究報告 | `accenture-style` |
| 融資 Pitch / 投資人路演 | `gradient-pitch-bw` |

### 依情緒
| 想要感覺 | 推薦 |
|---------|------|
| 現代科技、大器 | `greenbigtitle` |
| 乾淨專業、色彩系統強 | `sap-apphaus` |
| 衝擊力、年輕酷 | `creative-brief-agency` |
| 正式穩重、專業顧問感 | `kv-proposal-formal` / `green-proposal-vertical-a4` |
| 暗色有態度 | `kvalley-hr-salon-dark` |
| 權威、研究型、企業旗艦 | `accenture-style` |
| 極簡黑白、高級商務 | `gradient-pitch-bw` |

---

## 資料夾結構規範

每套完整模板的標準結構：

```
<模板名>/
├── analysis.md        ← 設計語言分析（色票/字體/版型/XY座標）
├── assets/            ← 從模板抽出的素材（bg-*.png / icon-*.png）
├── sample-pages/      ← 原始視覺參考（PDF + PNG）
└── template-html/
    └── all-layouts-demo.html   ← 自包 HTML，所有版型 demo（SKILL Step 3 核心產物）
```

> 注意：`greenbigtitle/` 用 `layout.md` 而非 `analysis.md`，內容等效，未來整理時統一為 `analysis.md`。

---

## 座標系統

| 版面 | 尺寸 | pptxgenjs 設定 |
|------|------|---------------|
| 16:9 寬螢 | 13.333 × 7.5 inch | `LAYOUT_WIDE`（預設）|
| A4 直式 | 8.27 × 11.69 inch | `pres.defineLayout(...)` |
| US Letter 直式 | 8.5 × 11 inch | `pres.defineLayout(...)` |

單位一律 **inch**（不用 pt / cm / px）。

---

## 待拆解（已有 analysis，尚未做 HTML demo）

按優先度排序：
1. ~~`creative-brief-agency`~~ — ✅ 已完成
2. `kvalley-hr-salon-dark` — KV 自有風格
3. `kvalley-hybrid-marketing` — 行銷場景常用
4. `sap-joule-workshop-guide` — 企業工作坊
5. ~~`green-proposal-vertical-a4`~~ — ✅ 已完成
6. `section-ai-proficiency-report` — 白皮書

---

## 版本紀錄

- **v2.5 / 2026-05-11**：`kv-proposal-formal` 新入庫（14 版型 HTML demo + analysis.md + helper.js + original.pptx）；KV 對外正式提案標準模板，逆向萃取自合興工業 AI 提案 v3
- **v2.4 / 2026-05-10**：`gradient-pitch-bw` 新入庫（11 版型 HTML demo + analysis.md + PDF）；雙模黑白漸層 Pitch Deck
- **v2.3 / 2026-05-10**：`accenture-style` 新入庫（20 版型 HTML demo + analysis.md + PDF）；README 更新選模板推薦表
- **v2.2 / 2026-05-10**：`creative-brief-agency` 補完 HTML demo（18 版型）+ PDF；升為 ✅ 完整
- **v2.1 / 2026-05-10**：`green-proposal-vertical-a4` 補完 12 版型目錄 + HTML demo + PDF；合併重複入庫的 `green-saleskits`（同源 PDF）
- **v2.0 / 2026-05-10**：全面重構——平面 .md → 統一資料夾格式；`brand-guidelines/` 改名 `greenbigtitle/`；設計規範移至 `../design-refs/`；README 重寫
- **v1.1 / 2026-05-09**：合併原 README + INDEX-8sets
- **v1.0 / 2026-04-16**：初版 8 套模板拆解固化
