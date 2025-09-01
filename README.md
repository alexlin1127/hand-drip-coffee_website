# LWX Coffee Shop Website

一個用於前端技術練習的手沖咖啡線上商店網站，主要展示 HTML、CSS、JavaScript 原生語法的排版設計與互動功能實作。

## 專案介紹

這是一個前端技術練習專案，以咖啡商店為主題來實作響應式網站設計。著重使用原生前端技術（HTML、CSS、JavaScript）來實現現代化的網站介面與互動功能。

### 學習重點

- **HTML 結構設計**：語意化標籤使用、響應式網頁架構
- **CSS 排版技巧**：Flexbox、Grid、響應式設計、動畫效果
- **JavaScript 互動功能**：DOM 操作、事件處理、本地存儲、動態內容更新
- **Bootstrap 框架應用**：元件使用、網格系統、響應式工具類別
- **前端專案架構**：模組化 JS、CSS 組織、資料與介面分離

## 專案結構

```
hand-drip-coffee_website/
├── index.html              # 首頁
├── product.html             # 商品頁面
├── cart.html               # 購物車頁面
├── news.html               # 最新消息頁面
├── info.html               # 關於我們頁面
├── style.css               # 主要樣式表
├── product_style.css       # 商品頁面樣式
├── cart_style.css          # 購物車樣式
├── info_style.css          # 關於我們樣式
├── product.json            # 商品資料
├── header.js               # 導覽列元件
├── footer.js               # 頁腳元件
├── productList.js          # 商品列表功能
├── cart.js                 # 購物車功能
├── updateCartBadge.js      # 購物車徽章更新
└── updateProductArea.js    # 商品區域更新
```


### 核心技術
- **HTML5**：語意化標籤、表單元素、多媒體元素
- **CSS3**：Flexbox、Grid、動畫、響應式設計、自定義屬性
- **JavaScript ES6+**：DOM 操作、事件處理、模組化、本地存儲 (localStorage)
- **Bootstrap 5.3.2**：響應式框架、元件系統、工具類別

### 外部資源
- **Google Fonts**：多種字體載入與應用
- **Bootstrap Icons 1.10.0**：圖示系統使用
- **響應式設計**：多裝置配適

### 學習技能點
- 響應式網頁設計 (RWD)
- CSS Flexbox 與 Grid 布局
- JavaScript DOM 操作
- 事件處理與互動效果
- 本地存儲 (localStorage) 應用
- 模組化 JavaScript 開發
- Bootstrap 框架應用
- JSON 資料處理
- 動態內容渲染

## 前端技術實作重點

### CSS 設計技巧
- **色彩主題**：CSS 自定義屬性 (CSS Variables) 應用
- **版面配置**：Flexbox 與 Grid 混合使用的響應式布局
- **視覺效果**：CSS 動畫、轉場效果、hover 互動
- **響應式設計**：Media Queries、彈性單位 (rem, em, %)

### JavaScript 功能實作
- **購物車邏輯**：商品加入、數量調整、總價計算
- **動態內容**：JSON 資料讀取與渲染
- **本地存儲**：購物車狀態持久化
- **模組化開發**：功能分離、元件化思維

## 技術學習重點

### 首頁 (index.html) - 基礎頁面架構
- Hero Section 設計與 CSS 定位技巧
- 卡片式商品展示布局 (Flexbox/Grid)
- 響應式圖片與文字處理
- **學習重點**：HTML 語意化、CSS 布局、響應式設計

### 商品頁面 (product.html) - 動態內容渲染
- JavaScript 讀取 JSON 資料
- 動態生成 HTML 元素
- 購物車互動功能實作
- **學習重點**：DOM 操作、事件處理、資料綁定

### 購物車 (cart.html) - 複雜互動邏輯
- 本地存儲 (localStorage) 應用
- 商品數量動態調整
- 總價即時計算與更新
- 全選/清空等批次操作
- **學習重點**：狀態管理、複雜邏輯處理、用戶體驗設計

### 關於我們 (info.html) - 進階 CSS 應用
- 多欄位響應式布局
- CSS 動畫與視覺效果
- 圖示與文字的整合設計
- **學習重點**：進階 CSS 技巧、視覺設計實作

### 最新消息 (news.html) - 內容管理
- 時間軸式內容展示
- 卡片組件的重複應用
- 內容結構化處理
- **學習重點**：內容架構設計、組件重用概念

### 環境需求
- 現代瀏覽器 (支援 ES6+)
- 程式碼編輯器 (推薦 VS Code)
- Live Server 擴充功能 (可選，提升開發體驗)

### 啟動步驟
1. git clone `https://github.com/alexlin1127/hand-drip-coffee_website.git`
2. 使用 VS Code 開啟專案資料夾
3. 安裝 Live Server 擴充功能
4. 右鍵點擊 `index.html` → 選擇 "Open with Live Server"

## 延伸學習
- 加入 React/Vue 等前端框架重構
- 串接後端 API 實現真實資料交換
- 部署到 GitHub Pages