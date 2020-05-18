// action(fn)
// action(name, fn)
const { observable, autorun, action, configure, runInAction } = require('mobx');

// configure({ enforceActions: true });

function after1s() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
}

const state = observable({

  a: 1,
  b: 2,
  fetchAnotherThing: action(function () {
    after1s()
      .then(() => {
        runInAction(() => {
          this.b = 4;
        })
      })
  })
})

state.fetchAnotherThing();

setTimeout(() => {
  console.log(state.a, state.b)
}, 4000)
