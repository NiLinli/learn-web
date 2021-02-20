import { CHANGE_NAME } from './mutation-types';

export default {
  // 给 getter/mutations/anctions 添加 namespce
  // state 本来就有 namespace
  namespaced: true,
  state: {
    name: '',
    age: 0
  },
  mutations: {
    [CHANGE_NAME](state, name) {
      state.name = name;
    }
  }
}