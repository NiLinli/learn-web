
export default {
  increment (context, amount) {
    context.commit('increment', { amount });
  },
  incrementAsync ({ commit }, amount ) {
    setTimeout(() => {
      commit('increment', { amount });
    }, 1000);
  },
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('fooMutation');
        resolve();
      }, 1000);
    });
  },
  actionB({ commit, dispatch }) {
    // dispath 组合 action
    return dispatch('actionA')
      .then(() => commit('fooMutation'))
  }
}