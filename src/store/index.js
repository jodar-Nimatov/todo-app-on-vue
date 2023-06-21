import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations,
  plugins: [createPersistedState()],
});

export default store;
