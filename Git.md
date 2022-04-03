# Git

## 1.起步

**版本控制**

### 1.文件的版本

![image-20220402125451861](/Users/sime/Library/Application Support/typora-user-images/image-20220402125451861.png)

### 2.版本控制软件

![image-20220402125642828](/Users/sime/Library/Application Support/typora-user-images/image-20220402125642828.png)

### 3.使用版本控制软件的好处

![image-20220402125824833](/Users/sime/Library/Application Support/typora-user-images/image-20220402125824833.png)

### 4.版本控制系统的分类

![image-20220402130152584](/Users/sime/Library/Application Support/typora-user-images/image-20220402130152584.png)

### 4.1本地版本控制系统

![image-20220402130402622](/Users/sime/Library/Application Support/typora-user-images/image-20220402130402622.png)

#### 4.2集中化的版本控制系统

![image-20220402130706717](/Users/sime/Library/Application Support/typora-user-images/image-20220402130706717.png)

### 4.3分布式版本控制系统

![image-20220402131033285](/Users/sime/Library/Application Support/typora-user-images/image-20220402131033285.png)

## Git基础

### 1.什么是Git

Git是一个开源的分布式版本控制系统，是目前世界上最先进，最流行的版本控制。可以快速高效地处理从很小到很大的项目版本管理。

特点：项目越大越复杂，下同开发者越多，越能体现出Git的**高性能和高可用性！**

### 2.Git的特性

Git之所以快速和高效，主要依赖于它的如下两个特性：

1. 直接记录快照，而非差异比较
2. 近乎所有操作都是本地执行

#### 2.1SVN的差异比较

传统的版本控制系统是基于差异的版本控制，它们存储的是**一组基本文件和每个文件随时间逐步累积的差异**。

![image-20220402131719327](/Users/sime/Library/Application Support/typora-user-images/image-20220402131719327.png)

好处：节省磁盘空间

坏处：耗时、效率低

在每次切换版本的时候，都需要在基本文件的基础上，应用每个差异，从而生成目标版本对应的文件。

#### 2.2Git的记录快照

Git快照是在原有文件版本的基础上重新生成一份新的文件，类似于备份。为了效率，如果文件没有修改，Git不再重新存储文件，而是只保留一个链接指向之前存储的文件。

![image-20220402132446966](/Users/sime/Library/Application Support/typora-user-images/image-20220402132446966.png)

特点：空间换时间

### 2.3近乎所有操作都是本地执行

在Git中的绝大多数操作都只需要访问本地文件和资源，一般不需要来自网络上其他计算机的信息。

![image-20220402132829535](/Users/sime/Library/Application Support/typora-user-images/image-20220402132829535.png)

1. 断网后依旧可以在本地对项目进行版本管理
2. 联网后把本地修改的记录同步到云端服务器即可

#### 3.Git的三个区域

使用Git管理项目，拥有三个区域，分别是工作区、咱村去、Git仓库。

![image-20220402133300195](/Users/sime/Library/Application Support/typora-user-images/image-20220402133300195.png)

#### 4.Git的三种状态

![image-20220402133518346](/Users/sime/Library/Application Support/typora-user-images/image-20220402133518346.png)

注意：

工作区的文件被修改了，但还没有放到暂存区，就是已修改状态。

如果文件已修改并放入暂存区，就属于已暂存状态。

如果Git仓库中保存着特定版本的文件，就属于已提交状态。

#### 5.基本的Git工作流程

![image-20220402133939465](/Users/sime/Library/Application Support/typora-user-images/image-20220402133939465.png)

## Git基础-git的基本操作

### 4.检查配置信息

```Git
#查看所有的全局配置项
git config --list --global
#查看指定的全局配置项
git config user.name
git config user.email
```

### 5.获取帮助信息

可以使用git help <verb> 命令，无需联网即可在浏览器中打开帮助手册，例如：

```git
#要想打开 git config 命令的帮助手册
git help config
想要获取 git config 命令的开素参考
git config -h

```

### 1.获取Git仓库的两种方式

1. 将尚未进行的版本控制的本地目录转换为Git仓库
2. 从其他服务器克隆一个已存在的Git仓库

以上两种方式都能够在自己的电脑上得到一个可用的Git仓库

### 2.在现有的目录中初始化仓库

如果自己有一个尚未进行版本控制的项目目录，想要用Git来控制它，需要执行如下两个步骤：

1. 在项目目录中，通过鼠标右键打开“Git Bash"
2. 执行git init 命令将当前的目录转化为GIt仓库

