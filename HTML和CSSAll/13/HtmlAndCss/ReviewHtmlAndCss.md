<!DOCTYPE html>    这个标签用来告诉浏览器用哪种html来浏览
<html lang="en">    代表标签使用的语言是英语 (lang = language , en = ehglish)
<meta charset="UTF-8">  告诉浏览器用什么编码格式解析当前浏览器
<meta http-equiv="X-UA-Compatible" content="IE=edge">
这句话用来告诉浏览器用何种版本渲染页面(一般采用最新的),这里指的是IE浏览器使用最新的IE版本渲染当前页面
<meta name="viewport" content="width=device-width, initial-scale=1.0">
这是一个针对移动网页优化的标签,width用于设置viewport(用户可视区域)的宽度,这里的device-width表示视区宽度就是设备的屏幕宽度,而initial-scale(指定页面的初始缩放比例)用来控制初始缩放比例,这里的1.0表示的是未经缩放的web页面。
<meta>标签作用是让你的浏览器认识你的字体

当前常用的浏览器            它们的内核
       chrome                webkit/blink
       safair                webkit
       Edge                  chormium
       firefox               Gecko
       IE                    渲染引擎(Rendering Engine)


html的语义化
      就是用正确的标签去做正确的事情,语义化就是让内容结构化,html的语义化有助于,他人阅读你的代码,有助于机器爬虫解析

a标签的作用
      1.链接
      2.锚点
      3.调用计算机的本地功能
      4.超链接协议

font-size       设置的是字体的高度,宽度同比例缩放,浏览器默认字体是16px
font-weight     它的范围是100-900,在此范围内取整百的数字,normal/light/bold/bolder
font-family     设置的是字体比如宋体,黑体
font-style      设置的是字体的样式,比如倾斜,粗体

颜色的表示大概有三种
         1.直接加入英语单词
         2.#加颜色的专属编码，#fff
         3.rgb模式,第三种也是最正规的表达方式,不论你写的是哪种颜色表达方式到计算机当中都会转化成rgb模式

line-height;  当字体大小跟line-height大小相等时可以实现字体居中
text-align;   用来实现文本对齐,left就是左对齐,right就是右对齐,center就是居中
text-decoration;  用来加一些样式,比如下划线,删除线等等
line-through;     就是在字体上打一个横线
text-indent;      用于首行缩进,当浏览器的字体为默认值16px时,1em = 16px,这个em是一个相对的值,跟当前字体大小有关,px表示的是当前每英寸所能容纳的dppi点数

border: 2px solid red;
2px表示的是边框的厚度,solid表示的是实线,同时还有虚线(dashed),点虚线(dotted),双虚线(double),red表示的是边框的颜色

hover;      表示的是伪类,也就是鼠标一悬浮上去样式就会发生改变

常见的块级元素
             block,占满整行,但可以改变宽高
             <h1 - h6>
             <ul>
             <li>
             <ol>
             <table>
             <form >
             <address>
             <div>

常见的层级元素
            inline,不占满整行,但是不能改变宽高
            <a href=""></a>
            <b></b>
            <u></u>
            <i></i>
            <em></em>
            <strong></strong>
            <span></span>
            <ins></ins>

常见的行内块元素
            inline-block,不占满整行,而且可以改变宽高
            img

使用display可以实现他们之间的转化

盒子模型
     content   表示盒子当中的内容
     padding   表示内边距,也就是盒子内容到边框的距离
     padding   由四个值组成分别是上右下左,当你希望用三个值表示的时候分别是:上,左右,下,当你希望用两个值的时候,分别是:上下,左右
     margin    表是的是外边距,他的四个值跟padding值是一样的
     body有一个默认的8px的外边距
     所以我们在使用css时会在最开始使用通配符选择器初始化页面一下

     在ie6   margin : 16px 11px 16px 11px
       ie7   maigin : 16px 10px 16px 10px
       ie8   margin : 16px 8px 16px  8px

塌陷问题
    就是父集子集共用一个margin-top,并且是哪个值大就取哪个
    解决方法就是在父集当中写上一句overflow:hidden; 或者
    让子集以父集为目标position:absolute一下

合并问题
    也是父集和子集共用一个margin值,也是取他们之间的最大值,解决方案是给父集创造一个div爹,在爷爷集上写上一句overflow:hidden;
    
自定义标签
     在未来会使用自定义的标签,在使用的时候,要把原有标签的功能初始化掉,便于以后使用
    
position:absolute  绝对定位,脱离了原来位置定位,也就是说原来它所占用的位置被释放了就算它没有挪动,那下一个元素也可以站在它的原来位置上,它也会找寻一个目标进行定位,如果没有目标,那么就以浏览器边框为基准来定位,如果有父集作为目标,那么父集中最好的标杆为 position:relative;

position:relative  相对定位,占着茅坑不拉屎形定位,就算它移动了,那它最初所在的位置也不允许别人去占位

position.fixed     他是针对于当前窗口进行定位的,并且在ie6中不能使用

float    当使用float时候会产生你看不见的浮动流,除了inline元素以外都看不见它
          它会隐式的把元素变成inline-block
          最开始的float是为了达到元素包围图片的效果

浮动到底是什么 
         例如你在一个div当中定义了三个div盒子,如果你让他们三个浮动,那么最外层的div就看不见里面的内容了,因为里面的三个已经被float浮动了,而浮动之后的元素只有inline元素才能看见它,所以最外层的div是block元素,也就看不见里面被浮动的元素的

如何清除浮动
        最简单的就是让父集跟子集一起浮动,因为一起浮动后,父集也就变成了inline-block,也就能看见子集的浮动了
        还有就是让父集display:inline-block,跟上一个方法原理相同
        最正规的就是在父集上添加一个afte伪类元素,在使用伪类的时候,记得在里面写上一个content:""; 切记在使用伪类的时候只有display:block;才能实现

while-sapce:nowrap:   这个标签可以实现暂时不换行

while-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;     这三个标签加在一起可以实现单行打点

background-size:cover;    用且只用一张图来铺满整个容器
background-size:contain;  保证背景图片至少有完整的一张图片

vertical-align: middle; 可以让这一行的文字对齐（把他放在这个文字的标签里面，或者这一横行的文字里面）    设置的是对齐线