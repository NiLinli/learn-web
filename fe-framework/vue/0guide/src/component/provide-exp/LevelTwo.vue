<template>
  <div class="border-box">
    <level-three></level-three>
  </div>
</template>

<script>
import LevelThree from './LevelThree';

export default {
  name: 'LevelTwo',
  components: { LevelThree },
  beforeUpdate() {
    console.log('LevelTwo beforeUpdate');
  },
  updated() {
    console.log('LevelTwo updated');
  },
};
</script>
