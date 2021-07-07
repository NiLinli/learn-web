function ajax({ url, method = 'get', headers = {}, params = {}, body = {}, cb }) {
  return new Promise((resolve, reject) => {
    let headersTemp = {}

    if (['get', 'delete'].includes(method)) {
      // 无默认 Content-Type
    } else if (['post', 'put'].includes(method)) {
      headersTemp['Content-Type'] = 'application/json'
    } else {
      headersTemp['Content-Type'] = 'application/json'
    }

    headersTemp = {
      ...headersTemp,
      ...headers,
    }

    var xhr = new XMLHttpRequest()





    // true 为 async
    // false 有些浏览器已经不支持
    const queryString = formatSearchParams(params)
    xhr.open(method, `${url}${queryString ? '?' + queryString : ''}`, true)

    for (const k in headersTemp) {
      if (Object.hasOwnProperty.call(headersTemp, k)) {
        xhr.setRequestHeader(k, headersTemp[k])
      }
    }

    cb && cb(xhr);

    if (['post', 'put'].includes(method)) {
      if (headersTemp['Content-Type'] === 'application/json') {
        xhr.send(JSON.stringify(body))
      } else if (headersTemp['Content-Type'] === 'application/x-www-form-urlencoded') {
        xhr.send(formatSearchParams(body))
      } else if (headersTemp['Content-Type'] === 'multipart/form-data') {
        const formData = new FormData();
        for (const k in body) {
          if (Object.hasOwnProperty.call(body, k)) {
            formData.append(k, body[k]);
          }
        }
      
        xhr.send(formData)
      }
    } else {
      // 没有请求体
      xhr.send()
    }

    // 返回结果
    xhr.addEventListener('readystatechange', (e) => {
      // If the request is compete and was successful
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

          if (xhr.responseType === 'json') {
            return resolve(xhr.response);
          }

          if (xhr.responseType === 'blob') {
            return resolve(xhr.response);
          }

          // responseType 为 'text' '' 读取 responseText
          const type = xhr.getResponseHeader('Content-Type')
          if (type.indexOf('application/json') !== -1) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            resolve(xhr.responseText)
          }
        } else {
          reject();
        }
      } 
    })
  })
}

function formatSearchParams(data) {
  if (!data) return ''
  var pairs = []
  for (var name in data) {
    if (!data.hasOwnProperty(name)) continue
    if (typeof data[name] === 'function') continue
    var value = data[name].toString()
    name = encodeURIComponent(name.replace(' ', '+')) // Encode name
    value = encodeURIComponent(value.replace(' ', '+')) // Encode value
    pairs.push(name + '=' + value) // Remember name=value pair
  }
  return pairs.join('&')
}
