<template>
  <div>
    <h3>app2</h3>
    <input type="text" :value="foo" @input="format" />
    <p>{{ foo }}</p>

    <h3>app3</h3>
    <input type="text" v-model="foo" @input="format" />
    <p>{{ foo }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 123,
    };
  },
  methods: {
    format($event) {
      if (this.composing) {
        return;
      }
      this.name = $event.target.value.toUpperCase();
    },
  },
};

// v-model : @input 和 :value
// v-model + @input : 两个 input 叠加
</script>

<style></style>
