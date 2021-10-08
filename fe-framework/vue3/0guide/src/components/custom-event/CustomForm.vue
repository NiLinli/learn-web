<template></template>

<script>
export default {
  name: 'CustomForm',
  // 自定义 emit 需要在此定义, 可以提供 payload 验证
  // emits: ['submit'],
  emits: {
    // 验证 payload 是否有效
    submit: ({ email, password }) => {
      if (email && password) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.submitForm('nilinli@163.com', 123456);
    this.submitForm('nilinli@163.com');
  },
  methods: {
    submitForm(email, password) {
      const validate = this.$emit('submit', { email, password });
      console.log(validate);
    }
  }
}
</script>

<style>
</style>