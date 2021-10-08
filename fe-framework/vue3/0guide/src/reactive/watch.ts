import { ref, watchEffect, reactive, watch } from 'vue';
import _ from 'lodash';

// watchEffect 自动追踪 callback 中的依赖
// 监听变化去执行副作用
(function () {
  const count = ref(0);

  const stop = watchEffect(() => {
    console.log(`count.value = ${count.value}`);
  }, {
    // 'pre' 组件更新之前执行
    // 'post' 组件更新之后执行
    flush: 'pre',
    onTrack() { },
    onTrigger() { },
  });

  const intervalId = setInterval(() => {
    count.value++;
  }, 100);

  // 停止 stop
  // setup/lifecycle 会自动停止
  setTimeout(stop, 500);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log(`count.value = ${count.value}`);
  }, 1000);

})();

// watchEffect async callback
// watchEffect 停止/重新执行时
// async 还没有返回, 需要一个时机去对这些 async 结果进行操作
(function () {
  const id = ref(10);

  watchEffect(onInvalid => {
    // onInvalid 中注册失效 callback
    // const token = performAsyncOperation(id.value);
    onInvalid(() => {
      // token.cancel();
    });
  });
})();

// watch 等同于 watch options
// 指定数据源
// 监听变化对比前后值, 也可执行副作用
(function () {

  const state = reactive({ count: 0 });

  // getter
  watch(() => state.count, (count, prevCount) => {
    console.log(`count = ${count}, prevCount = ${prevCount}`);
  });


  // ref
  const count = ref(0);
  watch(count, (count, prevCount) => {
    console.log(`count = ${count}, prevCount = ${prevCount}`);
  });

  state.count += 2;
  count.value += 4;
})();

// watch 多个数据源
(function () {
  const firstName = ref('');
  const lastName = ref('');

  watch([firstName, lastName], (newValues, prevValues) => {
    console.log(newValues, prevValues);
  });

  firstName.value = 'Linli';
  lastName.value = 'Ni';
})();

// watch 对象
(function () {
  const numbers = reactive([1, 2, 3, 4, 5]);

  watch(
    // 对象的拷贝
    () => [...numbers],
    (numbers, prevNumbers) => {
      console.log(numbers, prevNumbers);
    }
  );

  numbers[4] = 100;
})();


(function () {
  const state = reactive({
    id: 1,
    attributes: {
      name: '',
    }
  });

  watch(
    () => _.cloneDeep(state),
    (state, prevState) => {
      console.log('clone deep', state.id, prevState.id);
    }
  );

  watch(
    () => state,
    (state, prevState) => {
      // 只是检查到 deep 但是访问都是同一个值的引用
      console.log('deep', state.id, prevState.id);
    },
    { deep: true }
  );

  state.id = 20;
})();