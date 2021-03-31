export default {
  functional: true,
  // functional 组件, 
  // 未定义 props options. data.attrs 全部会带到 context.props 
  // 定义了就和正常保持一致

  // context.data 为整个数据的数据对象, 可以用来透传
  props: ['a', 'b'],
  render(h, ctx) {
    console.log(ctx);
    // context 代替 vm 访问
    return h('button', ctx.data, ctx.children);
  },
};
