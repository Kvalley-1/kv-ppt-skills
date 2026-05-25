# 智谷 HR 沙龍風（深紫 + 螢光綠）— 設計指引

> **來源**：`~/Desktop/38058.pdf` — 智谷「數位轉型新思維」HR 沙龍活動簡報
> **調性**：深紫靛 × 螢光黃綠 × 深色底內文 × 人物介紹大頭照 × 橢圓/方塊幾何點綴
> **適用**：HR 沙龍、講座活動簡報、內訓閉門會、研討會流程介紹
> **Slide size**：16:9（13.333 × 7.5 inch）
> **版本**：v1.0 / 2026-04-16

---

## 〇、整體視覺 DNA

| 元素 | 規格 |
|---|---|
| **調性** | 深底主視覺、螢光綠跳色、適度幾何形狀（圓、方）提升節奏 |
| **特色** | **深紫靛 + 螢光綠**雙色主導、人物大頭照置頂、點點陣列裝飾 |
| **情緒** | 專業、有質感、略帶科技感；比純黑底更溫和 |
| **禁忌** | 不用多色（只深紫 + 綠 + 白）、不用漸層、不用圓弧切圖 |

---

## 一、色票

```javascript
const COLORS = {
  BG_DEEP:    "313248",   // 主深色底（深紫靛）
  BG_DARKER:  "252839",   // 稍深（卡片/強調底）
  LIME:       "D4EE33",   // 螢光黃綠（主強調）
  LIME_DARK:  "A3B821",   // 暗綠（hover 態或次要）

  WHITE:      "FFFFFF",
  BODY_LIGHT: "E5E7EB",   // 深底上的內文
  MUTED_LT:   "9CA3AF",   // 深底上的次要文字

  BLACK:      "1A1C2A",   // 表格邊界用
};
```

**配色比例**：BG_DEEP 70% + LIME 15% + WHITE 文字 15%

---

## 二、字體

```javascript
const FONT = {
  title:   "Microsoft JhengHei Bold",  // 或「Noto Sans TC Bold」
  body_zh: "Microsoft YaHei UI",
  body_en: "Inter Regular",
};
```

**中文主體**：正黑體（JhengHei / YaHei / Noto Sans TC）。
**不用**襯線字體（過於復古不搭深紫底）。

---

## 三、版型 1：封面（人文建築圖 + 深色區塊主標）

```javascript
slide.background = { color: WHITE };

// 上半部：建築幾何照片滿版（佔高 60%）
slide.addImage({ path: "hex-architecture.jpg", x: 0, y: 0, w: 13.333, h: 4.5 });

// 左上 Logo
slide.addImage({ path: "kvalley-logo-color.png", x: 0.5, y: 0.4, w: 1.5, h: 0.5 });

// 右上 LIME 點陣裝飾（3×3 圓點陣列）
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    { ellipse: true, x: 11.5 + c * 0.25, y: 0.4 + r * 0.25, w: 0.15, h: 0.15, fill: LIME };
  }
}

// 中央：深色半透主標塊
{ rect: true, x: 0.5, y: 2.3, w: 7.0, h: 2.5, fill: BG_DEEP, transparency: 15 };
{ text: "HR 專場沙龍",      x: 0.8, y: 2.5, w: 6.5, h: 0.5, fontSize: 18, color: WHITE, fontFace: title, bold: true };
{ text: "數位轉型新思維",    x: 0.8, y: 3.1, w: 6.5, h: 0.9, fontSize: 42, color: WHITE, fontFace: title, bold: true };
{ text: "HR 如何帶領組織文化變革迎戰數位時代", x: 0.8, y: 4.1, w: 6.5, h: 0.5, fontSize: 15, color: WHITE, fontFace: body_zh };

// 右下：LIME 圓形裝飾（半圓切在右邊緣）
{ ellipse: true, x: 12.5, y: 3.7, w: 1.6, h: 1.6, fill: LIME };

// 下方：講者資訊橫條（可選，若封面）
// 或延續下一頁
```

---

## 四、版型 2：純文字深底（講座緣起 / 內容頁）

