

<script>
// <template>
//   <span>
//     <slot :user="user">{{ user.lastName }}</slot>
//     <slot name="addon"></slot>
//   </span>
// </template>


export default {
  functional: true,
  data() {
    return {
      user: {
        firstName: 'Linli',
        lastName: 'Ni',
      },
    };
  },
  // mounted() {
  //   console.log('scoped this.$scopedSlots', this.$scopedSlots);
  //   console.log('scoped this.$slots', this.$slots);
  // },

  render(h, { scopedSlots, slots, children }) {

    const user = {
      firstName: 'Linli',
      lastName: 'Ni',
    };

    console.log('scoped scopedSlots', scopedSlots);
    console.log('scoped slots', slots());
    console.log('scoped children', children);
    return h('span', [
      scopedSlots.default(({ user }) || user.lastName),
      slots().addon
    ]);
  },

  // render(h) {

  //   return h('span', [
  //     this.$scopedSlots.default(({ user: this.user }) || this.user.lastName),
  //     this.$scopedSlots.addon()
  //   ]);
  // },
};
</script>
