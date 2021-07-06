import { Context } from '@nuxt/types';
import {
  provide,
  onGlobalSetup,
  defineNuxtPlugin
} from '@nuxtjs/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable/dist';

export default defineNuxtPlugin(({ app }: Context): void => {
  onGlobalSetup(() => {
    provide(DefaultApolloClient, app.apolloProvider?.defaultClient);
  });
});
