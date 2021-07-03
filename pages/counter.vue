<template>
  <div class="container">
    <div class="row">
      <div class="col col-xxl">
        <h1 class="display-1 text-center m-4">Count: {{ count }}</h1>
        <div class="row d-flex justify-content-center">
          <div class="col col-auto">
            <button class="btn btn-success" @click="increase">Increase</button>
          </div>
          <div class="col col-auto">
            <button class="btn btn-danger" @click="decrease">Decrease</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { useAccessor } from '~/store';

export default defineComponent({
  setup() {
    const accessor = useAccessor();

    return {
      count: computed(() => accessor.counter.count),
      increase: () => accessor.counter.increase(),
      decrease: () => accessor.counter.decrease()
    };
  }
});
</script>
