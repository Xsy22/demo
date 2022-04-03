#  Ajax

## 客户端与服务器

服务器：上网过程中，负责存放和对外提供资源的电脑，叫做服务器。

客户端：上网过程中，负责获取和消费资源的电脑，叫做客户端。

## URL地址

### URL地址的概念

URL中文叫统一资源定位符，用于标识互联网上每个资源的唯一存放位置。浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源。

常见的URL举例：

http://www.biadu.com

### URL地址的组成部分

URL地址一般有三部分组成：

1、客户端与服务器之间的通信协议

2、存有该资源的服务器名称

3、资源在服务器上具体的存放位置

![image-20220322214424470](/Users/sime/Library/Application Support/typora-user-images/image-20220322214424470.png)

## 客户端与服务器的通信过程

### 图解客户端与服务器的通信过程

![image-20220322214732672](/Users/sime/Library/Application Support/typora-user-images/image-20220322214732672.png)

1、客户端与服务器之间的通信过程，分为请求-处理-响应 三个步骤

2、网页中的每一个资源，都是通过 请求-处理-响应 的方式从服务器获取回来的

## 服务区对外提供了那些资源

### 网页中如何请求数据

如果在网页中请求服务器上的数据资源，则需要用到  XMLHttpRequest  对象

**XMLHttpRequest** （简称xhr）是浏览器提供的ks成员，通过它，可以请求服务器上的数据资源。

最简单的用法 

```javascript
var xhrObj = new XMLHttpRequest()
```

### 资源的请求方式

客户端请求服务器时，请求的方式有很多种，最常见的两种请求方式分别为**get**和**post**请求

1、**get** 请求通常用于获取服务端资源（想服务器要资源）

例如：根据ULRL地址，从服务器获取HTML文件、CSS文件、js文件、图片文件、数据资源等。



2、**post** 请求通常用于像服务器提交数据（往服务器发送资源）

例如：登录时向服务器提交的登录信息、注册时想服务器提交的注册信息、添加用户时向服务器提交用户信息等各种数据提交操作



## 5. 了解Ajax

### 5.1 什么是Ajax

**Ajax（异步 JavaScript 和 XML）**

通俗理解：在网页中利用XMLHttpRequest 对象和服务器进行数据交互的方式，就是Ajax。

### 5.2 为什么要学Ajax

Ajax能让我们轻松实现**网页**与**服务器**之间的**数据交互**。

![image-20220322221317177](/Users/sime/Library/Application Support/typora-user-images/image-20220322221317177.png)





### 5.3 Ajax的典型应用场景

用户名检测：注册用户时，通过ajax的形式，动态**检测用户名是否被占用**

搜索提示：当输入搜索关键字时，通过ajax的形式，动态**加载搜索提示列表**

数据分页显示：当点击页码值的时候，通过ajax的形式，**根据页码值动态刷新表哥的数据**

**数据的增删改查**：数据的添加、删除、修改、查询操作，都需要通过ajax的形式，来实现数据的交互

## 6.  jQuery中的Ajax

### 6.1 了解jQuery中的Ajax

浏览器中提供的**XMLHttpRequest 用法比较复杂**，所有jQuery对XMLHttpRequest进行了封装，提供了一些列Ajax相关的函数，极大**降低了Ajax的使用难度**。



jQuery中发起Ajax请求最常用的三个方法如下：

```javascript
$.get()//拿数据
$.post()//发送数据
$.ajax()//既可以拿也可以发送
```

### 6.2 $.get()函数的语法

jQuery中$.geet()函数的功能单一，专门用来发器get请求，从而将服务器上的资源请求到客户端来进行使用。

```javascript
$.get(url,[data],[callback])
```

![image-20220322223209062](/Users/sime/Library/Application Support/typora-user-images/image-20220322223209062.png)

### 6.2 $.get()发器不带参数的请求

使用$.get()函数发器不带参数的请求时，直接提供请求的URL地址和请求成功之后的回调函数即可，示例代码：

```javascript
$.get('http://www.liulongbin.top:3006/api/getbooks',function(res){
  console.log(res)//这里的res是服务器返回的数据
})
```

### 6.2 $.get()函数发起带参数的请求

jQuery中$.post()函数的功能单一，专门用来发起post请求，从而想服务器提交数据，

示例代码：

```javascript
$.get('http://www.liulongbin.top:3006/api/getbooks',{id:1},function(res){
  console.log(res);
})
```



### 6.3 $.post()函数的语法

使用$.get()函数发起带参数的请求时，示例代码：

```javascript
$.get(url,[data],[callback])
```

![image-20220323154307516](/Users/sime/Library/Application Support/typora-user-images/image-20220323154307516.png)

使用$.post()向服务器提交数据的示例代码如下：

```javascript
$.post('http://www.liulongbin.top:3006/api/addbook',//请求的URL地址
      {bookname:'水浒传',author:'施耐庵',publisher:'上海图书出版社'},//提交数据
       function(res){//回调函数
  				console.log(res)
}
      )
```

### 6.4 $.ajax()函数的语法

相比于$.get()和$.post()函数，jQuery中提供的$.ajax()函数是一个功能比较综合的函数，它允许我们对Ajax请求进行更详细的配置。

$.ajax函数的基本语法如下：

```javascript
$.ajax({
  type:'',//请求的方式，例如GET或POST
  url:'',//请求的URL地址
  data:{},//这次请求要携带的数据
  success:function(res){}//请求成功之后的回调函数
})
```

#### 使用$.ajax()发起get请求

使用$.ajax()发起GET请求时，只需要type属性的值设置为'GET'，即可：

```javascript
$.ajax({
  type:'GET',//请求的方式
  url:'http://www.liulongbin.top:3006/api/getbooks',//请求的URL地址
  data:{id:1},//这次请求要携带的数据
  success:function(res){//请求成功之后的回调函数
    console.log(res)
  }
}
)
```

#### 使用$.ajax()发起POST请求

使用$.ajax()发起POST请求时，只需要将type属性的值设置为'POST'即可：

```javascript
$.ajax({
  type:'POST',//请求的方式
  url:'http://www.liulongbin.top:3006/api/addbook',//请求的URL地址
  data:{
    bookname:'水浒传'，
    author:'施耐庵',
    publisher:'上海图书出版社',
  },//要提交给服务器的数据
  success:function(res){//请求成功之后的回调函数
    console.log(res)
  }
}
)
```

## 7.接口

### 7.1接口的概念

使用ajax请求数据时，被请求的URL地址，就叫做数据接口（简称接口）。同时，每个接口必须有请求方式。

例如：

http://www.liulongbin.top:3006/api/getbooks 获取图书列表的借口（GET请求）

http://www.liulongbin.top:3006/api/addbook 添加图书的借口（post请求）

### 7.2分析借口的请求过程

#### 1.通过GET方式请求借口的过程

![image-20220323164131617](/Users/sime/Library/Application Support/typora-user-images/image-20220323164131617.png)

#### 2.通过POST方式请求接口的过程

![image-20220323164224423](/Users/sime/Library/Application Support/typora-user-images/image-20220323164224423.png)

### 7.3接口测试工具

#### 1.什么是接口测试工具

为了验证接口能否被正常访问，我们常常需要使用接口测试工具，来对数据接口进行检测。

好处：接口测试工具能让我们在补血代码的情况下，对接口进行调试和测试。

常用工具postMan

### 7.4使用PostMan测试GET接口

步骤：

1、选择请求方式

2、填写请求的URL地址

3、填写请求的参数

4、点击Send按钮发起GET请求

5、查看服务器响应的结果

### 7.5使用PostMan测试POST接口

步骤：

1、选择请求的方式

2、填写请求的URL地址

