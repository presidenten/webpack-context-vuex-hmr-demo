import contextHmr from 'webpack-context-vuex-hmr';
import Vue from 'vue';
import Vuex from 'vuex';
import app from './app.vue';

Vue.use(Vuex);

// Get new importer instance
const importer = contextHmr.getNewInstance();
// Import all Vuex modules
const modules = importer.getModules();
// Create the Vuex store
const store = new Vuex.Store({ modules });
// Setup HMR on all the Vuex store modules
importer.setupHMR(updatedModules => store.hotUpdate({ modules: updatedModules }));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(app),
});
