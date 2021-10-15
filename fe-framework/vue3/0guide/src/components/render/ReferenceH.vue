<script>
import { h } from 'vue';

// export default {
//   render() {
//     return h('div', "import { h } from 'vue';")
//   }
// }

// functional
// export default () => h('div', "import { h } from 'vue';");


// setup

export default {
  setup() {
    return () => h('div', "import { h } from 'vue';");
  }
}

</script>