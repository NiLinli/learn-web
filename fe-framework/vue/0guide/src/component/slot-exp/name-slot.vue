

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


// export default {
//   name: 'base-layout',
//   mounted() {
//     // 存放父组件编译好的 vnode
//     console.log('this.$slots', this.$slots);
//   },
//   render(h) {
//     return h('div', { class: { container: true } }, [
//       h('header', {}, this.$slots.header),
//       h('main', {}, this.$slots.default),
//       h('footer', {}, this.$slots.footer)
//     ]);
//   }
// };

export default {
  name: 'base-layout',
  functional: true,
  render(h, { slots, children }) {

    const slotsVnode = slots();
    console.log('slots()', slots());
    // slots = function () {
    //   if (!this$1.$slots) {
    //     normalizeScopedSlots(
    //       data.scopedSlots,
    //       this$1.$slots = resolveSlots(children, parent)
    //     );
    //   }
    //   return this$1.$slots
    // };

    console.log('children', children);
    return h('div', { class: { container: true } }, [
      h('header', {}, slotsVnode.header),
      h('main', {}, slotsVnode.default),
      h('footer', {}, slotsVnode.footer)
    ]);
  }
};
</script>

<style>
</style>