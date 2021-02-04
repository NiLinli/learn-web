# ts babel

使用 ts 考虑兼容性有两种方案

1. 不使用 babel
    - ts -> 兼容的 es + core-js
2. 使用 babel
    - ts -> ESNext/ES6 -> babel + core-js -> 兼容的 es(**优选**)
    - ts -> babel plugin -> 兼容的 es(**本项目, 不过不推荐这么做，ts 配置很不透明**)
