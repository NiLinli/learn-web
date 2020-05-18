import { observable, action } from 'mobx';

const timerStore = observable({
  timer: 0,

  // 同步
  resetTimer: action(function () {
    this.timer = 0;
  }),
  tick: action(function () {
    this.timer += 1;
  })
});

export default timerStore;