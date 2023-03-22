/* 
这里有一个空数组，数组的每一项是一个颜色，每个颜色对应到页面中每一条新闻的背景
比如，colors如果是 ['red', 'green', 'blue', ...]，则第1条新闻的背景是红色，第2条新闻的背景是绿色，第3条是蓝色，...
*/

/* 
  页面上共有10条新闻，假设每条新闻的背景颜色都是#e1deee。
  循环10次，每次循环向colors数组添加一个颜色#e1deee
*/
// var colors = [];
// for(var i = 0; i < 10; i ++) {
//   colors.push('#e1deee');
// }
/* 
  现在，需求有变，请修改刚才写的代码。
  我们需要为第奇数个新闻设置为 #e1deee，第偶数个新闻设置为#b9b1db
  数组最终为 ['#e1deee', '#b9b1db','#e1deee', '#b9b1db', ...]
*/
// var colors = [];
// for(var i = 0; i < 10; i ++) {
//   if( i % 2 === 0 ) {
//     colors.push('#b9b1db');
//   } else {
//     colors.push('e1deee');
//   }
// }
