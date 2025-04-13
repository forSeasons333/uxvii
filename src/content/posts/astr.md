---
title: 使用AstrBot和Napcat实现接入AI的QQ机器人（Windows）
description: AstrBot 是一个易于上手的多平台聊天机器人及开发框架。通过它，你能够在多种消息平台上部署一个支持大语言模型（LLM）的聊天机器人。并以此实现但不限于 AI 知识库问答、角色扮演、群聊管理、LLM Agent 等功能。
pubDate: 2025-02-09
---

------

【本文约500字，未完工】

前言

本文旨在帮助读者实现将现有AI接入QQ，包括不限于Deepseek，ChatGPT和Gemini等等

## 一.部署前准备

### 1.安装依赖

- python 3.10以上，各版本下载链接：[*python Releases*](https://www.python.org/downloads/)，本文演示使用python 3.11.5：[*下载链接*](https://www.python.org/downloads/release/python-3115/)
- java环境，本文演示使用java 21：[*下载链接*](https://download.oracle.com/java/21/latest/jdk-21_windows-x64_bin.exe)

### 2.下载启动Napcat

*Q:Napcat是什么？*

*A:Napcat是基于TypeScript构建的Bot框架,通过相应的启动器或者框架,主动调用QQ Node模块提供给客户端的接口,实现Bot的功能.*

详见[*Napcat文档*](https://napneko.github.io/)

Napcat下载: *[Napcat](https://github.com/NapNeko/NapCatQQ/releases)*

推荐下载Windows一键包：Win64无头（有头无头即有无可视UI)

下载完成后解压打开Napcat.Shell文件夹，选择Napcat.bat启动

等待片刻，显示二维码后打开Napcat.Shell文件夹根目录，找到如下路径下的qrcode.png文件打开

```
.\NapCat.Shell\versions\9.9.17-31245\resources\app\napcat\cache
```

使用你要作为机器人的QQ号码扫码登陆，等待片刻即可看到控制台下消息弹出，即为登陆成功

返回上一级文件夹打开config文件夹

```
.\NapCat.Shell\versions\9.9.17-31245\resources\app\napcat\config
```

打开webui.json,复制token备用

此时Napcat已经运行起来了，打开浏览器，输入以下网址，将token换为在webui.json中复制的token：

```html
http://127.0.0.1:6099/webui?token=xxxx
```
