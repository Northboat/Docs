---
title: 数理统计和参数估计
date: 2022-6-19
tags:
  - Probability
---

> 在实际应用中，很多情况事先并不知道随机变量的分布函数是什么，有的时候即便知道服从什么样的分布类型，但是却不清楚具体的参数是什么，这就需要借助于统计的知识加以明确
>
> 统计学：以偏概全

## 数理统计的基本概念

### 总体、样本和统计量

总体：研究对象的全体，记为`X`。如要统计八百万个人，总体就是这八百万人，`X`可能的取值有八百万个

个体：研究对象中某一个对象的指标叫做个体

样本：若干个个体的集合，记作`(X1,X2,...,Xn)`。如`(X1,X2,...,Xn)`为`n`维随机变量，`n`也被称为样本容量

样本观察值：`Xi`具体取值的集合`(x1,x2,...,xn)`称作样本观察值

简单随机样本：设`(X1,X2,...,Xn)`为总体`X`的样本，`(X1,X2,...,Xn)`是简单随机样本，当且仅当

- `(X1,X2,...,Xn)`之间相互独立：个体之间毫无关联
- `(X1,X2,...,Xn)`与总体`X`的分布相同：能够很好的反映总体规律

统计量：`(X1,X2,...,Xn)`为来自于总体`X`的样本，`(X1,X2,...,Xn)`的无参表达式为`X`的统计量，如
$$
\frac{X_1+X_2+X_3}{3},\quad\quad X_1^2+X_2^2+X_3^2,\quad\quad aX_1+2X_2-X_3
$$

- 其中第一、二是统计量，第三不是统计量

- 统计量是无穷无尽的，但有价值的统计量并不多：如特朗普和我，我没有统计价值，而特朗普有

有价值的统计量：

样本均值（期望）：
$$
\overline{X}=\frac{1}{n}\sum_{i=1}^{n}X_i
$$
样本的k阶原点距：
$$
A_k=\frac{1}{n}\sum_{i=1}^{n}X_i^k
$$
如1阶原点距为样本均值，2阶原点距为：
$$
A_2=\frac{1}{n}(x_1^2+x_2^2+...+x_k^2)
$$
样本方差：
$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\overline{X})
$$
回顾正态分布：

> 接下来介绍的三个抽样分布都基于服从标准正态分布的总体

若总体`X～N(0,1)`，服从标准正态分布

则其样本`(X1,X2,...,Xn)`

- 各随机变量相互独立
- 均服从标准正态分布

对于总体`X～N(2,8)`，现有样本`X1,X2`遵循总体分布，则
$$
aX_1+bX_2\sim N(2a+2b,8a^2+8b^2)\rightarrow
\frac{(aX_1+bX_2)-(2a+2b)}{2\sqrt{2a^2+2b^2}}\sim N(0,1)
$$

### 三个抽样分布

#### 卡方分布

`(X1,X2,...,Xn)`均相互独立且服从标准正态分布，则
$$
X_1^2+X_2^2+...+X_n^2=Z\sim\Chi^2
$$

- 随机变量的平方仍为随机变量
- 随机变量的和仍为随机变量

定义若干标准正态分布的平方和构成的随机变量服从卡方分布

卡方分布的性质：

- 维数为1的卡方分布就是标准正态分布的平方

$$
X\sim N(0,1)\rightarrow X^2\sim\Chi^2(1)
$$

- 两个独立的塌方分布相加，其结果的随机变量为他们维数之和的卡方分布

$$
X\sim\Chi^2(m),Y\sim\Chi^2(n),X\perp Y\rightarrow X+Y\sim\Chi^2(m+n)
$$

- 卡方分布的期望为其维数`n`，方差为维数的两倍，即`2n`

$$
X\sim\Chi^2(n)\rightarrow E(X)=n,D(X)=2n
$$

- 右范围点和左范围点，对于卡方分布的密度函数，对于其面积为`a/2`的点，从右向左的横坐标记为右范围点，从左向右的横坐标记为左范围点

$$
\Chi^2_{1-\frac{\alpha}{2}}\quad\quad\Chi^2_{\frac{\alpha}{2}}
$$

<img src="./assets/kafang.png">

对于非标准正态分布的总体`X~N(u,a^2)`

其样本`(X1,X2,...,Xn)`同样服从`N(u,a^2)`

根据标准化：
$$
\frac{X_i-u}{\sigma}\sim N(0,1)
$$
则
$$
(\frac{X_1-u}{\sigma})^2+(\frac{X_2-u}{\sigma})^2+...+(\frac{X_n-u}{\sigma})^2\sim\Chi^2(n)
$$
即
$$
\frac{1}{\sigma^2}\sum_{i=1}^n(X_i-u)^2\sim\Chi^2(n)
$$

