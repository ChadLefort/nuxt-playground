import { actionTree, getterTree, mutationTree } from 'typed-vuex';

interface IList {
  text: string;
  done: boolean;
}

export const state = () => ({
  list: [] as IList[]
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  list: (state) => state.list
});

export const mutations = mutationTree(state, {
  addTodo(state, listItem: IList) {
    state.list.push(listItem);
  }
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    add({ commit }, text: string) {
      commit('addTodo', {
        text,
        done: false
      });
    }
  }
);