**3、选择Body面板并勾选数据格式**

4、填写要发送到服务器的数据

5、点击send按钮发起POST请求

6、查看服务器响应回来的结果

### 7.6接口文档

#### 1、什么是接口文档

接口文档，顾名思义就是**接口的说明文档，他是我们调用接口的依据**，好的接口文档包含了对**接口URL**，**参数**以及**输出内容**的说明，我们参照接口文档就能方便的指导接口的作用，以及接口如何进行调用

#### 2、接口文档的组成部分

接口文档可以包含很多信息，也可以按需进行精简，不过，一个合格的接口文档，应该包含以下6项内容，从而为接口的调用提供依据：

1、**接口名称**：用来标识各个接口的简单说明，如登录接口，获取图书列表接口等。

2、**接口URL：**接口的调用地址。

3、**调用方式：**接口的调用方式，如get或post。

4、**参数格式**：接口需要传递的参数，每个参数必须包含**参数名称、参数类型、是否必选、参数说明**这四项内容。

5、**响应格式**：接口的返回值的详细描述，一般包含**数据名称、数据类型、说明**3项内容。

6、返回实力（可选）：通过对象的形式，列举服务器返回的数据的结构。

![image-20220323181903317](/Users/sime/Library/Application Support/typora-user-images/image-20220323181903317.png)

![image-20220323181930502](/Users/sime/Library/Application Support/typora-user-images/image-20220323181930502.png)

![image-20220323181946056](/Users/sime/Library/Application Support/typora-user-images/image-20220323181946056.png)



## 图书管理

### 去除两端的空格

```javascript
var bookname = $('#iptBookName').val().trim()
```

### 通过代理的方式为动态添加的元素绑定点击事件

```javascript
 //通过代理的方式为动态添加的元素绑定点击事件
            $('tbody').on('click', '.del', function () {
                var id = $(this).attr('data-id')
                $.get('http://www.liulongbin.top:3006/api/delbook', {
                    id: id
                }, function (res) {
                    if (res.status != 200) return alert("删除图书失败！")

                    getBookList()
                })
            })
```

### jQuery清空表单控件val值

```javascript
 $('#iptBookName').val('')
```

## 聊天机器人

### 获取获取元素事件

```javascript
$('btnSend').click()
```

## 1.form表单的基本使用

### 1.1什么是表单

表单在网页中主要负责数据采集功能，HTML中<form>标签，就是用于采集数据输入的信息，并通过<from>标签的提交操作，把采集到的信息提交到服务器进行处理。

### 1.2表单的组成部分

![image-20220324164450051](/Users/sime/Library/Application Support/typora-user-images/image-20220324164450051.png)

表单由三个基本部分组成：

- 表单标签
- 表单域：包含了文本框、密码框、隐藏框、多行文本框、复选框、单选框、下拉选择框和文本上传框等
- 表单按钮

### 1.4表单的同步提交及缺点

#### 1.什么是表单的同步提交

通过点击submit按钮，触发表单提交的操作，从而使页面跳转到actionURL的行为，叫做表单的同步提交。

#### 2.表单同步提交的缺点

1.    .<form>表单同步提交后，整个页面会发生跳转，**跳转到actionURL所指向的地址**，用户体验很差.
2. ,<form>表单同步提交后，**页面之前的状态和数据会丢失**

#### 3.如何解决表单同步提交的缺点

如果使用表单提交数据，则会导致一下两个问题：

1.页面发生跳转

2.页面之前的状态和数据会丢失

解决方案：**表单只负责采集数据，Ajax负责将数据提交到服务器。**

## 通过Ajax提交表单数据





### 2.1监听表单提交事件

在jQuery中，可以使用如下两种方式，监听到表单的提交事件：

```javascript
$('#forml').submit(function(e){
  alert("监听到了表单的提交事件")
})

$('#forml').on('submit',function(e){
  alert("监听到了表单的提交事件")
})
```

### 2.2阻止表单的默认提交行为

当监听到表单的提交事件以后，可以调用事件对象的event.preventDefault()函数，来阻止表单的提交和页面的跳转，示例代码：

```javascript
$('#form'.submit(function(e){
  //阻止表单的提交和页面的跳转
  e.preventDefault()
}))

$('#form').on('submit',function(e){
  //阻止表单的默认行为
  e.preventDefault()
})
```

### 2.3快速获取表单中的数据

#### 1.serialize()函数

为了简化表单中数据的获取操作，jQuery提供了serialize()函数，其语法格式如下：

```javascript
$(selector).serialize()
```

serialize()函数的好处：**可以一次性获取到列表中的所有数据。**

#### 2.serialize()函数示例：

```javascript
<form id = "form1">
  <input type = "text" name = "username"/>
  <input type = "password" name = "password"/>
  <button type = "submit">提交</button>
   <form/>
```

```javascript
$(#form1).serialize()
//调用结果
// username = 用户名的值&password = 密码的值
```

：在使用serialize()函数快速获取表单数据时，**必须为每个表单元素添加name属性！**



## 案例-评论列表

### 清空

```javascript
$('#cmt-list').empty()
```

### 原生DOM的重置表单内容

```javascript
//先将jQuery伪数组对象转换为DOM对象，最后调用原生DOM方法rest()
$('#formAddCmt')[0].reset()
```

### 那个元素在前那个元素先浮动

## 4.模版引擎的基本概念

### 4.1渲染UI结构时遇到的问题

```javascript
$.each(res.data, function (i, item) {
		var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>'
                //将字符串追加给数组
                rows.push(str)
            })
            //清空列表并添加
            $('#cmt-list').empty().append(rows.join(''))
```

上述代码是通过**字符串拼接**的形式，来渲染UI结构的。

如果UI结构比较复杂，则拼接字符串的时候，需要格外注意**引号之间的嵌套**。且一旦需求发生变化，**修改起来也非常麻烦**。

### 4.2什么是模版引擎

模版引擎，顾名思义，他可以根据程序员指定的模版结构和数据，自动生成一个完整的HTML页面。

![image-20220324201248350](/Users/sime/Library/Application Support/typora-user-images/image-20220324201248350.png)

### 4.3模版引擎的好处

1. 减少了字符串的拼接操作
2. 是代码结构清晰
3. 使代码更易于阅读和维护



## 5. art-template模版引擎

### 5.1art-template简介

art-template是一个简约、超快的模版引擎

### 5.3 art-template摹本引擎的基本使用

#### 2.art-template的使用步骤

1. 导入atr-template
2. 定义数据
3. 定义模版
4. 调用template函数
5. 渲染HTML结构

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 1.导入模版引擎 -->
    <!-- 在window全局，多一个函数，叫做template('模版的ID','需要的数据') -->
    <script src="template-web.js"></script>
    <script src="jquery.min.js"></script>
</head>

<body>
    <div id="container"></div>
    <!-- 3.定义模版 -->
    <!-- 模版的的HTML结构必须定义到script中 -->
    <!-- 这里的script标签的type值为html，让浏览器将模版作为html解析，并设置id -->
    <script type="text/html" id="tpl-user">
        <h1>姓名：{{name}}<br/>年龄：{{age}}</h1>
    </script>
    <script>
        // 2.定义需要渲染的数据
        var data = {
            name: '张三',
            age: 20

        }

        // 4.调用template函数
        var htmlStr = template('tpl-user', data)
        // 5.渲染HTML结构
        $('#container').html(htmlStr)
    </script>
</body>

