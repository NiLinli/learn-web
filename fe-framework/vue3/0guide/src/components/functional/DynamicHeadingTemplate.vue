<template>
  <!-- vue2.0
  <component :is="`h${props.level}`" v-bind="attrs" v-on="listeners" /> -->

  <!-- vue3.0 -->
  <component :is="`h${$props.level}`" v-bind="$attrs" >
    {{$slots}} 
  </component>
</template>

<script>
// template 去掉 functional 标记
// props attrs 改为 $props $attrs
export default {
  props: ['level']
}
</script>