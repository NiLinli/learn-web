export default {
  data() {
    return {
      animal: 'dog',
    };
  },
  methods: {
    onEat() {
      console.log('eat');
    },
    onSleep() {
      console.log('sleep');
    },
    onChangeAnimal() {
      this.animal = this.animal === 'dog' ? 'cat' : 'dog';
    },
  },
};