</html>
```

### 5.4 atr-template标准语法

#### 1.什么是标准语法

art-template提供了{{}}这种语法格式，在{{}}内可以进行**变量输出**，或**循环数组**等操作，这种{{}}语法在atr-template中被称为标准语法。

#### 2.标准语法-输出

```javascript
{{value}}
{{obj.key}}
{{obj['key']}}
{{a?b:c}}
{{a || b}}
{{a + b}}
```

在{{}}语法中，可以进行**变量的输出，对象属性的输出，三元表达式输出，逻辑或输出、加减乘除等表达式输出**

#### 3.标准语法-原文输出

```javascript
{{@value}}
```

如果要输出的value值中，包含HTML标签结构，则需要使用**原文语法**，才能保证HTML标签被正常渲染。

#### 4. 标准语法-条件输出

如果要实现条件输出，则可以在{{}}中使用**if…else if…/i**f的方式，进行按需输出。

```javascript
{{if value}}按需输出的内容{{/if}}

{{if v1}}按需输出的内容{{else if v2}}按需输出的内容{{/if}}
```

示例代码：

```javascript
<script type="text/html" id="tpl-user">
        <h1>姓名：{{name}}<br/>年龄：{{age}}</h1>
        {{@test}}
        <div>
            {{if flag === 0}}
            flag的值是0
            {{else if flag === 1}}
            flag的值是1
            {{/if}}
        </div>
    </script>
    <script>
        // 2.定义需要渲染的数据
        var data = {
            name: '张三',
            age: 20,
            test: '<h3>测试原文输出</h3>',
            flag: 1

        }

        // 4.调用template函数
        var htmlStr = template('tpl-user', data)
        // 5.渲染HTML结构
        $('#container').html(htmlStr)
    </script>
```

#### 5. 标准语法-循环输出

如果要实现循环输出，则可以在{{}}内，通过each语法循环数组，当前循环的索引使用$index进行访问，当前的循环项使用$value进行访问。

```javascript
{{each arr}}
		{{$index}}{{$value}}
{{/each}}
```

```javascript
<ul>
            {{each hobby}}
            <li>索引是：{{$index}},循环项：{{$value}}</li>
            {{/each}}
</ul>
```

### 6. 标准语法-过滤器

![image-20220324213846277](/Users/sime/Library/Application Support/typora-user-images/image-20220324213846277.png)

过滤器的本质，就是一个function处理函数

```javascript
{{value | filterName}}
```

过滤器语法类似于**管道操作符**，它的上一个输出作为下一个输入。

定义过滤器的基本语法如下：

```javascript
template.defaults.imports.filterNmae = function(value){/*return处理函数*/}
```



```javascript
<div>注册时间：{{regTime | dateFormat}}</div>
```

定义一个格式化时间的过滤器dateFormat如下：

```javascript
template.default.imports.dateFormat = function(date){
  var y = date.getFullYear()
  var m = date.getMonth()+1
  var d = date.getDate()
  
  return y + '-' + m + '-' + 'd'//注意，过滤器最后一定要return一个值
}
```



## 模版引擎的实现原理

### 6.1正则与字符串操作

#### 1.基本语法

exec()函数用于**检索字符串**中的正则表达式的匹配

如果字符串中有匹配的值，**则返回该匹配值**，否则返回**null**

```javascript
RegExpObject.exev(String)
```

示例代码如下：

```javascript
var str = 'hello'
var pattern = /0/
//输出的结果["0",index:4,input:"hello",groups:undefind]
console.log(pattern.exec(str))
```



#### 2.分组

在正则表达式中（）包起来的内容表示一个分组，可以通过分组来**提取自己想要的内容**，示例代码：

```javascript
var str = '<div>我是{{name}}</div>'
var pattern = /{{([a-zA-Z]+)}}/

var patternResult = pattern.exec(str)
console.log(patternResult)
//得到 name 相关分组信息
//["{{name}}","name",index:7,input:"<div>我是</div>",groups:undefined]
```

#### 3.字符串的replace函数

replace()函数用于在字符串中**用一些字符替换另一些字符**，语法格式如下：

```javascript
var result = '123456'.replace('123','abc')//得到的 result 的值为字符串'abc456'
```

示例代码如下：

```javascript
var str = '<div>我是{{name}}</div>'
var pattern = /{{([a-zA-Z]+)}}/

var patternResult = pattern.exec(str)
//将正则表达式获取到的值与()分组提取到的值替换
str = str.replace(patternResult[0],patternResult[1])
//replace 函数返回值为替换后的新字符串
//输出的内容是：<div>我是name</div>
console.log(str)
```

#### 4.多次replace

```javascript
var str = '<div>{{name}}今年{{ age }}岁了</div>'
var pattern = /{{(\s*[a-zA-Z]+)\s*}}/
//因为花括号里面可能有空白字符，所以需要更改正则表达式，
//    \s代表一个空格
//    \s*代表0个甚至多个字符
var patternResult = pattern.exec(str)
str = str.replace(patternResult[0],patternResult[1])
console.log(str)//输出 <div>name今年{{age}}岁了</div>

patternResult = pattern.exec(str)
str = str.replace(patternResult[0],patternResult[1])
console.log(str)//输出 <div>name今年age岁了</div>
//通过多次提取替换，将所有的{{}}替换，直到没有匹配项，值为null
patternResult = pattern.exec(str)
console.log(patternResult)//输出null
```

#### 5.使用while循环replace

```javascript
var str = '<div>{{name}}今年{{age}}岁了</div>'
var pattern = /{{\s*([a-zA-Z]+)\s*}}/

var patternResult = null
while(pattenResult = pattern.exec(str)){
  str = str.replace(patternResult[0],patternResult[1])
}
console.log(str)//输出  <div>{{name}}今年{{age}}岁了</div>
```

#### 6.replace替换为真值

```javascript
var data = {name: '张三',age: 20}
var str = '<div>{{name}}今年{{  age  }}岁了</div>'
var pattern = /{{\s*([a-zA-Z]+)\s*}}/


var patternResult = null
while((patternResult = pattern.exec(str))){
  //将使用()提取的值name（patternResult[1]）作为对象的属性名来提取data对象中的数据
  str = str.replace(patternResult[0],data[patternResult[1]])
}
console.log(str)
```

#### 2.定义模版结构

```html
<!-- 定义模版结构 -->
<scroipt type="text/html" id="tpl-user">
  	<div>姓名：{{name}}</div>
    <div>年龄：{{age}}</div>
    <div>性别：{{   gender}}</div>
    <div>住址：{{address  }}</div>
  </script>
```

#### 3.预调用模版引擎

```javascript
<script>
    //定义数据
    var data = 
    {
        name:'za',
        age:28,
        gender:'男',
        address:'北京顺义马坡'
    }
    //调用模版函数
    var htmlStr = template('tpl-user',data)

    //渲染HTML结构
    document.getElementById('user-box').innerHTML = htmlStr
</script>
```

#### 4.封装template函数

```javascript
//封装template函数
        function template(id, data) {
            var str = document.getElementById(id).innerHTML
            var pattern = /{{\s*([a-zA-Z]+)\s*}}/

            var patternResult = null
            while ((patternResult = pattern.exec(str))) {
                //将使用()提取的值name（patternResult[1]）作为对象的属性名来提取data对象中的数据
                str = str.replace(patternResult[0], data[patternResult[1]])
            }
            return (str)
        }
