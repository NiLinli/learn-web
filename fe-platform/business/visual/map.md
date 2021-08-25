# Map

## 坐标系

- wgs84: World Geodetic System(地球坐标系), 国际上通用的坐标系
- gcj02: Guojia Cehui Ju 国家测量局02号标准, 加密了 wgs 84, 俗话称为火星坐标系
- bd09: gcj02 再次加密坐标，百度地图使用

国家规定, 国内出版的各种地图系统（包括电子形式）, 必须采用 gcj02 或者 gcj02 加密后的坐标系

**wgs84 可以转换为 gcj02, 不允许逆向操作**
地图上相关操作都需要使用 gcj02 来操作

## GEOJson

**规范上是 wgs84 数据**

GeoJSON is a format for encoding a variety of geographic data structures. [geojson](https://geojson.org/)

```json
// Feature objects
{
  "type": "Feature",
  // Geometric objects
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```

### Geometric objects

geometry type

- Point
- LineString
- Polygon
- MultiPoint
- MultiLineString
- MultiPolygon

### Feature objects

- 如果要在 Geometric objects 添加其他的属性, 则需要包装成 Feature objects
- FeatureCollection objects 是 Feature objects 的集合

### 数据来源

- [datav 阿里云](https://datav.aliyun.com/tools/atlas/#&lat=31.769817845138945&lng=104.29901249999999&zoom=4)

## 地图

- 坐标系: 对应的地图都有默认的坐标系，API 传入经纬度都需要转换使用
- 概念名称
  - 覆盖物 Marker
  - 信息窗口 InfoWindow

### 百度地图

对外使用 bd09(非中国区 wgs84)

- js API 提供了转换/批量转换（max 100对）的方法

### 高德地图

对外使用 gcj02 坐标系

- js API 提供转换/批量转换(max 40对)的方法

### 腾讯地图

对外使用 gcj02 坐标系

- **js API 不提供坐标转换**
- 服务端 web API 提供坐标转换，**无限制**

## 小程序中使用地图

### 微信小程序

不能使用除腾讯地图以外的其他底图, 只能使用腾讯地图的 API(地址解析啥的...)  
原因: webview 中使用其他底图会请求非业务域名, 导致被限制