#### t分布

`t`分布也是一个随机变量，是标准正态分布和卡方分布的商

前提条件：
$$
X\sim N(0,1),Y\sim\Chi^2(n),X\perp Y
$$
将上述标准正态分布和卡方分布做如下除法得
$$
\frac{X}{\sqrt{\frac{Y}{n}}}=\tau\sim t(n)
$$
例题：设有总体`X~N(0,4)`，现有样本`X1,X2,X3,X4`，问
$$
A=\frac{X_1-X_2}{\sqrt{X_3^2+X_4^2}}\sim\quad?
$$
上述随机变量`A`属于什么分布？

考虑分子
$$
X_1-X_2\sim N(0,8)\rightarrow\frac{X_1-X_2}{2\sqrt{2}}\sim N(0,1)
$$
考虑分母
$$
X_3\sim N(0,4)\rightarrow \frac{X_3}{2}\sim N(0,1)\rightarrow\frac{X_3^2+X_4^2}{4}\sim\Chi^2(2)
$$
用一个正态分布除以卡方分布开根，得t分布
$$
U=\frac{\frac{X_1-X_2}{2\sqrt{2}}}{\sqrt{\frac{X_3^2+X_4^2}{4}\times\frac{1}{2}}}=\frac{X_1-X_2}{\sqrt{X_3^2+X_4^2}}\sim \Chi^2(2)
$$
完全符合，其中`1/2`就是那个常数`1/n`，`X`是一个标准正态分布，`Y`是一个`n`维的卡方分布
$$
\frac{X}{\sqrt{\frac{Y}{n}}}=\tau\sim t(n)
$$


t分布的性质：

- t分布的期望为0
- t分布近似服从标准正态分布
- t分布的密度函数关于y轴对称，为偶函数，和卡方分布一样有左右范围点，并且

$$
t_{1-\frac{\alpha}{2}}^n=-t_{\frac{\alpha}{2}}^n
$$

#### F分布

是两个卡方分布的商

前提条件为
$$
X\sim\Chi^2(m),Y\sim\Chi^2(n),X\perp Y
$$
将两个卡方分布做如下除法得
$$
\frac{X/m}{Y/n}\sim F(m,n)
$$

- 其中`m,n`称为自由度


例题：
$$
U\sim t(3)\quad U^2\sim\quad?
$$
t分布是标准正态分布和卡方分布的商
$$
U=\frac{X}{\sqrt{Y/3}}\quad X\sim N(0,1),Y\sim\Chi^2(3)
$$
则有
$$
U^2=\frac{X^2/1}{Y/3}
$$
又因为
$$
X^2\sim\Chi^2(1),Y\sim\Chi^2(3)
$$
所以
$$
U^2\sim F(1,3)
$$
F分布的性质：

- `X~F(m,n)`，则`1/X~F(n,m)`
- F分布的密度函数，分为左右范围点

$$
F_{1-\frac{\alpha}{2}}(m,n)\quad F_{\frac{\alpha}{2}}(m,n)
$$

- 当`0<alpha<1`，对于两个F分布的范围点有如下关系

$$
F_{1-\alpha}(m,n)=\frac{1}{F_{\alpha}(m,n)}
$$

### 正态总体下的常见分布

设`X~N(u,a^2)`，取出样本`(X1,X2,...,Xn)`，各个体相互独立并且和总体分布相同

样本均值为：
$$
\overline{X}=\frac{1}{n}X_1+\frac{1}{n}X_2+...+\frac{1}{n}X_n
$$
易知这个均值同样是一个正态分布

根距正态分布相加的规则
$$
aX_1+bX_2\sim N(au+bu,a^2\sigma^2+b^2\sigma^2)
$$
可得
$$
\overline{X}\sim N(u,\frac{\sigma^2}{n})
$$
则均值的期望和方差分别为：正态分布期望为`u`，方差为`v^2`
$$
E(\overline{X})=u\quad D(\overline{X})=\frac{\sigma^2}{n}
$$

将均值标准化可得
$$
\frac{\overline{X}-u}{\frac{\sigma}{\sqrt{n}}}\sim N(0,1)
\tag1
$$

