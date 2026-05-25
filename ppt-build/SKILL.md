---
name: ppt-build
description: "Builds professional PPT presentations (HTML preview → PPTX output) using KV brand templates and the gradient-pitch-bw / accenture-style / sap-apphaus library. Use when user asks to: create slides, PPT, presentation, 投影片, 提案, 教案, 分頁規劃, 做PPT, 分頁建議, or template cataloging (模板入庫, 入庫). Also triggers for HTML preview of slides and converting source content to slide structure. Always reads sub-files as needed before producing any output."
---

# PPT Build Skill

## Quick Reference

| Task | Read first |
|------|-----------|
| 標準流程 (7-step) | [workflow.md](workflow.md) → copy Standard checklist |
| 快速通道 (3-step) | [workflow.md](workflow.md) → copy Fast Track checklist |
| 模板入庫 | [template-entry-sop.md](template-entry-sop.md) |
| Logo 處理 | [logo-sop.md](logo-sop.md) |
| 中文字型規則 | [chinese-font.md](chinese-font.md) |

## Key Paths

| Resource | Path |
|----------|------|
| KV logo assets | `~/Library/Mobile Documents/com~apple~CloudDocs/claude/knowledge/kvalley/assets/brand/` |
| core-layouts library | `~/Library/Mobile Documents/com~apple~CloudDocs/claude/agents/shared/skills/ppt-build/core-layouts/` |
| core-layouts index | `core-layouts/README.md` |

## 🔴 第零秒動作（違反 = skill 失效）

**接到任何 PPT 任務，回應用戶的第一件事 = 把 checklist 貼進 response。**

Checklist 出現之前，禁止做任何事：
- ❌ 禁止讀內容檔
- ❌ 禁止設計版面
- ❌ 禁止產 HTML / PPTX

執行順序：
1. Read [workflow.md](workflow.md)
2. 判斷標準流程 or 快速通道
3. **把對應 checklist 貼進 response**（這是用戶看到的第一件事）
4. 執行 Step 0，之後每完成一步就打勾

## Iron Rules (never skip, never negotiate)

| Rule | Where |
|------|-------|
| 貼 checklist = 第零秒，沒貼不能動 | 本檔 §第零秒動作 |
| Logo = real base64, never placeholder | [logo-sop.md](logo-sop.md) |
| HTML = single self-contained file (CSS inline, images base64) | [workflow.md](workflow.md) Step 5 |
| Source content md = read-only, never edit | [workflow.md](workflow.md) Rule 1.5 |
| CSS = copy from core-layouts demo, never rewrite from scratch | [workflow.md](workflow.md) Rule 0 |
| Delivery format = .pptx only (not HTML, not PDF) | [workflow.md](workflow.md) Rule 0 |
| Chinese slides = redesign font sizes from English template | [chinese-font.md](chinese-font.md) |
| PPTX 完成後 = validate_pptx() → 0 violations → HTML 品管 → 才能報完成 | [workflow.md](workflow.md) Step 8 |
| 視覺設計決策 = 必須 invoke ui-ux-pro-max | [workflow.md](workflow.md) Step 4 |
