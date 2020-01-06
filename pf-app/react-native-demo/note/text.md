# Text

Text 的内部的元素不是 flexbox 布局

```jsx
<Text>
  <Icon name="stepforward" size={30} color="#900" style={styles.icon}/>
  <Text>AntDesign</Text>  
</Text>

// 必须要 View 生成 flexbox 布局, icon 的 margin 才可以生效
<View style={{flexDirection: 'row'}}>
  <PWIcons name="cuowu" size={PWFonts.normalize(30)} color={PWColors.black} style={styles.icon}/>
  <Text>IconFont</Text>
</View>
```

1. Text 可以嵌套 Text