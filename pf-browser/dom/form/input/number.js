// 去掉多余的 -
// 去掉多余的 .
function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);
  var prefix = '';

  if (index === -1) {
    return value;
  }

  if (_char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  if (_char === '.' && value.match(/^(\.|-\.)/)) {
    prefix = index ? '-0' : '0';
  }

  return prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

function formatNumber(value, allowDot, allowMinus) {
  if (allowDot === void 0) {
    allowDot = true;
  }

  if (allowMinus === void 0) {
    allowMinus = true;
  }

  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }

  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, '');
}

// input keyup 限制输入
function limitNumberInput(e) {
  const input = e.target;

  const value = input.value;
  return (input.value = formatNumber(value));
}

// keydown 限制输入 keydown ios 不支持
function ignoreNumberInput(e) {
  // 输入之前的内容
  var value = e.target.value;
  var keyCode = e.keyCode;

  // 限制小数点输入
  if (keyCode === 46) {
    if (value.indexOf('.') !== -1) {
      // 不让输入多个
      return e.preventDefault();
    }
    return;
  }

  // 负数
  if (keyCode === 45) {
    if (value[0] === '-') {
      return e.preventDefault();
    }

    return;
  }

  // 限制非数字输入
  if (!/\d/.test(String.fromCharCode(keyCode)) && keyCode > 9 && !e.ctrlKey) {
    // 事件的默认行为就是输入
    e.preventDefault();
  }
}
