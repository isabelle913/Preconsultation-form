import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import questionResponseModule from "./questionResponseModule";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      questionResponse: questionResponse,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
