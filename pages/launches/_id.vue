<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <h1 v-else-if="launch">
          {{ launch.mission_name }}
        </h1>
        <form @submit.prevent="handleSubmit({ id, notes })">
          <label for="notes" class="form-label">Notes</label>
          <textarea
            id="notes"
            v-model="notes"
            class="form-control mb-4"
            rows="6"
          ></textarea>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  useRoute,
  ref,
  defineComponent
} from '@nuxtjs/composition-api';
import { useQuery, useResult, useMutation } from '@vue/apollo-composable/dist';
import { ADD_NOTES } from '~/apollo/queries/addNotes';
import { GET_LAUNCH_BY_ID } from '~/apollo/queries/launchById';
import { AddNotesMutation, GetLaunchByIdQuery } from '~/apollo/types';

export default defineComponent({
  setup() {
    const notes = ref('');
    const route = useRoute();
    const id = computed(() => route.value.params.id);
    const { result, loading, error, onResult } = useQuery<GetLaunchByIdQuery>(
      GET_LAUNCH_BY_ID,
      { id }
    );
    const launch = useResult(result, null, (data) => data.launch);

    onResult((queryResult) => {
      notes.value = queryResult.data.launch?.notes ?? '';
    });

    notes.value = launch.value?.notes ?? '';

    const { mutate: handleSubmit } = useMutation<AddNotesMutation>(ADD_NOTES, {
      variables: { id: id.value, notes: notes.value }
    });

    return {
      id,
      notes,
      handleSubmit,
      launch,
      loading,
      error
    };
  }
});
</script>
