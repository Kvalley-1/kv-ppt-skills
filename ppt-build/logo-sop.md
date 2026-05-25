# Logo SOP

## Step 0: Decide Which Logos to Use (ask before encoding anything)

```
Logo decision:
- [ ] Q1: Is this an internal KV document OR a public-facing KV PR/comms piece?
       → YES to either: KV logo only. Go to "KV Logo Files" section.
- [ ] Q2: Is this a proposal/pitch TO a client or partner?
       → YES: Ask Jimmy — "要放客戶/對象公司的 logo 嗎？我幫你找透明背景 PNG。"
              If yes → follow "Client Logo" section below + KV logo on same slide
              If no  → KV logo only
```

---

## KV Logo Files

| File | Use when |
|------|----------|
| `kv-logo-white.png` | Dark background slides |
| `kv-logo-full.png` | Light background slides |
| `kv-k-mark.png` | Small corner mark (transparent bg) |
| `kv-k-square.png` | Small square mark (white bg) |

Base path: `~/Library/Mobile Documents/com~apple~CloudDocs/claude/knowledge/kvalley/assets/brand/`

Also available at: `~/Library/Mobile Documents/com~apple~CloudDocs/claude/agents/教學設計師/assets/brand/`

---

## Mandatory Steps (before writing any HTML)

```bash
BASE="$HOME/Library/Mobile Documents/com~apple~CloudDocs/claude/knowledge/kvalley/assets/brand"
base64 -i "$BASE/kv-logo-white.png" -o /tmp/kv-logo-white.b64
base64 -i "$BASE/kv-logo-full.png"  -o /tmp/kv-logo-full.b64
```

Embed in HTML:
```html
<style>
  .kv-logo {
    background: url('data:image/png;base64,PASTE_B64_HERE') no-repeat center/contain;
    width: 8%; aspect-ratio: 3/1; position: absolute;
  }
</style>
<div class="kv-logo" style="top: 4%; right: 4%;"></div>
```

---

## Size Guidelines (16:9 canvas)

| Position | Width |
|----------|-------|
| Cover — main brand | 10–14% of slide width |
| Inner pages — corner mark | 5–7% |
| Sidebar mark | 8–10% of sidebar width |

---

## Forbidden (major incident level)

- ❌ `[KV LOGO]` or `KV` text placeholder
- ❌ Dashed border box placeholder
- ❌ CSS-drawn fake logo (green box + white K)
- ❌ AI-regenerated logo
- ❌ Relative path `<img src="../../knowledge/...">`

## Only Acceptable "No Logo" Situation

- Jimmy explicitly says "this version skip logo"
- File not found → **tell Jimmy and ask for the file**, never substitute placeholder

---

## Client Logo (agent proactively asks)

```
「需要放客戶 logo 嗎？我幫你找透明背景 PNG。」
```

Source priority:
1. Client official website footer / about page
2. Annual report PDF
3. Wikipedia
4. Google Images (last resort)

Quality check: transparent bg + sharp + ≥500px → save directly.
If opaque or blurry → remove.bg or ask Jimmy for ChatGPT enhancement.

Store at: `knowledge/clients/assets/<client>/logo.png`
