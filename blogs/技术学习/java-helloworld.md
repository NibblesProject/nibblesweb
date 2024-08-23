---
title: Java上的HelloWorld，怎么这么多细节？
date: 2024/8/7
tags:
 - Java
categories:
 - 技术学习
---

> 课程链接[https://www.bilibili.com/video/BV1fh411y7R8](https://www.bilibili.com/video/BV1fh411y7R8) （不是推广，只是优秀的课程应该被广泛传播。）

本文就只列了一些课程重点和我踩过的一堆坑，新手学Java，我们相互学习交流。

## Java的跨平台性

![img](/uploads/2024/07/2024070812494711.jpg)

### 核心机制（JVM）：

1）JVM是一个虚拟的计算机，具有指令集并使用不同的存储区域。负责执行指令管理数据、内存、寄存器，包含在JDK中。
2）对于不同的平台，有不同的虚拟机。
3）Java虚拟机机制屏蔽了底层运行平台的差别，实现了“一次编译，到处运行”（跨平台）。

## 编译和运行流程：

![img](/uploads/2024/07/2024070812523578.jpg)

注意命令！`**javac**`是编译，`**java**`才是运行。`*.java`为源文件，`*.class`为字节码文件。

若程序无错是无任何提示，默默地在同目录下生成字节码文件。但是有错会报错在cmd，无法编译。

运行的本质是把字节码文件装载到JVM虚拟机内执行。

修改后的源文件需要重新编译，才能在再执行中生效。（并非前端的所改即得）

## Hello World！

```java
public class Hello {
    public static void main(String[] args) {
      System.out.println("Hello World!");
  }
}
```

细节，注意！有的是真实踩过的坑，有的是老师的提醒。

- `print`后面的字母是**小写的L**，即`l`。意为**"`line`"（行），在输出之后会自动添加一个换行符（`\n`）**。若不慎打成了`printIn`则会报错提示找不到这个方法。**Java语言严格区分大小写**
  有关打印到屏幕上的方法就`System.out.println()`和`System.out.print()`
- `main()`和`{}`间的空格是为了**编程规范**，程序能跑，但适当的空格有利于协作者的阅读。
- 但是Java应用程序的执行入口是`main()`方法。
  它有固定的书写格式`public static void main(String[] args)(…)`
- 每条花括号内的语句的后面要以`;`分号结束，凡是括号都是成对出现的。
- public class后的**类名要和文件名保持一致**（因为Java类 `Hello` 被声明为 `public`）
- 注意在编译时cmd窗口的代码页编码和代码编辑器中显示的文件编码是否相同（以下![img](/uploads/2024/07/2024070814124741.png)可展开)
- 若输出内容包含中文，务必要**设置中文编码`GBK`或`UTF-8`**

<details class="wp-block-details"><summary>如何查看cmd窗口的代码页编码？</summary><!-- wp:paragraph {"placeholder":"Type / to add a hidden block"} -->
<p>右键cmd窗口标题栏，属性→当前代码页</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":575,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="/uploads/2024/07/2024070814063589.png" alt="" class="wp-image-575"></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"placeholder":"Type / to add a hidden block"} -->
<p>不推荐更改代码页编码，其更改注册表比较繁琐。文件转编码其实更快。</p>
<!-- /wp:paragraph --></details>

<details class="wp-block-details"><summary>如何按指定编码保存？</summary><!-- wp:paragraph {"placeholder":"Type / to add a hidden block"} -->
<p>以VSCode编辑器为例，</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":576,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="/uploads/2024/07/2024070814111993.gif" alt="" class="wp-image-576"></figure>
<!-- /wp:image --></details>

执行命令依次为

```shell
javac Hello.java
java Hello
```

注意后面的指令不用带.class后缀，因为类的名字就是`Hello`

## 其他Tips

- 编译后，源文件中每一个类都会对应每一个字节码文件，对应依据就是同名
- 【再提一下】如果源文件包含一个`public`类则文件名必须按该类名命名！
- 一个源文件中最多只能有一个`public`类。其它类的个数不限。也可以将main方法写在非public类中，然后指定运行非public类，这样入口方法就是非public的main方法。main可以在不同类中。