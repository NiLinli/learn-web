<template>
  <div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <!-- <transition 
      name="fade"
      :duration="{ enter: 2000, leave: 5000 }"
    > -->
    <transition name="fade">
      <div v-show="show">
        <h3>status 状态</h3>
        <p>enter 元素插入之前, 插入下一帧删除</p>
        <p>enter-active 元素插入之前 -> 插入完成移除</p>
        <p>enter-to 元素插入完成</p>

        <p>leave 元素开始离开</p>
        <p>leave-active 离开开始 -> 离开完成</p>
        <p>leave-to 元素离开完成</p>

        默认使用 name-${status}, 也可用通过 attribute 定义

        <h3>v-show 是 show directive 中处理过 transition 相关钩子</h3>

        <h3>duraction</h3>
        <p>
          定义 enter / leave active 的 时间，和 css 中定义的无关, 不显示定义的话 duration 触发的时间，会监听 css transition 相关事件改变 enter/leave 状态
        </p>
      </div>
    </transition>

    <special-transition>
      <div v-show="show">
        special-transition
      </div>
    </special-transition>
  </div>
</template>

<script>
import SpecialTransition from './special-transition';

export default {
  components: {
    SpecialTransition,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
/* active 阶段需要定义 transiton */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

/* 开始状态 + 结束状态定义与常规状态不同的状态 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