```

## Ajax加强

### 1. XMLHttpRequest的基本使用

#### 1.1什么是XMLHttpREqust

XMLHttpRequest(简称xhr)是浏览器提供的JavaScript对象，通过它，可以**请求服务器上的数据资源**，之前所学的jQuery中的Ajax函数，就是基于xhr对象封装出来的。



![image-20220325221452445](/Users/sime/Library/Application Support/typora-user-images/image-20220325221452445.png)

#### 1.2使用xhr发起GET请求

步骤：

1. 创建xhr对象
2. 调用xhr.open()函数//创建请求
3. 调用xhr.send()函数//发起请求
4. 监听xhr.onreadystatechange事件//拿到服务器响应回来的数据

```javascript
//1.创建XHR对象
var xhr = new XMLHttpRequest()
//2.调用open函数，指定 请求方式 与 URL地址
xhr.open('GET','http:www.liulongbin.top:3006/api/getbooks')
//3.调用send函数，发起Ajax 请求
xhr.send()
//4.监听 onreadystatechange 事件
xhr.onreadystatechange = function(){
  //4.1 监听 xhr 对象的请求状态 readyState ; 与服务器响应的状态 sataus
  if(xhr.readyState === 4 && xhr.status === 200){//固定写法，如果条件为true
    //4.2 打印服务器响应回来的数据
    console.log(xhr.responseText)
    
  }
}
```

#### 1.3了解xhr对象的readyState属性

XMLHttpRequest对象的readySttate 属性，用来表示**当前 Ajax 请求所处的状态**，每个 Ajax 请求必然处于一下状态中的一个：

![image-20220325223727867](/Users/sime/Library/Application Support/typora-user-images/image-20220325223727867.png)

#### 1.4使用xhr发起带参数的GET请求

使用xhr对象发起带参数的GET请求是，只需要在调用xhr.open期间，为URL地址指定参数即可：

```javascript
//……省略不必要的代码
xhr.iopen('GET','http://www.liulongbin.top:3006/api/getbooks?id=1')
//……省略不必要的代码
```

这种在URL地址后面拼接的参数，叫做**查询字符串**。

#### 1.5查询字符串

##### 1.什么是查询字符串

定义：查询字符串（URL参数）是指在URL的末尾加上用于向服务器发送信息的字符串（变量）。

格式：将英文的 **?** 放在URL的末尾，然后再加上**参数=值**，想加上多个参数的话，使用 & 富豪进行分割，一这个形式，可以将想要发送给服务器的数据添加到URL中。

```javascript
//不带参数的URL地址
http://www.liulongbin.top:3006/api/getbooks
//带一个参数的 URL 地址
http://www.liulongbin.top:3006/api/getbooks?id=1
//带两个参数的 URL 地址
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记
```

##### 2.GET请求携带参数的本质

无论使用$.ajax().还是使用$.get()，又或者直接使用xhr对象发起GET请求，当需要携带参数的时候，本质上，都是直接将参数以查询字符串的形式，追加到URL的后面，发送到服务器的。

```javascript
$.get('url',(name:'zs',age:20),function(){})
  //等价于
$.get('url?name=za&age=20',function(){})


$.ajax({
  method:'GET',
  url:'url',
  data:{name:'zs',age:20},
  success:function(){}
})
//等价于
$.ajax({
  method:'GET',
  url:'url?name=zs&age=20',
  success:function(){}
})
```

#### 1.6URL编码与解码

##### 1.什么是URL编码

URL地址中，只允许出现英文相关的字母，标点符号、数字，因此在URL地址中不允许出现中文字符。

如果URL中需要包含中文这样的字符，则必须对中文字符进行**编码**（转义）。

**URL编码的原则**:使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。

URL编码原则的通俗理解：使用**英文字符**去表示**非英文字符**。

```javascript
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记
//经过URL编码之后，URL地址变成了如下格式：
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=%E8%A5%BF%E6%B8%B8%E8%AE%B0
```

##### 2.如何对URL进行编码和解码

浏览器提供了URL编码与解码的API，分别是：

- encodeURI ( )编码的函数
- decodeURI ( )解码的函数

```javascript
encodeURI'黑马程序员')
//输出字符串 
decodeURI('%E9%BB%91%E9%E9%A9%AC')
//输出字符串   黑马
```

##### 3.URL编码的注意事项

由于浏览器会自动对URL地址进行编码操作，因此，大多数情况下，程序员不需要关心URL地址的编码与解码操作。

#### 1.7使用xhr发起post请求

步骤：

1. 创建xhr对象
2. 调用xhr.open()函数
3. **设置Content-Type属性(固定写法)**
4. 调用xhr.send()函数，**同时制定要发送的数据**
5. 监听xhr.onreadystatechange事件

```javascript
// 1、创建xhr对象
var xhr = new XMLHttpRequest()
// 2、调用open()
xhr.open('POST','http://www.liulongbin.top:3006/api/addbook')
// 3、设置Content-Type 属性（固定写法）
xhr.setRequestHeader('Conten-Type','application/x-www-form-urlencoded')
// 4、调用send(),同时将数据以查询字符串的形式，提交给服务器
xhr.send('bookname=水浒传&author=施耐庵&pubisher=天津图书出版社')
// 5、监听onreadystatechang = function(){
	if(xhr.readyState === 4 && xhr.status === 200){
    console.log(xhr.reaponseText)
  }
}
```

### 2. 数据交换格式

#### 2.1什么是数据交换格式

数据交换格式，就是**服务器端**与**客户端**之间进行数据传输与交换的格式。

前端领域，经常提及的两种数据急哦啊还格式分别是XML和JSON。其中XML用的非常少，所以重点学习的数据交换格式就是**JSON**。

![image-20220326174632908](/Users/sime/Library/Application Support/typora-user-images/image-20220326174632908.png)

#### 2.2XML

##### 1.什么是XML

XML的英文全称是EXtensible Markup Language,即**可扩展标记语言**。因此，XML和HTML类似，也是一种标记语言。

HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body></body>
</html>
```

XML

```xml
<note>//消息
<to>ls</to>//发给谁
<from>zs</from>//谁发出来的
<heading>通知</heading>//标题
<body>晚上开会</body>//内容
</note>
```

##### 2.XML和HTML的区别

XML和HTML虽然都是标记语言，但是，它们两者之间没有任何关系。

- HTML被设计用来描述网页上的**内容**，是网页内容的载体
- XML被设计用来传输和存储数据，是数据的载体

![image-20220326212531508](/Users/sime/Library/Application Support/typora-user-images/image-20220326212531508.png)

##### 3.XML的缺点

```xml
<note>
  <to></to>
  <from>zs</from>
  <heading>通知</heading>
  <body>晚上开会</body>
</note>
```

1. XML格式臃肿，和数据无关的代码多，体积大，传输效率低

2. 在JavaScript中解析XML比较麻烦

   #### 2.3 JSON

   ##### 1. 什么是JSON

   概念：JSON的英文全称是JavaScript Object Notation,即“JavaScript对象表示法“。简单来讲，**JSON就是JavaScript对象和数组的字符串表示法**，他使用文本表示一个JS对象或数组的信息，因此，**JSON的本质是字符串**。

   作用：JSON是一种**轻量级的文本数据交换格式**，在作用上类似于XML，专门用于存储和传输数据，但是JSON比XML**更小、更快、更易解析**。

   现状：JSON是在2001年开始被推广和使用的数据格式，到现今为止，**JSON已经成为了主流的数据交换格式**。

   #### 2. JSON的两种结构

   JSON就是用字符串来表示Javacript的对象和数组，所以，JSON中包含**对象和数组**两种结构，通过这两种结构的互相嵌套，可以表示各种复杂的数据结构。

   **对象结构**：对象结构在JSON中表示为{}括起来的内容，数据结构为

   { key:value,key:value,…}的的键值对结构，其中key必须是使用**英文的双引号包裹**的字符串，value的数据类型可以是**数字、字符串、布尔值、null、数组、对象**6种类型。

   ```json
   {
     name:"za",//key必须用双引号包裹
     'age'= 20,//key必须用双引号包裹
     "gender":'男',//字符串型vaule必须用双引号包裹
     "address":undefined,//json不存在undefined
     "hobby":["吃饭"，"睡觉",'打豆豆'],//字符串型vaule必须用双引号包裹
   	"say":function(){}//不可以是函数
   
   }
   ```

   优化后：

   ```json
   {
     "name":"za"
     "age"= 20,
     "gender":“男”,
     "address":null,
     "hobby":["吃饭"，"睡觉","打豆豆"],
   }
   ```

   ##### 2. JSON 的两种结构

   **数组结构**：数据结构在JSON中国呢表示为[ ]括起来的内容，数据结构为["java","javascript",30,true…]。

   数组中数据类型可以是数字、字符串、布尔值、null、数组、对象6中类型。

