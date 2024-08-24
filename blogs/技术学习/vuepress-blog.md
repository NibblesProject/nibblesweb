---
title: VuePress —— 全流程建立博客的另一灾备方案
date: 2024/8/24
tags:
 - VuePress
categories:
 - 技术学习
---

# VuePress —— 全流程建立博客的另一灾备方案

Another disaster recovery plan for the blog: VuePress. I want to share VuePress programing experience.

## 为什么要做这一方案？

作为站长的我们首先要确保博客业务的连续性，还有文章等数据的备份。次之还有备份站运营成本上的考虑，其中本站采用的是知名的WordPress程序，在Docker容器中运行，虽然说容器本身迁移方便，但是如果这台VPS一时出问题了，那么还是要买且迁移到新的VPS来，对于维护成本来说还是有点高的。

而且现在的Serverless开发平台（也就是vercel、netlify、zeabur）免费计划中跑VuePress静态站点绰绰有余，然后静态站前端代码从GitHub 仓库里抓取，每次我们对博客的修改，从本地git到仓库中，然后触发Serverless的重新构建机制，域名的话可以用*.eu.org，这样整套流程下来没有💴上的成本，且网站都在国外也不会因国内原因导致无法访问甚至封禁，本地也保存了网站的数据。

## 写在建站前你必须要的

