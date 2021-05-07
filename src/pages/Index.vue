<template>
  <q-page class="flex column">
    <div id="main-title" class="row items-center">
      <div class="col-12 text-h2 text-center">
        {{ title }}
      </div>
    </div>
    <div id="main-guidelines" class="row">
      <div class="col-12">
        <div class="text-h5 text-center">
          Here are some guidelines for the species!
        </div>
        <p class="text-center">
          {{ guidlines }}
        </p>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import title from 'assets/main/title.txt';
import guidlines from 'assets/main/guidlines.txt';

import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta, title, guidlines };
  },
});
</script>

<style lang="scss" scoped>
.text-h2 {
  padding: 30px 5px 20px;
}
p {
  white-space: pre-wrap;
  padding: 0 5px;
}
#main-title {
  flex-grow: 1;
}
#main-guidelines {
  flex-grow: 2;
}
</style>
