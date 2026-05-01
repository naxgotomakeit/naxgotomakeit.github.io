# Nax Lab

A GitHub Pages + Jekyll personal website for a living AI & Robotics research log.

## How to use

This site is designed so you do **not** need to edit HTML every day.

### Add a daily log

Create a new Markdown file in `_posts/`:

```text
_posts/YYYY-MM-DD-HHMM-short-title.md
```

Example:

```text
_posts/2026-05-02-1030-reading-vla-paper.md
```

Use this front matter:

```markdown
---
layout: post
title: "Short title"
date: 2026-05-02 10:30:00 +0000
categories: daily-log
tags: [tag1, tag2]
---

Write your log here.
```

The Home page and Daily Log page will automatically group entries by date.

### Add a research note

Create a new Markdown file in `_posts/` with `categories: research-note`.

```markdown
---
layout: post
title: "Paper Note - Paper Title"
date: 2026-05-02 16:00:00 +0000
categories: research-note
tags: [Embodied AI, VLA, World Models]
---

## Problem

## Method

## Why it matters for robots

## Experiments

## My takeaway
```

### Edit projects

Edit `projects.html` directly to update project cards.

# 如何上传/添加日志到你的网站

## 📝 日志文件格式

每个日志都是一个 Markdown 文件，放在 `_posts/` 目录下。

### 文件命名规则

文件名必须遵循这个格式：
```
YYYY-MM-DD-HHMM-标题.md
```

**示例：**
- `2026-05-02-1030-reading-vlm-paper.md`
- `2026-05-02-1445-fixed-slam-bug.md`
- `2026-05-03-0900-meeting-notes.md`

### 文件内容模板

每个日志文件包含两部分：**Front Matter**（元数据）和 **正文内容**。

```markdown
---
layout: post
title: "你的日志标题"
date: 2026-05-02 10:30:00 +0000
categories: daily-log
tags: [VLM, Robotics, 实验]
---

这里写你的日志内容。

可以使用 Markdown 格式：
- 列表
- **粗体**
- `代码`

## 小标题

正文内容...
```

## 🚀 方法1：本地添加（推荐）

### 步骤1：创建日志文件

在你的本地仓库中：

```bash
cd _posts/
```

创建新文件，例如：
```bash
touch 2026-05-02-1030-reading-egoplan-paper.md
```

### 步骤2：编辑文件内容

用任何文本编辑器打开文件，复制这个模板：

```markdown
---
layout: post
title: "阅读 EgoPlan 论文"
date: 2026-05-02 10:30:00 +0000
categories: daily-log
tags: [Egocentric VQA, 论文阅读]
---

今天读了 EgoPlan 论文，主要关注：

## 核心想法

- 使用 egocentric video 进行任务规划
- 结合 VLM 和 temporal reasoning

## 对我研究的启发

这个方法可以应用到我的 efficient VQA 项目中...

## 下一步

- [ ] 复现他们的 baseline
- [ ] 测试在 Ego4D 数据集上的表现
```

### 步骤3：提交并推送

```bash
git add _posts/2026-05-02-1030-reading-egoplan-paper.md
git commit -m "添加日志：阅读 EgoPlan 论文"
git push origin main
```

等待1-2分钟，刷新网站就能看到新日志了！

## 💻 方法2：GitHub网页操作

### 步骤1：进入 _posts 目录

1. 访问你的仓库：https://github.com/naxgotomakeit/naxgotomakeit.github.io
2. 点击 `_posts` 文件夹
3. 点击右上角 "Add file" → "Create new file"

### 步骤2：命名文件

在文件名输入框中输入：
```
2026-05-02-1030-reading-paper.md
```

### 步骤3：粘贴内容

复制模板，修改标题、日期、标签和正文内容。

### 步骤4：提交

- 在底部填写 commit 信息：`添加日志：阅读论文`
- 点击 "Commit new file"

## 📅 日志示例

### 示例1：实验记录

