<template>
  <div>
    <h3>value + input</h3>
    <input type="text" :value="foo" @input="format" />
    <p>{{ foo }}</p>

    <h3>v-model + input</h3>
    <input type="text" v-model="foo" @input="format" />
    <p>{{ foo }}</p>

    <h3>v-model + change</h3>
    <input type="text" v-model="foo" @change="format" />
    <p>{{ foo }}</p>


  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: '',
      bar: ''
    };
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  methods: {
    format($event) {
      this.foo = $event.target.value.toUpperCase();
    },
  }
};

// v-model : @input 和 :value
// v-model + @input : 两个 input 叠加
</script>

<style></style>
