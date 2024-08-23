---
title: NamelessMC-让腐竹们方便地搭建服务器官网
date: 2024/7/9
tags:
 - NamelessMC
categories:
 - 资源分享
---

# NamelessMC-让腐竹们方便地搭建服务器官网

![img](/uploads/2024/07/2024070902023114.png)

NamlessMC程序经作者团队授权后转载，本人为经官方许可编写此文并作程序的转载和汉化，对于其他剽窃行为，坚决抵制！

- 官方网站：https://namelessmc.com/
- 官方wiki(无中文汉化)：https://docs.namelessmc.com/en/home
- 原帖地址：https://github.com/NamelessMC/Nameless
- **自己写在云+社区 NamelessMC搭建课程：https://cloud.tencent.com/developer/column/92783**

## 授权截图

![img](/uploads/2024/07/2024070901472223.png)授权Discord截图（青耘麦块)

## 介绍

- NamelessMC是一款基于PHP，以及强大的Bootstrap框架所编写的网站程序。
- 在这个程序中集合了官网的最基本的服务器展示功能，以及论坛的功能。
- 同时又兼有服务器状态页，实时查看服务器上在线人数与在线的论坛成员名单。
- 同时也有完善的开发文档，php程序员也可以通过开发文档指引开发多个模块以及小工具。官
- 方也有自己的社区以及发布的模块。这个体现了本程序的高度的扩展性。
- 国内外将近有一万多服务器共同选择！程序安全无任何后门！

<details class="wp-block-details"><summary>展开作者发布v2.0正式版时说的话（中译，https://namelessmc.com/forum/topic/1515-version-200/）</summary><!-- wp:paragraph {"placeholder":"Type / to add a hidden block"} -->
<p>大家好，</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>我没想到会在 2022 年发布此公告 - 但经过 7 年的开发，我很高兴地宣布 2.0.0 版本终于可供下载！<img style="width: 15px;" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f389.svg" alt="🎉"></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>与 2015 年刚开始工作时相比，它完全变得“面目全非”——不仅仅是软件。从那时起，团队已经成长了很多，特别感谢我们的核心开发人员 @Aberdeener、@Derkades、@Partydragen 和 @Supercrafter100，他们为该项目做了很多工作，还有我们所有的支持团队和社区版主成员奉献了他们的免费尽可能地帮助社区 - 并且不要忘记多年来来来去去的所有开发人员和员工。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>当然，如果没有所有贡献者和资源创建者的帮助，这一切是不可能实现的，他们在构建平台并提供一些令人惊叹的功能和模板供所有人使用时提供了巨大的帮助。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Nameless 是永远免费且供大家使用的 - 我最初创建 Nameless 的原因是用作我的服务器的一个简单论坛，然后我转向更大的高级选项，但它的用户已经变得如此之多。不仅如此，我觉得我们可以继续创新，并将 Nameless 打造成 Minecraft 服务器领域内网站软件的有力竞争者（谁知道呢，甚至可能超越！）</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>此次发布也恰逢该项目历史上的一个巨大里程碑——我们最近已达到 <strong>50,000 次的安装量</strong>。这是一个疯狂的数字，超出了我最初的预期，当时第一个 Nameless 版本是在 2014 年根据 Spigot 论坛帖子以 zip 文件形式上传的。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>最后，感谢所有人，Nameless 的用户，感谢你们以多种不同的方式继续使用和支持该项目。希望接下来的 7 年能够为您和您的玩家带来更多令人难以置信的功能（但希望比 v2 更快地到达您手中）<img style="width: 15px;" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f605.svg" alt="😅">).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"placeholder":"Type / to add a hidden block"} -->
<p>感谢！<br>- Sam- </p>
<!-- /wp:paragraph --></details>

## 各版本特点

**v1.0.21**（已弃用）

- 模块和主题和插件系统，更换语言语言
- 论坛主题标签，分论坛
- 警报系统，包括在用户标记或新员工应用程序时弹出通知
- 电子邮件配置
- Nameless API可与Nameless Plugin对接
- 能够禁用 UUID 链接，允许支持离线模式服务器
- 自定义页面系统
- 服务器统计集成，工作人员和成员名单，我的世界状态
- Google reCAPTCHA 选项，两因素身份验证，Minecraft 帐户验证
- 语音服务器查看器（基于Discord）

### v**2.0.0（正式版）**

- API – 如果与Nameless Plugin for v2结合使用，可以提供与您的 Minecraft 服务器的集成。
- 自定义页面系统 创建您自己的 HTML 页面，甚至根据排名限制对它们的访问。
- 强大的论坛系统。新的模板和语言系统，允许完全自定义。
- Minecraft 集成 可以验证注册帐户，或完全禁用它们。
- 新的强大模块系统允许进一步的 NamelessMC 集成。
- 友好的 URL 选项（需要 mod_rewrite）。
- 小部件系统 允许模块创建小部件，小部件可以显示在大多数面向用户的页面上并显示几乎所有内容。
- PlaceholderAPI Sync 将用户占位符从您的服务器同步到您的 NamelessMC 网站。

## 下载

仅提供原帖地址下载：https://github.com/NamelessMC/Nameless/releases

## 最后

我21年参与了这个程序从v1程序开始的大部分汉化工作，除了些专有名词其他均已完成中文翻译，翻译进度为85%。我也很高兴能参与到这个项目中的一角，即使是简单的汉化。

如今看到v2.0.0正式版的发布，他的pre版足足有13版，每版都在优化，听取论坛朋友的建议加功能。甚至，这么打磨的网站程序作品还是在Github开源，令人动容。

不过，我也有个想法。如果不仅仅是汉化，还能本地化地集成微信QQ登录和像Kook这样国内类Discord的软件，会不会让整个程序在中国的影响更大？

如果还需要其他的MCmod、插件、整合包、资源包等可以找我帮忙找哦~ 