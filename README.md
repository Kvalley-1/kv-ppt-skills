# KV PPT-Build Skill

KV 智谷 Claude Code 投影片製作技能包。

---

## 安裝（叫你的 Agent 做）

開啟 Claude Code，把以下這段話貼給 Agent：

```
請幫我安裝 ppt-build skill：
1. 把 https://github.com/Kvalley-1/kv-ppt-skills 這個 repo clone 到本機
2. 將 ppt-build 資料夾複製到 ~/.claude/skills/ppt-build/
3. 在 ~/.claude/CLAUDE.md 加入以下觸發規則（若檔案不存在就新建）：

## PPT 任務觸發
接到任何 PPT 任務（「做 PPT」「做提案」「做投影片」）→ 使用 ppt-build skill（位於 ~/.claude/skills/ppt-build/）。
Skill 會自動讀取 workflow.md、logo-sop.md、chinese-font.md 等 sub-files。

4. 確認 Node.js 已安裝（用於 PptxGenJS 產出 .pptx）。若未安裝，請幫我裝。
5. 完成後回報每個步驟的確認結果。
```

Agent 會全程處理，不需要自己開終端機。

---

## 更新（叫你的 Agent 做）

```
請幫我更新 ppt-build skill：
把 ~/Documents/Codex/kv-ppt-skills（或你 clone 的位置）git pull，
再重新複製 ppt-build 資料夾到 ~/.claude/skills/ppt-build/。
```

---

## 使用方式

安裝完成後，在 Claude Code 對話中說：
> 「做一個 PPT」／「做提案」／「做投影片」

Agent 會自動觸發 `ppt-build` skill，依 8 步驟流程製作。

---

## 依賴說明

| 項目 | 說明 |
|------|------|
| `ui-ux-pro-max` skill | Claude Code 平台內建，無需另裝 |
| Node.js + PptxGenJS | 產出 .pptx 檔，Agent 安裝時會確認 |
| python-pptx | 僅多章節合併時需要，單章不需要 |

---

## 結構

```
ppt-build/
├── skill.md               # skill 入口定義
├── workflow.md            # 製作流程 SOP
├── chinese-font.md        # 中文字型規範
├── logo-sop.md            # Logo 使用規範
├── template-entry-sop.md  # 模板入庫 SOP
└── core-layouts/          # 投影片模板庫
    ├── gradient-pitch-bw/
    ├── accenture-style/
    ├── kv-proposal-formal/
    ├── sap-apphaus/
    └── ...
```