```javascript
slide.background = { color: BG_DEEP };

// 左上 Logo
slide.addImage({ path: "kvalley-logo-color.png", x: 0.3, y: 0.3, w: 1.5, h: 0.5 });

// 標題（置中）
{ text: "講座緣起", x: 0, y: 0.5, w: 13.333, h: 0.8, fontSize: 36, color: WHITE, fontFace: title, bold: true, align: "center" };

// 左側 LIME 半圓裝飾（從頁外切入）
{ ellipse: true, x: -0.8, y: 2.5, w: 2.0, h: 2.0, fill: LIME };

// 右下角點陣裝飾
for (let r = 0; r < 4; r++) {
  for (let c = 0; c < 4; c++) {
    { ellipse: true, x: 12.3 + c * 0.22, y: 3.0 + r * 0.22, w: 0.12, h: 0.12, fill: LIME };
  }
}

// 主內文卡（置中，限寬）
{ rect: { type: "roundRect", rectRadius: 0.05 }, x: 1.5, y: 2.0, w: 10.3, h: 4.5, fill: BG_DARKER };
{ text: "數位轉型雖然是當代家喻戶曉的概念，但能夠將這個概念落實的企業卻是少之又少。為了替台灣產業的數位轉型盡一份力，我們投入大量心力，鑽研成功數位轉型的企業案例...",
  x: 2.0, y: 2.5, w: 9.3, h: 3.5, fontSize: 14, color: BODY_LIGHT, fontFace: body_zh, lineSpacing: 28 };

// 右下頁碼
{ text: "3", x: 12.5, y: 6.9, w: 0.5, h: 0.3, fontSize: 12, color: MUTED_LT, align: "right" };
```

---

## 五、版型 3：活動流程表（深底 + LIME 幾何裝飾）

```javascript
slide.background = { color: BG_DEEP };

// Logo + 標題
slide.addImage({ path: "kvalley-logo-color.png", x: 0.3, y: 0.3, w: 1.5, h: 0.5 });
{ text: "活動流程", x: 0, y: 0.5, w: 13.333, h: 0.8, fontSize: 36, color: WHITE, fontFace: title, bold: true, align: "center" };

// 左側圓點陣列（裝飾）
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    { ellipse: true, x: 0.2 + c * 0.2, y: 2.0 + r * 0.2, w: 0.12, h: 0.12, fill: LIME };
  }
}

// 右下半圓
{ ellipse: true, x: 11.5, y: 5.2, w: 2.0, h: 2.0, fill: LIME };

// 中央：表格
slide.addTable([
  [
    { text: "時間",     options: { bold: true, fill: LIME, color: BLACK, align: "center", valign: "middle" } },
    { text: "活動",     options: { bold: true, fill: LIME, color: BLACK, align: "center", valign: "middle" } },
    { text: "活動內容", options: { bold: true, fill: LIME, color: BLACK, align: "center", valign: "middle" } },
  ],
  ["1330-1400",  "報到與開場", "三位嘉賓將以不同產業的轉型實踐切入..."],
  ["1400-1500",  "嘉賓分享",   "嘉賓將分享實際經歷與專業顧問見解，協助 HR..."],
  ["1500-1510",  "中場休息",   "現場準備優雅小點及飲品供您享用。"],
  ["1510-1540",  "嘉賓聯合座談", "主持人將抽出數位轉型人才相關問題..."],
  ["1540-1550",  "結語與方案介紹", "介紹 2023 年您該關注的數位生產力..."],
  ["1540-1600",  "交流時間",   "在豐富的活動過程中..."],
  [
    { text: "課後", options: { bold: true, color: WHITE, fill: BG_DARKER, align: "center", valign: "middle" } },
    { text: "", colspan: 2, options: { color: BODY_LIGHT, valign: "middle", fill: BG_DARKER, colW: [3.0, null, null] } }
  ],
], {
  x: 1.2, y: 1.6, w: 10.8, h: 5.3,
  fontFace: "Microsoft YaHei UI", fontSize: 11, color: BODY_LIGHT,
  colW: [2.0, 2.5, 6.3],
  rowH: 0.7,
  border: { type: "solid", color: BLACK, pt: 0.5 },
  fill: BG_DARKER,
});

// 右下頁碼
{ text: "3", x: 12.5, y: 6.9, w: 0.5, h: 0.3, fontSize: 12, color: MUTED_LT, align: "right" };
```

