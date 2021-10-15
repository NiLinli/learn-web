<template>
  <label>
    <!-- <input type="text" v-bind="$attrs" v-on="$listeners" /> -->
    <input type="text" v-bind="$attrs" />
  </label>
</template>
<script>
// $attrs $listeners => $attrs 
export default {
  inheritAttrs: false
}
</script>