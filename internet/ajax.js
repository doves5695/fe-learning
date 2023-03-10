function Ajax (method, url, flag, data, callBack) {
    var myajax = null;
    if(window.XMLHttpRequest) {
        //谷歌,火狐
        myajax = new window.XMLHttpRequest();
    } else {
        //IE
        myajax = new window.ActiveXObject('Microsoft.XMLHTTP');
    }
    //判断大写还是小写,转化成大写
    method = method.toUpperCase;
    if (method === 'POST') {
        myajax.open('POST',url,flag);
        myajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
        myajax.send(data);
    } else if (method === 'GET') {
        myajax.open('GET',url + '?' + data, flag);
        myajax.send(data);
    }
    myajax.onreadystatechange = function () {
        if(myajax.readyState === 4) {
            if(myajax.status === 200) {
                callBack(myajax.responseText);
            } else {
                alert('error');
            }
        }
    }
}