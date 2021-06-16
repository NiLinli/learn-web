function getCurrentPosition(
  options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0,
  }
) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject({
        code: 0,
        message: '不支持浏览器定位',
      })
    }

    function success(position) {
      resolve(position)
    }

    function error(error) {
      reject(error)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  })
}

function watchPosition(
  options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0,
  }
) {
  let watchId;
  const p = new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject({
        code: 0,
        message: '不支持浏览器定位',
      })
    }

    function success(position) {
      resolve(position)
    }

    function error(error) {
      reject(error)
    }

    watchId = navigator.geolocation.watchPosition(success, error, options)
  })

  p.watchId = watchId;

  return p
}

function clearWatch(watchId) {
  return navigator.geolocation.clearWatch(watchId);
}