---

## 六、版型 4：嘉賓介紹（4 人大頭照 LIME 圓底）

```javascript
slide.background = { color: BG_DEEP };

// Logo + 標題
slide.addImage({ path: "kvalley-logo-color.png", x: 0.3, y: 0.3, w: 1.5, h: 0.5 });
{ text: "嘉賓介紹", x: 0, y: 0.5, w: 13.333, h: 0.8, fontSize: 36, color: WHITE, fontFace: title, bold: true, align: "center" };

// 4 位嘉賓
const speakers = [
  { name: "林峻民 主持人", role: "# 智谷網絡執行人", photo: "jimmy.png" },
  { name: "沈英瓊 老師",   role: "# 組織文化轉型顧問", photo: "speaker2.png" },
  { name: "劉基欽 老師",   role: "# 組織創新管理顧問", photo: "speaker3.png" },
  { name: "陳柏霖 老師",   role: "# 敏捷管理暨營運改善顧問", photo: "speaker4.png" },
];
const CW = 2.8; const GAP = 0.3; const CX0 = 0.8;
speakers.forEach(({name, role, photo}, i) => {
  const x = CX0 + i * (CW + GAP);
  const y = 1.6;

  // LIME 圓底（圓形裁切大頭照的底色）
  { ellipse: true, x: x + 0.4, y: y, w: 2.0, h: 2.0, fill: LIME };
  // 大頭照（圓形裁切）
  slide.addImage({ path: photo, x: x + 0.4, y: y - 0.2, w: 2.0, h: 2.5 });
  // 名字
  { text: name, x: x, y: y + 2.6, w: CW, h: 0.45, fontSize: 18, color: WHITE, fontFace: title, bold: true, align: "center" };
  // 角色（# tag）
  { text: role, x: x, y: y + 3.1, w: CW, h: 0.35, fontSize: 11, color: LIME, fontFace: body_zh, align: "center" };
});

// 下方圓點陣列裝飾
for (let c = 0; c < 8; c++) {
  { ellipse: true, x: 2.0 + c * 0.25, y: 6.3, w: 0.1, h: 0.1, fill: LIME };
}

// 右下頁碼
{ text: "5", x: 12.5, y: 6.9, w: 0.5, h: 0.3, fontSize: 12, color: MUTED_LT, align: "right" };
```

---

## 七、版型 5：單一講師深度介紹（左照片 + 右文字）

```javascript
slide.background = { color: BG_DEEP };

// Logo
slide.addImage({ path: "kvalley-logo-color.png", x: 0.3, y: 0.3, w: 1.5, h: 0.5 });

// 左側 LIME 圓背底
{ ellipse: true, x: 0.3, y: 1.2, w: 4.5, h: 4.5, fill: LIME };
// 右上 LIME 小方塊幾何
{ rect: { type: "rect" }, x: 5.5, y: 1.0, w: 0.3, h: 0.3, fill: LIME, rotate: 45 };
{ rect: { type: "rect" }, x: 6.0, y: 0.7, w: 0.2, h: 0.2, fill: LIME, rotate: 45 };

// 大頭照（圓裁切，蓋在 LIME 圓上）
slide.addImage({ path: "speaker-large.png", x: 0.5, y: 1.0, w: 4.0, h: 5.0 });

// 左下 LIME 圓（裝飾）
{ ellipse: true, x: 0, y: 5.8, w: 1.5, h: 1.5, fill: LIME };

// 右側文字
{ text: "講師簡介",       x: 5.5, y: 1.2, w: 6.0, h: 0.4, fontSize: 14, color: MUTED_LT, fontFace: body_zh };
{ text: "沈英瓊",         x: 5.5, y: 1.6, w: 6.0, h: 1.0, fontSize: 48, color: WHITE, fontFace: title, bold: true };

// Tag
{ text: "# 組織文化轉型顧問",  x: 5.5, y: 2.9, w: 6.0, h: 0.5, fontSize: 14, color: LIME, fontFace: body_zh, bold: true };

// 內文
{ text: "沈英瓊擁有 25 年的顧問資歷，專門講授服務管理相關課程，同時也是鼎泰豐成立以來，唯一一位專聘企業講師，授課能以案例解說連結工作實務，引發學員共鳴。",
  x: 5.5, y: 3.6, w: 7.0, h: 3.0, fontSize: 13, color: BODY_LIGHT, fontFace: body_zh, lineSpacing: 22 };

// 頁碼
{ text: "14", x: 12.5, y: 6.9, w: 0.5, h: 0.3, fontSize: 12, color: MUTED_LT, align: "right" };
```

