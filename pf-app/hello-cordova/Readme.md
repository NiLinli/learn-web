# ionic

源文件

- resources  图片, 字体, 资源等
- src        源文件
- config.xml 保存应用的相关配置
  - preference
  - platform 平台相关信息
- plugin     cordova 插件有关信息

生成文件

- www  浏览器环境下的文件
- platforms
  - android 安卓环境
  - ios     IOS 环境
- plugins cordova 插件相关


` ionic cordova run ios  -- --buildFlag="-UseModernBuildSystem=0"`

## component

## 权限相关

### IOS

1. ios 无法在 app 内更改权限
2. 方案: 跳到 app 权限相应的设置页面, 让用户自己取设置
3. 用户自己更改权限后, app 会重启 (正常现象)


## Android



## plugin 相关

- `cordova-plugin-background-mode`  让 app 常驻内存