<template>
  <div class="border-box">
    {{ foo }} & {{ fooReactive }}
    {{ obj.name }}
    {{ name }}
    <el-button type="danger" plain @click="onSayOmg">say omg</el-button>
    <el-button type="danger" plain @click="foo = '无意义的修改'">change inject foo</el-button>
  </div>
</template>

<script>
export default {
  name: 'LevelThree',
  // inject: ['sayHello'],
  inject: {
    sayHello: {
      from: 'sayHello', // 指定 provide 提供的 key
      default: () => {},
    },
    foo: {
      from: 'foo',
    },
    getFoo: {
      from: 'getFoo',
    },
    obj: {
      from: 'obj',
    },
  },
  computed: {
    fooReactive() {
      // 初始化访问 LevelOne 中的 foo, 被其 dep 收集
      return this.getFoo();
    },
    name() {
      return this.obj.name;
    },
  },
  beforeUpdate() {
    console.log('LevelThree beforeUpdate');
  },
  updated() {
    console.log('LevelThree updated');
  },
  methods: {
    onSayOmg: function () {
      this.sayHello(this.foo);
      this.sayHello(this.fooReactive);
    },
  },
};
</script>

<style></style>
