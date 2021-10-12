<script>
import { h } from "vue";

const DynamicHeading = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots);
};

DynamicHeading.props = ['level'];

export default DynamicHeading;


// vue2.0 options 函数式组件
// export default {
//   functional: true,
//   props: ['level'],
//   render(h, { props, data, children }) {
//     return h(`h${props.level}`, data, children);
//   }
// };
</script>
