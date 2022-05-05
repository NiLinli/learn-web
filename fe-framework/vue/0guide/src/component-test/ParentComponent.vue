<template>
  <div>
    <child-component @custom="onCustom" />
    <p v-if="emitted">Emitted!</p>
    <div>{{ foo }}</div>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent';

export default {
  name: 'ParentComponent',
  components: { ChildComponent },
  props: {
    foo: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      emitted: false,
    };
  },
  methods: {
    onCustom() {
      this.emitted = true;
    },
  },
};
</script>
