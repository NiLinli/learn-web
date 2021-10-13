import CurrentUser from './scoped-slot';

export default {
  // functional: true,
  render(h) {
    return h(
      CurrentUser,
      {
        scopedSlots: {
          // 定义 scoped
          default: (props) => {
            return h('p', props.user.firstName);
          },
        },
      },
      // 定义普通 slot 
      [h('p', { slot: 'addon' }, 'addon456')]
    );
  },
};
