# compat

ie6  support for a number of standard CSS features that were not supported in IE5

In order to ensure backward compatibility with existing web content

1. standards mode (CSS compatibility mode) - the browser would follow CSS standards
2. quirks mode

`document.compatMode`

- 'CSS1Compat' standard
- 'BackCompat' or undefined  quirks mode

## client detection

client detection should be the very last step in solving a problem

1. capability/feature detection(能力检测)
    1. 通用的方法放在最前面
    2. 检测的必须是你要准备去使用的
    3. 能力检测不能用于浏览器检测, 浏览器实现各标准错综复杂
    4. 能力检测可以用于一组类型属性的检测
2. quirk(bug) detection
    1. 前提: 编写了 ie4 only 的网页, 在其他ie / 其他浏览器上面, 需要触发 quirk 模式去解析这种 ie only 的网页
    2. aims to identify a particular behavior of the browser ,Instead of looking for something that’s supported
    3. ie quirk -  backward compatibility  ------ ie4 -> ie5
    4. `<!DOCTYPE html>` 这种写法在 ie6+ 都会触发标准模式, 不写可以在某些版本的 ie / 其他浏览器上面触发怪异模式
3. user-agent detection
    1. 通过 `navigator.userAgent` 检测浏览器版本

## compatibility

The web browser is the operating system for web page(apps).

对于一个比较中间的标准而言，浏览器环境所在的三种状态：

1. Evolution 还在制定之中的标准
2. Nonimplementation 有些浏览器尚未实现的标准
3. Bugs

方式： 使用新的标准 + polyfill + 绕开 bugs

vendor 公共提取代码