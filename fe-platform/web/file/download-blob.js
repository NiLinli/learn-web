function downloadBlob(blob, fileName) {

  if (!blob) return;

  window.URL = window.URL || window.webkitURL;
  var objectURL = window.URL.createObjectURL(blob);
  var a = document.createElement('a');

  // HTML5 
  // 告诉浏览器是下载而不是导航
  // 同源策略
  // blob or file 也可以 
  a.setAttribute('download', fileName || 'common-file');
  a.href = objectURL;

  document.body.appendChild(a);

  a.click();

}