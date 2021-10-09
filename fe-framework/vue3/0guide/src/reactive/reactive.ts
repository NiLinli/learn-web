import { reactive, ref, Ref, toRefs, readonly, watch } from 'vue';

// object
// reactive => Vue.observable()
// 避免与 rxjs observable 冲突, 改名 reactive
(function () {
  const state = reactive({
    count: 0,
    numbers: [1, 2, 3, 4, 5, 6]
  });
})();

// primitive value
// ref => 引用的响应式对象的意思
// 返回一个响应式对象, 对象内部通过 value 维护值
(function () {
  const count = ref(0);
  count.value++;
  console.log(`count.value = ${count.value}`);
})();

// ref 解包: 访问 refObject 等同于访问 refObject.value 情况
// setup
// 嵌套在 reactive Object 中(Array Map 不会解包)
(function () {
  const count2 = ref(0);
  const state2 = reactive({
    count2
  });

  console.log(`state2.count2 = ${state2.count2}`);

  const otherCount2 = ref(3);
  (state2.count2  as unknown as Ref<number>) = otherCount2;
  console.log(`state2.count2 = ${state2.count2}`);
})();

// reactive destructure
(function () {
  const book = reactive({
    author: 'Vue Team',
    year: '2020',
    title: 'Vue 3 Guide',
    description: 'You are reading this book right now ;)',
    price: 'free'
  });

  // title 响应式特性会丢失
  // const { title } = book;

  const { title } = toRefs(book);
  title.value = 'Vue 3 Detailed Guide';
  console.log(`book.title = ${book.title}`);

})();

(function () {
  const original = reactive({ count: 0 });
  const copy = readonly(original);

  original.count++;

  console.log(`copy.count = ${copy.count}`);

  // 设置不成功
  // copy.count++;
})();