git init 命令会创建一个名为.git 的隐藏目录，**这个.git目录就是当前目录的Git仓库**，里面包含了出事的**必要组成部分**。

### 3.工作区中文件的4种状态

工作区中的每一个文件可能有4种状态，这四种状态共分为两大类，如图所示：

![image-20220402164011217](/Users/sime/Library/Application Support/typora-user-images/image-20220402164011217.png)

Git 操作的终极结果：让工作区的文件都处于“**未修改**”的状态

### 4.检查文件状态

可以使用git status命令查看文件处于什么状态，例如：

![image-20220402164650071](/Users/sime/Library/Application Support/typora-user-images/image-20220402164650071.png)

在状态报告中可以看到新建的index.html文件出现在Untracked files （未跟踪的文件）下面。

未跟踪的文件意味着Git在之前的快照（提交）中没有这些文件；Git不会自动将之纳入跟踪范围，除非明确地告诉它“我需要使用Git跟踪管理该文件”。

### 5.以精简的方式显示文件状态

使用git status 输出的状态报告很详细，但有些繁琐。如果希望以精简方式显示文件的状态，可以使用如下两台完全等价的命令，其中-s是--short的简写形式：

```git
#以精简的方式显示文件状态
git status -s 
git status --short
```

未跟踪的文件前面有红色的??标记，例如：

![image-20220402165448666](/Users/sime/Library/Application Support/typora-user-images/image-20220402165448666.png)

### 6.跟踪新文件

使用git add 开始跟踪一个文件。所以，要跟踪index.html文件，运行如下的命令即可：

```git
git add index.html
```

此时再运行 git status 命令，会看到index.html文件在Changes to be conmmitted 这行下面说明已被跟踪，并处于暂存状态：

![image-20220402165916806](/Users/sime/Library/Application Support/typora-user-images/image-20220402165916806.png)

![image-20220402165939175](/Users/sime/Library/Application Support/typora-user-images/image-20220402165939175.png)

### 7.提交更新

先赞暂存区中有一个Index.html文件等待被提交到Git仓库中进行保存.可以执行git commit 命令进行提交，其中 -m 选项后面是本次的提交消息，用来**对提交的内容进一步的描述**：

```git
git conmmit -m "新建了index.html文件"
```

提交成功后，会显示如下的信息：

![image-20220402170539604](/Users/sime/Library/Application Support/typora-user-images/image-20220402170539604.png)

提交成功之后，再次检查文件的状态，得到提示如下：

![image-20220402170627158](/Users/sime/Library/Application Support/typora-user-images/image-20220402170627158.png)

证明工作区中所有的文件都处于 “未修改”的状态，**没有任何文件需要提交**

![image-20220402170937341](/Users/sime/Library/Application Support/typora-user-images/image-20220402170937341.png)

### 8.对已提交的文件进行修改

目前，index.html文件已经被Git跟踪，并且工作区和Git仓库中的index.html文件内容保持一致。当我们修改了工作区中index.html的内容之后，再次运行**git status 和git status -s** 命令，会看到如下的内容：

![image-20220402171243457](/Users/sime/Library/Application Support/typora-user-images/image-20220402171243457.png)

文件 index.html 出现在Changes not Staged for commit 这行下面，说明已跟踪**文件的内容发生了变化，但是还没有放到暂存区。**

注意：修改过的，没有放入暂存区的文件前面有红色的M标记。

### 9.暂存已修改的文件

目前，工作区中的index.html文件已被修改，如果要暂存这次修改，需要再次运行git add 命令，这个命令是个多功能的命令，主要有如下3功效：

1. 可以用它开始跟踪新文件
2. 把已跟踪的、且已修改的文件放到暂存区
3. 把有冲突的文件标记为已解决状态

![image-20220402173103150](/Users/sime/Library/Application Support/typora-user-images/image-20220402173103150.png)

### 10.提交已暂存的文件

再次运行git commit -m “提交消息”命令，即可将暂存区中记录的index.html的快照，提交到Git仓库中进行保存：

![image-20220402173814263](/Users/sime/Library/Application Support/typora-user-images/image-20220402173814263.png)

![image-20220402174013497](/Users/sime/Library/Application Support/typora-user-images/image-20220402174013497.png)



### 11.撤销对文件的修改

撤销对文件的修改指的是：把对工作区中对应文件的修改，还原或Git仓库中所保存的版本。

操作的结果：所有的结果会丢失，且无法恢复！危险性比较高，请慎重操作！