```json
["java","python","php"]
[100,200,300.5]
[true,false,null]
[{"name":"zs","age":20},{"name":"ls","age":30}]
[["苹果","榴莲","椰子"],[4,50,5]]
```

##### 3. JSON语法注意事项

1. 属性名必须使用双引号包裹
2. 字符串类型的值必须使用双引号包裹
3. JSON中不允许使用单引号表示字符串
4. JSON中不能写注释
5. JSON的最外层必须是对象或者数组格式
6. 不能使用undefind或者函数作为JSON的值

**JSON的作用**：在计算机与网络之间存储和传输数据。

**JSON的本质**：用字符串表示JavaScript对象数据或数组数据 

##### 4. JSON和JS对象的关系

JSON 是JS对象的字符串表示法，他使用文本表示一个jS对象的信息，本质是一个字符串，例如：

```json
//这是一个对象
var obj = {
  a:'Hello',
  b:'World'
}

//这是一个 JOSON字符串，本质是一个字符串
var json = '{
"s":"Hello",
"b":"World"
}'
```

##### 5. JSON和JS对象的互转

要实现从JSON字符串转换为JS对象，使用JSON.parse()方法：

```javascript
var obj = JOSN.parse('{"a":"Hello","b":"World"}')
//结果是 {a:'Hello',b:'World'}
```

要实现从JS对象转换为JSON字符串，使用JSON.stringify()方法：

```javascript
var json = JSON.stringify({a:'Hello',b:'World'})
//结果是 '{"a":"Hello","b":"World"}'
```

##### 6. 序列化和反序列化

把**数据对象转换为字符串**的过程，叫做**序列化**，例如：调用JSON.stringify()函数操作，叫做JSON序列化。

把**字符串转换为数据对象**的过程，叫做**反序列化**，例如：调用JSON.parse()函数的操作，叫做JSON反序列化。

### 3. 封装自己的Ajax函数

#### 3.1要实现的效果

```html
<!-- 1、导入自定义的ajax函数库-->
<script src="./itheima.js"></script>

<script>
//2、调用自定义的的 itheima 函数，发起Ajax 数据请求
  ieheima(
  	method:'请求类型',
    url:'请求地址',
    data:{/*请求参数对象*/},
    success:functoin(res){//成功的回调函数
      console.log(res)//打印数据
    }
  )
</script>
```

#### 3.2定义options参数选项

itheima()函数是我们自定义的Ajax函数，它接收一个配置对象作为参数，配置对象中可以配置如下属性：

- method     请求类型 
- url     请求的URL地址
- data     请求携带的数据
- success     请求成功之后的回调函数

#### 3.3处理data参数

需要把data对象那个，转化成查询字符串的格式，从而提交给服务器，因此提前定义resolveData函数如下：

```javascript
处理data函数
@param(data)需要发送到服务器的数据
@returns(string) 返回拼接好的查询字符串 name=za&age=10

function resolveData(data){
var arr = []
for(let k in data){
arr.push(l + '=' + data[k])
}
return arr.join('&')
}
```

#### 3.4定义itheima函数

在itheima()函数中，需要创建xhr对象，并监听onreadystatechange事件：

```javascript
function itheima(options){
  var xhr = new XMLHttpRequest()
  //凭借查询字符串
  var qs = resolveData(options.data)
  //判断请求类型
  if(options.method.toUpperCase() ==='GET'){
    //发起GET请求
    xhr.open(options.method,options.url+'?'+qs)
    xhr.send()
  }else if(options.method.toUpprCase() === 'POST'){
    //发起POST请求
    xhr.open(options.method,options.url)
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.send(qs)
  }
  
  //监听请求状态改变的事件
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.statue === 200){
      var result = JSON.parse(xhr.responseText)
      options.success(result)
    }
  }
}
```

**toUpperCase()转大写**

### 4. XMLHttpRequest Level2 的新特性

#### 4.1认识XMLHttpRequest level2

##### 1.旧版XMLHttpRequest的缺点

1. 只支持文本数据的传输，无法用来读取和上传文件
2. 传送和接收数据时，没有进度信息，只能提示有没有完成

##### 2.XMLHttpRequest Level2的新功能

1. 可以设置HTTP请求的时限
2. 可以使用FormData对象那个管理表单数据管理
3. 可以上传文件
4. 可以获得数据的进度信息

#### 4.2设置HTTP请求时限

有时，Ajax操作很耗时，而且无法预知要花多少时间，如果网速很慢，用户可能要等很久，新版本的XMLHttpRequest对象，增加了timeout属性，可以设置HTTP请求的时限：

```javascript
xhr.timeout = 3000
```

上面的语句，将最长等待时间设为3000毫秒，过来这个时限，就自动停止HTTP请求，与之配套的还有一个timeout事件，用来指定回调函数：

```javascript
xhr.ontimeout = function(event){

	alert('请求超时！')

}
```

#### 4.3FormData对象管理表单数据

Ajax操作往往用来提交表单数据，为了方便表单处理，HTML5新增了一个个FormData对象那个，可以模拟表单操作：

```javascript
//1、新增FormData对象
var fd = new FormData()
// 2、为FormData添加表单项
fd.append('uname','zs')
fd.append('upwd','123456')
// 3、创建XHR对象
var xhr = new XMLHttpRequest()
// 4、指定请求类型与URL地址
xhr.open('POST'，'http://www.liulongbin.top:3006/api/formdata')
// 5、直接提交FormData对象，这与提交网页表单的效果，完全一样
xhr.send(fd)

xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
```

FormData对象也可以用来获取网页表单的值，示例代码如下：

```javascript
// 获取表单元素
var form =document.querySelector('#form1')
// 监听表单元素的submit 事件
form.addEventListener('submit',function(e){
  e.preventDefault()
  //根据 form 表单欻给你讲爱你 FormData对象 ，会自动将表单数据填充到FormData对象中
  var fd = new FormData(form)//通过formdata获取表单数据
  var xhr = new XMLHttpRequest()
  xhr.open('POST','http://www.liulongbin.top:3006/api/formdata')
  xhr.send(fd)
  xhr.onreadystatechange = function(){
    
  }
})
```

submit点击表单的提交按钮事件

#### 4.4上传文件

新版XMLHttpRequest对象，不仅可以发送文本信息，还可以上传文件。

实现步骤：

1. 定义UI结构
2. 验证是否选择了文件
3. 项FormData中追加文件
4. 使用xhr发起上传文件请求
5. 监听onreadystatechange事件



##### 1. 定义UI结构

```html
文件选择器
<input type="file" id="filel"/>
  上传按钮
<button id="btnUpload">上传文件</button>
<br/>
显示上传到服务器上的图片
<img src="" alt="" id="img" width="800"/>
```

##### 2.验证是否选择了文件

```javascript
// 1、获取上传文件的按钮
var btnUpload = document.querySelevtor('#btnUpload')
// 2、为按钮添加click事件监听
btnUpload.addEventListener('click',function(){
  //3、获取到选择文件的列表
  var files = documtn.querySelevtor('#filel').files// 获取文件域雷列表
  if(files.length <= 0){
    return alert('请选择要上传的文件！')
  }
  // 后续业务逻辑
})
```

