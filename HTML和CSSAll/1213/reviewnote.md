<!DOCTYPE html>  这个标签用来告诉浏览器用哪种html规范
<html lang="en">  代表该标签使用的语言是英语（lang=language，en=engli）
 <meta charset="UTF-8">   告诉浏览器用什么编码格式解析当前浏览器
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  这句用来告知浏览器用何种版本渲染页面（一般采用最新的），这里的指的是IE浏览器使用最新的IE版本渲染当前页面
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   这是一个针对移动网页优化的标签，width用于设置viewport（用户网页的可视区域）的宽度，这里的device-width表示视区宽度就是设备的屏幕宽度，而initial-scale（指定页面的初始缩放比例）则控制初始缩放比例，这里的1.0则表示显示的是未经缩放的web页面。
    
                          复习
                     
    关于字体的表示                      
    font-size       设置的是字体的高度，宽同比例缩放 ，浏览器的默认字体是16px
    font-weight     范围是100-900px，取整百的数字，还有light/normal/bold/bolder
    font-family     这个用来改字体的比如什么宋体这种
    font-style      用来设置字体的样式，比如什么倾斜，加粗之类的

    关于颜色的表示
    有大概三种情况：1.最简单的用英文来表示比如red，blue...
                   2.用#后面加上颜色专属的编码例如，#f00
                   3.第三种也是最常用的一种，无论是用前面哪两个，最后在计算机当中都会自动转化成rgb模式
    
    关于一些样式：
    line-height:这个用于让字体在一个盒子当中居中，当line-height的值等于盒子的高度，就可以实现.
    text-align:这个用来对齐文本，center,用来居中，left,用来放在左侧,
    right，用来对齐右侧
    text-decoration:这个用来弄一些线比如：underline 就是下划线,line-through,就是那种把价钱划掉的线
    text-indent: 这个是用于首行缩进的，这里面的em等于当前字体的吃醋呢，比如当前字体的16px，那么1em就是16px，这是一个相对的值，跟当前字体有关。
    px表示的是每英寸所能容纳的dppi点数
    
    关于border：
    border：2px solid red：
    这里的2px表示的是这个边框的厚度，solid表示的是border-style:大概有几种线：dashed(虚线) dotted(点虚线) double(双虚线) solid(实线)

    小拓展:
    hover伪类,这个用来改变鼠标放上去的样式.

    常见的块级元素：block,占满整行,但是可以改变宽高
    <p>
    <div>
    <ul>
    <li>
    <ol>
    <h1>~<h6>
    <table>
    <form>
    <address>

    常见的行内元素：inline ,不占满整行,但是不可以改变宽高
    <a>
    <b>
    <i>
    <u>
    <em>
    <strong>
    <span>
    <ins>

    常见的行内块元素:inline-block,不占满整行,还可以改变宽高
    <img>

    用display标签,可以实现他们三个之间的转化工作

    关于盒模型:

    context  表示里面的内容
    padding  表示内边距,也就是里面内容跟盒子边框产生的距离就是padding
    padding由四个值组成,比如padding:0,10px,2px,30px;当四个方向都有值的时候,它是按照上右下左来排序的,当只有三个值的时候,比如:padding:10px,20px,40px;它的顺序是上,左右,下,两个值表示的是:上下,左右.

    margin  表示的是外边距



    body有一个默认的8px的外边距
  在ie6  margin：16px 11px 16px 11px;
    ie7  margin: 16px 10px 16px 10px;
    ie8  margin: 16px 8px  16px 8px;

    当编写代码的时候，在css最开头要用通配符选择器*{}，来初始化一下，因为有的标签有初始化边距.

    塌陷问题:父亲和儿子共用一个margin-top了,并且在两个margin-top中选择一个最大的margin-top,解决方案就是:在父亲那里写一个overflow:hidden;

    合并问题:这会是父亲和儿子共用一个margin值,也是选择一个最大的,解决方案就是他们两都套上一个父亲,并且在父亲上写一个overflow:hidden;

    
    自定义标签:
    使用自定义标签的时候切记,要不原标签的属性初始化

    关于定位:
    绝对定位:position:absolute,脱离了原来位置进行定位,就算不挪走,别的元素也可以放在他那块,因为别人看不见他了.同时他也会相对于距离自己最近的父集进行定位,如果没有父集,那就相对于浏览器边框进行定位.(当相对于父集定位时,要在父集中写上一句,position:relative)

    相对定位:position:relative,保留原来位置进行定位,就算是你不挪走,别人也不行来.



    关于fixed定位:他是针对于当前窗口定位的,并且在ie6当中不能使用该定位.

    关于float:它会产生一个浮动流,但是这个浮动流只有inline(标签和文字)才能看见它,当一个元素被加上了float效果,他会被偷偷的变成inline-block这种效果

    最开始推出float这种效果目的就是为了让文字围绕图片,当要实现文字环绕图片是在图片标签上实现float浮动效果,然后把文字放在图片后面.


    关于清除浮动:
    一般不建议用p标签,因为太低级,
    在一个div中如果几个div块,浮动了,会产生浮动流,这几个块就变成了inline-block,他们的父集div,因为是block标签,无法看见那个浮动流,就会使没有增加高度值,的border边框变塌
    解决这一现象的几种方法:
    一.在父集中也添加浮动效果,让父集变成inline-block,这样就能看见,子集的浮动,使边框被子集的内容撑开.
    二.第二种方法与第一种差不多,是在父集中添加一个display,让他变成inlin-block,也就可以看见浮动流了
    三.
    四.
    五.添加一个after伪类元素,这种方法是最好看的.inline元素是不能切除浮动的，然而伪元素初始状态就是inline，所以用这个伪元素清除浮动法，要先display一下而且只有block元素才能清除浮动

    伪类元素天生是inline属性.使用伪类元素的时候,要注意写上一个content:"";   引号里面可以没有内容但是这个必须写.


    while-sapce:nowrap; 这个标签可以实现暂时不换行
    
    white-space: nowrap;
    overflow: hidden;
  text-overflow: ellipsis;    当他们三个放在一起就可以实现单行打点了


  background-size:cover;（用且仅用一张图片来铺满整个容器）
  bcakground-size:contain;(保证背景图片至少有完整的一张)



  vertical-align: middle; 可以让这一行的文字对齐（把他放在这个文字的标签里面，或者这一横行的文字里面）    设置的是对齐线
    