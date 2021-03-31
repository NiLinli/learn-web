export default {
  // 去掉 template, 添加 render 函数
  props: ['level'],
  render(h) {
    return h(`h${this.level}`, {}, this.$slots.default);
  },
};
