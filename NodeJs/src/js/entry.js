console.log(666);
console.log(888);



require('../css/index.css');
var demo1 = require('./demo1.js');
demo1.init();
var demo2 = require('./demo2.js');
demo2.init();


var oImg = new Image();
oImg.src = require('../img/food.jpg');
document.body.appendChild(oImg); 
