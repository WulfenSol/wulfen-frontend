<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div style="padding-bottom: 5em">
      <div style="font-size: 28 vh;">
        404
      </div>

      <div>
        <q-img
          src="images/gallery/Sol_sus.png"
          style="max-width: 100px"
          :ratio="1"
          basic
          spinner-color="white"
          class="rounded-borders"
        />
      </div>

      <div class="text-h3" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Error404',
});
</script>
