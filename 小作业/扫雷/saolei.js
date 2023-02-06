// //计时器
// var timeDom = document.getElementsByClassName("time")[0];
// var second = 0;
// var minute = 0;
// function time () {
//         timeStop = setInterval(function () {
//         second ++;
//         if(second === 60) {
//             minute ++;
//             second = 0;
//         }
//         if(second < 10 && minute < 10) {
//             timeDom.value = "时间:" + "0" + minute + ":" + "0" + second;
//         } else if (second >= 10 && minute < 10) {
//             timeDom.value = "时间:" + "0" + minute + ":" + second;
//         } else if (second < 10 && minute >= 10) {
//             timeDom.value = "时间:" + minute + ":" + "0" + second;
//         } else if (second >= 10 && minute >= 10) {
//             timeDom.value = "时间:" + minute + ":" + second;
//         }
//     },1000);
// }
// // time();
// var BtnDom = document.getElementsByTagName("button")[0];
// function Btn () {
//    BtnDom.onmousedown = function (e) {
//     if(e.button == 0) {
//         clearInterval(timeStop);
//         if(window.confirm("游戏已暂停,是否继续游戏")) {
//             time();
//         } else {
//             console.log('2');
//             second = 0;
//             minute = 0;
//             timeDom.value = "时间:" + "0" + minute + ":" + "0" + second;
//         clearInterval(timeStop);
//             //游戏重新开始,翻转过来的span回归初始状态,计时器归零
//         }
//     } else if (e.button == 2) {
//         console.log('2');
//         second = 0;
//         minute = 0;
//         timeDom.value = "时间:" + "0" + minute + ":" + "0" + second;
//         clearInterval(timeStop);
//         //翻转过来的span转回去了
//     }
//    }
//    document.oncontextmenu = function (e) {
//     e.preventDefault();
//    }
// }
// Btn();

// 画棋盘
function chessboard() {
    for(var i = 0; i < tr; i ++) {
        var ulCol = document.createElement("ul");
        document.querySelector(".content").append(ulCol);
        for(var j = 0; j < td; j ++) {
            var liCol = document.createElement("li");
            ulCol.appendChild(liCol);
        }
    }
}
chessboard();
//画地雷
function drawMine () {
    var flag = 0;
    while(flag < maxMine) {
        mineX = Math.floor(Math.random() * td);
        mineY = Math.floor(Math.random() * tr);
        // if(!mineObj[mineX + "," + mineY]) {
        //     mineObj[mineX + "," + mineY ] = true;
        //     flag++;
        // }
        for(var i = 0; i < tr; i++) {
            for(var j = 0; j < td; j++) {
                var ulCol = document.getElementsByTagName("ul")[i];
                var liCol = ulCol.getElementsByTagName("li")[j];
                // liCol.innerHTML = `${j + "," + i}`;
                minePos = {x : 0 , y : 0 , count : 0 , isMine : false};     
            } 
        }
        // for(var m = 0; m < maxMine; m ++) {
        //     minePos = {x : mineX,y : mineY,count : 1,isMine : true};
        // }
        minePos.x = mineX; 
        minePos.y = mineY;
        minePos.count ++;
        minePos.isMine = 'true';
        flag ++;
        console.log(minePos);       
    }
    function coordinate(x,y) {
        var lowX = x - 1 < 0 ? 0 : x -1;
            var maxX = x + 1 >= td ? td -1 : x + 1;
            var lowY = y - 1 < 0 ? 0 : y - 1;
            var maxY = y + 1 >=tr ? tr - 1 : y + 1;
            return {lowX , maxX , lowY , maxY};
    }
    function nineSquareGrid(x,y) {
        var nineSquare = coordinate(x,y);
        for(var i = nineSquare.lowX; i < nineSquare.maxX; i ++) {
            for(var j = nineSquare.lowY; j < nineSquare.maxY; j ++) {
                if(x === mineX && y === mineY) {
                    count ++;
                }
            }
            var ulnine = document.getElementsByTagName("ul")[y];
            var linine = ulnine.getElementsByTagName("li")[x];
            linine.style.background = "#fff";
            linine.innerHTML = count === 0 ? " " : count;
        }
    }
    nineSquareGrid();
}
// drawMine();

//绑定事件
function bindEvent() {
    drawMine();
    for(var i = 0; i < tr; i ++) {
        for(var j = 0; j < td; j ++) {
            (function (x,y) {
                var ulCol = document.getElementsByTagName("ul")[y];
                var liCol = ulCol.getElementsByTagName("li")[x];
                liCol.onmousedown = function (e) {
                    if(e.button == 0) {
                        // console.log(minePos);
                       if(x == mineX && y == mineY){
                        // console.log("6");
                        liCol.style.background = 'url("../扫雷/img/lei.jpg") center/contain no-repeat';
                       }
                    }
                }
            })(j,i);
        }
    }
}
bindEvent();
// 初始化游戏

function initGame () {
    chessboard();
    drawMine();

}