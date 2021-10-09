<script>
// setup 结合 options + template

import { ref, reactive, h } from 'vue';

export default {
  props: {
    collectionName: String
  },
  setup(props, { expose, attrs, emit, slots }) {
    const readersNumber = ref(0);
    const book = reactive({ title: 'Vue 3 Guide' });

    const increment = () => ++readersNumber.value;
    // 添加到实例上面, 供父组件 ref 访问
    expose({
      increment
    });

    // 返回渲染函数
    return () => h('div', [readersNumber.value, book.title]);
  }
}
</script>