# ts babel

使用 ts 考虑兼容性有两种方案

1. 不使用 babel
    - ts -> tsc -> 兼容的 es + core-js(**tsc 干了 babel的活**)
2. 使用 babel
    - ts -> tsc -> ESNext/ES6 -> babel + core-js -> 兼容的 es(**优选, tsc 和 babel 合作**)
    - ts -> babel plugin -> 兼容的 es(**babel 干了 tsc 的活 本项目, 不过不推荐这么做，ts 配置很不透明**)
