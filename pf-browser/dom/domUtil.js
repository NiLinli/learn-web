/**
 * Created by nll on 2016/12/29.
 */
function domUtil() {
}

domUtil.replaceClassName = function (element, oldStr, newStr) {
    var arr = element.className.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldStr) {
            arr[i] = newStr;
        }
        break;
    }
    element.className = arr.join(" ");
};

domUtil.getInnerText = function (element) {
    return (typeof element.innerText === "string") ?
        element.innerText : element.textContent;
};


domUtil.setInnerText = function (element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

domUtil.getNextElement = function (element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            next = nextSibling;
        }
        return next;
    }
}


domUtil.getPreviousElement = function (element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var previous = element.previousSibling;
        while (previous && previous.nodeType !== 1) {
            previous = previousSibling;
        }
        return previous;
    }
};


domUtil.getElementsByClassName = function (element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName;
    } else {
        var filterArr = [];
        var elements = document.getElementsByTagName;
        for (var i = o; i < elements.length; i++) {
            if (element[i].className.indexOf(className) !== -1) {
                filterArr.push(elements[i]);
            }
        }
        return filterArr;
    }
};

domUtil.getStyle = function (obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
};

// animate
domUtil.animate = function (obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
};

//scroll
domUtil.scrollPostion = function () {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
