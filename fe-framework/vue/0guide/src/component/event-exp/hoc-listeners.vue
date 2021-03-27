<template>
  <base-input label="name:" :value="inputValue" @focus="onInputFocus" @change="onInputChange" @input="onInputInputChange" />
</template>

<script>
import BaseInput from './base-input';
export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    onInputFocus(e) {
      console.log('focus', e);
    },
    onInputChange(e) {
      console.log('change', e);
    },
    onInputInputChange(e) {
      console.log('input', e);
    },
  },
};
</script>

<style></style>
