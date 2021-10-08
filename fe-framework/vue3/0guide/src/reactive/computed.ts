import { ref, computed } from 'vue';

// getter
(function () {
  const count = ref(1);

  // 返回 refObject
  const plusOne = computed(() => count.value + 1);
  console.log(`plusOne.value = ${plusOne.value}`);

  count.value++;
  console.log(`plusOne.value = ${plusOne.value}`);
})();

// setter/getter
(function () {
  const count = ref(1);
  const plusOne = computed({
    get() {
      return count.value + 1;
    },
    set(val: number) {
      count.value = val - 1;
    }
  });

  console.log(`plusOne.value = ${plusOne.value}`);

  plusOne.value = 1;
  console.log(`count.value = ${count.value}`);
})();

// onTrack & onTrigger
(function () {
  const count = ref(1);
  const plusOne = computed(() => count.value + 1, {
    onTrack(e) {
      console.log('count.value 被依赖收集追踪', e);
    },
    onTrigger(e) {
      console.log('count.value 被修改了', e);
    }
  });

  plusOne.value;
  count.value++;
})();