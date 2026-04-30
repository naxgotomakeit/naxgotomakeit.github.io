# Nax Lab - Claude风格设计系统

这是一个完全模仿 Claude.ai 界面风格的 Jekyll 网站设计系统。

## 🎨 设计特点

- **字体**: IBM Plex Sans（Google Fonts）
- **配色**: 米色背景 (#F5F5F0) + 深色文字
- **风格**: 简洁、现代、专业
- **布局**: 卡片式、充足留白、清晰层次

## 📁 文件结构

```
你的网站目录/
├── _layouts/
│   ├── default.html      （新建）主布局文件
│   └── post.html          （新建）文章布局文件
├── _includes/
│   └── log-card.html      （新建）日志卡片组件
├── assets/
│   └── css/
│       └── main.css       （新建）主样式文件
├── index.html             （保持原样）
├── about.html             （保持原样）
├── daily-log.html         （保持原样）
├── projects.html          （保持原样）
├── research.html          （保持原样）
└── _config.yml            （保持原样）
```

## 🚀 安装步骤

### 第一步：创建必要的目录

在你的 GitHub Pages 仓库根目录下，创建以下目录（如果不存在）：

```bash
mkdir -p _layouts
mkdir -p _includes
mkdir -p assets/css
```

### 第二步：复制文件

将以下文件复制到你的仓库中：

1. **`/home/claude/_layouts/default.html`** → 复制到你的 `_layouts/default.html`
2. **`/home/claude/_layouts/post.html`** → 复制到你的 `_layouts/post.html`
3. **`/home/claude/_includes/log-card.html`** → 复制到你的 `_includes/log-card.html`
4. **`/home/claude/assets/css/main.css`** → 复制到你的 `assets/css/main.css`

### 第三步：HTML 文件不需要修改

你现有的 HTML 文件（index.html, about.html, daily-log.html, projects.html, research.html）**完全不需要修改**，它们会自动使用新的样式。

### 第四步：提交到 GitHub

```bash
git add .
git commit -m "应用 Claude 风格设计系统"
git push origin main
```

GitHub Pages 会自动重新构建你的网站（通常需要 1-2 分钟）。

## ✅ 验证安装

访问你的网站 `https://naxgotomakeit.github.io`，你应该看到：

- 米色背景
- 现代无衬线字体
- 清晰的卡片式布局
- 顶部导航栏（黑色文字、白色背景）
- 底部页脚

## 🎯 下一步

### 添加博客文章

在 `_posts/` 目录下创建 Markdown 文件：

```markdown
---
layout: post
title: "你的文章标题"
date: 2026-05-02 10:30:00 +0000
categories: daily-log
tags: [VLM, Robotics]
---

文章内容...
```

### 自定义配色

如果想调整颜色，编辑 `assets/css/main.css` 的 `:root` 部分：

```css
:root {
  --color-bg-primary: #F5F5F0;    /* 主背景色 */
  --color-text-primary: #1A1A1A;  /* 主文字色 */
  --color-accent: #6366F1;        /* 强调色 */
  /* ... */
}
```

## 📝 注意事项

1. **字体加载**: CSS 文件自动从 Google Fonts 加载 IBM Plex Sans
2. **响应式设计**: 完全支持移动端
3. **暗色模式**: 目前只支持浅色模式（符合 Claude.ai 风格）
4. **兼容性**: 所有现代浏览器

## 🔧 故障排除

### 样式没有生效？

1. 检查 `assets/css/main.css` 文件是否存在
2. 检查 `_layouts/default.html` 是否正确引用了 CSS 文件
3. 清除浏览器缓存并强制刷新（Ctrl/Cmd + Shift + R）
4. 检查 GitHub Pages 构建状态（仓库的 Actions 标签页）

### 布局看起来不对？

1. 确保所有 HTML 文件的 front matter 中有 `layout: default`
2. 确保 `_layouts/` 和 `_includes/` 目录在仓库根目录

## 💡 更多帮助

如有问题，可以：
1. 检查浏览器控制台是否有 CSS 加载错误
2. 确认 GitHub Pages 设置正确（Settings → Pages → Source: main branch）
3. 查看 Jekyll 官方文档：https://jekyllrb.com/docs/