其中`sigma`是总体的均方差（方差开根），将这个`sigma`换成样本的均方差`S`，可得
$$
\frac{\overline{X}-u}{\frac{S}{\sqrt{n}}}\sim t(n-1)
\tag2
$$
之前已经推过，对于一个不标准的正态分布序列`(X1,X2,...,Xn),Xi~N(u,a^2)`，有平方和服从卡方分布的特点
$$
\frac{1}{\sigma^2}\sum_{i=1}^n(X_i-u)^2=\frac{(X_1-u)^2}{\sigma^2}+...+\frac{(X_n-u)^2}{\sigma^2}\sim \Chi^2(n)
\tag3
$$
上式中，`u`是总体期望（均值），将这个`u`换成样本均值$\overline{X}$，可得
$$
\frac{1}{\sigma^2}\sum_{i=1}^n(X_i-\overline{X})^2\sim \Chi^2(n-1)
$$
乘除变换得
$$
\frac{n-1}{\sigma^2}\frac{1}{n-1}\sum_{i=1}^n(X_i-\overline{X})^2\sim \Chi^2(n-1)
$$
将项中右侧替换为样本方差`S^2`，得
$$
\frac{n-1}{\sigma^2}S^2\sim\Chi^2(n-1)
\tag4
$$
即样本方差乘以`总体方差分之样本数-1`服从样本数减一的卡方分布

易知样本方差为
$$
S^2=\frac{1}{n-1}\sum_{i=1}^n(X_i-\overline{X})^2
$$

- 注意这里的S^2仍为一个随机变量，因为没有代入具体的值

$$
E(S^2)=\sigma^2
\tag5
$$

即样本方差的期望为总体方差，这很合理

最后一个结论，样本均值和样本方差相互独立
$$
\overline{X}\perp S^2
\tag6
$$
上述`(1)(2)(3)(4)(5)(6)`式为常考的六个结论

## 参数估计

> 一般情况下考的很少

参数估计的背景：总体分布`X`已知，但含位置参数`a(或a1,a2)`，如指数分布`X~E(λ)`，`λ`未知；正态分布`X~N(u,v^2)`，`u,v`未知

### 矩估计法

> 点估计法
>
> 不管随机变量类型，管未知参数个数

`Case1`：总体`X`分布已知，含一个未知参数`a`

1. 取出简单随机样本`(x1,x2,...,xn)`

2. 求`E(X)=?`，一定含有未知数`a`：称为总体的一阶原点矩

3. $$
   \overline X=\frac{1}{n}\sum_{i=1}^{n}X_i
   $$

   这里的样本均值也被称为：样本的一阶原点矩

4. 令`总体一阶原点矩=样本一阶原点矩`，解出未知数`a`

这里解出的不是准确值，记为$\widehat a$，为`a`的估计量。如果带入具体的观察值，则为`a`的估计值

`Case2`：`X`分布已知，含未知参数`a1,a2`

1. 取出简单随机样本`(x1,x2,...,xn)`

2. 求出`E(X)=?,E(X^2)=?`，得到两个关于`a1,a2`的等式

3. $$
   \overline X=\frac{1}{n}\sum_{i=1}^{n}X_i\quad\quad A_2=\frac{1}{n}\sum_{i=1}^{n}X_i^2
   $$

   分别求出样本的一阶、二阶原点矩

4. 联立上式可得关于`a1,a2`的方程组，解出未知数`a1,a2`

同样这里是`a1,a2`的估计量，若带入观察值则为估计值

### 最大似然估计法

> 也属于点估计
>
> 不管参数个数，管随机变量类型

`Case1`：总体`X`为离散型，未知数`θ`

1. 取出简单随机样本以及样本观察值

2. 求出似然函数
   
   - 离散型随机变量的似然函数
   
   $$
   \begin{aligned}
   L&=P(X_1=x_1)P(X_2=x_2)...P(X_n=x_n)\\
   &=P(X=x_1)...P(X=x_n)
   \end{aligned}
   $$
   
   - 连续型随机变量的似然函数，其中`f(xi)`为随机变量`Xi`的概率密度函数在`xi`处的取值，其实这里应该对每个`f`进行积分，即求出分布函数取值之积，但因为不影响似然函数求导结果，所以省去
     $$
     L=f(x_1)f(x_2)...f(x_n)
     $$
   
3. 求`lnL=?`，即求出似然函数的自然对数，方便求导化简

4. 建立方程
   $$
   \frac{d}{d\theta}lnL=...=0=>\widehat{\theta}=\varphi(x_1,x_2,...,x_n)
   $$

此为未知数的最大似然估计值（`L`依据`xi`建立），若想得最大似然估计量，则要把`(x1,...,xn)`恢复成`(X1,...,Xn)`

`Case2`：当总体为连续型随机变量，未知数1个（无所谓多少个，多个则求偏导）

1. 求似然函数
   $$
   L=f(x_1,\theta)f(x_2,\theta)...f(x_n,\theta)
   $$

2. 取对数`lnL=?`

3. 建立方程
   $$
   \frac{d}{d\theta}lnL=...=0=>\widehat\theta(x_1,...,x_n)
   $$

### 区间估计

> 考的很少且非重点，略

