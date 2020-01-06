import Vue from 'vue';
import Vuex from 'vuex';   
import actions from './actions';
import mutations from './mutations';
import { user } from './modules'
import { MyPlugin, Snapshot } from './plugins';
import VuexPersistence from 'vuex-persist';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    count: 0
  },
  actions: actions,
  mutations: mutations,
  plugins: [
    createLogger(),
    MyPlugin,
    vuexLocal.plugin,
  ]
});