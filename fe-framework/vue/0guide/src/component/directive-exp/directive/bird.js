export default {
  // 第一次绑定到元素时候调用, 初始化设置
  bind(el, binding, vnode, oldVnode) {
    // 在组件上面使用自定义指令 el 指向根 DOM 节点
    console.log(el);
  },
  // 被绑定元素插入父节点时调用
  inserted(el, binding) {},
  // VNode 更新时候调用 （render 阶段）, 用于 DOM
  update(el, binding) {},
  // 组件的 VNode 及其子 VNode 全部更新后调用, 用于 Component
  componentUpdated(el, binding) {},
  unbind(el, binding) {},
};
