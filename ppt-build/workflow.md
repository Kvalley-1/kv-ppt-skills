# PPT Build — Workflows

## Standard Flow (8-step) Checklist

**貼進 response 的第一件事。不貼不能動。**

```
PPT Build Progress — Standard Flow:
- [ ] Step 0: base64 encode KV logo (MUST complete before writing any HTML)
- [ ] Step 1: Read source md → write ppt-plan.md (chapter outline only)
- [ ] Step 2: ✋ STOP — Jimmy reviews chapter outline, wait for OK
- [ ] Step 3: Split content into chapters/ files
- [ ] Step 4: Check core-layouts → select template → invoke ui-ux-pro-max → confirm design
- [ ] Step 5: Full HTML preview → ~/Downloads/<案>_HTML預覽.html
- [ ] Step 6: ✋ STOP — Jimmy reviews HTML, wait for feedback
- [ ] Step 7: Full PPTX → validate_pptx() → must report 0 violations
- [ ] Step 8: Vision QC — Read HTML → confirm titles ≥32pt / content ≥18pt / Yahei UI → report result → ✋ STOP
```

Steps marked ✋ STOP = hard gates. Do not proceed until Jimmy responds.

---

## Fast Track (4-step) Checklist

**貼進 response 的第一件事。不貼不能動。**

```
PPT Build Progress — Fast Track:
- [ ] Step 0: base64 encode KV logo + invoke ui-ux-pro-max
- [ ] Step 1: Chapter outline → ✋ STOP — Jimmy OK
- [ ] Step 2: Full HTML preview → ~/Downloads/<案>_HTML預覽.html
- [ ] Step 3: Full PPTX → validate_pptx() → 0 violations
- [ ] Step 4: Vision QC — Read HTML → confirm titles ≥32pt / content ≥18pt / Yahei UI → report result → ✋ STOP
```

⚠️ Warn Jimmy upfront: "快速通道風險：字體可能跑、版型可能不一致、出錯要重做整份。確定？"

---

## Step Details

### Step 0: Logo (always first)

Before writing any HTML, run:
```bash
BASE="$HOME/Library/Mobile Documents/com~apple~CloudDocs/claude/knowledge/kvalley/assets/brand"
base64 -i "$BASE/kv-logo-white.png" -o /tmp/kv-logo-white.b64
base64 -i "$BASE/kv-logo-full.png"  -o /tmp/kv-logo-full.b64
```

Deep background slides → `kv-logo-white.png`. Light background → `kv-logo-full.png`.
See [logo-sop.md](logo-sop.md) for full rules.

### Step 1: ppt-plan.md

**Files (3-way split — never mix)**:

| File | Location | Owner | Purpose |
|------|----------|-------|---------|
| Source content md | `projects/<案>/<案名>.md` | Jimmy | Original knowledge — agent never edits |
| ppt-plan.md | `projects/<案>/ppt-build/<案>-ppt-plan.md` | Agent | Chapter outline + layout map |
| chapters/ | `projects/<案>/ppt-build/chapters/` | Agent | Per-page execution files |

**Initial ppt-plan.md structure**:
```markdown
# <案> PPT 製作規劃

## 來源
- 原始內容：[../<案名>.md](../<案名>.md)
- 模板：（Step 4 後填）
- 預期張數：NN

## 章節大綱（Step 1）
1. 封面
2. ...

## 分頁配置（Step 4 後填）
（待填）
```

### Step 2: ✋ Hard gate — wait for Jimmy's chapter outline approval

### Step 3: Split into chapters/

One file per page: `chapters/01-cover.md`, `chapters/02-xxx.md` …
Do not skip pages. Do not merge content between pages.

### Step 4: Template selection + ui-ux-pro-max

```bash
LAYOUTS="$HOME/Library/Mobile Documents/com~apple~CloudDocs/claude/agents/shared/skills/ppt-build/core-layouts"
cat "$LAYOUTS/README.md"
```

Pick template from README.md selection guide. Fork to `projects/<案>/ppt-build/template-html/`.

**必做：invoke ui-ux-pro-max skill**，在做任何視覺設計決策前諮詢它：
- 顏色系統 / 字型配對
- 卡片版型、間距、層級
- 表格拆頁方式
- 每個新 layout 設計

**Fill in ppt-plan.md「分頁配置」section** — every page must be mapped, no exceptions.

