function findIndex() {
  /* 
    这个函数会在播放时间变化时运行。
    老师给你提供了3个变量，你可以试试在控制台输出它们
    1. time：当前的播放时间（秒）
    2. lrcData：歌词数组
    3. index：这个变量是需要你赋值的。它表示lrcData数组中的某个下标。当播放时间到达某个点时，你需要在数组中找到对应歌词所在的下标。你给该变量赋值后，老师就会把对应的歌词高亮显示。
  */
 index = -1;
//  for(var i = 0; i < lrcData.length; i ++) {
//   if(time >= lrcData[i].time && time < lrcData[i+1].time) {
//     index = i;
//   }
//   // if(i == lrcData.length -1) {
//   //   index = i;
//   // }
//  }

for(var i = 0; i < lrcData.length; i ++) {
  if(time < lrcData[i].time) {
    index = i - 1;
    break;
  }
  if (i === lrcData.length - 1 ) {
    index = i;
  }
}

}