![image-20220402174620020](/Users/sime/Library/Application Support/typora-user-images/image-20220402174620020.png)

```git
git checkout --index.html
```

撤销操作的本质：用Git仓库中保存的文件，覆盖工作区中指定的文件。

#### 12.向暂存区中一次性添加多个文件

如果需要被暂存的文件个数比较多，可以使用如下的命令，一次性将所有的新增和修改过的文件加入暂存区：

```git
git add .
```

**今后在项目开发中，会经常使用这个命令，将新增和修改过后的文件加入暂存区。**

#### 13.取消暂存文件

如果需要从暂存区中移除对应的文件，可以使用如下命令：

```git
git reset HEAD 要移除的文件名称

#移除暂存区中的所有
git reset HEAD .
```

#### 14.跳过使用暂存区

Git标准的工作流程是**工作区→暂存区→Git仓库**，但有时候这么做略显繁琐，此时可以跳过暂存区，直接将工作区中的修改提交到Git仓库，这时候Git工作的流程简化为了**工作区→Git仓库**。

Git提供了一个跳过使用暂存区域的方式，只要宰提交的时候，

给git commit加上-a选项，Git就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过了git add步骤：

```git
git commit -a -m"描述消息"
```

#### 15.移除文件

从Git仓库中移除文件的方式有两种：

1. 从Git仓库和工作区中同时移除对应的文件
2. 只从Git仓库中移除指定的文件，但保留工作区中对应的文件

```git
#从Git仓库和工作区中同时移除 index.js 文件
git rm -f index.js

#只从 Git 仓库中移除 index.css 单保留工作区中的index.css文件
git rm --cached index.css
```

#### 16.忽略文件

一般我们总会又些文件无需纳入Git的管理，也不希望它们总出现在未跟踪文件列表，我们可以创建一个名为.gitignore 的配置文件，列出要忽略的文件匹配模式。

文件.gitignore的格式规范如下：

1. 以#开头的是注释
2. 以/结尾的是目录
3. 以/开头防止递归
4. 以！开头表示去反
5. 可以使用glob模式进行文件和文件夹和文件夹的匹配 (glob指简化了的正则表达式)

#### 17.glob模式

所谓glob模式是指简化了的正则表达式：

1. 星号*匹配零个或多个任意字符
2. [abc]匹配任何一个列在方括号中的字符(此案例匹配一个a或b或一个词c)
3. 问号?只匹配一个任意字符
4. 在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如[0-9]表示匹配所有0到9的数字）
5. 两个星号** 表示匹配任意中间目录（比如a/**/z可以匹配a/z、a/b/z或a/b/c/z等）

#### 18.gitignore文件的例子

 

```git
#忽略所有的 .a文件
*.a
#但跟踪所有的lib.a 即使你在前面忽略了.a文件
!lib.a

#只忽略当前目录下的TOOO文件，而不忽略 subdir/TOOO
/TOOO

#忽略任何目录下名为build 的文件夹
build/

#忽略 doc/notes.txt 但不忽略doc/sever/arch.txt
doc/*.txt

#忽略doc/目录及其所有子目录下的 .pdf文件
doc/**/*.pdf
```

#### 19.查看提交历史

如果希望回顾项目的提交历史，可以使用git log 这个简单且有效的命令。

```git
#按时间先后顺序列出所有的提交历史，最近的提交排在最上面
git log

#只展示最新的两条提交历史，数字可以按需进行填写
git log -2

#在一行上展示最近两条提交历史的信息
git log -2 --pretty=oneline

#在一行上展示最近两条提交历史的信息，并自定义输出的格式
# %h 提交的简写哈希值。 %an 作者名字。  %ar  作者修订日期，按多久以前的方式显示     %s  提交说明
git log -2 --pretty=format:"%h | %an | %ar | %s"
```

#### 20.回退到指定的版本

```git
#在一行上展示所有的提交版本
git log --pretty=oneline

#使用git reset --hard 命令，根据指定的提交 ID 回退到指定版本
git reset --hard <CommitID>

# 在旧版本中使用 git reflog --pretty=oneline 命令，查看命令操作的历史
git reflog --pretty=oneline

# 再次根据最新的提交 ID 跳转到最新的版本
git reset --hard <CommitID>
```



## 3.Github

### 1.什么是开源

![image-20220403160540368](/Users/sime/Library/Application Support/typora-user-images/image-20220403160540368.png)

通俗理解：开源是指不仅提供程序还提供程序的源代码，

闭源是指提供程序，不提供源代码

