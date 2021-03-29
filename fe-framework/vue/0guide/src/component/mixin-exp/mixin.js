export default {
  // mergeFn 的返回值, 高阶函数
  data() {
    return {
      mixinData: 'component-mixin',
      message: 'hello',
      foo: 'abc',
    };
  },
  // hooks 合并为数组调用
  created() {
    console.log('混入对象的钩子被调用');
    this.sayHello();
  },
  // methods 是对象覆盖
  methods: {
    sayHello() {
      console.log('component-mixin');
    },
  },
};
