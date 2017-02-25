import helper from './helper-substore.js';

const api = {};
api.get = {
  something: 'example/get/something',
  ...helper.api.get,
};
api.act = {
  doSomething: 'example/act/doSomething',
  ...helper.api.act,
};
api.mutate = {
  mutateSomething: 'example/mutateSomething',
};


const initialState = {
  something: 42,
  somethingElse: 'rainbow',
};


const getters = {};
getters[api.get.something] = state => state.something;


const actions = {};
actions[api.act.doSomething] = (context) => {
  console.debug('Action in store');
  context.commit(api.mutate.mutateSomething);
  context.dispatch(helper.api.act.doTheThing);
};


const mutations = {};
mutations[api.mutate.mutateSomething] = (state) => {
  console.debug('Mutating store');
  state.something += 2;
};


export default {
  api,
  state: initialState,
  getters,
  actions,
  mutations,
  modules: {
    helper,
  },
};
