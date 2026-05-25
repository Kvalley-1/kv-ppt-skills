# KV PPT-Build Skill

> 讓你的 Claude Code AI 助理，自動幫你做出符合智谷風格的投影片。

---

## 這是什麼？

這是一套「技能包」，安裝後你的 Claude Code 助理就會懂得：
- 用智谷的品牌模板做投影片
- 自動選版型、調字體、排版面
- 輸出可直接使用的 `.pptx` 檔

---

## 第一步：安裝（只做一次）

打開你的 **Claude Code**，把下面這段話**完整複製**，貼給你的助理：

---

```
請幫我安裝 ppt-build 技能，步驟如下：

1. 把這個網址的檔案下載到我的電腦：https://github.com/Kvalley-1/kv-ppt-skills

2. 把裡面的 ppt-build 資料夾，複製到 ~/.claude/skills/ppt-build/

3. 開啟（或新建）我的 ~/.claude/CLAUDE.md 檔案，在最後面加入這段文字：

## PPT 任務觸發
接到任何 PPT 任務（「做 PPT」「做提案」「做投影片」）→ 使用 ppt-build skill（位於 ~/.claude/skills/ppt-build/）。
Skill 會自動讀取 workflow.md、logo-sop.md、chinese-font.md 等 sub-files。

4. 確認我的電腦有安裝 Node.js，如果沒有請幫我安裝。

5. 全部做完後，告訴我每個步驟是否成功。
```

---

貼完後，助理會自動完成所有設定，你不需要做任何其他事。

---

## 第二步：開始使用

安裝好之後，以後只要在對話中說：

> 「幫我做一份 PPT，內容是⋯⋯」

助理就會自動啟動這套技能，按照智谷的風格幫你製作投影片。

---

## 更新技能（有新版本時）

同樣貼給助理就好：

```
請幫我把 ppt-build 技能更新到最新版：
到你之前下載 kv-ppt-skills 的資料夾，執行 git pull 取得最新內容，
再把 ppt-build 資料夾重新複製到 ~/.claude/skills/ppt-build/。
```

---

## 常見問題

**Q：我需要懂程式嗎？**
不需要。全部讓助理操作就好，你只需要複製貼上那段安裝指令。

**Q：安裝完之後，助理沒有觸發怎麼辦？**
請確認有完成第一步的步驟 3（CLAUDE.md 那段）。可以問助理：「你有看到 ppt-build 技能嗎？」

**Q：投影片輸出在哪裡？**
預設會放在你電腦的 `~/Downloads/` 資料夾。
