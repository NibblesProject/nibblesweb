---
title: 换源代码汇总
date: 2024/8/23
tags:
 - 换源
categories:
 - 技术学习
---

# 换源代码汇总

## 引言

博主最近在折腾一个静态博客，使用[vuepress-reco](https://theme-reco.vuejs.press/)驱动，中途有网络问题遇到了很多麻烦，这里特别写一篇文章提醒自己以后在环境搭建的过程中还要对包管理器全局换源。初始操作中不仅是换源，还有git传输网络自动走系统proxy的代码，我也一并放在本文中。

## 代码

博主所用的开发环境如下：

```bash
>node -v
v18.20.4

>npm -v
10.7.0

>pnpm -v
9.7.1

>yarn -v
1.22.22
```

### 换源命令通用格式

淘宝源域名已经变更了，不过填原来的域名也没啥影响，但建议尽快改为新域名！
`https://registry.npm.taobao.org` **=>** `https://registry.npmmirror.com`

修改源：

```bash
<npm|pnpm|yarn> config set registry https://registry.npm.taobao.org
```

检查配置：

```bash
<npm|pnpm|yarn> config get registry
```

实际输入命令的时候<>不用加，选一个在括号里的就好

### Git跟随系统Proxy

上传到GitHub的时候，都是timeout的报错，那么在不修改超时时间的情况下，一条命令把传输自动跟随系统的proxy：

```bash
git config --global core.gitProxy "auto"
```