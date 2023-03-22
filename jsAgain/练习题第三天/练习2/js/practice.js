function filter() {
  /* 
    这里的代码在页面最开始就会运行。
    老师为你准备好了两个变量：
    1. allHeroes：所有英雄组成的数组
    2. heroes：要在页面上显示的英雄数组
    你要做的就是按照老师的要求，遍历allHeroes数组，找到满足条件的英雄，把它加到heroes数组中去

    每个英雄是一个对象，你只需要关心下面几个属性即可：
    {
      cname: 英雄的中文名,
      hero_type: 英雄的类型, 
      hero_type2: 英雄的副类型
    }
  */
  /* 
    在页面上显示所有战士
  */
 for(var i = 0; i < allHeroes.length; i ++) {
  if(allHeroes[i].hero_type == '战士' || allHeroes[i].hero_type2 == '战士') {
    heroes.push(allHeroes[i]);
  }
 }
}