Version control inside the same file (prepend new version, never open new file):
```markdown
### v2 (YYYY-MM-DD HH:MM) — ✅ current
...
### v1 (YYYY-MM-DD HH:MM) — history
...
```

### Step 5: HTML Preview

**Output**: `~/Downloads/<案>_HTML預覽.html` — single self-contained file.

| ✅ Required | ❌ Forbidden |
|------------|-------------|
| All CSS inline in `<style>` | External .css references |
| All images as base64 `data:image/...` | Relative path `<img src="...">` |
| System fonts: `system-ui, -apple-system` | CDN Google Fonts |
| All pages in one .html (scroll to view) | Folder with multiple .html files |
| Zero external dependencies | Any `<link href="http...">` |

CSS must be **copied from** `core-layouts/<template>/template-html/all-layouts-demo.html` — never rewritten from scratch.

After generating, confirm Chinese font sizes comply with [chinese-font.md](chinese-font.md).

### Step 6: ✋ Hard gate — wait for Jimmy's HTML review

### Step 7: Full PPTX + validate_pptx()

Build script **必須**在頂端宣告字型常數（見 [chinese-font.md](chinese-font.md)），最後一行呼叫 `validate_pptx(OUT)`。

```python
# ── JIMMY FONT CONSTANTS ──────────────────────────────
FN           = 'Microsoft YaHei UI'
F_TITLE      = 36    # inner page title (min 32)
F_CONTENT    = 20    # body text (min 18)
F_CONTENT_SM = 18    # dense content (min 18)
F_TABLE      = 16    # table cells (min 14)
F_BADGE      = 10    # badge / eyebrow (exempt from QC)
# ─────────────────────────────────────────────────────
```

`validate_pptx()` 若回報 violations → 修到 0 才能繼續。不得跳過。

### Step 8: Vision QC（強制，不得省略）

**QC 方法：Read HTML preview（Step 5 已存在）**，不需要重新轉換。

HTML 比 PNG 快的原因：零轉換步驟，Step 5 已生成，直接用。

QC 清單（每頁確認）：
- [ ] 頁面標題 ≥32pt，可讀
- [ ] 內文 / 條列 ≥18pt，可讀
- [ ] 字型指定 Microsoft YaHei UI（CSS: `font-family: 'Microsoft YaHei UI', 'PingFang TC', sans-serif`）
- [ ] 表格 cell ≥14pt
- [ ] 版面沒有文字爆框 / 重疊

QC 後：把結果回報 Jimmy（哪幾頁通過、哪幾頁有問題），**等 Jimmy 確認才算完成**。不得直接說「完成了」。

---

## Iron Rules

### Rule 0: Output format + CSS source

| Item | Rule |
|------|------|
| Delivery format | Always `.pptx` (pptxgenjs). Never PDF or HTML as final output |
| HTML CSS source | Copy from `core-layouts/<template>/template-html/all-layouts-demo.html` — never rewrite |

### Rule 1: Content first, format last

No skipping to layout without chapter outline + content md approved by Jimmy.

### Rule 1.5: Source md is read-only

| ❌ Forbidden | ✅ Allowed |
|------------|----------|
| Merge bullets into paragraphs | Split 1 page into 2 pages |
| Delete "too dense" items | Add chapter cover pages |
| Rewrite quotes or case studies | Add transition/impact pages |
| Simplify table columns | Add closing CTA |

If a page is too full → split pages. Never delete content. Never ask to shorten without explicit Jimmy approval.

### Rule 2: Story first, template is a library

Template has 5 layouts but story needs 8 → design 3 new layouts (invoke ui-ux-pro-max). Record in template-analysis.md.

### Rule 6: QC 順序與方法

| QC 類型 | 工具 | 時機 |
|---------|------|------|
| 字型違規（客觀） | `validate_pptx()` in build script | Step 7，0 violations 才能繼續 |
| 視覺品管（主觀） | Read HTML preview（Step 5 生成） | Step 8，不需再轉換 |

PNG 轉換方式（LibreOffice → pdftoppm）= 緊急備用，HTML 不可用時才用。

### Rule 3: One page = one chapter file

Editing page 5 → regenerate only `05.pptx` → re-merge. Never touch other pages.

### Rule 4: Version control inside one md

No `V2.md`, no `layout-plan-v3.md`. Prepend new version block to the same file.

### Rule 5: Output locations

| Type | Location |
|------|----------|
| Jimmy opens (HTML/PPT/PDF) | `~/Downloads/` |
| Agent internal (chapters .md / .pptx) | Project folder |
