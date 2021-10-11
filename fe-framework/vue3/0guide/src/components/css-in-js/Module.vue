<template>
  <p :class="$style.red">This should be red.</p>
</template>

<script>
import { useCssModule } from 'vue';
export default {
  mounted() {
    console.log(this.$style);
  },
  setup(props) {
    const $style = useCssModule();
    // 命名 css module
    // const $classes = useCssModule('classes');
    console.log($style);
  }
}
</script>


<style module>
/* module
等同于
module="$style" */
.red {
  color: red;
}
</style>