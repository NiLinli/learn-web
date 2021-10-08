<template>
  <custom-form @submit="onCustomFormSubmit" />
  <my-button @click="onButtonClick" />
  <book v-model:title="title" />
</template>

<script lang="ts">
import CustomForm from "./CustomForm.vue";
import MyButton from "./MyButton.vue";
import Book from "./Book.vue";

export default {
  name: "CustomEvent",
  components: {
    CustomForm,
    MyButton,
    Book,
  },
  data() {
    return {
      title: "漫长的告别",
    };
  },
  methods: {
    onCustomFormSubmit(accountInfo) {
      console.log(accountInfo);
    },
    onButtonClick() {
      console.log("my button");
    },
  },
};
</script>

<style>
</style>