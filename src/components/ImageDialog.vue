<template>
  <q-dialog v-model="showImage" full-width>
    <q-card>
      <q-card-section v-if="details" class="row items-center q-pb-none">
        <div class="col-9 col-sm-10 text-h6">
          {{ details.title }} - Click to open in a new tab
        </div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section v-if="details">
        <a :href="details.src" target="_blank">
          <q-img :src="details.src" />
        </a>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

interface imgItem {
  title: string;
  src: string;
  thumb: string;
}

export default defineComponent({
  name: 'ImageDialog',
  props: {
    details: {
      type: (Object as unknown) as PropType<imgItem | null>,
    },
  },

  computed: {
    showImage: {
      get(): boolean {
        return this.details !== null;
      },
      set(value: imgItem | false | null | undefined): void {
        this.$emit('update:details', value || null);
      },
    },
  },
});
</script>
