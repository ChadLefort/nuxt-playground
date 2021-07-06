<template>
  <div class="container p-4">
    <div class="row">
      <div class="col col-xxl">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Filter Launches..."
            @keyup.enter="handleSearch"
          />
        </div>
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
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(launch, index) of launches" :key="index">
              <td v-if="launch">
                <NuxtLink :to="`/launches/${launch.id}`">{{
                  launch.mission_name
                }}</NuxtLink>
              </td>
              <td v-if="launch && launch.rocket">
                {{ launch.rocket.rocket_name }}
              </td>
              <td v-if="launch && launch.notes">
                {{ launch.notes }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import { useQuery, useResult } from '@vue/apollo-composable/dist';
import { GET_PAST_LAUNCHES } from '~/apollo/queries/pastLaunches';
import { GetPastLaunchesQuery } from '~/apollo/types';

export default defineComponent({
  setup() {
    const search = ref('');
    const { result, loading, error } =
      useQuery<GetPastLaunchesQuery>(GET_PAST_LAUNCHES);
    const launches = useResult(result, [], (data) => data.launchesPast);

    const filtered = computed(() =>
      launches.value?.filter((launch) =>
        launch?.mission_name?.includes(search.value)
      )
    );

    const handleSearch = () => {
      console.log(search.value);
    };

    return {
      handleSearch,
      search,
      launches: search ? filtered : launches,
      loading,
      error
    };
  }
});
</script>