---

## 八、通用尺寸速查

| 元素 | 字級 (pt) | 字體 |
|---|---|---|
| **封面主標** | 42 | JhengHei Bold WHITE |
| **頁標題** | 36 | JhengHei Bold WHITE 置中 |
| **章節大字（講師姓名）** | 48 | JhengHei Bold |
| **Sub Title** | 18 | Bold |
| **Body** | 11–14 | YaHei UI, lineSpacing 22–28 |
| **# Tag** | 11–14 | LIME 色 |
| **表格 Header** | 12 | Bold on LIME fill |
| **表格內文** | 11 | YaHei UI |

---

## 九、signature 視覺元素清單

1. **LIME 圓形半圓**（從頁邊切入，大小 1.5–2.0"）— 幾何裝飾
2. **LIME 圓點陣列**（3×3 或 4×4，點徑 0.12"）— 角落點綴
3. **LIME 旋轉小方塊**（菱形，0.2–0.3"）— 稀疏點綴
4. **大頭照配 LIME 圓底**（圓形切圖 + LIME 圓背景）
5. **深色卡片疊合**（BG_DARKER 卡貼在 BG_DEEP 背景上，radius 0.05）
6. **LIME Tag**（# 前綴 + LIME 色文字）— 強調關鍵詞
7. **表格 LIME Header**（黑字在 LIME 底）— 唯一的亮色塊

---

## 十、何時用這個模板

- ✅ 智谷活動：HR 沙龍、產業講座、閉門內訓
- ✅ 深度專業內容（內文字多）但想保持質感
- ✅ 講師 / 嘉賓介紹為核心的活動
- ✅ 2 小時以上的實體活動簡報（深底比較不刺眼）
- ❌ 不適合：文字量極少的純視覺 deck
- ❌ 不適合：消費者端活動（太正式）
- ❌ 不適合：印刷（深底耗墨）

---

## 十一、速度包（封面）

```javascript
import pptxgen from "pptxgenjs";
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
const s = pres.addSlide();
s.background = { color: "FFFFFF" };
s.addImage({ path: "hex-bg.jpg", x: 0, y: 0, w: 13.333, h: 4.5 });
s.addImage({ path: "kvalley-logo.png", x: 0.5, y: 0.4, w: 1.5, h: 0.5 });
s.addShape("rect", { x: 0.5, y: 2.3, w: 7.0, h: 2.5, fill: "313248", transparency: 15 });
s.addText("HR 專場沙龍",  { x: 0.8, y: 2.5, w: 6.5, h: 0.5, fontSize: 18, color: "FFFFFF", bold: true });
s.addText("數位轉型新思維", { x: 0.8, y: 3.1, w: 6.5, h: 0.9, fontSize: 42, color: "FFFFFF", bold: true });
s.addText("HR 如何帶領組織文化變革迎戰數位時代", { x: 0.8, y: 4.1, w: 6.5, h: 0.5, fontSize: 15, color: "FFFFFF" });
s.addShape("ellipse", { x: 12.5, y: 3.7, w: 1.6, h: 1.6, fill: "D4EE33" });
pres.writeFile("hr-salon.pptx");
```
