# Template Entry SOP (core-layouts 入庫)

## When to Trigger

- Jimmy says "這個模板入庫" / "留給大家用" / "模板入庫"
- Agent consumed a new template in Step 3 and wants to promote it to shared library
- Any agent uploads a PPT/PDF template that Jimmy approves

## Library Location

`~/Library/Mobile Documents/com~apple~CloudDocs/claude/agents/shared/skills/ppt-build/core-layouts/`

## 7-Step Entry Checklist

**Copy this into your response when starting template entry:**

```
Template Entry Progress:
- [ ] Step 1: Unpack source file + save to sample-pages/
- [ ] Step 2: Vision-read design language (colors, fonts, layout types, tone)
- [ ] Step 3: Extract assets (backgrounds, icons) → assets/
- [ ] Step 4: Build all-layouts-demo.html (core action — all layouts in one self-contained HTML)
- [ ] Step 5: Write analysis.md (design DNA + layout catalog + pptxgenjs snippets)
- [ ] Step 6: Write helper.js (pptxgenjs function library)
- [ ] Step 7: Update core-layouts/README.md (add to table, update selection guides)
```

---

## Step Details

### Step 1: Unpack

```bash
# For PPTX
unzip -o "source.pptx" -d pptx_extracted/
# Keep original
cp "source.pptx" sample-pages/original.pptx

# For PDF
cp "source.pdf" sample-pages/original.pdf
```

### Step 2: Vision-read design language

Capture:
- Color palette (hex values + names)
- Font system (heading / body / accent)
- Layout types per slide (cover, chapter, detail, table, quote, etc.)
- Overall tone (minimal / vibrant / formal / creative)

### Step 3: Extract assets

Save to `assets/`:
- `bg-*.png` — background images
- `icon-*.png` — recurring icons

### Step 4: Build all-layouts-demo.html ⭐ (core deliverable)

Single self-contained HTML file showing ALL layout variants.

Requirements:
- All CSS inline in `<style>` block
- All images base64 encoded
- Each layout as a `<section class="slide slide-<name>">` block
- Slides scroll vertically for easy review
- Call ui-ux-pro-max to QA CSS structure and token consistency

Save to: `template-html/all-layouts-demo.html`

### Step 5: analysis.md

Must contain:
```markdown
## Design Language
- Colors: (hex + token names)
- Fonts: (heading / body / accent + fallbacks)
- Tone: (description)

## Layout Catalog
| ID | Name | Best for | CSS class | Source |
|----|------|----------|-----------|--------|

## When to Use This Template
- Audience:
- Scenario:
- Emotion/feel:

## pptxgenjs Snippets
(key coordinate values and shape configs)
```

### Step 6: helper.js

pptxgenjs function library mapping HTML classes → pptxgenjs shapes. Used in Step 7 of main workflow.

### Step 7: Update README.md

In `core-layouts/README.md`:
- Add row to template table (name, tone, layouts count, colors, status ✅)
- Add to "怎麼選模板" selection tables (by audience, by scenario, by emotion)
- Bump version number + date in version log

---

## Required Folder Structure

```
core-layouts/<template-name>/
├── analysis.md              ← design DNA + layout catalog
├── template-html/
│   └── all-layouts-demo.html  ← ⭐ single self-contained HTML
├── sample-pages/
│   ├── original.pdf         ← must keep
│   └── original.pptx        ← keep if source was PPTX
├── assets/
│   ├── bg-*.png
│   └── icon-*.png
└── helper.js                ← pptxgenjs library
```

PNG screenshots: optional. Renderable from PDF anytime with `pdftoppm`. Don't generate all pages automatically.

## Status Definitions

- ✅ 完整: has analysis.md + all-layouts-demo.html + sample-pages/
- 📄 analysis only: has analysis.md only (HTML demo not yet built)
