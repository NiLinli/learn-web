# Flash

## FOUC(eventually solved)

Flash of Unstyled Content：

1. 早期浏览器才会有这种现象：load html 并且 display 
    - 在 css 文件没有加载完之前
    - 在 css 还没有 paint Render Tree 之前
2. 现在的浏览器会等待 css 渲染完了, 再显示

## Web font

### FOIT

flash of invisible text( chrome safari ie by default )

#### 现象

1. 空白, 不显示任何字体
2. 下载 custom font , 并等待
3. 下载完成, 显示字体内容 (blank -> custom font -- flash 一下)

#### 优劣

1. 网速快, 就不会有 FOUFT 的效果 (good)
2. 网速慢, 用户长时间看不到文字 (bad)

### FOUFT(FOUT)

flash of un-fonted(unstyled) text

#### 现象

1. 开始显示 default font , 或者是 fallback font
2. 下载 custom font 
3. 下载完成后, 显示 custom font (default font -> custom font -- flash 一下)

#### 优劣

1. 和 FOIT 相反
2. flash 前后的字体如果 height 相差过大( fallback font 和 custom font ),  页面很有可能会 reflow (回流), 所以一定要谨慎选择 custom font 对应的 fallback font
