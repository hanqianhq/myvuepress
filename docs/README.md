# HTML
## HTML5 的新特性

### 语义化标签

总是使用 div 标签对语义来说是不清晰的  

因为页面不仅要给人看，也要给机器看  
所以 html5 规范了这一点

- `<hrader></header>` 头部区域标签，块级标签
- `<footer></footer>` 底部区域标签，块级标签
- `<nav></nav>` 导航区域标签，块级标签
- `<time></time>` 时间区域标签，内联标签
- `<article></article>` 文章段落标签，块级标签
- `<aside></aside>` 侧边栏区域标签，块级标签
- `<mark></mark>` 标记记号标签，内联标签
- `<summary></summary>`摘要，h5 官方文档描述：定义 details 元素的标题，块级标签
- `<detailes></detailes>`细节，h5 官方文档描述：定义元素的细节，块级标签
- `<section></section>`部分，h5 官方文档描述：定义 section，块级标签

<br>

> 思考：[为什么要使用语义化标签？](./question/question/#你的剑就是我的剑)

### 新的表单类型

- `<input type="email" />` e-mail 地址的输入域
- `<input type="number" />` 数字输入域
- `<input type="url" />` URL 地址的输入域
- `<input type="range" />` range 类型显示为滑动条，默认 value 值是 1~100 的限定范围，也可以通过 min 属性和 max 属性自定义范围`<input type="range" name="points" min="1" max="10" />`
- `<input type="search" />` 用于搜索域
- `<input type="color" />` 用于定义选择颜色
- `<input type="tel" />` 电话号码输入域
- `<input type="date" />` date 类型为时间选择器

以及一些表单的新属性

- placehoder 属性，简短的提示在用户输入值前会显示在输入域上。即我们常见的输入框默认提示，在用户输入后消失
- required 属性，是一个 boolean 属性。要求填写的输入域不能为空
- pattern 属性，描述了一个正则表达式用于验证 `<input>` 元素的值。
- min 和 max 属性，设置元素最小值与最大值。
- step 属性，为输入域规定合法的数字间隔。
- height 和 width 属性，用于 image 类型的 `<input>` 标签的图像高度和宽度。
- autofocus 属性，是一个 boolean 属性。规定在页面加载时，域自动地获得焦点。
- multiple 属性 ，是一个 boolean 属性。规定 `<input>` 元素中可选择多个值

### 视频和音频

视频`<video>`  
音频`<audio>`

### Canvas 绘图

canvas 元素用于在网页上绘制图形，canvas 标签本身只是个图型容器，需要使用 javaScript 脚本来绘制图形

```js
<canvas id="mycanvas" width="600" height="400"></canvas>

var myCanvas = document.getElementById('mycanvas');
var canvas2d = myCanvas.getContext('2d');

canvas2d.moveTo(100, 100);  // 线条起始位置
canvas2d.lineTo(400, 100);  // 线条结束位置
canvas2d.strokeStyle = '#CD5C5C'    // 线条颜色
canvas2d.lineWidth = 5；    // 定义线宽
canvas2d.font = '20px Arial'; // 定义字体大小和字体类型
canvas2d.fillText('Canvas绘图demo', 400, 100)   // 设置绘制的文本和位置
canvas2d.stroke();
```

moveTo(x,y) 定义线条开始坐标  
lineTo(x,y) 定义线条结束坐标  
lineWidth 设置线宽  
fillText()设置绘制的文本和位置  
stroke()执行绘画

### SVG

可伸缩的矢量图形，SVG 也是一种使用 XML 描述 2D 图形的语言  
在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形


svg 图形的样式和 css 有些不同，fill 是定义图形填充色，stroke 描边色，stroke-width 是线宽  
如果我们要对 svg 图形操作，那么我们该怎么做呢？


其实很简单，只需要 document.getElementById() 获取需要操作的 svg 图形节点，然后针对该 svg 图形的属性去操作就可以了  
对 svg 图形属性的操作可以用 getAttribute() 和 setAttribute()

### 拖放（drag和drop）

在 h5 之前实现拖拽功能，其实用的是一种模拟方式  


鼠标 onmousedown 时，获取当前的一些信息，然后在 onmousemove 时不断更新推拽对象的 left 和 top 值，最后在 onmouseup 时对推拽对象彻底赋值，并进行释放后一系列的程序操作  

现在 h5 出来后呢，不在需要模拟了，因为它已经有标准的事件 api 了


### 地理定位

通过 getCurrentPosition()获取一系列定位信息  
getCurrentPosition()有两个回调函数参数，获取地理位置成功的回调和失败的回调

### 离线存储

通过创建 cache manifest 文件，可以创建 web 应用的离线版本


如果要启用应用程序缓存，必须在文档的 `<html>` 标签中包含 manifest 属性：每个指定了 manifest 的页面在用户对其访问时都会被缓存

如果未指定 manifest 属性，则页面不会被缓存


### Web 存储

如果说离线存储是对 web 的资源文件存储，那么 web 存储就是对应用程序里的数据做存储了  
web 存储提供了两个存储方式：

localStorage，没有时间限制的数据存储
sessionStorage，就是网页还没有关闭的情况下的存储，网页窗口关闭，则数据销毁在之前，这些都是由 cookie 完成的

**但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高**

### WebSocket

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议


WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据  


在 WebSocket API 中，浏览器和服务器只需要完成一次握手，浏览器和服务器之间就形成了一条快速通道，并进行双向数据传输


### WebWorkers

web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能  
您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行


关于 web worker 的应用大概分为三个部分：
- 创建 web worker 文件，worker 文件是一个单独的 js 文件，写好逻辑后，通过 postMessage()方法吧数据发送出去
- 调用页面创建 worker 对象，var w = new Worker("worker 文件路径")，然后通过实例对象调用 onmessage 事件进行监听，并获取 worker 文件里返回的数据
- 终止 web worker，当我们的 web worker 创建后会持续的监听它，需要中止的时候则使用实例上的方法 w.terminate()


## DOM 和 BOM

### DOM 文档对象模型

把文档当做一个对象来看待  
这个对象主要定义了处理网页内容的方法和接口


### BOM 浏览器对象模型

指的是把浏览器当做一个对象来对待  
这个对象主要定义了与浏览器交互的方法和接口


BOM 的核心是 window  
而 window 有 location 对象、navigator 对象、screen 对象等子对象


并且 DOM 的最根本对象 document 对象也是 BOM 的 window 对象的子对象

