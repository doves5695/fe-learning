//计时器
var timeDom = document.getElementsByClassName("time")[0];
var second = 0;
var minute = 0;
function time () {
        timeStop = setInterval(function () {
        second ++;
        if(second === 60) {
            minute ++;
            second = 0;
        }
        if(second < 10 && minute < 10) {
            timeDom.value = "时间:" + "0" + minute + ":" + "0" + second;
        } else if (second >= 10 && minute < 10) {
            timeDom.value = "时间:" + "0" + minute + ":" + second;
        } else if (second < 10 && minute >= 10) {
            timeDom.value = "时间:" + minute + ":" + "0" + second;
        } else if (second >= 10 && minute >= 10) {
            timeDom.value = "时间:" + minute + ":" + second;
        }
    },1000);
}
// time();
var BtnDom = document.getElementsByTagName("button")[0];
function Btn () {
   BtnDom.onmousedown = function (e) {
    if(e.button == 0) {
        clearInterval(timeStop);
        if(window.confirm("游戏已暂停,是否继续游戏")) {
            time();
        } else {
            console.log('2');
            second = 0;
            minute = 0;
            timeDom.value = "时间:" + "0" + minute + ":" + "0" + second;
        clearInterval(timeStop);
            //游戏重新开始,翻转过来的span回归初始状态,计时器归零
        }
    } else if (e.button == 2) {
        console.log('2');
        second = 0;
        minute = 0;
        timeDom.value = "时间:" + "0" + minute + ":" + "0" + second;
        clearInterval(timeStop);
        //翻转过来的span转回去了
    }
   }
   document.oncontextmenu = function (e) {
    e.preventDefault();
   }
}
Btn();
function qipan() {
    for(var i = 0; i < tr; i++) {
        latticetr.domContent = document.createElement("ul");
        document.querySelector(".content").append(latticetr.domContent);
        for(var j = 0; j < td; j++) {
            latticetd.domContent = document.createElement("li");
            var ulCol = document.querySelectorAll("ul");
            for(var u = 0; u < ulCol.length; u ++) {
                ulCol[u].append(latticetd.domContent);
            }
            tdContent.domContent = document.createElement("span");
            var liCol = document.querySelectorAll("li");
            for(var l = 0; l < liCol.length; l ++) {
                liCol[l].append(tdContent.domContent);
                // console.log(tdContent.domContent);
            }
        }
    }
}
qipan();
//棋盘翻转事件
function flip() {
    tdContent.domContent = document.getElementsByTagName("span");
    for(var i = 0; i <tdContent.domContent.length; i ++) {
        (function (canshu) {
            tdContent.domContent[canshu].onmousedown = function (e) {
                // console.log("6");
                if(e.button == 0) {
                    tdContent.domContent[canshu].style.backgroundColor = "#8F999F";
                } else if (e.button == 2) {
                    tdContent.domContent[canshu].style.background = 'url("../扫雷/img/qizi.jpg") center/contain no-repeat';
                }
            }
        }(i))
        }
    }
flip();
//给雷盘编上坐标
function myArr() {
    for(var i = 0; i < tr; i ++) {
        for(var j = 0; j < td; j ++) {
            latticeArr.push({
                x : i,
                y : j
            });
        }
    }
    // console.log(latticeArr);
}
myArr();
function drawLei () {
    // var firstOpen = true;
    // tdContent.domContent = document.getElementsByTagName("span");
    // for(var i = 0; i < tdContent.domContent.length; i ++) {
    //     (function (canshu) {
    //         tdContent.domContent[canshu].onmousedown = function (e) {
    //             if(e.button == 0) {
    //                 if(firstOpen) {
    //                     firstOpen = false;
    //                     var leishu = 0;
    //                     while(leishu < maxLei) {
    //                         lei.x = Math.floor(Math.random() * tr);
    //                         lei.y = Math.floor(Math.random() * td);
    //                         for(var j = 0; j < tdContent.domContent.length; j ++) {
    //                             (function (canshu) {
    //                                 tdContent.domContent[canshu].style.background = 'url("../扫雷/lei.jpg") center/contain no-repeat';
    //                             },(j))
    //                         }
    //                     }
    //                 }
    //                 // tdContent.domContent[canshu].style.backgroundColor = "#8F999F";
    //             } else if (e.button == 2) {
    //                 tdContent.domContent[canshu].style.background = 'url("../扫雷/img/qizi.jpg") center/contain no-repeat';
    //             }
    //         }
    //     }(i))
    //     }
    flip();
    lei.x = Math.floor(Math.random() * tr);
    lei.y = Math.floor(Math.random() * td);
    for(var i = 0; i < tr; i ++) {
        for(var j = 0; j < td; j ++) {
            (function (canshuyi,canshuer) {
                tdContent.domContent[canshuyi][canshuer].innerHtml = function (e) {
                    // console.log("6");
                    if(e.button == 0) {
                        tdContent.domContent[canshu].style.backgroundColor = "#8F999F";
                    } else if (e.button == 2) {
                        tdContent.domContent[canshu].style.background = 'url("../扫雷/img/qizi.jpg") center/contain no-repeat';
                    }
                }
            }(i,j))
        }
    }
}
drawLei();
// function main () {

// }