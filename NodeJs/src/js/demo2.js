var tool = require('./tool.js');
var obj2 = {
    init : function () {
        this.bindEvent();
    },
    bindEvent : function () {
        var demo2 = tool.getDom('demo2');
        demo2.onclick = this.changeStyle;
    },
    changeStyle : function () {
        this.style.width = '100px';
        this.style.height = '100px';
        this.style.background = 'blue';
    }
}

module.exports = obj2;