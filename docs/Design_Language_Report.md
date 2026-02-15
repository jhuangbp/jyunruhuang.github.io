# 網站設計語言拆解報告（可複用版）

> 專案：`jyunruhuang.github.io`  
> 目的：整理目前網站的設計語言，轉換成可在其他網站直接套用的規格與素材包。

## 1) 設計定位（Design DNA）

這個網站的視覺語言可以總結為：

- **專業/可信任**：以深藍與灰階作為主軸，建立資料分析與商業顧問的專業感。
- **科技感但不冰冷**：使用玻璃感（glassmorphism）與柔和陰影，搭配小面積暖橘色作為亮點。
- **內容導向**：大量卡片模組、時間軸、tag/chip，讓履歷型內容容易掃讀。
- **微動效強化互動**：hover 浮起、邊框變色、按鈕位移、滾動進度條，回饋清楚但不過度。

---

## 2) 核心 Design Tokens（可直接重用）

### 2.1 色彩系統

| Token | 值 | 用途 |
|---|---|---|
| `--primary-color` | `#3b82f6` | 主品牌藍，互動/重點文字 |
| `--secondary-color` | `#1d4ed8` | 深藍，用於 hover/層次 |
| `--accent-color` | `#f97316` | 暖橘點綴（CTA、漸層第二色） |
| `--text-dark` | `#0f172a` | 主要文字 |
| `--text-light` | `#475569` | 次要文字 |
| `--bg-light` | `#f8fafc` | 淺底背景區塊 |
| `--bg-white` | `#ffffff` | 白底卡片/區段 |
| `--bg-glass` | `rgba(255,255,255,0.72)` | 導覽列玻璃背景 |
| `--border-color` | `rgba(148,163,184,0.4)` | 通用細邊框 |

> 套用建議：整站維持「**80% 冷色 + 15% 中性色 + 5% 暖色點綴**」比例，確保一致性。

### 2.2 陰影、光暈、表面

| Token | 值 | 用途 |
|---|---|---|
| `--shadow` | `0 18px 45px -30px rgba(15,23,42,0.5)` | 一般卡片 |
| `--shadow-lg` | `0 30px 60px -35px rgba(15,23,42,0.65)` | hover/強調卡片 |
| `--glow` | `0 0 0 3px rgba(59,130,246,0.2)` | focus 可及性外光 |
| `--surface-gradient` | 白到灰白 135deg 漸層 | 表面質感 |

### 2.3 圓角與邊框

- 大多數卡片：`border-radius: 12px`
- 較強調容器（如 contact info）：`16px`
- chip/tag/button：`999px`（膠囊）
- 邊框策略：預設透明或低對比，hover 再提高藍色邊框對比

### 2.4 間距系統（由現有樣式抽象）

建議延用 8px 基準：

- `0.5rem` (8)
- `0.75rem` (12)
- `1rem` (16)
- `1.5rem` (24)
- `2rem` (32)
- `2.5rem` (40)
- `3rem` (48)

版面容器：

- 通用 section：上下 `96px`（行動版 `72px`）
- 內容最大寬：`1120px~1200px`
- 內距：`24px`（或 `2rem`）

---

## 3) 版型語言（Layout Grammar）

### 3.1 頁面骨架

1. **固定導覽列**（透明 → 滾動後玻璃化）
2. **Hero 深色沉浸區**（大標題、身份標籤、CTA）
3. 後續區段採 **白/淺灰交錯背景**，提升段落分離與閱讀節奏
4. **卡片化內容模組**（專案、經歷、技能、證照等）
5. **回頂按鈕**作為長頁行為輔助

### 3.2 區段標題樣式

- 使用 `.section-eyebrow`（全大寫小標）+ `.section-title`（主標）+ `.section-subtitle`（說明）
- 主標底部有藍→橘漸層短線（品牌辨識關鍵）

### 3.3 響應式策略

- 斷點主要在 `768px`、次要在 `968px`
- Desktop 多欄 grid / flex；Mobile 幾乎全部收斂為單欄
- 行動版保留互動回饋，但簡化密度（字級、欄位、按鈕排列）

---

## 4) 元件語言（Component Patterns）

### 4.1 導覽列（Navbar）

- 透明覆蓋 Hero，捲動後切換為半透明白底 + `backdrop-filter: blur(12px)`
- 有**閱讀進度條**（頂部細線 + 漸層進度）
- Menu active/hover 以文字顏色 + 底線動畫呈現

### 4.2 Hero

