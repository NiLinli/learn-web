# react native

2015 开始

Android 4.1 API 16 - 2012 7 月
IOS 7.0 以后

## Javascript 执行环境

RN 提供了一套通信机制, 类似于 JNI (Java 调用 C++)

1. JS函数调用转ModuleID/MethodID
2. callback转CallbackID
3. OC根据ID拿到方法
4. 处理参数
5. 调用OC方法
6. 回调CallbackID
7. JS通过CallbackID拿到callback执行

执行 JS --> 调用 OC --> OC 返回 callbackID --> JS 根据 callbackId 执行 callback

- ios (JavaScript-ObjectC)
    + JavaScriptCore
    + webview(ios7 以下)
- android

## third party

### 错误: 'config.h' file not found

1. 下载相应的版本放入 `.rncached`
2. 编译
```bash
cd node_modules/react-native/third-party/glog-0.3.4
../../scripts/ios-configure-glog.sh
```

## 文件夹结构

ios

- build(编译生成的文件夹)
- TestRN
    + Base.Iproj
        - LaunchScreen.xib
    + Images.xcassets
        - AppIcon.appiconset
            + Contents.json
        - Contents.json
    + AppDelegate.h
    + AppDelegate.m
    + Info.plist
    + main.m

android

## RN 运行流程

APP 运行

1. 加载 http://localhost:8081/index.ios.bundle 代码
2. JavaScriptCore 执行
3. 加载组件, 构建原生的 UIKit 视图

CSS -> [yoga](https://github.com/facebook/yoga)

## 布局

Text 包裹的元素不是 flex 布局, 是一种特定的 布局 , 包裹元素不支持 margin 等 css 属性

## 调试

- android
  1. cmd + m 切换调试菜单
  2. double r 重载
- ios
  1. cmd + d 切换调试菜单
  2. cmd + r  重载

## 转场动画

- 转场动画 mode
- 转场动画时候头部的表现 headerMode