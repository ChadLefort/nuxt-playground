<template>
  <div class="container p-4">
    <div class="row">
      <div class="col col-xxl">
        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <table v-else-if="launches" class="table">
          <thead>
            <tr>
              <th scope="col">Mission</th>
              <th scope="col">Rocket</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(launch, index) of launches" :key="index">
              <td v-if="launch">{{ launch.mission_name }}</td>
              <td v-if="launch && launch.rocket">
                {{ launch.rocket.rocket_name }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useQuery, useResult } from '@vue/apollo-composable';
import { GET_PAST_LAUNCHES } from '~/apollo/queries/pastLaunches';
import { GetPastLaunchesQuery } from '~/apollo/types';

export default defineComponent({
  setup() {
    const { result, loading, error } =
      useQuery<GetPastLaunchesQuery>(GET_PAST_LAUNCHES);
    const launches = useResult(result, [], (data) => data.launchesPast);

    return {
      launches,
      loading,
      error
    };
  }
});
</script>
