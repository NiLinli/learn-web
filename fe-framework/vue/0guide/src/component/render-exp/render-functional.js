export default {
  functional: true,
  // 2.6.0 以后在函数式组件前提下, 不需要显式定义 props
  render(h, context) {
    return h(`h${context.props.level}`, context.slots().default);
  }
}