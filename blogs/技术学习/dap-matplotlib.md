---
title: Python数据分析 Ⅱ：matplotlib模块
date: 2023/9/3
tags:
 - Python
categories:
 - 技术学习
---

# Python数据分析 Ⅱ：matplotlib模块

Data Analysis in Python : matplotlib module

![img](/uploads/2023/06/2024070710204615.png)

## 模块安装与引入

安装

```shell
pip install matplotlib
```

引用pyplot子库

```python
import matplotlib.pyplot as plt
```

在高中阶段的信息技术课程要求仅为可以使用pyplot子库提供函数绘图即可，故后文也仅讲此子库函数方法及呈现。

## 图表

我们从小学开始就接触图表，学到了柱状图📊，到之后初中学了折线图（线形图）。如果你留意Office类办公软件的话你会发现Excel的 插入>图表 选项卡中还有一堆你不认识的图表样式。其中我们信息技术课还需要知道散点图。
散点图可以表示通过多个坐标点来描绘出出数据的大致趋势，在数学中会用于回归分析，使用合适的函数对数据点进行拟合。散点图还会衍生出来很多图表比如气泡图等等类型。
还有柱形图有水平（barh）和垂直（bar）的两种，注意这两种在模块中命名有些许区别。其实也有个巧记的方法就是 水平（bar**h**）-横（**h**éng)

## 绘图

pyplot 中最基础的作图方式是以点作图，即给出每个点的坐标，pyplot 会将这些点在坐标系中画出，并用线将这些点连起来，即绘图前需将坐标点数据准备好。
数据可以是列表、字典、pandas中Series/DataFrame对象中的数据、excel表格读入，numpy/math模块生成等等

### 代码

（图遗失)

这部分的代码结构都比较固定。一共可以划分6为个部分：

①引入模块 ②格式处理（一般会给注释，不做考试要求） ③源数据 ④绘制图形代码 ⑤修饰美化 ⑥显示

### 实例

心型线

```python
import numpy as np
import matplotlib.pyplot as plt
plt.rcParams['axes.unicode_minus']=False  #运行配置参数总的轴（axes）正常显示正负号（minus）
t=np.linspace(-10,10,1000)
x=16*np.sin(t)**3
y=13*np.cos(t)-5*np.cos(2*t)-2*np.cos(3*t)-np.cos(4*t)
plt.plot(x,y)
plt.show()
```