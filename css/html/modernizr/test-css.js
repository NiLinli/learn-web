// property: css property in js -- eg: textShadow
function testProperty(property) {
  var root = document.documentElement;

  if (property in root.style) {
    root.classList.add(property.toLowerCase());
    return true;
  }

  root.classList.add('no-' + property.toLowerCase());
  return false;
}

// 浏览器可以识别(解析) 不代表实现(正确实现) 这个 value
function testValue(id, value, property) {
  var dummy = document.createElement('p');
  dummy.style[property] = value;

  // 检查浏览器是不是还保存 value 浏览器会丢弃无法识别的 value
  if (dummy.style[property]) {
    root.classList.add(id);
    return true;
  }

  root.classList.add('no-' + id);
  return false;
}
