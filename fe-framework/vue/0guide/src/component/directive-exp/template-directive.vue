<template>
  <div>
    <h2>通用指令</h2>
    <h3>v-if/v-for</h3>
    <p>结构 render func 生成</p>

    <h3>v-on/v-bind/v-model</h3>
    <p>props/event 绑定</p>

    <h2>特殊操作</h2>
    <h3>v-text</h3>
    <span v-text="msg"></span>
    <h3>v-html</h3>
    <div v-html="html"></div>

    <h3>v-pre</h3>
    <span v-pre>编译时候模版都不解析, 当作字符串, {{ msg }} 不会被编译</span>
    <h3>v-cloak</h3>
    <p v-cloak>{{ cloak }} 使用 JIT 编译的时候用到, JIT 时候, 会先显示模版, compile 完成后替换, 体验不好, 可以在编译完成之前隐藏</p>
    <h3>v-once</h3>
    <static-content v-once></static-content>
  </div>
</template>

<script>
// 模版指令是模版语法 v- 前缀的特殊 attribute
// compiler 阶段
// 改变 render function 的生成
// 添加 props event

import StaticContent from './static-content';

export default {
  components: {
    StaticContent,
  },
  data() {
    return {
      msg: '等同于 prop :textContent="msg"',
      html: `
        <p style="color: blue;">等同于 prop :innerHTML="html"</p>
      `,
      cloak: '斗篷, 遮盖物',
    };
  },

  mounted() {
    console.log(this);
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
