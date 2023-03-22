/* 
  一个游戏人物包含多种信息，用对象来表示再合适不过了。
  现在，我们用一个对象来表示游戏中的英雄，老师会使用你定义的对象，把它展示到页面上。
  1. 对象的名称为 hero
  2. 对象属性 direction 是一个字符串，它表示英雄面朝的方向。一共有8个取值：
  1）left：左
  2）right：右
  3）up：上
  4）down：下
  5）lu：左上
  6）ru：右上
  7）ld：左下
  8）rd：右下
  给hero赋予该属性，随意选择一些值，看看效果
  3. 对象属性 isRunning 是一个布尔值，它表示英雄是否处于奔跑状态。给hero赋予该属性，随意取一个布尔值，看看效果
  4. 对象属性 position 表示英雄的位置，它是一个对象，包含两个属性：
  1）x：英雄的横坐标
  2）y：英雄的纵坐标
  给hero赋予该属性，随意选择一些值，看看效果

  5. 为了后续的效果，现在，请让英雄处于站立的状态（不要奔跑），方向随意，位置随意
*/
var hero = {
  direction : 'left',
  isRunning : false,
  position : {
    x : 100,
    y : 300,
  },
};

function compute() {
  /* 这里的代码会在用户点击后运行。
  1. 用户点击后，老师给你设置好了一个变量 target，你可以打印试一试。这个变量是一个对象，里面记录了鼠标点击位置的坐标。你现在需要重新设置hero对象的position属性，分别更新它的x和y，设置为鼠标位置。
  2. 你发现英雄可以正确移动到鼠标位置。但是英雄的朝向是有问题的。老师给你计算好了一个变量 direction，它表示鼠标点击后英雄的正确方向。你现在需要更新hero对象中的相应属性，让英雄面朝正确的方向
  3. 英雄的朝向正确了。但是英雄没有跑步的动作，现在，你需要设置hero的相应属性，让英雄跑动起来
  */
  // 在这里写代码
  // console.log(hero.position.x);
  // console.log(target.x);
  hero.position.x = target.x;
  hero.position.y = target.y;
  hero.direction = direction;
  hero.isRunning = true;
}
