var EventUtil = {
    // 添加事件
    addHandler: function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
        } else if (elem.attachEvent) {
            elem['fix' + type + 'handler'] = handler.bind(elem); // 修复this指向, 并存储新的函数, 便于 detach
            elem.attachEvent('on' + type, elem['fix' + type + 'handler']);
        } else {
            elem['on' + type] = handler;
        }
    },
    // 移除事件
    removeHandler: function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        } else if (elem.detachEvent) {
            elem.detachEvent('on' + type, elem['fix' + type + 'handler']);
        } else {
            elem['on' + type] = null;
        }
    },
    // 返回 Event Object
    getEvent: function (e) {
        return e || window.event;
    },
    // 返回 Event Target
    getTarget: function (e) {
        return e.target || e.srcElement;
    },
    // 阻止默认行为
    preventDefault: function (e) {
        (e.preventDefault) ? e.preventDefault(): e.returnValue = false;
    },
    // 阻止冒泡
    stopPropagation: function (e) {
        (e.stopPropagation) ? e.stopPropagation(): e.cancelBubble = true;
    },
    // DOM Level 2 Events
    isSupportedDOM2: function () {
        return document.implementation.hasFeature('HTMLEvents', '2.0');
    },
    // DOM Level 3 Events
    isSupportedDOM3: function () {
        return document.implementation.hasFeature('UIEvent', '3.0');
    },
    isSupportedMouse2: function () {
        // excluding dblclick, mouseenter,and mouseleave
        return document.implementation.hasFeature('MouseEvents', '2.0');
    },
    isSupportedMouse3: function () {
        return document.implementation.hasFeature('MouseEvents', '3.0');
    },
    // 计算 pageX pageY
    getPageCoordinates: function (e) {
        var pageX = event.pageX,
            pageY = event.pageY;
        // ie9 - 不存在 pageX 属性
        if (pageX === undefined) {
            pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
        }
        if (pageY === undefined) {
            pageY = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
        }

        return {
            pageX,
            pageY
        }
    },
    // mouseover mouseout's relatedTarget
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement; // ie 8 mouseout's relatedTarget
        } else if (event.fromElement) {
            return event.fromElement; // ie 8 mouseover's relatedTarget
        } else {
            return null;
        }
    },
    // mouseup mousedown event.button 
    getButton: function (event) {
        if (document.implementation.hasFeature('MouseEvents', '2.0')) {
            return event.button;
        } else {
            // for ie8 装换
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    // 获取 wheelDelta
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ?
                -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    }
};