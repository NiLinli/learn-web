<template>
  <div>
    <p>{{ title }}</p>
    ---- child emit -----
    <child-emit type="sync" :title.sync="title" />
    <child-emit type="sync" :title="title" @update:title="(e) => (title = e)" />
  </div>
</template>

<script>

import ChildEmit from './child-emit';
export default {
  components: {
    ChildEmit,
  },
  data() {
    return {
      title: '123',
    };
  },
};
</script>

<style></style>
