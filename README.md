# KV PPT-Build Skill

KV 智谷 Claude Code 投影片製作技能包。

## 安裝方式

```bash
# clone 此 repo
git clone https://github.com/Kvalley-1/kv-ppt-skills.git

# 將 ppt-build 資料夾複製到 Claude Code skills 目錄
cp -r kv-ppt-skills/ppt-build ~/.claude/skills/ppt-build
```

## 使用方式

在 Claude Code 對話中說：
> 「做一個 PPT」/ 「做提案」/ 「做投影片」

Claude 會自動觸發 `ppt-build` skill。

## 更新

```bash
cd kv-ppt-skills
git pull
cp -r ppt-build ~/.claude/skills/ppt-build
```

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
