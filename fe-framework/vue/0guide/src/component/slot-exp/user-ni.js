import CurrentUser from './scoped-slot';

export default {
  render(h) {
    return h(CurrentUser, {
      scopedSlots: {
        // slot-props 共享数据方式类似于 render props
        // 父组件定义 render function
        // 子组件调用 render function
        default: (props) => {
          return h('p', props.user.firstName);
        },
      },
    });
  },
};
