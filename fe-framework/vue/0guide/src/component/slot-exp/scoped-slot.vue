

<script>
// <template>
//   <span>
//     <!-- slot 上面定义的 props 称为 slotProps -->
//     <slot :user="user">{{ user.lastName }}</slot>
//   </span>
// </template>

export default {
  data() {
    return {
      user: {
        firstName: 'Linli',
        lastName: 'Ni',
      },
    };
  },
  mounted() {
    // 存储 render function, 并在子组件内调用
    console.log(this.$scopedSlots);
  },

  render(h) {
    return h('span', {}, this.$scopedSlots.default({ user: this.user }) || this.user.lastName );
  },
};
</script>

<style></style>