##### 3.向FormData中追加文件

```javascript
            // 三、向FormData中追加文件
            //1、创建FormData对象
            var fd = new FormData()
            // 2、向FormData中追加文件
            fd.append('avatar', files[0])

```

##### 4.使用xhr发起上传文件请求

```javascript
 // 四、使用xhr发起上传文件的请求
            // 1、创建xhr对象
            var xhr = new XMLHttpRequest()
            // 2、调用open函数，指定请求类型与URL地址，其中，请求类型必须为POST
            xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
            // 3、发起请求
            xhr.send(fd)
```

##### 5.监听onreadystatechange事件

```javascript
// 五、监听onreadystatechange事件
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText)
                    if (data.status === 200) {//上传文件成功
                        document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url
                    } else {//上传文件失败
                      //将服务器返回的图片地址，设置为<img>标签的src属性
                        console.log(data.message)
                    }
                }
            }
```

#### 4.5显示文件上传进度

新版本的XMLHttpRequest对象中，可以通过监听xhr.upload.onprogress事件，来获取到文件的上传进度。

语法格式如下：

```javascript
//创建XHR对象
var xhr = new XMLHttpRequest()
//监听 xhr.upload 的 onprogress事件
xhr.upload.onprogress = function(e){
  //e.lengthComputable是一个布尔值，表示当前上传的资源是否具有可计算的长度
  if(e.lengthComputable){
    // e.loaded 已传输字节
    // e.total 需传输的总子节
    var percentComplete = Math.ceil((e.loaded/e.total)*100)
  }
}
```

##### 1.导入需要的库

### 5. jQuery的高级用法

#### 5.1jQuery实现文件上传

##### 1.定义UI结构

```javascript
<input type="file" id="file1"/>
    <button id="btnUpload">上传文件</button>
```

##### 2.验证是否选择了文件

```javascript
$('btnUpload').on('click', function () {
            // 1、将jQuery对象转化为DOM对象，并获取选中的文件列表
            var files = $('#file1')[0].files
            // 2、判断是否选择了文件
            if (files.length <= 0) {
                return alert('请选择文件后再上传！')
            }
        })
```

##### 3.FormData中追加文件

```javascript
//向Formdata中追加文件
var fd = new FormData()
fd.append('avatar',files[0])
```

##### 4.使用jQuery发起上传文件的请求

```javascript
$ajax({
  method:'POST',
  url:'http://www.liulongbin.top:3006/api/load/avatar'
  data:fd,
  //不修改Content-Type 属性，使用 FoemData 默认的 Content-Type 值
  contentType:false,
  //不对 FormData 中的数据进行url编码，而是将ForData 数据鸳鸯发送到服务器
  processData:false,
  success:function(res){
  console.log(res)
}
})
```

#### 5.2jQuery实现loading效果

##### 1.ajaxStart(callback)

Ajax请求开始时，执行ajaxStart函数，可以在ajaxStart的callbank中显示loading效果，示例代码如下：

```javascript
$(document).ajaxStart(function(){
  $('loading').show()
})
```

$(document).ajaxStart()函数会**监听当前文档所有的Ajax请求**

##### 2.ajaxStop(callback)

Ajax请求结束时，执行ajaxStop函数，可以在ajaxStop的callback中隐藏loading效果，示例代码：

```javascript
$(document).ajaxStop(function(){
  $('#loading').hide()
})
```



### 6. axios

#### 6.1什么是axios

Axios是专注于**网络数据请求**的库。

相比于原生的XMLHttpRequest对象，axios**简单易用**

相比于jQuery，axios更加轻量化，只专注于网络数据请求。

6.2axios发起get请求的语法：

```javascript
axios.get('url',(parame:{/*参数*/})).then(callback)
```

具体请求示例：

```javascript
 document.querySelector('#btn1').addEventListener('click', function () {
            // 请求的URL地址
            var url = 'http://www.liulongbin.top:3006/api/get'
            // 请求的参数对象
            var paramsObj = { name: 'zs', age: 20 }
            // 调用axios。get()发起GET请求
            axios.get(url, { params: paramsObj }).then(function (res) {
                // res.data是服务器返回的数据
                console.log(res.data)
            })
        })
```

#### 6.3使用axios发起post请求

axios发起post请求的语法：

```javascript
axios.post('url',{/*参数*/}).then(callback)
```

具体的请求示例：

```javascript
 var btn = document.querySelector('#btn')
        btn.addEventListener('click', function () {
            //请求的URL地址
            var url = 'http://www.liulongbin.top:3006/api/post'
            // 要提交到服务器的数据
            var dataObj = { location: '北京', address: '顺义' }
            //调用axios.post()发起post请求
            axios.post(url, dataObj).then(function (res) {
                //res。data 是服务器返回的数据
                console.log(res.data)
            })
        })
```

#### 6.4直接使用axios发起请求

axios也提供了类似于jQuery中$.ajax()的函数，语法如下：

```javascript
//请求的URL地址
            var url = 'http://www.liulongbin.top:3006/api/get'
            // 要提交到服务器的数据
            var dataObj = { name: '钢铁侠', age: 35 }
            //调用axios发起get请求 
            axios({
                method: 'GET',
                url: url,
                params: dataObj,
            }).then(function (res) {
                console.log(res.data);
            })


//使用axios发起post请求
            // //请求的URL地址
            var url = 'http://www.liulongbin.top:3006/api/post'
            // // 要提交到服务器的数据
            var dataObj = { bookname: '钢铁侠', price: 35 }
            axios({
                method: 'POST',
                url: url,
                data: dataObj,
            }).then(function (res) {
                console.log(res.data)
            })
```



## 跨域与JSONP

### 1.了解同源策略和跨域

#### 1.1同源策略

##### 1.什么是同源策略

如果两个页面的**协议，域名和端口**都相同，则两个页面具有**相同的源。**

![image-20220330145147913](/Users/sime/Library/Application Support/typora-user-images/image-20220330145147913.png)

##### 2.什么是**同源策略**

**同源策略**（英文全称 Sane origin policy）是**浏览器**提供的一个**安全功能**

MDN官方给定的概念：同源策略限制了从同一个源加载的文档或甲苯如何与来自另一个源的资源进行交互，这是一个用于隔离潜在恶心文件的重要安全机制。

通俗的理解：浏览器规定，A网站规定，A网站的JavaScripot，不允许和**非同源**网站C之间，进行资源的交互，例如：

1. 无法读取非同源网页的Cookie、localStorage和IndexedDB
2. 无法接触非同源网页的DOM
3. 无法向非同源地址发送Ajax请求

#### 1.2跨域

##### 1.什么是跨域

**同源**指的是两个URL的协议协议、域名端口一致、反之则就是**跨域**

出现跨域的根本原因：**浏览器的网源策略**不允许非同源的URL之间进行资源的交互。



![image-20220330151325380](/Users/sime/Library/Application Support/typora-user-images/image-20220330151325380.png)

##### 2.浏览器对跨域请求的拦截

![image-20220330151608550](/Users/sime/Library/Application Support/typora-user-images/image-20220330151608550.png)

浏览器允许发起发起跨域请求，但是跨域请求回来的数据，会被浏览器拦截，无法被页面获取到。

##### 3.如何实现跨域数据请求

如今实现跨域数据请求，最主要的两种解决方案，分别是JSONP和CORS。

JSONP：出现的早，兼容性好（兼容低版本IE），是前端程序员为了解决跨域问题，被迫想出来的一种 **临时解决方案**。缺点是**只支持GET请求**，不支持POST请求。

