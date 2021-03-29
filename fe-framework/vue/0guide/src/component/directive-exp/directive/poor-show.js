// /src/platforms/web/runtime/directives/show.js

export default {
  bind(el, { value }) {
    const originalDisplay = (el._vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display);

    el.style.display = value ? originalDisplay : 'none';
  },

  update(el, { value, oldValue }) {
    // 指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 
    if (!value === !oldValue) return;
    el.style.display = value ? el._vOriginalDisplay : 'none';
  },

  unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el._vOriginalDisplay;
    }
  },
};
