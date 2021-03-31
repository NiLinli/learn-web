

<script>
// <template>
//   <div class="container">
//     <header>
//       <slot name="header"></slot>
//     </header>
//     <main>
//       <slot></slot>
//     </main>
//     <footer>
//       <slot name="footer"></slot>
//     </footer>
//   </div>
// </template>


export default {
  name: 'base-layout',
  mounted() {
    // 存放父组件编译好的 vnode
    console.log(this.$slots)
  },
  render(h) {
    return h('div', { class: { container: true } }, [
      h('header', { }, this.$slots.header),
      h('main', { }, this.$slots.default),
      h('footer', { }, this.$slots.footer)
    ])
  }
};
</script>

<style>
</style>