onmessage = function (e) {
    var value = e.data;
    postMessage(value * 50);
}