CORS：出现的比较晚，他是W3C标准，属于跨域Ajax请求的根本解决方案，支持GET和POST请求，缺点是不兼容某些低版本的浏览器。





### 2.JSONP功能

#### 2.2 JSONP的实现原理

由于**浏览器同源策略**的限制，网页中**无法通过Ajax请求非同源的接口数据**，但是<script>标签不受浏览器同源策略的影响，可以通过src属性，请求非同源的js脚本。

因此，JSONP的实现原理，就是通过<script>标签的src属性，请求跨域的数据接口，并通过 **函数调用**形式，接收跨域接口响应回来的数据。

#### 2.3自己实现一个简单的JSONP

定义一个success回调函数：

```javascript
<script>
		function success(data){
  console.log('获取得了data数据：')
  console.log(data)
}  
</script>
```

通过<script>标签，请求接口数据：

```javascript
<script src ="http://ajax.frontend.itheima.net:3006/api/jsonp?callback=success&name=zs&age=20"></script>>
```

#### 2.4JSONP的缺点

由于JSONP是通过<script>标签的src属性，来实现跨域数据获取的，所以JSONP只支持get数据请求，不支持POST请求。

**JSONP和AJAX之间没有任何关系**，不能把JSONP请求数据的方式叫做Ajax，因为JSONP没有用到XMLHttpRequest这个对象。

#### 2.5jQuery中的JSONP

jQuery提供的$.ajax()函数，除了可以发起真正的Ajax数据请求之外，还能够发起JSONP数据请求，例如：

```javascript
$.ajax({
  url:'http://www.liulongbin.top:3006/api/jsonp?name=zs&age=20',
  //如果要使用$.ajax()发起JSONP请求，必须制定datasype为jsonp
  dataType:'jsonp',
  success:function(res){
    console.log(res)
  }
})
```

默认情况下，使用jQuery发起JSONP请求，会自动携带一个callback=jQueryxxx的参数，jQueryxxx是随机生成的一个回调函数名称。

#### 2.6自定义参数及回调函数名称

在使用jQuery发起JSONP请求时，如果想要自定义JSONP的**参数**以及**回调函数名称**，可以通过如下两个参数来指定：

```javascript
$.ajax({
                url: 'http://www.liulongbin.top:3006/api/jsonp?name=zs&age=20',
                //如果要使用$.ajax()发起JSONP请求，必须制定dataType为jsonp
                dataType: 'jsonp',
                //发送到服务端参数名称，默认值为callback
                jsonp: 'callback',
                //自定义的回调函数名称，默认值为 jQueryxxxx格式
                jsonpCallback: 'abc',
                success: function (res) {
                    console.log(res)
                }
            })
```

#### 2.7jQuery中JSONP的实现过程

jQuery中的JSONP，也是通过<script>标签的src属性实现跨域数据访问的，只不过，jQuery采用的是**动态创建和移除<script>标签**的方式，来发起JSONP数据请求。

- 在发起JSONP请求的时候，动态向<header>中append一个<script>标签；
- 在JSONP请求成功以后，动态从<header>中移除刚才append进去的<script>标签；



### 3.案例-淘宝搜索

#### 3.5输入框的防抖

##### 1.什么是防抖

防抖策略（debounce）是当前时间被触发后，延迟n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。

![image-20220331222152095](/Users/sime/Library/Application Support/typora-user-images/image-20220331222152095.png)

##### 2.防抖的应用场景

用户输入框中连续输入一串字符时，可以通过防抖策略，只在输入完后，才执行查询的请求，这样可以有效减少请求次数，借阅请求资源；

##### 3.实现输入框的防抖

```javascript
var timer = null //防抖的timer

function dabounceSearch(keywords){//定义防抖的函数
  timer = setTimeout(function(){
    //发起JSONP请求
    getSuggestList(keywords)
  },500)
}

$('#ipt').on('keyup',function(){ //3、在触发keyup事件时，立即清空timer
  clearTimeou(timer)
  //……省略其他代码
  debounceSearch(keywords)
})
```

#### 3.6缓存搜索的建议列表

##### 1.定义全局缓存对象

```javascript
//缓存对象
var cachObj = {}

```

##### 2.将搜索结果保存到缓存对象中

```javascript
// 渲染建议列表
function renderSuggesList(res){
  //省略其他代码
  
  //将搜索结果，添加到缓存对象中
  var k = $('#ipt').val().trim()
  cacheObj[k] = res
}
```

##### 3.优先从缓存中获取搜索建议

```javascript
// 监听文本框的 keyup事件
$('#ipt').on('keyup',function(){
  //……省略其他代码
  
  // 优先从缓存中获取搜索建议
  if(cacheObj[keywords]){
    return renderSuggestList(cacheObj[keywords])
  }
  
  //获取搜多建议列表
  debounceSearch(keywords)
})
```



### 4.防抖和节流

#### 4.1什么是节流

**节流策略**(throttle),顾名思义，可以减少一段时间内事件的触发频率。

#### 4.2节流的应用场景

1. 鼠标连续不断地出发某事件(如点击)，只在单位时间内只触发一次；
2. 懒加载时要监听计算滚动条的位置，但不必每次滑动都触发，可以降低计算的频率，而不必浪费cpu资源；

#### 4.3节流案例-鼠标跟随效果

##### 1.渲染UI结构并美化样式

```css
<style>
        html,
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        #angel {
            position: absolute;
        }
    </style>
```

```html
<img src="./img/angel.gif" id="angel">
```

##### 2.js代码

```javascript
<script>
        $(function () {
            //获取图片元素
            var angel = $('#angel')
            //监听文档的 mousemove 事件
            $(document).on('mousemove', function (e) {
                //设置图片的位置
                $(angel).css('left', e.pageX + 'px').css('top', e.pageY + 'px')
            })
        })
    </script>
```

##### 3.节流阀的概念

高铁卫生键是否被占用，由红绿灯控制，红灯表示被占用，绿灯表示**可使用**

假设每个人卫生间都需要花费5分钟，则五分钟之内，被占用的卫生间无法被其他人使用。

上一个人使用完毕，需要将红灯**重置**为绿灯，表示下一个人可以使用卫生间。

下一个人在上卫生间之前，需要先**判断控制灯是否为绿色**，来知晓能否上卫生间。



节流阀为空，表示**可以执行下次操作**；**不为空**，表示**不能执行下次操作**。

当前操作执行完了，必须将节流阀**重置**为空，表示可以执行下次操作了。

每次执行操作之前，必须**先判断是否为空**。

##### 4.使用节流优化鼠标跟随效果

```javascript
    <script>
        $(function () {
            //预定义节流阀
            var timer = null
            //获取图片元素
            var angel = $('#angel')
            //监听文档的 mousemove 事件
            $(document).on('mousemove', function (e) {
                if (timer) { return }//判断节流阀是否为空，如果不为空，则证明距离上次执行间隔不足16秒
                timer = setTimeout(function () {
                    //设置图片的位置
                    $(angel).css('left', e.pageX + 'px').css('top', e.pageY + 'px')
                    timer = null //当设置了鼠标跟随习哦啊过后，清空timer节流阀，方便下次执行开启延时
                }, 16)

            })
        })
    </script>
```

#### 4.4总结防抖和节流的区别

- 防抖：如果事件被频繁触发，防抖能保证 **只有一次触发生效！**前面N多次的处罚都会被忽略
- 节流：如果事件被频繁触发，节流能够**减少事件触发的频率**，因此，节流是**有选择性的**执行一部分事件！

## HTTP协议加强

### 1.HTTP协议简介

#### 1.1什么是通信

通信就是**信息的传递和交换**



通信的三要素：

- 通信的**主体**
- 通信的**内容**
- 通信的**方式**

