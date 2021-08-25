# IOS

## 开发账号类型

- 个人开发者
- 公司/组织
  - 可以上架 App store
- 企业开发
  - 不能上架 App store , 只能企业内部使用(多用于无法上架 App Store 签名使用)

## 证书

多人开发 导出开发证书

AutoMatically manager signing

导入证书到该项目

1. AMS 没有为该 Team 生成过证书, Xcode会在本机钥匙串寻找team对应的开发证书
    - 有: 加载本地证书
    - 无: 开发者中心寻找
        - 有: 加载开发者中心证书
        - 无: 生成
2. AMS 为该 Team 生成过证书
    - 从开发者中心下载/或者其他位置导入 p12 证书
    - revoke 销毁该证书(同时销毁开发者中心的对应证书), 生成一个新的证书

配置 Provisioning

1. 本地寻找 Provisioning
2. 生成 Provisioning

发布

1. 本地加载发布证书
2. 开发者中心下载发布证书(前提是本机生成的)
3. reset 了本机生成一个证书(和上面 revoke 一样, 有可能销毁开发者中心对应的证书), 生成一个新的证书

证书的迁移

1. Xcode 申请的证书都是通过与本机绑定生成的
2. 其他机器用不了, 需要 p12 导出导入

## 打包

必备条件

- 证书
- Provisioning Profiles 描述文件
  1. 会被打包到 ipa 中, embedded.mobileprovision

## 发布 Distribution

- app store (上架 app store)
- ad hoc (发送测试ipa)
- 企业版证书签名

## IOS 开发

### 工程结构

1. 每一个 target 都有对应的 plist
2. 不同的 target 都可以使用相同的共同的文件

- 区别不大 copy target , 配置文件达到不同的发布目的
- 区别很大, 好像没有必要都写在一个工程里面
- 增量
  - 测试 target , 在原有代码上面添加测试代码, 类似于 copy target

### 

项目中的文件夹是逻辑文件夹

- `Copy Bundle Resources` 资源
- `Compile Sources` .m 结尾文件 被 target 引用编译
- `Link Binary With Libraries` 引用的库文件
    - `.a` 静态文件(编译了才会生成, 所以是红色的, 在 finder 中找不到)
    - `.framework` 动态文件
- `info.plist`
