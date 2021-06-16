# Geolocation

navigator.geolocation 对象提供实现 Geolocation interface

## navigator.geolocation

- 获取当前定位 `getCurrentPosition()`
- 监视定位 `watchPosition()`

**ios10 以上/新的现代浏览器需要 https 才能够调用上述 API**

### PositionOptions

#### enableHighAccuracy

true 高精度 GPS 数据,
false 低精度基于 WIFI/IP 定位(城市级别, 基本无用)

IP 定位：不同浏览器低精度使用的 Network location provider 不同，谷歌使用的是 `https://www.googleapis.com/`

#### timeout

超时 单位 ms, 默认 Infinity

#### maximumAge

定位缓存时间 单位 ms, 默认为 0 不缓存 
