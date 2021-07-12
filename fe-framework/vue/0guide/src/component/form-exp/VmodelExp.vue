<template>
  <div>
    <h3>v-model 指令语法糖</h3>
    <p>
      the input is: <span class="name">{{ name }}</span>
    </p>
    <input :value="name" @input="onInput" @compositionstart="onComStart" @compositionend="onComEnd" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nickname: '',
      composing: false,
    };
  },
  methods: {
    // 将表单内部状态 与 state 状态保持一致
    onInput(e) {
      if (this.composing) {
        return;
      }
      this.name = e.target.value.toUpperCase();
    },
    onComStart() {
      this.composing = true;
    },
    onComEnd(e) {
      this.composing = false;
      // 执行一次 input 时间中的逻辑
      this.name = e.target.value.toUpperCase();
    },
  },
};
</script>

<style></style>
