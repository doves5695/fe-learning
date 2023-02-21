function type(target) {
        var typeStr = typeof(target),
            toStr = Object.prototype.toString,
            objStr = {
                '[object Object]' : 'object - object',
                '[object Array]' : 'array - object',
                '[object Number]' : 'number - object',
                '[object Boolean]' : 'boolean - object',
                '[pbject String]' : 'string - object'
            } 
        if(target === null) {
            return null;
        }
        if(typeStr === 'function') {
            return 'function';
        }
        if(typeStr !== 'object') {
            return typeStr;
        } else {
            return objStr[toStr.call(target)];
        }
    }