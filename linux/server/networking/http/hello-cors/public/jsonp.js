var JSONP = (function() {

  let i = 0;

  return function JSONP({
    url,
    params = {},
    cbName = 'callback',
    cb = function() {}
  }) {

    let cbKeyValue = `abc${i++}`;
    params[cbName] = cbKeyValue;
    window[cbKeyValue] = cb;

    // 创建请求连接
    let paramsString = Object.keys(params)
                              .map(v => `${v}=${encodeURIComponent(params[v])}`)
                              .join('&');
    let src = `${url}?${paramsString}`;

    const script = document.createElement('script');
    script.setAttribute('src', src);
    document.body.appendChild(script);
  }
})();