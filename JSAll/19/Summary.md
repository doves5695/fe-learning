SEO最常见的标签
  h标签 p标签 br标签 strong a标签 IMG标签

CSS当中的定位
  absolute(绝对定位) 相对于第一个非 static 定位的父级元素进行定位,如果没有满足条件的父级元素，则会相对于浏览器窗口来进行定位。使用绝对定位的元素不会对其它元素造成影响。
  relative(相对定位) 相对定位，即相对于元素的正常位置进行定位
  fixed(固定定位) 相对于浏览器的创建进行定位,使用固定定位的元素无论如何滚动浏览器窗口元素的位置都是固定不变的。
  sticky(粘性定位) 粘性定位，它是 relative 和 fixed 的结合体，能够实线类似吸附的效果，当滚动页面时它的效果与 relative 相同，当要滚动到屏幕之外时则会自动变成 fixed 的效果。
  static(静态定位) 默认值，静态定位，表示没有定位，元素会按照正常的位置显示

bfc是什么
  BFC 全称是 Block Formatting Context，即块格式化上下文,它是一个独立的渲染区域，只有 Block-level box 参与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干

bfc规则
  1.内部的BOX会在垂直方向一个接一个的放置
  2.Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
  3.每个元素的 margin box 的左边， 与包含块 border box 的左边相接触（对于从左往右的格式化，否则相反）。即使存在浮动也是如此。
  4.BFC 的区域不会与 float box 重叠，常用来清除浮动和布局。
  5.BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
  6.计算 BFC 的高度时，浮动元素也参与计算；

会生成BFC的元素
  1.根元素或其他包含它的元素(root 选择器匹配到的元素，也就是文档树中最顶层结构的元素。)
  2.浮动元素(也就是元素float的值不为none)
  3.绝对定位元素(元素的position为absolute或fixed)
  4.行内块inline-block(元素的display:inline-block);
  5.表格单元格(元素的display: table-cell，HTML 表格单元格默认属性)
  6.overflow的值不为visible的元素
  7.弹性盒(元素的display:fixed或inline-fixed)

如何解决bfc
  1.overflow:hidden  解决 margin-top 的传递问题（此处并没有溢出隐藏）
  2.padding- 方位：1px 这种方法影响最后实际宽高 需要在 width/height 上基础上减掉才不会影响最后实际的宽高
  3.border-top:1px 这种方法会影响最后实际的高度 需要在高度 height 上基础上减掉 才不会影响最后实际的高度
  4.给子元素的 margin-top 的值改成父元素的 padding-top, 这样就避免使用 margin-top 值导致传递的问题

maigin塌陷可以用overflow:hidden 触发bfc来解决,也可以加个屋顶

水平垂直居中,top和left各为50%,还要加上position:absolute,然后让margin-top和margin-left各减去盒子的一半宽高

伪元素和伪类的区别
  伪元素是真实的元素,可以在页面上反应出来效果,伪类是一种修饰的类,是一种不可见的元素

标准盒模型和怪异盒模型
  标准盒模型,box-sizing : content-box,在标准模式下，一个块的总宽度= width + margin(左右) + padding(左右) + border(左右)
  怪异盒模型,box-sizing : border-box,在怪异模式下，一个块的总宽度= width + margin(左右)（即width已经包含了padding和border值）

两栏布局
  左侧用float浮动
  右边模块使用 margin-left 撑出内容块做内容展示
  为父级元素添加 BFC ，防止下方元素飞到上方内容

三栏布局
  两边使用 float ，中间使用 margin  需要把中间的div放在html中,左右的下面来写,否则会导致右侧的div下沉
  两边使用 absolute ，中间使用 margin  
  两边使用 float 和负 margin 
  display: table 实现
  flex 实现
  grid 网格布局

JS的基本数据类型   null number string boolean undefined   引用值  object function 
typeof返回的数据类型  number string boolean object function  undefined
判断数据类型的方法   typeof     Object.prototype.toSting.call()  instanceof