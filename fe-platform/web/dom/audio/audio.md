# audio 
1. 可以包含多个
2. 浏览器选中最合适的一个
3. 浏览器不识别, 也不会报错

## 显示
1. 如果没有 controls , user agent 会设置为不显示
```css
audio:not([controls]) {
    display: none !important;
}
```
2. 有 controls , 显示 controls
3. 不支持 audio 标签, 当做普通元素显示, 会显示里面的提示语

## attribute
1. 是否预先加载, 优先级 autoplay > preload
    - autoplay
    - preload (autobuffer 废弃)
        + none 不会预先加载
        + metadata  获取meta data 音频长度等 (规范建议, 浏览器一般会执行)
        + auto 预期会被加载
2. 声音大小
    - muted  false true 是否静音
    - volume(F) 0 -> 1  
3. 控制条
    - controls