1. 基本的电脑操作知识（知道怎么装软件，知道怎么复制粘贴，会用代码编辑器的基本功能即可）
2. 有个合适的国外proxy，[Watt Toolkit](https://steampp.net/)中也有免费的Github加速选项可以试试
3. 有Github账号（新手注册登录即可）
4. 合适的翻译工具，最好支持截图翻译
5. 会写MarkDown文件
6. 一个能随时回答你发的问题的AI，如kimi.ai

## 具体实现流程

### 1、NodeJS环境部署

NodeJS的版本不建议太高，优先选择LTS（长期支持版本），博主选用的是`v18.20.4(LTS x64)`

【挂proxy】官网下载：https://nodejs.org/dist/v18.20.4/node-v18.20.4-x64.msi
中文镜像站：https://npmmirror.com/mirrors/node/v18.20.4/node-v18.20.4-x64.msi

直接默认安装位置即可，NodeJS程序本身只有几十MB。在安装过程到 `tools for native modules` 步骤的时候，不要勾选，然后下一步直到安装完成即可，安装完后还需重启系统。

检查版本，【Win+R快捷键输入cmd调出终端】

```
node -v   #开头是node，不是nodejs！
```

出现v18.20.4即安装成功。

本篇我们采用`npx`安装，类似于`npm`，它们都是NodeJS里预置的软件包管理器。什么意思倒不用在意，只是知道它们是指令的开头即可。

然后为了后续的访问速度还要换镜像源：https://nibbles.cyou/shift-source.html

### 2、VuePress 安装

博主选择的是带主题的`vuepress-reco`：https://theme-reco.vuejs.press/

#### 打开cmd

创建一个文件夹（这路径上不能有中文）并让cmd执行路径指向此处：

法一【Win11/10】：找到系统自带的“终端”软件，在设置中更改默认为cmd，然后直接在文件夹里右键，选择“在终端中打开”。若没有可以去Microsoft Store里下载“终端”这个软件。

![img](/uploads/2024/08/2024082404134370.gif)

法二【更简单】：更改路径栏为cmd，则打开的cmd直接就指向这个路径了。

![img](/uploads/2024/08/2024082403565163.gif)

#### npx命令安装并初始化

文档里，revili可视化搭建部署起来还是会有点问题。所以直接用下面的一行命令（npx开头的）

```
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

输入后待其下载完后会进入初始化选项

![img](/uploads/2024/08/2024082404245038.png)

第一问中：新的目录指的是在cmd指向的文件夹下再新建一个文件夹。(Y/n)，若是的话需要先开大写锁定（键盘上的capslock）后打y，若不是就n。一般情况下空文件夹里创建此项目可以直接n。

除了最后一个问题和第一个问题，其他均可后期更改 `config.ts` 里的配置改变。

### 3、配置VuePress-reco主题

#### 准备工作与层级关系

我喜欢用[WebStorm](https://www.jetbrains.com/zh-cn/webstorm/download/#section=windows)来改配置，当然你使用[VSCode](https://code.visualstudio.com/)也行，不过最好不要用“记事本”！

为了让我们的网站在更改后能及时看到，可以先dev运行下。在编辑器里打开文件夹后，打开` package.json` 即可看到运行的按钮：

<img src="/uploads/2024/08/2024082404464656.png" alt="webstorm" style="zoom: 33%;" />

<img src="/uploads/2024/08/2024082404481779.png" alt="webstorm" style="zoom: 33%;" />

初次运行成功时候，看到下方的编辑器内置的终端窗口中会弹出两个链接：

<img src="/uploads/2024/08/2024082404575497.png" alt="webstorm" style="zoom: 50%;" />

Local所指的是只能本地电脑访问的，
Network所指的是指内网里的设备都可以访问的，但外网无法访问。

改配置的时候，建议把浏览器窗口和编辑器窗口精简化，并排成两列的布局。<img src="/uploads/2024/08/2024082405010040.png" alt="webstorm" style="zoom: 25%;" />    

| 要更改的地方                   | 配置文件                                                |
| ------------------------------ | ------------------------------------------------------- |
| 公告侧边弹窗                   | `config.ts` 45行-98行bulletin                           |
| 首页模块及内容                 | `README.md` Frontmatter                                 |
| 首页顶部导航栏                 | `config.ts` 33行-44行navbar                             |
| 网站logo和作者头像             | `.vuepress/public` 替换同名文件，`logo.png`和`head.png` |
| 首页右上角固定的Github地址指向 | `config.ts` 第16行docsRepo                              |

这里只是一部分常用的需要改的地方

⭐ 配置文件更改时候最重要的是：  **注意层级**  ！让我们解析一下config.ts的前半段：

![img](/uploads/2024/08/2024082407332569.png)

各种不同颜色的圈圈，同样的颜色代表此为成对出现的。

值得一提的是，作者在原文档中部分的冒号为全角的冒号，他是打错了，但该配置的时候大家要认清并改过来哦！ 半角就是英文输入法下输入的，全角是中文输入法下的。半角`:` ，全角`：`比较紧凑要改！

尽量各条语句之间开头对齐，用缩进清晰明了地展示层级关系。

能改的仅有引号内的内容，若要删去或者添加需要按照格式整对注释或添加，有的参数不用的可以移到注释里。快速注释方法：【CTRL+/】

参数名称一般对应着这东西到底是用来干嘛的，可以借助截图翻译软件通过单词意思来填上合适的内容。

#### MarkDown中的Frontmatter

Frontmatter即是MarkDown文件中被两行` ---` 括起来的部分

文档中关于Frontmatter首页设置：https://theme-reco.vuejs.press/docs/theme/frontmatter-home.html

也是要按照格式一个个填，不过没有了引号和`,`结尾，但是一定要注意缩进。文档页面中最后有全部都应用上去的示例，可以先全部复制上，然后再删改。

注意，Frontmatter是会被主题解析的，各部分参数会显示到指定位置。---框起来以外的位置就是`README.md`的正文了，也就是`MdContent module`显示在首页上的内容。

### 4、Vite生成静态网页目录

<img src="/uploads/2024/08/2024082408162892.png" alt="webstorm" style="zoom: 50%;" />

点击此按钮开始build静态文件，当终端出现绿色的done的字样即代表生成完毕。（VSCode类似）

生成到了 `.vuepress/dist` 这个目录下面。

注意，每次更改（比如加文章、改样式）都需要重新生成一遍！

### 5、上传到Github

为了我们后续部署到Serverless平台，所以此处我们先利用Git上传到Github上。

Git官网下载：https://github.com/git-for-windows/git/releases/download/v2.46.0.windows.1/Git-2.46.0-64-bit.exe   安装过程直接一路下一步下去。

Github上创建一个new repository：https://github.com/new ，并对此命名，然后`Create repository`确认创建。新创建的里面不会有什么东西，但给了git的代码教程：

![img](/uploads/2024/08/2024082408434768.png)

Git要加速使用系统proxy的话可以看：https://nibbles.cyou/shift-source.html

如果你不太想输入很多命令的话（看着不多，其实后面git add的时候需要加很多文件），可以试下[Github Desktop](https://desktop.github.com/download/)，安装后登录账号密码，然后把仓库拉取到本地并作为同步文件夹。

之后把整个项目文件夹（不只是.vuepress）全部拖到同步文件夹中让客户端上传上去。在提交的时候需要自己写一点commit日志，比如如上的first commit。

以后每次只要网页目录有变动，就及时使用git或Github Desktop上传。

### 6、部署到zeabur

zeabur：https://zeabur.com

邮箱注册后会发送登陆链接到你的邮箱，从邮件中的链接进去即是后台。

创建项目→新建服务→Github（从Github仓库部署）→选择刚创建的存网页的仓库

然后趁机还没运行完毕，下拉找到设置→根目录，修改为`/.vuepress/dist`

回到上面”重新部署“，等待片刻，当出现运行中并有绿点则代表部署成功。

如果需要测试访问，可以直接使用一个zeabur.app的二级域名：下拉，网络→公开→生成域名→填入你喜欢的前缀，稍等下就可以使用 `填的前缀.zeabur.app `来访问了。

### 7、免费域名eu.org

> 免费获取 EU.org 顶级域名丨岚天小窝
>
> https://blog.ltya.top/posts/eu-org.shtml

更改为自己申请到的eu.org域名：下拉，网络→公开→自定义域名→到解析服务那里CNAME解析，如下

![img](/uploads/2024/08/2024082409061287.png)

稍等片刻，即可直接访问了~

------

看到这里的你应该能手搓出一个VuePress的站点了吧~ 还有问题的话不妨问问AI哦。

既然有了自己的站点，那就努力更新内容吧！