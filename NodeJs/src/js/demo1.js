var tool = require('./tool.js');
var obj1 = {
    init : function () {
        this.bindEvent();
    },
    bindEvent : function () {
        var demo1 = tool.getDom('demo1');
        demo1.onclick = this.changeStyle;
    },
    changeStyle : function () {
        this.style.width = '200px';
        this.style.height = '200px';
        this.style.background = 'green';
    }
}

module.exports = obj1;