### 2.什么是开源许可协议

开源并不是意味着没有限制，为了限制使用者的使用范围和保护作者的权利，每个开源项目都应该遵守开源许可协议(Open Source Liscense).

### 3.常见的5种开源许可协议

1. BSD
2. Apache Licence2.0
3. **GPL**

- 具有传染性的一种开源协议，不允许修改和衍生的代码作为闭源的商业软件发布和销售
- 使用GPL的最著名的软件项目是：Linnux

1. LGPL
2. **MIT**

- 是目前限制最少的协议，唯一的条件：在修改后的代码或者发型包中，必须包含元作者的许可信息。
- 使用MIT的软件项目有：jquery、Node.js

### 4.为什么要拥抱开源

开源的核心思想是“我为人人，人人为我”，人们越来越喜欢开源大致是出于以下3个原因：

1. 开源给使用者更多的控制权
2. 开源让学习变得容易
3. 开源才有真正的安全

开源是软件开发领域的大趋势，拥抱开源就像站在巨人，不用自己重复造轮子，让开发越来越容易。

### 5.开源项目托管平台

专门用于免费存放开源项目源代码的网站，叫做开源项目托管平台。目前世界上比较出名的开源项目托管平台主要有以下3个：

- Github（全球最牛的开源项目托管平台，没有之一）
- Gitlab（对代码私有性支持较好，因此企业用户较多）
- Gitee（有叫做码云，是国产的开源项目托管平台，访问速度快，纯中文姐main、使用友好）



注意：以上3个开源项目托管平台，只能托管以Git管理的项目源代码，因此，它们的名字都以Git开头。

### 6.什么是Github

Github是全球最大的开源项目托管平台。因为只支持Git作为唯一的版本控制工具，故名Github。

在Github中，你可以：

1. 关注自己喜欢的开源项目，为其点赞打call
2. 为自己的开源项目做贡献（Pull Request）
3. 和开源项目的作者讨论Bug和提需求（lssues）
4. 把喜欢的项目复制一份为自己的项目进行修改（Fork）
5. 创建属于自己的开源项目
6. etc……

### 3.远程仓库的两种访问方式

Github上的远程仓库，有两种访问方式，分别是HTTPS和SSH。它们的区别是：

1. HTTPS：**零配置**；但是每次访问仓库时，需要重复输入Github的账号和密码才能成功
2. SSH：SSH：**需要进行额外的配置**；但是配置成功后，每次访问仓库时，不需重复输入Github的账号和密码

注意：在实际开发中，推荐使用SSH的方式访问远程仓库。

### 4.基于HTTPS将本地仓库上传到Github

![image-20220403170132900](/Users/sime/Library/Application Support/typora-user-images/image-20220403170132900.png)

```git
#非第一次提交代码，使用
git push
```

### 5.SSH key

SSH key 的作用：实现本地仓库和Github之间免登录的加密数据传输

SSH key 的好处：免登录身份认证，数据加密传输。

SSH key 由两部分组成，分别是：

1. id_rea （私钥文件，存放于客户端的电脑中即可）
2. id_rsa.pub（公钥文件，需要配知道Github中）

### 6.生成SSH key

1. 打开Git Bash
2. 粘贴如下命令，并将your_emal@example.com替换为注册Github账号时填写的邮箱：
   - ssh-keygen-t rsa -b 4096-C"your_email@example.con"
3. 连续敲击3次回撤，即可在C:\Users\用户名文件夹\.ssh目录中生成id_rsa.pub两个文件

### 7.配置SSH key

1. 使用记事本打开 id_rsa.pub文件，复制立main的文本内容
2. 在浏览器中登录Github，点击头像->Settings->SSH and GPG keys- >New SSH key
3. 在TItle文本框中任意填写一个名称，来表示这个Key从何而来

### 8.检测Github的SSH key是否配置成功

打开Git Bash ，输入如下的命令并回撤执行：

```git
ssh - T git@github.com
```

上述的命令执行成功之后，可能会看到如下的提示消息：

![image-20220403172013241](/Users/sime/Library/Application Support/typora-user-images/image-20220403172013241.png)

输入yes之后，如果能看到类似于下面的提示消息，证明SSH key 已经配置成功了：

![image-20220403172110465](/Users/sime/Library/Application Support/typora-user-images/image-20220403172110465.png)

### 9.基于SSH 将本地仓库上传到Github

![image-20220403175640058](/Users/sime/Library/Application Support/typora-user-images/image-20220403175640058.png)



## 4.Git分支