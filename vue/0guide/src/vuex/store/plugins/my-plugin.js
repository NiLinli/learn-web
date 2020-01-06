export default store => {
  // store 初始化 调用
  console.log('myPlugin initial');

  store.commit('INCREMENT');

  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    console.log(mutation);  
  })
};