![image-20220402104949378](/Users/sime/Library/Application Support/typora-user-images/image-20220402104949378.png)

![image-20220402105048906](/Users/sime/Library/Application Support/typora-user-images/image-20220402105048906.png)

#### 1.2什么是通信协议

**通信协议**是指通信的双方完成通信所**必须遵守的规则和约定**。

通俗的理解：通信双发 **采用约定好的格式**来发送和接收消息，这种**事先约定好的通信格式就叫做通信协议**。

![image-20220402105537978](/Users/sime/Library/Application Support/typora-user-images/image-20220402105537978.png)

##### 2.互联网中的通信协议

客户端与服务器之间要实现网页内容的传输，则通信的双方必须遵守**网页内容的传输协议**。

**网页内容有叫做超文本，因此网页内容的传输协议有叫做超文本传输协议，简称HTTP协议。**

#### 1.3HTTP

##### 1.什么是HTTP协议

**HTTP协议**即超文本传输协议，它规定了客户端与服务器之间进行网页内容传输时，所必须遵守的传输格式。

- 客户端要以HTT协议要求的格式吧数据提交到服务器
- 服务器要以HTTP协议要求的格式把内容响应给客户端

##### 2.HTTP协议的交互模型

![image-20220402110558298](/Users/sime/Library/Application Support/typora-user-images/image-20220402110558298.png)

### 2.HTTP请求

#### 2.1什么是HTTP请求消息

由于HTTP协议属于客户端浏览器和服务器之间的通信协议，**因此没客户端发起的请求叫做HTTP请求，客户端发送到服务器的消息，叫做HTTP请求消息。**



注意：HTTP请求消息又叫做**HTTP请求报文**。



#### 2.2HTTP请求消息的组成部分

HTTP请求消息由**请求行、请求头部、空行**和**请求体**4个部分组成。

![image-20220402111059881](/Users/sime/Library/Application Support/typora-user-images/image-20220402111059881.png)

##### 1.请求行

**请求行**由请求方式、URL和HTTP协议版本3个部分组成，它们之间使用空格隔开

![image-20220402111321059](/Users/sime/Library/Application Support/typora-user-images/image-20220402111321059.png)

![image-20220402111341540](/Users/sime/Library/Application Support/typora-user-images/image-20220402111341540.png)

##### 2.请求头部

**请求头部**用来描述客户端的基本信息，从而把客户端相关的信息告知服务器，比如：**User-Agent** 用来说明当前是什么类型的浏览器；Content-Type用来描述服务器的数据格式；**Accept**用来描述客户端能够接受什么类型的返回内容;**Accept-:anguage**用来描述客户端期望接收那种人类语言的文本内容。

请求头部是由多行 **键/值对**组成，每行的键和值之间用英文的冒号分隔。

![image-20220402112450835](/Users/sime/Library/Application Support/typora-user-images/image-20220402112450835.png)

##### 2. 请求头部-常见的请求头字段

![image-20220402112552649](/Users/sime/Library/Application Support/typora-user-images/image-20220402112552649.png)

![image-20220402112629141](/Users/sime/Library/Application Support/typora-user-images/image-20220402112629141.png)

##### 3.空行

最后一个请求头字段的后面是一个**空行**，通知服务器请求头部至此结束。

请求消息中的空行，用来分割**请求头部与请求体。**

![image-20220402112918250](/Users/sime/Library/Application Support/typora-user-images/image-20220402112918250.png)

##### 4.请求体

请求体中存放的，是要通过POST方式提交到服务器的数据。

![image-20220402113015551](/Users/sime/Library/Application Support/typora-user-images/image-20220402113015551.png)



**注意：只有POST请求才有请求体，GET请求没有请求体。**

### 3.HTTP响应

#### 3.1什么是HTTP响应消息

**响应消息**就是服务器响应给服务端的消息内容，也叫做响应报文。

#### 3.2HTTP响应消息的组成部分

HTTP响应消息由**状态行、响应头部、空行和响应体**4个部分组成，如下图所示：

![image-20220402114156675](/Users/sime/Library/Application Support/typora-user-images/image-20220402114156675.png)

##### 1.状态行

**状态行**由HTTP协议版本、状态码和状态码的描述文本3个部分组成，它们之间使用空格隔开；

![image-20220402114455726](/Users/sime/Library/Application Support/typora-user-images/image-20220402114455726.png)

![image-20220402114527982](/Users/sime/Library/Application Support/typora-user-images/image-20220402114527982.png)

##### 2.响应头部

**响应头部**用来描述**服务器的基本信息**。响应头部由多行**键/值对**组成，每行的键和值之间用英文的冒号分隔。

 ![image-20220402115011008](/Users/sime/Library/Application Support/typora-user-images/image-20220402115011008.png)

##### 2.常见的响应头部字段

![image-20220402115043940](/Users/sime/Library/Application Support/typora-user-images/image-20220402115043940.png)

##### 3.空行

在最后一个响应头部字段结束之后，会紧跟一个空行，用来通知客户端响应头部致辞结束。

响应消息的恐慌，用来分隔响应头部与响应体。

##### 4.响应体

响应体中存放的模式服务器响应给客户端的资源内容。

![image-20220402115514242](/Users/sime/Library/Application Support/typora-user-images/image-20220402115514242.png)

### 4.HTTP请求方法

#### 4.1什么是HTTP请求方法

HTTP请求方法，属于HTTP协议中的一部分，请求方法的作用是：用来表明要**对服务器上的资源执行的操作。**

最常用的请求方法是GET和POST。

#### 4.2HTTP的请求方法

![image-20220402120045139](/Users/sime/Library/Application Support/typora-user-images/image-20220402120045139.png)

### 5.HTTP响应状态代码

#### 5.1什么是HTTP响应状态吗

**HTTP响应状态吗**(HTTP Status Code)，也属于HTTP协议的一部分，用来标识**响应的状态**。

响应状态码会随着响应消息一起被发送至客户端浏览器，浏览器根据服务器返回的响应状态吗，就能知道这次HTTP请求的结果是横过还是失败了。

![image-20220402120709901](/Users/sime/Library/Application Support/typora-user-images/image-20220402120709901.png)

#### 5.2HTTP响应状态码的组成及分类

HTTP状态码由**三个十进制数字**组成，**第一个十进制数字**定义了**状态码的类型**，后两个数字用来对状态码进行细分。

HTTP状态码共分为5种类型：

![image-20220402121041014](/Users/sime/Library/Application Support/typora-user-images/image-20220402121041014.png)

##### 1.  2**成功相关的响应状态码

2* *范围的状态码，表示服务器已成功接收到请求并进行处理。常见的2**类型的状态码如下：

![image-20220402121450776](/Users/sime/Library/Application Support/typora-user-images/image-20220402121450776.png)

##### 2.  3**重定向相关的响应状态码

3* *范围的状态码，表示服务器要求客户端定向，需要客户端进一步的操作请求，常见的 3** 类型状态码如下：

![image-20220402121736225](/Users/sime/Library/Application Support/typora-user-images/image-20220402121736225.png)

#### 3.  4**客户端错误相关的响应状态码

4** 范围的状态码，表示客户端的请求有非法内容，从而导致这次请求失败，常见的 4** 类型的状态码如下：

![image-20220402124321913](/Users/sime/Library/Application Support/typora-user-images/image-20220402124321913.png)

##### 4. 5** 服务端错误相关的响应状态码

5** 范围的状态码，表示服务器未能正常处理客户端的请求而出现一位错误，常见的 5** 类型的状态码如下：

![image-20220402124827416](/Users/sime/Library/Application Support/typora-user-images/image-20220402124827416.png)

### 







