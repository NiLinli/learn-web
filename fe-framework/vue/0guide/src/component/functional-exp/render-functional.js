// 无状态
// 无 vm(render 函数中使用 context 代替 this)
// 函数式组件
// 开销小

export default {
  functional: true,
  name: 'RenderFunctional',
  // 2.6.0 以后在函数式组件前提下, 不需要显式定义 props
  render(h, context) {
    console.log(context);
    return h(`h${context.props.level}`, context.slots().default);
  }
}