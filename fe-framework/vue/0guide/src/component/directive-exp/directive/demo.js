function showBindingData(hook, binding) {
  const s = JSON.stringify;
  return `
    ----- ${hook} ------- <br>
    name:  ${s(binding.name)} <br>
    value:  ${s(binding.value)} <br>
    expression:  ${s(binding.expression)} <br> 
    argument:  ${s(binding.arg)} <br> 
    modifiers:  ${s(binding.modifiers)} <br> 
  `;
}

// <!-- 动态参数的缩写 (2.6.0+) -->
{/* <a v-on:[event]="doSomething"> ... </a> */}
// argument 可以写成变量
// value 变量

export default {


  // 第一次绑定到元素时候调用, 初始化设置
  bind(el, binding, vnode, oldVnode) {
    el.innerHTML = showBindingData('bind', binding);
  },
  // 被绑定元素插入父节点时调用
  inserted(el, binding) {
    el.innerHTML += showBindingData('inserted', binding);
  },
  // VNode 更新时候调用 （render 阶段）, 用于 DOM
  update(el, binding) {
    el.innerHTML += showBindingData('update', binding);
  },
  // 组件的 VNode 及其子 VNode 全部更新后调用, 用于 Component
  componentUpdated(el, binding) {
    el.innerHTML += showBindingData('componentUpdated', binding);
  },
  unbind(el, binding) {},
};
