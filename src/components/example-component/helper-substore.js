const api = {};
api.get = {
  theThing: 'example/helper/get/theThing',
};
api.act = {
  doTheThing: 'example/helper/act/doTheThing',
};
api.mutate = {
  mutateTheThing: 'example/helper/mutateTheThing',
};

const initialState = {
  theThing: 'thing',
};


const getters = {};
getters[api.get.theThing] = state => state.theThing;


const actions = {};
actions[api.act.doTheThing] = (context) => {
  console.debug('Action in substore');
  context.commit(api.mutate.mutateTheThing);
};


const mutations = {};
mutations[api.mutate.mutateTheThing] = (state) => {
  console.debug('Mutation in substore');
  state.theThing = Math.round(Math.random() * 100);
};


export default {
  api,
  state: initialState,
  getters,
  actions,
  mutations,
};
