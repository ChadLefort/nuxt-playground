import { getterTree, mutationTree } from 'typed-vuex';

export const state = () => ({
  counter: 0
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  count: (state) => state.counter
});

export const mutations = mutationTree(state, {
  increase: (state) => state.counter++,
  decrease: (state) => state.counter--
});
