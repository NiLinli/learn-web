<template>
  <div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-show="show">
        HAHA
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    // 简单模拟 css 处理(有 bug)
    // 一般是用来处理 JS 动画, 或者需要复杂处理 css

    beforeEnter: function(el) {
      el.className = 'fade-enter fade-enter-active';
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的(监听了 transition 事件)
    enter: function(el, done) {
      el.className = 'fade-enter-active';
    },
    afterEnter: function(el) {
      el.className = '';
    },
    enterCancelled: function(el) {
      el.className = '';
    },

    beforeLeave: function(el) {
      el.className = 'fade-leave-active';
    },
    leave: function(el, done) {
      el.className = 'fade-leave-active fade-leave-to';
      el.addEventListener('transitionend', () => {
        done();
      });
    },
    afterLeave: function(el) {
      el.className = '';
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function(el) {
      el.className = '';
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
