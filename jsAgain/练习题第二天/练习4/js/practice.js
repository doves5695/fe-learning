function compute() {
  /*
  这里的代码用于计算不及格人数和90分以上的人数。
  不及格人数计算出来后，保存到老师提供的变量number1中。
  90分以上的人数计算出来后，保存到老师提供的变量number2中。
  目前，这两个变量都是0。
  为了你计算结果，老师给你提供了一个变量scores，你可以在控制台打印看看。它是一个数组，里面记录了每个学员的分数。
  （没什么影响的提示：姓名和分数是随机生成的，每位同学看到的不一样）
  */
  number1 = 0;
  number2 = 0;
  for(var i = 0; i < scores.length; i++) {
    if(scores[i] > 90) {
      number2 ++;
    } else if (scores[i] < 60) {
      number1 ++;
    }
  }
}
