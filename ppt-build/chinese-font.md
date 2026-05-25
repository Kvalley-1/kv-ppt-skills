# Chinese Font Redesign Rules

English PPT templates are designed for Latin characters. Chinese requires different sizing.

## 🔴 如何在長任務中強制執行規則（不依賴記憶）

**根本解：把規則編進程式碼，不靠記憶遵守。**

### PPTX build script 必做

**Step 1：頂端聲明字體常數，全腳本只准引用常數，禁止寫裸數字**
```python
# ── JIMMY FONT CONSTANTS (DO NOT CHANGE INLINE, CHANGE HERE ONLY) ──
FONT_COVER_TITLE  = 60   # pt
FONT_CHAPTER      = 52   # pt
FONT_SLIDE_TITLE  = 36   # pt  ← minimum 32pt
FONT_CONTENT      = 20   # pt  ← minimum 18pt
FONT_EYEBROW      = 10   # pt
FONT_TABLE_CELL   = 16   # pt  ← minimum 14pt
FONT_NOTE         = 12   # pt  ← only for footnotes/captions
FONT_BADGE        = 9    # pt
FONT_CN = 'Microsoft YaHei UI'  # 中文字體強制指定
```

**Step 2：build 完立刻跑內建 validator，違規則拋出 AssertionError**
```python
def validate_pptx(path, title_min=32, content_min=18, table_min=14):
    from pptx import Presentation
    from pptx.util import Pt
    prs = Presentation(path)
    violations = []
    for si, slide in enumerate(prs.slides, 1):
        for shape in slide.shapes:
            if not shape.has_text_frame:
                continue
            for para in shape.text_frame.paragraphs:
                for run in para.runs:
                    sz = run.font.size
                    if sz is None:
                        continue
                    pt = sz / 12700
                    # 眉標/badge 豁免（≤10pt 視為裝飾用）
                    if pt <= 10:
                        continue
                    # 主要字級下限：18pt
                    if pt < content_min:
                        violations.append(
                            f"P{si:02d} [{shape.name}] '{run.text[:20]}' = {pt:.0f}pt < {content_min}pt")
    if violations:
        print("❌ FONT VIOLATIONS:")
        for v in violations:
            print(" ", v)
        raise AssertionError(f"{len(violations)} font violations — fix before reporting done")
    print(f"✓ Font QC passed — {len(prs.slides)} slides, all text ≥ {content_min}pt")
```

**Step 3：build 腳本最後一行必須呼叫 validate_pptx(OUT)**

### HTML preview 必做

每個 `.slide` 必須有：
```css
font-family: 'Microsoft YaHei UI', 'PingFang TC', sans-serif;
```
生成後用 vision 截圖品檢，每頁確認標題≥32pt、內文≥18pt 可讀。

---

## 🔴 Jimmy 強制規定（違反即重做）

1. **中文字體必須指定 Yahei UI**（Microsoft YaHei UI）。CSS/PPTX 皆適用。
   - CSS: `font-family: 'Microsoft YaHei UI', 'PingFang TC', sans-serif;`
   - PPTX (python-pptx): `run.font.name = 'Microsoft YaHei UI'`

2. **內頁標題字體最小 32pt，目標 36pt**。非遇排版困難不得低於 32pt。

3. **Content（內文、條列、說明文字）字體最小 18pt，目標 20pt**。
   - ❌ 絕對不接受 12–14pt 的內文（即使塞得進去）
   - 截圖品檢標準：一般成年人看 16:9 投影片，坐在中後排，18pt 是最小可讀值

4. **表格遇到 content 過多時，優先選擇**：
   - 方案 A：拆分為兩頁（推薦）
   - 方案 B：字體下修至最低 14pt（僅限表格 cell）
   - ❌ 禁止：為塞表格內容把全頁字體壓到 11–12pt

5. **最終品檢必做**：生成 HTML 或 PPTX 後，截圖每一頁以 vision 品檢字體大小是否可讀，回報品檢結果，不得直接回報「完成」。

## Why

- English words have spacing between them → visual weight is distributed
- Chinese characters are dense with no gaps → same pt size = much heavier, more crowded
- Chinese 88pt ≠ English 88pt in perceived weight

## Mandatory Adjustments When Using English Templates

Run this check immediately after Step 3 (template fork):

```
Checklist — Chinese font redesign:
- [ ] 字體：全頁指定 Yahei UI
- [ ] Slide title (inner pages): 32–36pt（minimum 32pt）
- [ ] Content / body text: 18–20pt（minimum 18pt）
- [ ] Chapter cover title: 56–72pt
- [ ] line-height: increased for all body text
- [ ] letter-spacing: halved for Chinese headings
- [ ] Bullet line-height: increased
- [ ] Vision 品檢：截圖確認每頁字體可讀性
```

## Size Reference

| Element | English template default | Chinese must-change to | Why |
|---------|--------------------------|------------------------|-----|
| Cover main title | 88pt | 78–88pt OK (special case) | Jimmy preference; cover has few chars |
| Chapter cover title | 88pt | 56–72pt | Repeated use, no need to overwhelm |
| Inner page title | 44pt | **32–36pt（min 32pt）** | Dense characters; Jimmy requirement |
| Body / content text | 18pt | **18–20pt（min 18pt）** | Jimmy requirement; readability at distance |
| Table cell text | 14pt | **14–16pt（absolute min for tables）** | Split page preferred over shrinking |
| Chapter eyebrow letter-spacing | 0.15–0.2em | 0.05–0.1em (Chinese) / keep (English eyebrow) | Wide tracking breaks Chinese characters |
| Body line-height | 1.3–1.4 | 1.55–1.7 | Dense chars need breathing room |
| Bullet line-height | 1.5 | 1.7–1.8 | Same reason |
| Table row height | 1.4 | 1.6–1.7 | Same reason |

## Cover Title Special Rules

| Char count | Max size |
|------------|----------|
| ≤8 chars | 6.5rem (≈78pt) |
| 9–15 chars | 5.5rem (≈66pt) |
| ≥16 chars | 4.5rem (≈54pt) + forced `<br>` line break |

Use `clamp()` for viewport scaling. For extreme char counts, adjust manually.

## Line Break Rule

**Always use `<br>` to control Chinese title line breaks.** Never rely on browser auto-wrap.

❌ Bad: `你的價值在判斷和決策不在執行` (browser breaks at wrong point)
✅ Good: `你的價值在<br>判斷和決策，<br>不在執行。`

## Per-Page Size Modifier

When Jimmy says "this page enlarge 20%" or "this page is too cramped":

Add class modifier to that page's `.slide` only:
```css
/* At end of CSS — overrides base rules for specific slides only */
.slide.boost-20 { font-size: calc(var(--base-font) * 1.2); }
.slide.boost-30 { font-size: calc(var(--base-font) * 1.3); }
.slide.shrink-15 { font-size: calc(var(--base-font) * 0.85); }
```

❌ Never modify global base rules to fix one page — it affects all pages.

## When to Skip This File

- Pure English deck (Jimmy explicitly says "English version")
- Mixed Chinese/English but English dominates (60%+)
- Any other case → **apply these rules by default**