```markdown
---
layout: post
title: "DUSt3R 部署踩坑记录"
date: 2026-05-02 14:30:00 +0000
categories: daily-log
tags: [3D Reconstruction, Debug, CUDA]
---

今天在 GPU 服务器上部署 DUSt3R 时遇到 CUDA 版本不兼容问题。

## 问题

```
RuntimeError: CUDA version mismatch
```

## 解决方案

修改 requirements.txt，将 PyTorch 版本从 2.0 降到 1.13：

```bash
pip install torch==1.13.0+cu117
```

## 结果

成功运行！推理速度约 2 FPS。
```

### 示例2：论文笔记

```markdown
---
layout: post
title: "EgoAdapt 论文笔记"
date: 2026-05-02 16:00:00 +0000
categories: research-note
tags: [Egocentric VQA, Domain Adaptation]
---

## 问题

如何让 VLM 适应 egocentric 视角的特殊性？

## 方法

1. 使用少量 egocentric 数据进行 adapter tuning
2. 保持主干模型参数冻结
3. 只训练轻量级 adapter 层

## 启发

对我的项目意义：
- 可以用这个方法做 efficient fine-tuning
- 减少计算成本
- 保持通用能力

## 下一步

- [ ] 复现 adapter 实验
- [ ] 在 Ego4D 上测试
```

### 示例3：简短更新

```markdown
---
layout: post
title: "修复了 ROS2 bag 解析脚本"
date: 2026-05-02 11:15:00 +0000
categories: daily-log
tags: [ROS2, Debug]
---

修复了时间戳压缩导致的帧率错误。现在可以正确提取 30fps 的图像序列。

提交到 GitHub：[commit link]
```

## 🏷️ 常用标签（Tags）建议

**研究方向：**
- Egocentric VQA
- Efficient VLM
- Embodied AI
- World Models
- Affective AI
- SLAM
- 3D Reconstruction

**活动类型：**
- 论文阅读
- 实验
- Debug
- 代码实现
- 会议记录

**技术栈：**
- PyTorch
- ROS2
- CUDA
- FastAPI
- Gazebo

## ⏰ 日志频率建议

- **每天至少1条**：记录当天主要工作
- **实时记录**：遇到重要发现立即记录
- **晚上总结**：睡前回顾今天的进展

## 📂 目录结构

```
_posts/
├── 2026-05-01-0900-project-kickoff.md
├── 2026-05-01-1430-read-vlm-survey.md
├── 2026-05-02-1030-dust3r-deployment.md
├── 2026-05-02-1445-fixed-ros-bug.md
└── 2026-05-03-0900-meeting-with-gabriel.md
```

## 💡 写作技巧

1. **标题要具体**：❌ "今天的工作" ✅ "部署 DUSt3R 并修复 CUDA 错误"
2. **记录时间**：准确的日期和时间帮助回顾
3. **添加标签**：方便后续搜索和分类
4. **包含代码/命令**：用代码块记录重要命令
5. **记录思考过程**：不只是结果，也记录为什么这样做

## 🔄 更新现有日志

如果需要修改已发布的日志：

1. 在 `_posts/` 中找到对应文件
2. 编辑内容
3. 提交并推送

GitHub Pages 会自动重新构建。

## ❓ 常见问题

**Q: 日志没有显示在网站上？**
- 检查文件名格式是否正确
- 检查 Front Matter 中的 `categories: daily-log`
- 等待 GitHub Pages 构建完成（1-2分钟）

**Q: 可以写中文日志吗？**
- 可以！标题和正文都支持中文
- 文件名建议用英文（避免编码问题）

**Q: 日志可以包含图片吗？**
- 可以！将图片放在 `assets/images/` 目录
- 在 Markdown 中引用：`![描述]({{ '/assets/images/pic.png' | relative_url }})`

**Q: 时区怎么设置？**
- 使用 `+0000` (UTC) 或 `+0800` (中国时区)
- 在 `_config.yml` 中也可以设置默认时区
