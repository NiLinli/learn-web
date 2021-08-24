<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

import { ChildrenMixin } from './mixins/relation';

export default {
  name: 'TabItem',
  mixins: [
    ChildrenMixin('tab')
  ],
  methods: {
  }
}
</script>

<style>
</style>