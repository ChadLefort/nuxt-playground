import { wrapProperty } from '@nuxtjs/composition-api';
import { getAccessorType } from 'typed-vuex';
import * as counter from '~/store/counter';
import * as todos from '~/store/todos';

export const accessorType = getAccessorType({
  modules: {
    counter,
    todos
  }
});

export const useAccessor = wrapProperty('$accessor', false);
