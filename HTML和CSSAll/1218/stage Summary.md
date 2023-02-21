font-size (字体大小，他设置的是字体的高度，宽同比例缩放)
浏览器默认的像素的是16px
font-weight:100-900;(整百才好用，900是最粗的)
lighter|normal|bold|bolder
font-family(表示的是字体样式，比如宋体这种)
font-style（设置字体样式，比如倾斜啊加粗）
颜色的表示：
大概有三种情况：1.在backgroundcolor后面加上颜色的英文单词；
               2.在backgroundcolor后加上#代表颜色的代码
               3.在backgroundcolor后面加上rgb（）这种情况最好，最标准，在计算机当中都会转变为这种表示情况。
line-height:这个相对于自己的高度来定位居中。
text-align:这个用来对齐文本，center居中，left居左，right居右
text-decoratio：这用来表示一些线，如underline下划线，line-through字体中级的横线.
text-indent：这个线用于首行缩进，一般用？em来表示，这个？表示当前字体的大小比如，当前字体的16px，1em就是缩进一个字体的大小=16px，2em就是缩进两个字体的大小=32px，这是一个相对的值，与当前字体大小有关，px表示的 是每英寸所能容纳的dppi点数。

关于border：
border：1px solid black（1px表示的是当前边框的宽度，solid是边框的线条是什么线，solid是实线，dashed是虚线，dotted是点虚线，double是爽虚线。）

hover是一个伪类元素，伪类元素的display是默认值inline。

常见的块级元素：block，占满整行，但是可以改变宽高
               <h1>~<h6>
               <ul>
               <li>
               <ol>
               <table>
               <form>
               <address>
               <div>

常见的行内元素：inline，不占满整行，但也不能改变宽高
               <a>
               <b>
               <i>
               <u>
               <em>
               <strong>
               <span>
               <ins>

常见的行内块元素：inline-block，不占满整行，但是可以改变宽高
                <img>

用display可以实现他们三个之间的相互转化。

关于盒子模型：
content  表示里面的内容
padding  表示内边距，也就是盒子的边框跟盒子里面的内容产生的边距
padding  由四个值组成padding：10px 20px 30px 40px； 当有四个值的时候，表示的顺序是上右下左，当有三个值时候：padding：10px 20px 30px；表示的顺序是上，左右，下，两个值则是上下，左右。
margin： 表示的是外边距，跟padding一样都是四个方向组成的

body有一个默认8px的外边距
一般在写css样式的时候，在最前面会使用通配符来初始化页面。

在  ie6  margin：16px 11px 16px 11px;
    ie7  margin: 16px 10px 16px 10px;
    ie8  margin: 16px 8px  16px 8px;

塌陷问题：就是父集子集共用一个margin-top，并且是选择他们两个当中最大的一个margin-top值，该问题的解决方案就是在父集当中写一个overflow：hidden；

margin合并问题，这会还是父集和子集共用一个margin值，也是取他们两中间的最大值，解决方案是在他们两外面再套一个div，然后加上overflow：hidden；

自定义标签，在使用自定义标签的时候，要把该标签之前的样式初始化，便于以后使用。

定位：
position:absolute  绝对定位，脱离了原来的位置了，就算还在那个地方，那别的元素也可以放在那里，因为原来位置的占位没有了，同时他也会相对于自己的父集进行定位，如果没有父集那就会对浏览器边框进行定位，当有父集让他定位时候，父集中最好有一个标杆，比如position：relative；

position：relative  相对定位，没有脱离原来位置进行定位，保留了原来的位置，就算是你走了别人也不允许使用该占位，（占着茅坑不拉屎）

position：fixed；   他是针对于当前窗口进行定位的，并且在ie6中不能使用该定位。

float   使用会产生浮动流，除了inline元素其他元素无法看见他
        他会偷偷的把元素变为inline-block
        在最开始使用他目的是达到文字包围图片的效果，就是在图片上添加一个float效果就可以达到。

关于浮动：
        比如在一个div边框中写几个div如果把他们浮动，那么这几个div就被浮动了也就是说只有inline标签的元素才能看见他们，所以要清除浮动。
如何清除浮动
           最简单的就是在父集上也添加上浮动,这样父集的div边框也就被浮动了变成了inline-block，也就能看见之前被浮动的div内容
           最正规的就是添加一个伪类，在使用这个伪类的时候，记得写上content：“”； 这个content里面的引号就算里面没有内容也要写上
           ::after{
            content:"";
            display:block;     (切记只有block可以)
            claer:both;
           }
           以上就是使用伪类清除元素的标准格式。
           还有就是在父集上添加一个display，让他变成inline-block格式

while-sapce：nowrap； 这个标签可以实现暂时不换行

while-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;     这三个标签加在一起可以实现单行打点

background-size:cover;（用且仅用一张图片来铺满整个容器）
background-size:contain;(保证背景图片至少有完整的一张)

vertical-align: middle; 可以让这一行的文字对齐（把他放在这个文字的标签里面，或者这一横行的文字里面）    设置的是对齐线


在写一个网页之前，要先看看他有几个模块组成，自己把他们分好组，然后自己设置div，写一些标签的时候可以用ul和li标签，然后把他们浮动

相对路径和绝对路径：
绝对路径就是最精准的表示，相对路径就用../这种跳到同一级之后然后进行调用

<!DOCTYPE html>  这个标签用来告诉浏览器用哪种html规范
<html lang="en"> 代表该标签使用的语言是英语（lang=language，en=engli）
<meta charset="UTF-8">   告诉浏览器用什么编码格式解析当前浏览器，中里的是用utf-8.
<meta http-equiv="X-UA-Compatible" content="IE=edge">
这句用来告知浏览器用何种版本渲染页面（一般采用最新的），这里的指的是IE浏览器使用最新的IE版本渲染当前页面
<meta name="viewport" content="width=device-width, initial-scale=1.0">
这是一个针对移动网页优化的标签，width用于设置viewport（用户网页的可视区域）的宽度，这里的device-width表示视区宽度就是设备的屏幕宽度，而initial-scale（指定页面的初始缩放比例）则控制初始缩放比例，这里的1.0则表示显示的是未经缩放的web页面。

常用浏览器以及他们的内核：
chrome     webkit/blink
safair     webkit
Edge       chromium
firefox    Gecko
Ie最核心的是    渲染引擎（Rendering Engine）

html的语义化，比如在一个html中用
                               <h1>标签和<strong>这两个标签所展示的字体是一样的，但是当其他人和机器爬虫读取代码时会默认<h1>标签是一个标题标签
语义化就是告诉我们用正确的标签去做正确的事情，以便于其他开发者阅读，同时让机器更快的解析。

a标签的使用方法
              1.作为一个锚点
              2.链接
              3.调用计算机本地的东西比如邮箱
              4.超链接协议

<link rel="stylesheet" href="../1218/stage Summary.css">

rel="stylesheet"   告诉浏览器这是一个样式

    