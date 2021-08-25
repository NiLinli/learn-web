# conosle

对象后面都会标注 其 constructor  
`__proto__: Vue`  prototype 对象是由 Vue Constructor 生成

属性如果是直接可以访问, 会直接显示, 如果是 getter 方式访问, 则显示 (...)
`title2: (...)` 鼠标放上去会提示 invoke property getter, 点击后获得 getter 返回的值
