# Extended Layouts — 升格版型索引

> 此資料夾收錄各 agent 在專案中**延伸設計**、經 Jimmy 認可後**升格**的版型。
> 所有 agent 下次做 PPT 時，自動有這些版型可用。

---

## 升格條件

1. Jimmy 說「這版型很好用」
2. 或 Agent 偵測到同樣延伸版型用 ≥ 2 次

→ Agent 主動詢問：「升格到共用？」→ Jimmy 同意 → 升格

---

## 已升格版型清單

| 版型名稱 | CSS 檔 | 適用情境 | 升格日期 | 源頭專案 |
|---------|-------|--------|--------|--------|
| （目前沒有，等第一個升格）| — | — | — | — |

---

## 升格 SOP

### 步驟 1：移檔
從 `projects/<案>/ppt-build/html-preview/style.css` 抽出新版型的 CSS class
存成 `extended-layouts/<版型名>.css`

### 步驟 2：寫進此 INDEX
表格 prepend 一列（最新在最上方）

### 步驟 3：寫對應 helper（pptxgenjs）
若需要 PPT 輸出 → 寫 `extended-layouts/<版型名>.helper.js`

### 步驟 4：通知（自動同步）
此檔在 `shared/`，所有 agent 下次啟動會讀到（無需手動通知）

---

## 範例（未來填入時的格式）

```markdown
| **3-stage-process** | `3-stage-process.css` | 三階段流程說明（時程、執行、成效）| 2026-XX-XX | 合興工業 v9 |
| **pain-card-grid** | `pain-card-grid.css` | 痛點卡網格（4-6 個痛點同頁呈現）| 2026-XX-XX | 商周 AI 工作流 |
```

---

## 命名規範

- 版型名：kebab-case（英文）
- CSS 檔：`<版型名>.css`
- Helper：`<版型名>.helper.js`
- 一個版型一組檔，不混用
