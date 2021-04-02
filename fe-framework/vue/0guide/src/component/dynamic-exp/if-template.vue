<template>
  <div>
    <keep-alive>
      <cat v-if="animal === 'cat'" :age="3" @sleep="onSleep"></cat>
      <dog v-else :age="2" @eat="onEat"></dog>
    </keep-alive>

    <button @click="onChangeAnimal">
      改变 Animals
    </button>
  </div>
</template>

<script>
import Cat from './cat';
import Dog from './dog';
import animal from './animal.mixin';

export default {
  mixins: [animal],
  components: {
    Cat,
    Dog,
  },
};
</script>

<style></style>
