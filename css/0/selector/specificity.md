# Specificity

## Cascade

多个选择器中相同的样式会命中同一个元素
CSS 处理这个冲突的过程称为层叠 Cascade

## Specificity

权重/独特性

[inline-style | id | class/pseudo-class/attribute | type/pseudo-element]

```css
.a .b .c #p {
    font-size: 18px;
}
```

```html
<div class="a">
  <div class="a">
    <div class="a">
        <p id="p" style="font-weight: 800;"></p>
    </div>
  </div>
</div>
```

font-weight: 800; 权重为 1000  
font-size: 18px;  权重为 0(1)(1+1+1)0 => 0130

### Universal

`*` specificity 等于 0

### Inheritance

继承的权重为 null
null 比任何权重都要小, 包括 0

### Important

!important 也没有权重
但是比任何权重都要大

## 应用

- `<a>` 的 lvhfa
