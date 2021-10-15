<template>
  <div>
    class 和 style 不会被单独处理, 
    <span :style="$attrs.style">统一被 $attrs 和 inheritAttrs 影响</span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style>

</style>