# GPS

## 坐标系

- wgs84: World Geodetic System(地球坐标系), 国际上通用的坐标系
- gcj02: Guojia Cehui Ju 国家测量局02号标准, 加密了 wgs 84, 俗话称为火星坐标系

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
