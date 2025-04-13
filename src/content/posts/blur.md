---
title: 使用Astro快速搭建个人博客的完整指南
description: Astro作为新一代的静态站点生成器，凭借其独特的「组件优先」理念和「零JS默认输出」特性，成为搭建内容型网站的理想选择。
pubDate: 2025-02-08
---

------

【本文约1800字】

## 前言：为什么选择Astro？

Astro作为新一代的静态站点生成器，凭借其独特的「组件优先」理念和「零JS默认输出」特性，成为搭建内容型网站的理想选择。相较于传统方案，Astro具有以下优势：

- 极致的加载性能（默认生成纯静态HTML）
- 灵活的组件体系（支持React/Vue/Svelte组件）
- 内容驱动的开发模式
- 完善的Markdown支持
- 轻量级架构（项目依赖仅约100KB）

## 一. 准备工作

### 1.1 环境准备

- npm 9+ 或 pnpm 7+

- Node.js（推荐v18+）

​      点击下载：[*Node.js **v22.13.1**1 长期支持版本*](https://nodejs.org/dist/v22.13.1/node-v22.13.1-x64.msi)

- 推荐使用 VS Code 编辑器

```bash
node -v 
# 检查版本
```

### 1.2 clone主题到本地

区别于Hexo，Astro框架并不能做到在配置文件里更改主题即可实现换主题的效果，而是需要将整个项目文件更换：即主题文件为项目文件本身。故事先选定好主题便是重中之重，以下列出部分笔者比较喜欢的主题，以便读者参考

[*fuwari*](https://github.com/saicaca/fuwari)

[*Koibumi*](https://github.com/koibumi-design/astro-blog)

*[astro-blur](https://github.com/Jazee6/astro-blur)（本博客所用主题）*

将主题clone到本地

```bash
git clone git@github.com:saicaca/fuwari.git #以fuwari为例
```

### 1.3 安装依赖

```bash
pnpm install
pnpm add sharp
```

此时网页就可以在本地跑起来了，启动本地服务器：

```bash
npm run dev
# 访问 http://localhost:4321
```

在浏览器输入 *http://localhost:4321* 访问网页

## 二. 主题配置

### 2.1 文件结构说明（以fuwari主题为例）

```
src/
  content/
    config.ts      # 博客配置
    blog/          # 文章目录（示例文章）
  layouts/
    PostLayout.astro  # 文章布局
 /

```

### 2.2  修改配置文件 

编辑配置文件 src/config.ts以自定义博客，在博客本地服务器运行时可以是可以修改文件的，修改效果将会实时刷新在本地网页上

```typescript
import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Fuwari', // 网站标题
  subtitle: 'Demo Site', // 网站描述
  lang: 'en',         // 语言选择'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250,         // 主题颜色的默认色调，从0到360。例如，红色：0，青色：200，青色：250，粉红色：345
    fixed: false,     // 是否为访问者隐藏主题颜色选择器
  },
  banner: { 
    enable: false, //是否开启横幅
    src: 'assets/images/demo-banner.png',   // 横幅路径:相对于/src的路径，如果相对于/public路径则应以'/'开头
    position: 'center',      // 横幅图展示的位置，支持的值:'top', 'center', 'bottom','center'是默认选项
    credit: {
      enable: false,         // 是否在在横幅图像上显示横幅署名文本
      text: '',              // 在横幅图像上显示的署名文本
      url: ''                // (可选项) 原作品或作者的链接页面
    }
  },
  toc: {
    enable: true,           // 是否在博客右侧显示目录
    depth: 2                // 设置目录中显示的标题最大深度（可选范围：1至3级）
  },
  favicon: [    // 如果使用默认网站图标此项请留空
    // {
    //   src: '/favicon/icon.png',    // 网站图标的路径，相对于/public目录
    //   theme: 'light',              // (可选项) “亮”或“暗”，仅当图标目录下存在不同亮暗图标时方可设置
    //   sizes: '32x32',              // (可选项) 图标大小, 仅当图标目录下存在不同大小图标时方可设置
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/saicaca/fuwari',     // 内部链接不应包含基本路径，因为是自动添加的
      external: true,                               // 显示外部链接图标，并可在新标签页中打开
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',  // 头像路径:相对于/src的路径，如果相对于/public路径则应以'/'开头
  name: 'Lorem Ipsum',  // 名字
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  // 简介
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // 访问https://icones.js.org/以获取图标代码
                                        // 如果尚未包含相应的图标集，则需要安装该图标集
                                        // 指令为：pnpm add @iconify-json/<图标集名称>
      url: 'https://twitter.com', // 图标的自定义链接
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/saicaca/fuwari',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/', // 创作共用许可协议
}

```

## 三.  托管网页到云端

### 3.1 选择网站托管平台

构建并部署你的 Astro 站点需要选择一个可靠的静态网页托管平台，例如[*AWS S3静态网站托管*](https://aws.amazon.com/cn/s3/)，[*Vercel* ](https://vercel.com/)和 [*Cloudflare*](https://pages.cloudflare.com/) 等等

本文使用*Vercel* 作为示例，其余平台的部署教程可在Astro官方文档：[*Astro Docs*](https://docs.astro.build/zh-cn/getting-started/)下找到

使用以下 `astro add` 命令为你的 Astro 项目中添加 [*Vercel 适配器*](https://docs.astro.build/zh-cn/guides/integrations-guide/vercel/) 以开启 SSR。此命令将安装适配器并同时自动对你的 `astro.config.mjs` 文件进行适当的配置：

```bash
npx astro add vercel
```



### 3.2 上传项目文件到Github

- 如果你有git工具

```bash
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin 你的仓库地址
git push -u origin main
```

- 或者直接使用Vscode或者Github Desktop提交

### 3.3 部署到Versel进行托管

- 注册一个[*Vercel* ](https://vercel.com/)账号
- 选择右侧Add New，创建一个新的Project
- 登陆自己的Github账号，import导入博客项目库
- 设置好项目名称（项目名称会是Vercel分发给你的子域名的一部分，例如 https://项目名称.vercel.app/）
- Deploy然后耐心等待
- 网页托管完成之后立马就可以登陆了

修改博客文件只要同步到Github仓库即可，Vercel会自动同步刷新你的博客页面

## 四. 绑定域名（可选项）

可能你觉得 *https://项目名称.vercel.app/* 太难看了或是国内访问Vercel并不稳定，那么可以自己购入域名进行自定义

Vercel支持添加自定义域名进行重定向

域名购买：[*腾讯云域名*](https://buy.cloud.tencent.com/domain)

​		  [*阿里云万网*](https://wanwang.aliyun.com/domain/tld#.com)

- 选择Vercel中博客项目打开Settings
- 选择Domain并进行Add
- 输入你填写的域名，默认设置即可
- 前往域名购买商域名控制台为域名添加解析：

​	对应Vercel提示Type填入对应的值，回来刷新Vercel的Domain设置，显示Valid Configuration即可

​	*注：购买域名之后需要一定的DNS解析时间，Vercel中显示未能配置成功时可耐心等待*

## 五. 生态推荐

- **官方工具**：
  - Starlight（文档模板）
  - Astro DB（数据库集成）
- **社区插件**：
  - astro-seo：SEO优化
  - astro-robots-txt：机器人协议
  - astro-compress：资源压缩
- **学习资源**：
  - 官方文档：[https://docs.astro.build](https://docs.astro.build/)
  - 示例仓库：https://github.com/withastro/astro/examples
  - 社区模板：https://astro.build/themes

------

通过本指南，您已经掌握了从零搭建Astro博客的核心技能。接下来可以：

1. 尝试接入CMS内容管理系统
2. 开发自定义组件库
3. 探索Astro Islands的深度应用
4. 参与开源社区贡献
