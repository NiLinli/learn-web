<template>
  <div>
    <h3>v-model 指令语法糖</h3>
    <p>
      the input is: <span class="name">{{ name }}</span>
    </p>
    <input :value="name" @input="onInput" @compositionstart="onComStart" @compositionend="onComEnd" />

    <h3>不实用 v-model, 同时不控制表单组件</h3>
    <p>会导致 state 和表单内部状态不一致, 在下一次视图更新之前都是不一致的</p>
    <p>
      the input is: <span class="name">{{ nickname }}</span>
    </p>
    <input :value="nickname" />
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