- 深色漸層背景（藍紫）+ 徑向光斑疊加
- 左圖右文（行動版轉單欄）
- 內容層次：姓名 > 職稱 > badge > 說明 > CTA > stats
- 按鈕三態：實心、描邊、透明描邊
- 小幅浮動/彈跳動畫（有 reduced-motion 退場機制）

### 4.3 卡片系統（全站通用）

共通模板：

- 淺色表面或白底 + 12px 圓角 + 中性陰影
- Hover：`translateY(-4~-6px)` 或 `translateX(6px)`
- Hover 同步升級陰影並提高藍色邊框可見度
- 內部常搭配 tag/chip 分類與項目符號（`✓` / `▸`）

### 4.4 表單與按鈕

- Input 預設 2px 邊框、focus 時改主色
- Submit 按鈕深底白字，hover 轉主藍
- 小按鈕（copy）與主按鈕語氣一致，採膠囊形狀

### 4.5 Back-to-top

- 固定右下角，預設隱藏
- 顯示時以 opacity + translate + scale 進場
- 背景半透明 + blur，視覺上與 navbar 同語言

---

## 5) 動態與互動規範（Motion & Interaction）

### 5.1 時間參數

- 常用過渡：`0.3s ease`
- 快速狀態切換（例如進度條）：`0.2s ease-out`
- 回頂按鈕顯示：`220ms`

### 5.2 動效原則

- 只做「短距離位移 + 陰影變化 + 顏色變化」
- 避免大幅縮放或旋轉，維持商務網站穩定感
- 支援 `prefers-reduced-motion`，降低動畫負擔

### 5.3 可及性

- 全站 `:focus-visible` 統一 glow
- 文字與背景對比維持可讀性（深字淺底 / 白字深底）

---

## 6) 可直接複製的素材包（Material Kit）

### 6.1 CSS Token 基底（建議原樣帶走）

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #1d4ed8;
  --accent-color: #f97316;
  --text-dark: #0f172a;
  --text-light: #475569;
  --bg-light: #f8fafc;
  --bg-white: #ffffff;
  --bg-glass: rgba(255, 255, 255, 0.72);
  --border-color: rgba(148, 163, 184, 0.4);
  --shadow: 0 18px 45px -30px rgba(15, 23, 42, 0.5);
  --shadow-lg: 0 30px 60px -35px rgba(15, 23, 42, 0.65);
  --glow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}
```

### 6.2 Card 基礎樣板

```css
.card {
  background: linear-gradient(135deg, rgba(255,255,255,.95), rgba(248,250,252,.9));
  border-radius: 12px;
  border: 1px solid transparent;
  box-shadow: var(--shadow);
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(59,130,246,.2);
}
```

### 6.3 Button 語系

```css
.btn-primary { background:#fff; color:var(--primary-color); }
.btn-secondary { background:transparent; color:#fff; border:2px solid #fff; }
.btn-dark { background:var(--text-dark); color:#fff; }
```

---

## 7) 套用到其他網站的落地策略

### 7.1 快速移植（1~2 天）

1. 先導入 token + 卡片 + 按鈕 + section 標題 4 件套。
2. 將既有頁面改成「白/灰交錯 section + card 化」。
3. 加入 navbar 捲動玻璃態與回頂按鈕。
4. 最後才調整品牌色（若你的品牌非藍色）。

### 7.2 客製化建議（避免「一看就像同模板」）

- 主色可改，但保留暖色 accent 做注意力導引。
- Hero 背景漸層方向可改（例如 120deg）以建立新識別。
- 卡片 hover 位移可依品牌調性降低（例如 `-4px`）。
- 保留互動節奏（0.2~0.3s），這是「質感」關鍵。

### 7.3 不建議改動

- 不要移除 focus-visible（會失去鍵盤可用性）
- 不要讓 accent 使用比例過高（會從「專業」變「行銷感」）
- 不要同頁混用太多陰影風格（保持一致）

---

## 8) 既有檔案素材（可重用）

- 頭像：`docs/JyunRu_Huang_Headshot.jpg`
- 履歷：`docs/JyunRu_Huang_Resume.pdf`
- Logo 素材（學校/企業）：`docs/logo/*`
- 專案報告 PDF：`docs/HealthcareProject_Final Report.pdf`、`docs/Muckrock Final Report.pdf`

> 若要做「同語言不同內容」的新站，可先沿用卡片、tag、時間軸、證照列舉等資訊模板，再替換文字與素材。

---

## 9) 一句話總結

這套設計語言的核心不是花俏動畫，而是「**深淺層次清楚 + 卡片化資訊結構 + 克制的互動回饋**」。把 token、卡片模板、區段標題和互動節奏帶走，就能在其他網站快速重現 80% 的質感。
