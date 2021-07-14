// keyup keydown
function isEnterKey(e) {
  const keyCode = e.keyCode;

  if (keyCode === 13) {
    console.log(e.target.value);
    e.preventDefault();
  }
}

// 检测 '\n' 判断是否输入完成
function isEnterInput(e) {
  var target = e.target || e.srcElement,
    value = target.value;

  var index = value.indexOf('\n');
  if (index !== -1) {
    
    target.value = value.substring(0, index);
    console.log(JSON.stringify(value), target.value);
  }
}
