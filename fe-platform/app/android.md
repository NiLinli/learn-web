# android

## gradle

gradle 打包多个子项目, 管理依赖

settings.gradle 引入子项目打包
其他引入子项目的方式

- android gradle plugin
- Gradle Wrapper: 每个项目都有一个单独的 gradle, 而不是使用全局 gradle

### 命令

- `./gradlew -v` 版本号
- `./gradlew clean` 清除9GAG/app目录下的build文件夹
- `./gradlew build` 检查依赖并编译打包
- `./gradlew assembleDebug` 编译并打Debug包
- `./gradlew assembleRelease` 编译并打Release的包

### 常见问题

#### gradle 下载慢(改变为 本地下载)

- 使用 gradle wrapper

http://services.gradle.org/distributions/ 下载对应的版本
然后 url 指向本地

不实用 gradle wrapper

- local gradle 采用本地的 gradle
- offline work 从缓存中获取 gradle

#### gradle 和 android gradle plugin 需要对应

gradle -- android gradle plugin -- sdk 需要版本对应

#### repositories 替换镜像

1. 设置启用 maven 仓库
2. 替换 jcenter 和 google 为 maven 仓库
