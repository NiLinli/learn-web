<script>
export default {
  functional: true,

  render(h, ctx) {
    const data = {};

    // ctx.chilren 为 $slots
    return h(
      'transition',
      {
        props: {
          name: 'very-special-transition',
          mode: 'out-in',
        },
        on: {
          beforeEnter: function(el) {
            // ...
          },
          afterEnter: function(el) {
            // ...
          },
        },
      },
      ctx.children
    );
  },
};
</script>

<style></style>
