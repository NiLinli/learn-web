<template>
  <input type="text" :value="modelValue" @input="onEmitValue" />
  <br />
  <input type="text" :value="description" @input="onEmitPropValue" />
</template>

<script lang="ts">
export default {
  name: "CustomModify",
  props: {
    // 默认 v-model
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
    // v-model.prop
    description: String,
    descriptionModifiers: {
      default: () => ({}),
    },
  },
  emits: ["update:modelValue", "update:description"],
  data() {
    return {};
  },
  created() {
    console.log(this.modelModifiers, this.descriptionModifiers);
  },
  methods: {
    onEmitValue(e) {
      let value = e.target.value;
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:modelValue", value);
    },
    onEmitPropValue(e) {
      let value = e.target.value;
      if (this.descriptionModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:description", value);
    },
  },
};
</script>

<style>
</style>