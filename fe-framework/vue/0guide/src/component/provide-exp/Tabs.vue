<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { ParentMixin } from './mixins/relation';

export default {
  name: 'Tabs',
  mixins: [ParentMixin('tab')],
  methods: {
  }
}
</script>

<style>
</style>