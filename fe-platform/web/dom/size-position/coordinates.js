// 获取window(iframe) 滚动条的位置 scrollTop
// w  1. 当前 window  2. iframe window
function getScrollOffsets(w) {
    w = w || window;    // Use the specified window or the current window if no argument

    // ie 9+
    if (w.pageXOffset != null) {
        return {
            x: w.pageXOffset,
            y: w.pageYOffset
        }
    }

    // For IE (or any browser) in Standards mode
    var d = w.document;
    if (document.compatMode === 'CSS1Compat') {
        return {
            x: d.documentElement.scrollLeft,
            y: d.documentElement.scrollTop
        };
    }

    // For browsers in Quirks mode
    return {
        x: d.body.scrollLeft,
        y: d.body.scrollTop
    };
}

// 获取 viewport 视口大小 (包含滚动条)
// 1. 当前 window
// 2. iframe window
function getViewportSize(w) {
    w = w || window;
    // ie 9+
    if (w.innerWidth != null) {
        return {
            w: w.innerWidth,        // 直接表示为浏览器 viewport 的值, 包括滚动条宽度
            h: w.innerHeight
        };
    }
    // For IE (or any browser) in Standards mode
    var d = w.document;
    if (document.compatMode === 'CSS1Compat') {
        return {
            w: d.documentElement.clientWidth,
            h: d.documentElement.clientHeight
        };
    }
    // For browsers in Quirks mode
    return {
        w: d.body.clientWidth,
        h: d.body.clientWidth
    };
}

// 获取 doc 的大小(viewport 里面内容的大小)
function getDocumentSize(w) {
    w = w || window;

    // For IE (or any browser) in Standards mode
    var d = w.document;
    if (document.compatMode === 'CSS1Compat') {
        return {
            w: Math.max(d.documentElement.scrollWidth, d.documentElement.clientWidth),     // 仅限于 viewport 不明确
            h: Math.max(d.documentElement.scrollHeight, d.documentElement.clientHeight)
        };
    }
    // For browsers in Quirks mode
    return {
        w: Math.max(d.body.scrollWidth, d.body.clientWidth),
        h: Math.max(d.body.scrollHeight, d.body.clientHeight)
    };
}

// Documnet Coord
function getElementPosition(elt) {
    var x = 0, y = 0;
    // Loop to add up offsets
    for (var e = elt; e != null; e = e.offsetParent) {
        x += e.offsetLeft;
        y += e.offsetTop;
    }
    // Loop again, through all ancestor elements to subtract scroll offsets.
    // This subtracts the main scrollbars, too, and converts to viewport coords.
    for (var e = elt.parentNode; e != null && e.nodeType == 1; e = e.parentNode) {
        x -= e.scrollLeft;
        y -= e.scrollTop;
    }
    return {
        x: x,
        y: y
    };
}

// 兼容性写法
function getBoundingClientRect(element) {
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;
    if (element.getBoundingClientRect) {
        if (typeof arguments.callee.offset != 'number') {
            var temp = document.createElement('div');
            temp.style.cssText = 'position:absolute;left:0;top:0;';
            document.body.appendChild(temp);
            arguments.callee.offset = -temp.getBoundingClientRect().top -
                scrollTop;
            document.body.removeChild(temp);
            temp = null;
        }
        var rect = element.getBoundingClientRect();
        var offset = arguments.callee.offset;
        return {
            left: rect.left + offset,
            right: rect.right + offset,
            top: rect.top + offset,
            bottom: rect.bottom + offset
        };
    } else {
        var postion = getElementPosition(element);

        return {
            left: postion.x - scrollLeft,                           // Document 中的位置 - 滚动条的位置(总) = 视口的位置
            right: postion.x + element.offsetWidth - scrollLeft,
            top: postion.y - scrollTop,
            bottom: postion.y + element.offsetHeight - scrollTop
        }
    }
}